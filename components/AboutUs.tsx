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
import HorizontalScroll from "./HorizontalScroll";

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
          <div className="mb-4 flex items-start justify-between gap-4 max-lg:flex-col lg:items-center">
            <div className="flex gap-4 lg:order-2">
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
                  className="hover:bg-primary-green flex size-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 bg-gray-100 transition-colors duration-300 md:size-8 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Icon className="max-sm:size-3" />
                </TimelineContent>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xl lg:order-1">
              <div className="flex gap-4">
                <TimelineContent
                  as="div"
                  animationNum={6}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="mb-2 flex items-center gap-2 text-xs sm:text-base"
                >
                  <p className="text-primary-green text-xl font-bold lg:text-2xl dark:text-gray-300">
                    {aboutUs?.rightTopStat.value}
                    {/* <span className="text-gray-600 dark:text-gray-300 font-normal"></span> */}
                  </p>
                  <span className="text-gray-600">
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
                </TimelineContent>
              </div>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative"
          >
            <div className="h-80 w-full overflow-hidden rounded-sm lg:h-120">
              <Image
                src={img}
                width={1920}
                height={1080}
                alt="About"
                className="size-full object-cover"
              />
            </div>
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
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="text-center md:col-span-2">
            <TimelineContent
              as="h2"
              animationNum={8}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-primary-green mb-8 text-4xl leading-[110%]! font-semibold md:text-5xl"
            >
              {aboutUs?.heading}
            </TimelineContent>
            <p className="text-primary-blue mx-auto mb-8 max-w-3xl text-xl leading-[170%]! font-semibold sm:text-3xl md:text-4xl dark:text-gray-300">
              <VerticalCutReveal
                containerClassName="justify-center"
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

        <div className="flex flex-col gap-4 py-20 text-center">
          <div className="text-primary-green mb-4 text-3xl font-semibold">
            {aboutUs?.certificateTitle}
          </div>
          <div className="flex flex-col items-center justify-between gap-8">
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
      </div>

      <HorizontalScroll aboutUs={aboutUs} />
    </section>
  );
};

export default AboutUs;
