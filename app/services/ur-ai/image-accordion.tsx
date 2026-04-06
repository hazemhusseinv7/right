// @ts-nocheck
"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { urlFor } from "@/lib/sanity/image";

function Gallery({
  items,
  setIndex,
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
  index: number;
}) {
  return (
    <div className="mx-auto flex w-full flex-col gap-2 overflow-x-auto rounded-md px-4 pt-10 pb-20 md:max-w-fit md:flex-row md:overflow-visible md:px-0">
      {items.slice(0, 11).map((item, i) => {
        const isActive = index === i;
        const iconUrl = item.icon?.asset
          ? urlFor(item.icon?.asset).url()
          : null;

        return (
          <motion.div
            key={item._key || i}
            whileTap={{ scale: 0.97 }}
            className="group relative shrink-0"
            onMouseEnter={() => setIndex(i)}
            onClick={() => setIndex(i)}
          >
            <motion.img
              className={`shrink-0 rounded-2xl object-cover transition-all duration-300 ease-in-out ${
                isActive
                  ? "h-[280px] w-full md:h-[500px] md:w-[450px]"
                  : "h-[56px] w-full md:h-[500px] md:w-[60px] lg:w-[80px] xl:w-[110px]"
              }`}
              src={urlFor(item.image?.asset).url()}
              layoutId={item._key}
            />

            {!isActive && iconUrl && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center rounded-2xl bg-black/30 md:bg-transparent">
                  <Image
                    src={iconUrl}
                    width={24}
                    height={24}
                    alt={item.title}
                    className="size-6 object-contain opacity-80 brightness-0 invert md:size-8 md:opacity-0 lg:opacity-60"
                  />
                </div>
              </div>
            )}

            {isActive && (
              <article className="absolute -bottom-1 left-0 w-full rounded-b-2xl bg-white/80 p-4 backdrop-blur-md dark:bg-black/70">
                <div className="flex items-center gap-2">
                  <Image
                    src={iconUrl}
                    width={24}
                    height={24}
                    alt={item.title}
                    className="size-6"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="origin-left text-lg font-semibold text-neutral-900 sm:text-xl dark:text-white"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="py-1 text-sm leading-[130%] text-neutral-800 sm:text-base dark:text-neutral-200"
                >
                  {item.description}
                </motion.p>
              </article>
            )}
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

  const itemsArr = data.cards;

  return (
    <section className={className}>
      <Gallery items={itemsArr} index={index} setIndex={setIndex} />
    </section>
  );
}
