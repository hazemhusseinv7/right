"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { urlFor } from "@/lib/sanity/image";

export default function Cards({
  data,
}: {
  data: {
    cards: {
      _key?: string;
      highlight: string;
      title: string;
      description: string;
      image: ImageType;
      listTitle: string;
      items: {
        _key?: string;
        content: string;
      }[];
    }[];
  };
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = data.cards;

  return (
    <main ref={container} className="relative bg-[#0d1124] py-20">
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
        <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.4] blur-[120px]" />
        <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.4] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...card}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}

interface CardProps {
  i: number;
  highlight: string;
  title: string;
  description: string;
  listTitle: string;
  items: {
    _key?: string;
    content: string;
  }[];
  image: ImageType;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  highlight,
  title,
  description,
  listTitle,
  items,
  image,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5% + ${i * 25}px)`,
        }}
        className="relative min-h-[650px] w-full overflow-hidden rounded-4xl border border-white/10 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-12 lg:h-[600px] lg:p-16"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
          <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.4] blur-[120px]" />
          <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.4] blur-[100px]" />
        </div>

        <div className="relative z-10 grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content Container */}
          <div className="order-2 flex flex-col justify-center space-y-6 py-2 lg:order-1 lg:h-full">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#66bc46] uppercase">
                  {highlight}
                </span>
                <h2 className="text-3xl leading-tight font-light tracking-tight md:text-5xl lg:text-6xl">
                  {title}
                </h2>
              </div>

              <p className="max-w-md text-base leading-relaxed text-white/50 md:text-lg">
                {description}
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-white/90 italic">
                  {listTitle}
                </p>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#66bc46]" />
                      <p className="text-[12px] leading-snug text-white/70 md:text-[13px]">
                        {item.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative order-1 flex h-48 w-full items-center justify-center sm:h-64 lg:order-2 lg:h-full lg:justify-end">
            <div className="group relative aspect-video w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl transition-all duration-500 hover:border-[#66bc46]/30 lg:aspect-[4/3]">
              <Image
                src={urlFor(image).url()}
                alt={title}
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1A] via-transparent to-transparent opacity-80" />

              <div className="absolute right-4 bottom-4 left-4 hidden sm:block">
                <div className="mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center justify-between px-2">
                  <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
                    {highlight}
                  </span>
                  <div className="size-1.5 animate-pulse rounded-full bg-[#66bc46]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
