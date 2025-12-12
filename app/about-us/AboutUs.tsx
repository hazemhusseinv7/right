"use client";

import { useRef } from "react";
import Image from "next/image";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";

import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import ImagePreview from "@/components/ImagePreview";

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="mx-auto rounded-lg"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

const AboutUs = ({ aboutUs }: { aboutUs: AboutUsType | null }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 1,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative z-10 mx-auto max-w-350 px-8 pt-20 pb-32"
    >
      {/* Main Content */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="md:col-span-2">
          <TimelineContent
            as="p"
            animationNum={8}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="text-primary-green mb-8 text-4xl leading-[110%]! font-semibold md:text-5xl"
          >
            {aboutUs?.heading}
          </TimelineContent>
          <p className="text-primary-blue mb-8 max-w-3xl text-xl leading-[170%]! font-semibold sm:text-3xl md:text-4xl dark:text-gray-300">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              reverse={true}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                delay: 3,
              }}
            >
              {aboutUs?.subheading}
            </VerticalCutReveal>
          </p>

          <TimelineContent
            as="div"
            animationNum={9}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400"
          >
            <TimelineContent
              as="div"
              animationNum={10}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="space-y-4"
            >
              <PortableText
                value={aboutUs?.content}
                components={portableTextComponents}
              />
            </TimelineContent>
            {/* <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify"></p>
              </TimelineContent> */}
          </TimelineContent>
        </div>
        {/* <div className="md:col-span-1 lg:pt-8">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 text-emerald-700 dark:text-emerald-700 text-2xl font-bold mb-2"
              ></TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-gray-600 dark:text-gray-400 text-sm mb-8 ltr:text-left"
              ></TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-gray-900 dark:text-gray-400 font-medium mb-4"></p>
              </TimelineContent>

              <TimelineContent
                as="a"
                href="#"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-emerald-700 hover:bg-emerald-600 shadow-2xl shadow-emerald-800 hover:shadow-emerald-500 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
              >
                Contact Us
                <GoArrowUpRight className="rtl:rotate-270" />
              </TimelineContent>
            </div>
          </div> */}
      </div>

      <div className="py-20">
        <div className="text-primary-green mb-8 text-3xl leading-[110%]! font-semibold lg:-mb-8">
          {aboutUs?.certificateTitle}
        </div>
        <div className="flex items-center justify-between gap-8 max-lg:flex-col">
          <p className="text-primary-blue max-w-3xl text-lg leading-[170%]! font-semibold dark:text-gray-300">
            {aboutUs?.certificateDescription}
          </p>

          <div className="flex gap-10">
            {aboutUs?.certificateImages.map((img, i) => (
              <ImagePreview
                key={i}
                badgeSrc={urlFor(img.badge).url()}
                certificateSrc={
                  img.certificateImage
                    ? urlFor(img.certificateImage).url()
                    : urlFor(img.badge).url()
                }
                badgeAlt={`Certificate Badge ${i + 1}`}
                certificateAlt={`Certificate ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-350 flex-col gap-20 px-4 py-40 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div>
            <h3 className="text-primary-green block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              {aboutUs?.ourVision.title}
            </h3>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              {aboutUs?.ourVision.description}
            </p>
          </div>
          {/* End Col */}

          <div className="relative md:ms-4">
            <Image
              src={urlFor(aboutUs?.ourVision.image).url()}
              width={1000}
              height={1000}
              alt="Our Vision"
              className="w-full rounded-md"
            />

            <div className="from-primary-green/40 absolute inset-0 -z-1 -ms-4 me-4 mt-4 -mb-4 size-full rounded-md bg-linear-to-tr via-white/0 to-white/0 lg:-ms-6 lg:me-6 lg:mt-6 lg:-mb-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />

            {/* SVG*/}
            <div className="absolute start-0 bottom-0 overflow-hidden rounded-md">
              <svg
                className="text-primary-green ms-auto h-auto w-2/3 dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
          <div className="md:order-2">
            <h3 className="text-primary-green block text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              {aboutUs?.ourMission.title}
            </h3>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              {aboutUs?.ourMission.description}
            </p>
          </div>
          {/* End Col */}

          <div className="relative md:order-1 md:me-4">
            <Image
              src={urlFor(aboutUs?.ourMission.image).url()}
              width={1000}
              height={1000}
              alt="Our Mission"
              className="w-full rounded-md"
            />

            <div className="from-primary-green/40 absolute inset-0 -z-1 -ms-4 me-4 mt-4 -mb-4 size-full rounded-md bg-linear-to-tr via-white/0 to-white/0 lg:-ms-6 lg:me-6 lg:mt-6 lg:-mb-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />

            {/* SVG*/}
            <div className="absolute start-0 bottom-0 overflow-hidden rounded-md">
              <svg
                className="text-primary-green ms-auto h-auto w-2/3 dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default AboutUs;
