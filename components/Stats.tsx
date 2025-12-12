"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { AnimatedNumber } from "./motion-primitives/animated-number";

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
    <div ref={ref} className="text-primary-blue space-y-4">
      <div className="text-5xl font-bold">
        <AnimatedNumber
          springOptions={{
            bounce: 0,
            duration: 3000,
          }}
          value={value}
        />
        {suffix && <span>{suffix}</span>}
      </div>
      <p>{description}</p>
    </div>
  );
};

const Stats = ({ stats }: { stats: StatsType | null }) => {
  if (!stats) return;

  return (
    <section className="min-h-140 bg-linear-to-t from-emerald-50 py-12 md:py-20">
      <div className="mx-auto max-w-350 space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-primary-green text-5xl font-semibold lg:text-7xl">
            {stats.title}
          </h2>
          <p className="text-primary-blue">{stats.description}</p>
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
