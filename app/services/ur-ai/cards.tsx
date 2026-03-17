"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const cards = [
  {
    category: "Discover",
    title: "AI Opportunity Assessment",
    description:
      "Understand the organization's workflows, systems, and data landscape while identifying areas within your business where AI can deliver measurable value.",
    outcomeLabel: "Outcome:",
    points: [
      "Process and workflow analysis",
      "Security and compliance requirements review",
      "ROI and feasibility evaluation",
      "AI opportunity and use-case identification",
    ],
    img: "/about-us/vision.jpg",
  },
  {
    category: "Strategy",
    title: "Strategy & Solution Design",
    description:
      "Based on the assessment, we design a tailored AI strategy aligned with your systems, data architecture, and operational goals.",
    outcomeLabel: "Deliverables:",
    points: [
      "AI implementation roadmap",
      "Security and governance framework",
      "Model and technology selection",
      "Proof-of-concept alignment",
    ],
    img: "/about-us/vision.jpg",
  },
  {
    category: "Build",
    title: "Development & Deployment",
    description:
      "Develop and deploy AI solutions within the organization's existing systems and workflows. Our team ensures seamless integration.",
    outcomeLabel: "Key considerations:",
    points: [
      "On-premise and air-gapped environments",
      "System integration",
      "Workflow automation",
      "Secure model deployment",
    ],
    img: "/about-us/vision.jpg",
  },
  {
    category: "Enablement",
    title: "Adoption & Training",
    description:
      "Successful AI transformation requires people to adopt the technology. We help organizations build AI capability across all levels.",
    outcomeLabel: "Key considerations:",
    points: [
      "Awareness campaigns",
      "User onboarding",
      "Leadership enablement",
      "Documentation and support",
    ],
    img: "/about-us/vision.jpg",
  },
  {
    category: "Optimize & Scale",
    title: "Continuous Improvement",
    description:
      "AI systems improve over time. We continuously monitor performance, refine models, and expand AI capabilities.",
    outcomeLabel: "This includes:",
    points: [
      "Performance monitoring",
      "Model retraining",
      "Capability development",
      "Organization-wide transformation",
    ],
    img: "/about-us/vision.jpg",
  },
];

export default function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
  category: string;
  title: string;
  description: string;
  outcomeLabel: string;
  points: string[];
  img: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  category,
  title,
  description,
  outcomeLabel,
  points,
  img,
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
        className="relative min-h-[650px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0B1A]/80 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-12 lg:h-[600px] lg:p-16"
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
                  {category}
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
                  {outcomeLabel}
                </p>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#66bc46]" />
                      <p className="text-[12px] leading-snug text-white/70 md:text-[13px]">
                        {point}
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
                src={img}
                alt={title}
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1A] via-transparent to-transparent opacity-80" />

              <div className="absolute right-4 bottom-4 left-4 hidden sm:block">
                <div className="mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center justify-between px-2">
                  <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
                    System_Active // {category}
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
