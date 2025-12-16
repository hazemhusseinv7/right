"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { AnimatedNumber } from "./motion-primitives/animated-number";
import { TextEffect } from "./motion-primitives/text-effect";

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem = ({ value: targetValue, description }: StatItemProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const numericMatch = targetValue.match(/(\d+(\.\d+)?)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;

  const suffix = targetValue.replace(numericMatch?.[0] || "", "");

  if (isInView && value === 0) {
    setValue(numericValue);
  }

  return (
    <div ref={ref} className="space-y-4 px-10 text-white">
      <div className="text-5xl font-medium lg:text-7xl ">
        <AnimatedNumber
          springOptions={{
            bounce: 0,
            duration: 3000,
          }}
          value={value}
        />
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-primary-blue font-semibold ">{description}</p>
    </div>
  );
};

const Stats = ({ stats }: { stats: StatsType | null }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!stats) return;

  return (
    <section
      ref={sectionRef}
      className="from-primary-green to-primary-green/80 flex min-h-140 items-center bg-linear-to-t py-12 md:py-20"
    >
      <div className="mx-auto max-w-350 space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto mb-10 max-w-xl space-y-6 text-center lg:mb-24">
          <TextEffect
            per="word"
            preset="blur"
            as="h2"
            speedReveal={0.3}
            speedSegment={0.3}
            trigger={inView}
            className="text-5xl font-semibold text-white lg:text-7xl"
          >
            {stats.title}
          </TextEffect>
          <TextEffect
            per="word"
            preset="blur"
            as="h2"
            speedReveal={0.8}
            speedSegment={0.8}
            trigger={inView}
            className="text-primary-blue text-2xl"
          >
            {stats.description}
          </TextEffect>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {stats.items.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
