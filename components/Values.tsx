"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { TextEffect } from "./motion-primitives/text-effect";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import { RiShieldCheckFill } from "react-icons/ri";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Values = ({ values: data }: { values: ValuesType | null }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = data?.cards;

  if (!data || !values) return;

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20">
      <div className="mx-auto max-w-350 space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2>
            <TextEffect
              per="word"
              preset="blur"
              speedReveal={0.3}
              speedSegment={0.3}
              trigger={inView}
              className="text-primary-green text-5xl font-semibold text-balance lg:text-7xl"
            >
              {data.title}
            </TextEffect>
          </h2>

          <TextEffect
            per="word"
            preset="blur"
            speedReveal={0.8}
            speedSegment={0.8}
            trigger={inView}
            className="text-primary-blue"
          >
            {data.description}
          </TextEffect>
        </div>

        <AnimatedGroup
          trigger={inView}
          className="bg-background relative mx-auto grid divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3"
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
          {values.map(({ title, description, icon }, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src={urlFor(icon).url()}
                  width={1000}
                  height={1000}
                  alt={title}
                  className="size-5"
                />
                <h3 className="text-sm font-medium">{title}</h3>
              </div>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>

      {/* SVG Element */}
      <div className="absolute end-0 top-0 -translate-x-4 translate-y-4 lg:-translate-x-20 lg:translate-y-50">
        <RiShieldCheckFill className="text-primary-green size-10 lg:size-14" />
      </div>
      {/* End SVG Element */}

      {/* SVG Element */}
      <div className="absolute start-0 bottom-0 translate-x-4 translate-y-10 lg:translate-x-20 lg:-translate-y-20">
        <BsBookmarkCheckFill className="text-primary-green size-10 lg:size-14" />
      </div>
      {/* End SVG Element */}
    </section>
  );
};

export default Values;
