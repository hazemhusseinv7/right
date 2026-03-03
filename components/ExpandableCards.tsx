"use client";

import { urlFor } from "@/lib/sanity/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const _AVATAR_SIZE = 96;
// ease-out-quint for entering/exiting elements
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

export interface Card {
  id: number;
  title: string;
  icon: string;
  image: string;
  content: string;
}

export interface ExpandableCardsProps {
  data: URAiType;
  selectedCard?: number | null;
  onSelect?: (id: number | null) => void;
  className?: string;
  cardClassName?: string;
}

export default function ExpandableCards({
  data,
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const cards: Card[] = data.whoCanBenefit.cards.map((card, index) => ({
    id: index,
    title: card.title,
    icon: urlFor(card.icon?.asset).url(),
    image: urlFor(card.image?.asset).url(),
    content: card.description,
  }));

  const [internalSelected, setInternalSelected] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) {
        onSelect(null);
      } else {
        setInternalSelected(null);
      }
    } else {
      if (onSelect) {
        onSelect(id);
      } else {
        setInternalSelected(id);
      }
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <div
      className={`flex w-full flex-col gap-4 overflow-scroll p-4 lg:overflow-hidden ${className}`}
    >
      <div
        className="scrollbar-hide mx-auto flex overflow-x-auto pt-4 pb-8"
        ref={scrollRef}
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "20%",
        }}
      >
        {cards.map((card) => (
          <motion.div
            animate={{
              width: selectedCard === card.id ? "550px" : "250px",
            }}
            aria-label={`${card.title} card${selectedCard === card.id ? ", expanded" : ""}`}
            aria-selected={selectedCard === card.id}
            className={`bg-background focus-visible:ring-primary relative mr-4 h-[350px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 ${cardClassName}`}
            data-card-id={card.id}
            key={card.id}
            layout
            onClick={() => handleCardClick(card.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(card.id);
              }
            }}
            role="button"
            style={{
              scrollSnapAlign: "start",
            }}
            tabIndex={0}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.25,
                    ease: EASE_OUT_QUINT,
                  }
            }
          >
            <div className="relative h-full w-[250px]">
              <Image
                alt={card.title}
                className="h-full w-full object-cover"
                height={350}
                width={250}
                src={card.image}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="flex items-center gap-2">
                  {/* <Image
                    alt={card.title}
                    className="size-5"
                    height={20}
                    width={20}
                    src={card.icon}
                  /> */}
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Read more</span>
                  <button
                    aria-label={`Read more: ${card.title}`}
                    className="ease bg-background/30 focus-visible:ring-primary flex h-12 min-h-[44px] w-12 min-w-[44px] items-center justify-center rounded-full backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-offset-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle play action
                    }}
                    type="button"
                  >
                    <ArrowRight className="size-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <AnimatePresence mode="popLayout">
              {selectedCard === card.id && (
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? { width: "300px", opacity: 1 }
                      : { width: "300px", opacity: 1, filter: "blur(0px)" }
                  }
                  className="bg-background absolute top-0 right-0 h-full"
                  exit={
                    shouldReduceMotion
                      ? { width: 0, opacity: 0 }
                      : { width: 0, opacity: 0, filter: "blur(5px)" }
                  }
                  initial={
                    shouldReduceMotion
                      ? { width: 0, opacity: 0 }
                      : { width: 0, opacity: 0, filter: "blur(5px)" }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.25,
                          ease: EASE_OUT_QUINT,
                          opacity: { duration: 0.2, delay: 0.1 },
                        }
                  }
                >
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 1, x: 0, filter: "blur(0px)" }
                    }
                    className="flex h-full flex-col gap-8 p-8"
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0, x: 20 }
                        : { opacity: 0, x: 20, filter: "blur(5px)" }
                    }
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0, x: 20 }
                        : { opacity: 0, x: 20, filter: "blur(5px)" }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { delay: 0.2, duration: 0.2, ease: EASE_OUT_QUINT }
                    }
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        alt={card.title}
                        className="size-5"
                        height={20}
                        width={20}
                        src={card.icon}
                      />
                      <h3 className="text-primary-blue font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-primary-blue">{card.content}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
