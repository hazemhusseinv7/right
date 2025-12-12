"use client";

import { useRef } from "react";
import Image from "next/image";

import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";

import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import ImagePreview from "./ImagePreview";

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

const AboutUs = ({
  settings,
  aboutUs,
}: {
  settings: SettingsType | null;
  aboutUs: AboutUsType | null;
}) => {
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
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  const socialMedia = [
    {
      name: "LinkedIn",
      link: settings?.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      link: settings?.twitter,
      icon: FaXTwitter,
    },
    {
      name: "TikTok",
      link: settings?.tiktok,
      icon: FaTiktok,
    },
    {
      name: "Instagram",
      link: settings?.instagram,
      icon: FaInstagram,
    },
    {
      name: "Snapchat",
      link: settings?.snapchat,
      icon: FaSnapchat,
    },
    {
      name: "WhatsApp",
      link: settings?.whatsapp,
      icon: RiWhatsappLine,
    },
    {
      name: "Facebook",
      link: settings?.facebook,
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      link: settings?.youtube,
      icon: FaYoutube,
    },
  ].filter((item) => item.link);

  const img = urlFor(aboutUs?.heroImage).url();

  return (
    <section
      id="about-us"
      className="relative mt-20 bg-linear-to-t from-emerald-50"
      ref={heroRef}
    >
      <div className="relative z-10 mx-auto max-w-350 px-8 pt-20 pb-32">
        <div className="relative">
          {/* Header with social icons */}
          <div className="absolute -top-3 left-0 z-10 mb-8 flex w-[85%] items-center justify-between sm:-top-2 md:top-0 lg:top-2">
            <div className="flex items-center gap-2 text-xl">
              <TimelineContent
                as="h2"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-primary-green text-sm font-medium lg:text-2xl dark:text-gray-300"
              >
                {aboutUs?.title}
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              {socialMedia.map(({ name, link, icon: Icon }) => (
                <TimelineContent
                  key={name}
                  as="a"
                  animationNum={0}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hover:bg-primary-green flex size-6 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100 transition-colors duration-300 md:size-8 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Icon className="max-sm:size-3" />
                </TimelineContent>
              ))}
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="group relative"
          >
            <svg
              className="w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href={img}
              />
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-between py-3 text-sm lg:justify-start rtl:sm:flex-row-reverse">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="text-primary-green font-bold">
                  {aboutUs?.leftTopStat.value}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {aboutUs?.leftTopStat.label}
                </span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="text-primary-green font-bold">
                  {aboutUs?.leftBottomStat.value}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {aboutUs?.leftBottomStat.label}
                </span>
              </div>
            </TimelineContent>
            <div className="right-0 bottom-16 flex gap-4 lg:absolute lg:flex-col lg:gap-0 lg:ps-5">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 text-2xl sm:text-3xl"
              >
                <p className="text-primary-green font-semibold">
                  {aboutUs?.rightTopStat.value}
                  {/* <span className="text-gray-600 dark:text-gray-300 font-normal"></span> */}
                </p>
                <span className="text-gray-600 uppercase">
                  {aboutUs?.rightTopStat.label}
                </span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 text-xs sm:text-base"
              >
                <span className="text-primary-green text-xl font-bold lg:text-2xl dark:text-gray-300">
                  {aboutUs?.rightBottomStat.value}
                </span>
                <p className="text-gray-600">
                  {aboutUs?.rightBottomStat.label}
                </p>
                <span className="block text-gray-300 lg:hidden">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

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

        <div className="mx-auto flex max-w-340 flex-col gap-20 px-4 py-40 sm:px-6 lg:px-8">
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
    </section>
  );
};

export default AboutUs;
