"use client";

import Image from "next/image";

import ButtonHoverMultiple from "@/components/ButtonHoverMultiple";
import { Button } from "@/components/ui/button";
import DecorativeBackground from "@/components/DecorativeBackground";
import Aurora from "@/components/Aurora";
import { Card } from "@heroui/react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import {
  Card as CardComponent,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  HiDocumentCheck,
  HiDocumentMagnifyingGlass,
  HiMiniDocumentArrowUp,
  HiMiniDocumentChartBar,
  HiMiniDocumentPlus,
  HiMiniDocumentText,
  HiShieldCheck,
  HiServer,
  HiArrowPath,
  HiBuildingOffice,
  HiUsers,
  HiCube,
} from "react-icons/hi2";
import {
  MdDashboardCustomize,
  MdInsertChart,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { BiBrushAlt } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { FaUserAltSlash } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";

const getVideoId = (url: string) => {
  if (!url) return null;

  const urlObj = new URL(url);

  if (url.includes("youtube.com/watch")) {
    return urlObj.searchParams.get("v");
  }

  if (url.includes("youtu.be/")) {
    return urlObj.pathname.split("/").pop();
  }

  if (url.includes("youtube.com/embed")) {
    return urlObj.pathname.split("/").pop();
  }

  return null;
};

export default function Page() {
  const videoUrl = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URL!;

  const videoId = getVideoId(videoUrl);

  const items = [
    {
      title: "Businesses",
      description:
        "Companies can automate their operations, reduce their cloud expenses, and improve data security. This is particularly important for industries handling sensitive information.",
      icon: HiBuildingOffice,
    },
    {
      title: "End Users",
      description:
        "Your team get faster, more responsive AI that respect your business's privacy, while enjoying the convenience of offline functionality.",
      icon: HiUsers,
    },
    {
      title: "Developers",
      description:
        "Allowing them to create efficient/secure applications that provide faster experiences and work offline to build innovative features that depend on real-time processing.",
      icon: HiCube,
    },
  ];

  return (
    <main className="relative overflow-hidden pt-24">
      <section className="relative py-24 md:py-32">
        <Aurora
          props={{
            colorStops: ["#7CFF67", "#B19EEF", "#5227FF"],
            blend: 0.5,
            amplitude: 1.0,
            speed: 0.5,
          }}
        />

        <div className="mx-auto max-w-5xl px-6">
          <div className="group relative mx-auto flex aspect-16/10 max-w-88 items-center justify-between sm:max-w-sm 2xl:mt-10 2xl:mb-40 2xl:scale-150">
            <div
              role="presentation"
              className="border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t bg-linear-to-b from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
            />
            <div
              role="presentation"
              className="border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t bg-linear-to-b from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
            />
            <div className="from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t bg-linear-to-b to-transparent to-25%">
              <IntegrationCard className="absolute top-1/4 left-0 -translate-x-1/6 -translate-y-1/4">
                <HiDocumentMagnifyingGlass className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <HiDocumentCheck className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 right-0 translate-x-1/6 -translate-y-1/4">
                <HiMiniDocumentText className="text-primary-green" />
              </IntegrationCard>
            </div>
            <div className="from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t bg-linear-to-b to-transparent to-25%">
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <HiMiniDocumentPlus className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 left-0 -translate-x-1/4 -translate-y-1/4">
                <HiMiniDocumentChartBar className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/4">
                <HiMiniDocumentArrowUp className="text-primary-green" />
              </IntegrationCard>
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-full border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
                  isCenter={true}
                >
                  <Image
                    src="/services/ur-ai/icon.png"
                    width={32}
                    height={32}
                    alt="Logo"
                    className="size-8"
                  />
                </IntegrationCard>
              </div>
            </div>
          </div>
          <div className="relative z-20 mx-auto mt-12 max-w-2xl space-y-6 text-center">
            <h1 className="text-primary-green text-3xl font-semibold text-balance md:text-4xl xl:text-7xl">
              UR AI
            </h1>
            <div>
              <p className="text-muted-foreground xl:text-2xl">
                Ready to see what Ur AI can do for your business?
              </p>
              <p className="text-muted-foreground xl:text-2xl">
                Explore how it can be tailored to your business&apos;s need.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <ButtonHoverMultiple link="/contact">
                Get Started
              </ButtonHoverMultiple>
            </div>
          </div>
          {videoId && (
            <div className="mx-auto mt-8 w-180 overflow-hidden rounded-2xl">
              <YouTubeEmbed videoid={videoId} />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-primary-blue relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            What Ur AI?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="from-primary-green/10 relative aspect-76/59 rounded-2xl bg-linear-to-b to-transparent p-px dark:from-zinc-700">
                <Image
                  src="/services/ur-ai/icon.png"
                  className="rounded-[15px] p-4"
                  alt="Logo"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                The next generation of <strong>On-Premise & Private</strong> AI
                that is crafted to accelerate your AI adoption, transforming
                your business with tailored unique AI strategy planning.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>
                    Ur AI is designed around your workflows, your data, and your
                    goals — not generic assumptions. It integrates securely into
                    your existing systems, keeps your data protected and under
                    your control, and delivers intelligence that truly
                    understands how your business operates.
                  </p>

                  <div className="mt-6 space-y-3">
                    <img
                      className="h-20 w-fit dark:invert"
                      src="/logo/logo.png"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative z-10 py-24 md:py-32">
          <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-3 md:gap-12">
            <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
              <div className="space-y-6">
                <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                  What Makes Ur AI Different?
                </h2>
                <p className="text-muted-foreground">
                  Unlike generic AI tools, Ur AI is built around your data, your
                  systems, and your goals.
                </p>
              </div>
            </div>

            <div className="-mx-6 mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-2xl md:col-span-2 md:-mx-6 md:mr-0 md:ml-auto">
              <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                <div className="grid grid-cols-2 gap-2">
                  <Integration
                    icon={
                      <HiShieldCheck className="text-primary-green size-8" />
                    }
                    name="Full Data Sovereignty:"
                    description="On-premise deployment ensuring strict compliance with SDAIA, SAMA, NCA, and ISO 27001
security standards."
                  />
                  <Integration
                    icon={
                      <MdDashboardCustomize className="text-primary-green size-8" />
                    }
                    name="Tailored Integration:"
                    description="Fine-tuned on your data with seamless ERP integration and ethical filters aligned with Saudi
values and company policy."
                  />
                  <Integration
                    icon={<HiServer className="text-primary-green size-8" />}
                    name="Offline Power:"
                    description="Local GPU processing for low-latency, cloud-free operation—perfect for secure edge locations and
industrial sites."
                  />
                  <Integration
                    icon={
                      <MdInsertChart className="text-primary-green size-8" />
                    }
                    name="Future-Proof Independence:"
                    description="Scalable hardware and models that ensure resilience, data ownership, and alignment
with Vision 2030 goals."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DecorativeBackground />
      </section>

      <section>
        <div className="bg-primary-green/10 dark:bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto mb-14 max-w-lg space-y-6 text-center">
              <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                How It Works?
              </h2>
              {/* <p className="text-muted-foreground"></p> */}

              {/* <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button> */}
            </div>

            <div className="mx-auto max-w-2xl mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6">
              <div className="bg-background dark:bg-muted/50 rounded-xl border px-6 pt-3 pb-12 shadow-xl">
                <IntegrationItem
                  icon={<LuSearch className="text-primary-green size-6" />}
                  name="Understand"
                  description="We analyze your business processes, data, and objectives"
                />
                <IntegrationItem
                  icon={<BiBrushAlt className="text-primary-green size-6" />}
                  name="Design"
                  description="We architect an AI solution tailored to your environment"
                />
                <IntegrationItem
                  icon={
                    <MdOutlineDashboardCustomize className="text-primary-green size-6" />
                  }
                  name="Build & Integrate"
                  description="We deploy securely into your systems"
                />
                <IntegrationItem
                  icon={<HiArrowPath className="text-primary-green size-6" />}
                  name="Optimize"
                  description="Continuous monitoring, learning, and improvement"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="dark:bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto mb-12 max-w-lg space-y-6 text-center">
              <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                Security & Trust
              </h2>
              <p className="text-muted-foreground">
                Your data never leaves your wall.
              </p>
            </div>

            <div className="relative mx-auto flex max-w-sm items-center justify-between 2xl:mt-32 2xl:scale-150">
              <div className="space-y-6">
                <IntegrationItems position="left-top">
                  <HiDocumentMagnifyingGlass className="text-primary-green" />
                </IntegrationItems>
                <IntegrationItems position="left-middle">
                  <HiDocumentCheck className="text-primary-green" />
                </IntegrationItems>
                <IntegrationItems position="left-bottom">
                  <HiMiniDocumentText className="text-primary-green" />
                </IntegrationItems>
              </div>
              <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                <div className="bg-muted relative z-20 rounded-2xl border p-1">
                  <IntegrationCard
                    className="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
                    isCenter={true}
                  >
                    <Image
                      src="/services/ur-ai/icon.png"
                      width={32}
                      height={32}
                      alt="Logo"
                      className="size-8"
                    />
                  </IntegrationCard>
                </div>
              </div>
              <div
                role="presentation"
                className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] opacity-50 [--dots-color:black] dark:[--dots-color:white]"
              />

              <div className="space-y-6">
                <IntegrationItems position="right-top">
                  <HiMiniDocumentPlus className="text-primary-green" />
                </IntegrationItems>
                <IntegrationItems position="right-middle">
                  <HiMiniDocumentChartBar className="text-primary-green" />
                </IntegrationItems>
                <IntegrationItems position="right-bottom">
                  <HiMiniDocumentArrowUp className="text-primary-green" />
                </IntegrationItems>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <div className="flex max-w-sm flex-col gap-4 py-10">
            <IntegrationCardItem
              title="AI Models Protection"
              description="Ensure continuous monitoring and scanning of models deployed on the internet."
            >
              <HiShieldCheck className="text-primary-green" />
            </IntegrationCardItem>

            <IntegrationCardItem
              title="Prevent Users Misuse"
              description="Safeguard against attempts to manipulate or control AI responses."
            >
              <FaUserAltSlash className="text-primary-green" />
            </IntegrationCardItem>
            <IntegrationCardItem
              title="Guard Against Malicious Data Injection"
              description="Prevent attackers from introducing harmful or corrupt data into the system."
            >
              <BsDatabaseFillCheck className="text-primary-green" />
            </IntegrationCardItem>
          </div>

          <div className="flex items-end">
            <Image
              src="/services/ur-ai/security-and-trust.svg"
              width={200}
              height={200}
              alt="Image"
              className="mt-20 size-120"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 py-28 md:py-32 dark:bg-transparent">
        <div className="@container relative z-10 mx-auto max-w-350 px-6">
          <div className="text-center">
            <h2 className="text-primary-green text-4xl font-semibold text-balance lg:text-5xl">
              Who Can Benefit?
            </h2>
          </div>

          <CardComponent className="mx-auto mt-8 grid max-w-sm divide-y overflow-hidden rounded-2xl shadow-zinc-950/5 *:text-center md:mt-16 @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0">
            {items.map(({ title, description, icon: Icon }, i) => (
              <div key={i} className="group shadow-zinc-950/5">
                <CardHeader className="pb-3">
                  {/* <CardDecorator>
                    <Image
                      src={urlFor(icon).url()}
                      width={1000}
                      height={1000}
                      alt={title}
                      className="size-5"
                    />
                  </CardDecorator> */}

                  <CardDecorator>
                    <Icon className="text-primary-green size-7" />
                  </CardDecorator>

                  <h3 className="text-primary-blue mt-6 font-medium">
                    {title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm">{description}</p>
                </CardContent>
              </div>
            ))}
          </CardComponent>
        </div>

        <DecorativeBackground />
      </section>

      <section className="relative min-h-180">
        <div className="relative z-10 py-32">
          <div className="container mx-auto">
            <div className="from-accent/40 to-accent/70 mx-auto flex w-full max-w-5xl flex-col items-center gap-16 overflow-hidden rounded-lg bg-linear-to-tr p-8 md:rounded-xl lg:p-12">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-primary-blue mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Ready to see what Ur AI can do for your business?
                </h2>
                <p className="text-muted-foreground max-w-xl lg:text-lg">
                  Explore how it can be tailored to your business&apos;s need.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <ButtonHoverMultiple link="/contact">
                  Get Started
                </ButtonHoverMultiple>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Aurora
            props={{
              colorStops: ["#7CFF67", "#B19EEF", "#5227FF"],
              blend: 0.5,
              amplitude: 1.0,
              speed: 0.5,
            }}
            className="top-0! rotate-180"
          />
        </div>
      </section>
    </main>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className,
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 min-h-24 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const IntegrationItem = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <Button variant="outline" size="icon" aria-label="Add integration">
        <FaCheck className="text-primary-green size-4" />
      </Button>
    </div>
  );
};

const IntegrationItems = ({
  children,
  className,
  position,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-12 rounded-xl border dark:bg-transparent",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 m-auto size-fit *:size-6",
          isCenter && "*:size-8",
        )}
      >
        {children}
      </div>
      {position && !isCenter && (
        <div
          className={cn(
            "to-muted-foreground/25 absolute z-10 h-px bg-linear-to-r",
            position === "left-top" &&
              "top-1/2 left-full w-[130px] origin-left rotate-[25deg]",
            position === "left-middle" &&
              "top-1/2 left-full w-[120px] origin-left",
            position === "left-bottom" &&
              "top-1/2 left-full w-[130px] origin-left rotate-[-25deg]",
            position === "right-top" &&
              "top-1/2 right-full w-[130px] origin-right rotate-[-25deg] bg-linear-to-l",
            position === "right-middle" &&
              "top-1/2 right-full w-[120px] origin-right bg-linear-to-l",
            position === "right-bottom" &&
              "top-1/2 right-full w-[130px] origin-right rotate-[25deg] bg-linear-to-l",
          )}
        />
      )}
    </div>
  );
};

const IntegrationCardItem = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="space-y-2 py-2">
          <div className="flex items-center gap-3">
            <div className="*:size-8">{children}</div>
            <h3 className="text-base font-medium">{title}</h3>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto size-36 mask-radial-from-40% mask-radial-to-60% duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);
