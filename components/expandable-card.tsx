"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion, useInView } from "motion/react";
import { Button } from "@heroui/react";

import { cn } from "@/lib/utils";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimatedGroup } from "./ui/animated-group";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState<CardItem | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="relative z-20" ref={containerRef}>
      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/50 bg-opacity-10 pointer-events-none absolute inset-0 z-10 backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {current ? (
          <>
            <div className="fixed inset-0 z-10 mx-4 grid place-items-center">
              <motion.div
                className="bg-background flex h-fit w-full max-w-xl cursor-pointer flex-col items-start gap-4 overflow-hidden border p-4"
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
                      className="size-8"
                    />
                  </motion.div>
                  <div className="flex grow items-center justify-between">
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex w-full flex-row justify-between gap-0.5">
                        <motion.div
                          className="text-primary-green font-medium"
                          layoutId={`cardItemTitle-${current.title}`}
                        >
                          {current.title}
                        </motion.div>
                      </div>
                      <motion.p
                        layoutId={`cardItemDescription-${current.description}`}
                        className="text-primary/70 text-sm"
                      >
                        {current.description}
                      </motion.p>

                      {current.items && current.items.length > 0 && (
                        <motion.div
                          layoutId={`cardItemFeatures-${current.title}`}
                          className="mt-4"
                        >
                          <h4 className="text-primary-green mb-2 text-sm">
                            Features:
                          </h4>
                          <motion.ul
                            className="list-disc space-y-1 pl-5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {current.items.map((item, index) => (
                              <motion.li
                                key={index}
                                className="text-primary/70 text-sm"
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

                <Button
                  className="bg-primary-green mx-auto mt-8 w-fit px-8 text-white"
                  as="a"
                  href="/contact"
                >
                  Request now <FiArrowUpRight className="size-5" />
                </Button>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div
        className={cn(
          "relative flex flex-col items-center gap-14 p-6",
          className,
        )}
      >
        {items.map((list, i) => (
          <div key={i}>
            <h3 className="text-primary-green mx-auto mb-4 w-fit text-xl font-medium lg:text-2xl">
              {list.title}
            </h3>

            <AnimatedGroup
              trigger={inView}
              className="relative grid w-full grid-cols-2 gap-4 px-2 lg:grid-cols-3"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 1.2,
                      type: "spring",
                      bounce: 0.3,
                    },
                  },
                },
              }}
            >
              {list.list.map((item) => (
                <motion.div
                  layoutId={`cardItem-${item.title}`}
                  key={item.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-background flex w-full cursor-pointer flex-row items-center gap-4 border p-2 shadow-md max-lg:flex-col md:p-4"
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
                      className="size-8"
                    />
                  </motion.div>
                  <div className="flex w-full flex-col items-center justify-between gap-0.5 lg:items-start">
                    <motion.div
                      className="text-primary-blue font-medium max-lg:text-center max-lg:text-sm"
                      layoutId={`cardItemTitle-${item.title}`}
                    >
                      {item.title}
                    </motion.div>
                    <motion.div
                      className="text-primary/70 text-xs max-lg:hidden"
                      layoutId={`cardItemDescription-${item.description}`}
                    >
                      {truncateText(item.description)}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatedGroup>
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
