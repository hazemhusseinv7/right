"use client";
import ButtonHoverMultiple from "@/components/ButtonHoverMultiple";
import { useRef } from "react";
import NewItemsLoading from "./new-items-loading";
import WordAnimator from "./word-animator";
import Partners from "./Partners";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { useScroll, useTransform } from "motion/react";

const Hero = ({
  hero,
  partners,
}: {
  hero: HeroType | null;
  partners: PartnersType | null;
}) => {
  const buttonData = hero?.button;
  const headingData = hero?.heading;
  const description = hero?.description;
  const ctaButton = hero?.ctaButton;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-linear-to-b from-blue-50 pb-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 flex w-screen justify-end mask-[radial-gradient(transparent_5%,white)]">
        <svg
          width="1512"
          height="1714"
          viewBox="0 0 1512 1714"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-0 left-0 h-auto w-full lg:w-1/2"
        >
          <g clipPath="url(#clip0_143_13)">
            <g filter="url(#filter0_f_143_13)">
              <path
                d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                fill="white"
                fillOpacity="0.15"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_143_13"
              x="-595.645"
              y="38"
              width="1902.26"
              height="1213.13"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="64"
                result="effect1_foregroundBlur_143_13"
              ></feGaussianBlur>
            </filter>
            <clipPath id="clip0_143_13">
              <rect width="1512" height="1714" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <article className="relative z-2 grid px-4 pt-24 pb-14 sm:px-0 2xl:pt-40 2xl:pb-24">
        <NewItemsLoading data={buttonData} />
        <h1 className="text-primary-blue text-center text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl dark:text-white">
          <span className="relative mt-4 flex translate-x-0 justify-center gap-2 max-lg:flex-col lg:mt-8">
            <div className="flex translate-x-0 justify-center gap-2">
              {headingData?.firstWord}{" "}
              {headingData?.rotatingWords && (
                <WordAnimator
                  words={headingData.rotatingWords}
                  duration={5}
                  className="w-fit border-neutral-200 bg-gray-200 pr-3 italic dark:border-neutral-800 dark:bg-gray-800"
                />
              )}{" "}
            </div>
            <span>
              {headingData?.lastWord}{" "}
              <strong className="text-primary-green font-semibold uppercase">
                {headingData?.highlightedWord.text}
              </strong>
            </span>
          </span>
        </h1>
        <p className="text-primary-blue mx-auto mt-5 text-center text-sm sm:w-[80%] sm:text-lg lg:w-[700px] dark:text-white">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <ButtonHoverMultiple link={ctaButton?.link || "#"}>
            {ctaButton?.text}
          </ButtonHoverMultiple>
        </div>
      </article>

      <div className="absolute top-65 h-140 w-full overflow-clip sm:top-70 lg:top-50 xl:top-50 xl:scale-150">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      <Partners className="relative z-10 max-xl:mt-20" data={partners} />
    </section>
  );
};

export default Hero;
