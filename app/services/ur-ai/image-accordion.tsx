// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { urlFor } from "@/lib/sanity/image";
import { FiExternalLink } from "react-icons/fi";
import { cn } from "@/lib/utils";

function Gallery({
  items,
  setIndex,
  setOpen,
  index,
}: {
  items: {
    _key?: string;
    title: string;
    description: string;
    icon: ImageType;
    image: ImageType;
  }[];
  setIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
  index: number;
}) {
  return (
    <div className="mx-auto flex w-full flex-col gap-1 overflow-x-auto rounded-md px-4 pt-10 pb-20 md:max-w-fit md:flex-row md:gap-2 md:overflow-visible md:px-0">
      {items.slice(0, 11).map((item, i) => {
        const isActive = index === i;
        const iconUrl = item.icon?.asset
          ? urlFor(item.icon?.asset).url()
          : null;

        return (
          <motion.div
            key={item._key || i}
            whileTap={{ scale: 0.97 }}
            className="group relative shrink-0 cursor-pointer"
            onMouseEnter={() => setIndex(i)}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            {/* Unified Image - handles both mobile height animation and desktop width animation */}
            <motion.img
              className={`shrink-0 rounded-2xl object-cover transition-all duration-300 ease-in-out ${
                isActive
                  ? "h-[280px] w-full md:h-[500px] md:w-[450px]"
                  : // FIX: Removed sm:w-[20px] which broke vertical layout on small tablets.
                    // Scaled up md/lg/xl widths so they are visible and usable on medium devices.
                    "h-[56px] w-full md:h-[500px] md:w-[60px] lg:w-[80px] xl:w-[110px]"
              }`}
              src={urlFor(item.image?.asset).url()}
              layoutId={item._key}
            />

            {/* Unified Icon Overlay */}
            {!isActive && iconUrl && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                {/* Black background for mobile, transparent for desktop */}
                <div className="flex items-center justify-center rounded-2xl bg-black/30 md:bg-transparent">
                  <img
                    src={iconUrl}
                    alt={item.title}
                    className="size-6 object-contain opacity-80 brightness-0 invert md:size-8 md:opacity-0 lg:opacity-60"
                  />
                </div>
              </div>
            )}

            {/* Mobile Click Indicator */}
            <motion.div
              initial={false}
              animate={
                isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-white/70 p-2 shadow-md backdrop-blur-sm md:hidden dark:bg-black/70"
            >
              <FiExternalLink />
            </motion.div>

            {/* Desktop Hover Indicator */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:flex",
                isActive && "opacity-100",
              )}
            >
              <div className="rounded-full border border-white/20 bg-white/80 p-3 shadow-lg backdrop-blur-sm dark:bg-black/80">
                <FiExternalLink className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AccordionModal({
  data,
  className = "",
}: {
  data: {
    title: HighlightedTitle;
    description?: string;
    cards: {
      _key?: string;
      title: string;
      description: string;
      icon: ImageType;
      image: ImageType;
    }[];
  };
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const itemsArr = data.cards;
  const currentItem = itemsArr[index];
  const iconUrl = currentItem?.icon?.asset
    ? urlFor(currentItem.icon?.asset).url()
    : null;

  return (
    <section className={className}>
      <Gallery
        items={itemsArr}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="fixed inset-0 top-0 right-0 bottom-0 left-0 z-50 grid h-full w-full place-content-center bg-white/40 p-4 backdrop-blur-lg dark:bg-black/40"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={currentItem._key}
                className="relative h-[75vw] max-h-[500px] w-[85vw] max-w-[400px] cursor-default overflow-hidden rounded-2xl sm:h-[880px] sm:w-[800px] lg:max-h-[800px] lg:max-w-[800px]"
              >
                <Image
                  src={urlFor(currentItem.image?.asset).url()}
                  width={400}
                  height={480}
                  alt={currentItem.title}
                  className="h-full w-full rounded-2xl object-cover"
                />

                {iconUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="absolute top-4 left-4"
                  >
                    <div className="rounded-xl border border-white/20 bg-white/60 p-2 backdrop-blur-sm dark:bg-black/60">
                      <img
                        src={iconUrl}
                        alt={currentItem.title}
                        className="size-8 object-contain brightness-0 invert transition-opacity duration-300 xl:opacity-60"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Close indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute top-4 right-4 cursor-pointer rounded-full border border-white/20 bg-white/60 p-2 backdrop-blur-sm transition-colors hover:bg-white/80 dark:bg-black/60 dark:hover:bg-black/80"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </motion.div>

                <article className="text-primary-blue absolute -bottom-1 left-0 w-full rounded-b-2xl bg-white/40 p-4 backdrop-blur-md dark:bg-black/40">
                  <motion.h1
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="origin-left text-lg font-semibold sm:text-xl"
                  >
                    {currentItem.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="py-2 text-sm leading-[130%] sm:text-base"
                  >
                    {currentItem.description}
                  </motion.p>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
