"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CardItem {
  title: string;
  description: string;
  icon: string;
  items?: string[];
}

export interface CardList {
  title: string;
  list: CardItem[];
}

export interface ExpandableCardProps {
  items: CardList[];
  className?: string;
}

export default function ExpandableCard({
  items,
  className,
}: ExpandableCardProps) {
  const [current, setCurrent] = useState<CardItem | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="relative z-20">
      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-10 bg-background/50 bg-opacity-10 backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {current ? (
          <>
            <div className="fixed inset-0 z-10 grid place-items-center mx-4">
              <motion.div
                className="flex h-fit w-full max-w-xl cursor-pointer flex-col items-start gap-4 overflow-hidden rounded-md border bg-background p-4"
                ref={ref}
                layoutId={`cardItem-${current.title}`}
              >
                <div className="flex w-full items-start gap-4">
                  <motion.div layoutId={`cardItemIcon-${current.title}`}>
                    <Image
                      src={current.icon}
                      alt={current.title}
                      width={32}
                      height={32}
                      className="size-8 text-emerald-700"
                    />
                  </motion.div>
                  <div className="flex grow items-center justify-between">
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex w-full flex-row justify-between gap-0.5">
                        <motion.div
                          className="text-sm font-medium text-primary"
                          layoutId={`cardItemTitle-${current.title}`}
                        >
                          {current.title}
                        </motion.div>
                      </div>
                      <motion.p
                        layoutId={`cardItemDescription-${current.description}`}
                        className="text-sm text-primary/70"
                      >
                        {current.description}
                      </motion.p>

                      {current.items && current.items.length > 0 && (
                        <motion.div
                          layoutId={`cardItemFeatures-${current.title}`}
                          className="mt-4"
                        >
                          <h4 className="mb-2 text-primary">
                            Features:
                          </h4>
                          <motion.ul
                            className="space-y-1 pl-5 list-disc"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {current.items.map((item, index) => (
                              <motion.li
                                key={index}
                                className="text-sm text-primary/70"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                              >
                                {item}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div
        className={cn(
          "relative flex flex-col items-center gap-14 p-6",
          className
        )}
      >
        {items.map((list, i) => (
          <div key={i}>
            <h3 className="font-medium text-xl lg:text-2xl mx-auto w-fit text-emerald-800 mb-4">
              {list.title}
            </h3>
            <div className="relative w-full grid grid-cols-2 lg:grid-cols-3 gap-4 px-2">
              {list.list.map((item) => (
                <motion.div
                  layoutId={`cardItem-${item.title}`}
                  key={item.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex max-lg:flex-col w-full cursor-pointer flex-row items-center gap-4 rounded-md border bg-background p-2 shadow-md md:p-4"
                  onClick={() => {
                    setCurrent(item);
                  }}
                >
                  <motion.div layoutId={`cardItemIcon-${item.title}`}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="size-8 text-emerald-700"
                    />
                  </motion.div>
                  <div className="flex w-full flex-col items-center lg:items-start justify-between gap-0.5">
                    <motion.div
                      className="font-medium text-primary max-lg:text-center max-lg:text-sm"
                      layoutId={`cardItemTitle-${item.title}`}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div
                      className="max-lg:hidden text-xs text-primary/70"
                      layoutId={`cardItemDescription-${item.description}`}
                    >
                      {truncateText(item.description)}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};
