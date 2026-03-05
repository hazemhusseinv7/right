import Image from "next/image";

import { YouTubeEmbed } from "@next/third-parties/google";
import { PortableText } from "@portabletext/react";
import { getURAiData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Clients from "@/components/Clients";
import Grainient from "@/components/Grainient";
import { Gallery } from "@/components/Gallery";
import ExpandableCards from "@/components/ExpandableCards";
import { PortableTextComponents } from "@/lib/PortableTextComponents";

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

export default async function Page() {
  const data: URAiType | null = await getURAiData();

  if (!data) return;

  const {
    hero,
    about,
    whatMakesItDifferent,
    // howItWorks,
    securityTrust,
    whoCanBenefit,
    cta,
  } = data;

  const videoUrl = hero.videoUrl;

  const videoId = videoUrl ? getVideoId(videoUrl) : null;

  return (
    <main className="relative overflow-hidden pt-12">
      <section className="dark relative text-slate-50">
        <div className="absolute top-0 h-full w-full overflow-hidden">
          <Grainient
            color1="#1f3c61"
            color2="#1f3c61"
            color3="#1f3c61"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <div className="relative pt-12 pb-24 md:pb-32 lg:pt-44 lg:pb-56">
          <div className="relative mx-auto flex max-w-400 items-center justify-between gap-10 px-6 max-lg:flex-col">
            <div className="mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                UR AI
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-pretty lg:text-4xl">
                {hero.description}
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button asChild className="h-14 rounded-md px-8 text-2xl">
                  <Link href={hero.buttonLink}>
                    <span className="text-nowrap">{hero.buttonTitle}</span>
                  </Link>
                </Button>
              </div>
            </div>
            {videoId && (
              <div className="w-full lg:w-1/2">
                <YouTubeEmbed videoid={videoId} />
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="relative -mt-1">
        <div
          className="absolute inset-0 top-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #1f3c61 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="relative top-15 z-10 mx-auto w-fit">
          <h2 className="text-primary-blue max-w-xl text-4xl font-medium lg:text-5xl">
            Our Clients
          </h2>
        </div>
        <Clients />
      </div>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-primary-blue relative z-10 max-w-xl text-4xl font-medium lg:text-5xl xl:text-7xl">
            {about.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="from-primary-green/10 relative aspect-76/59 rounded-2xl bg-linear-to-b to-transparent p-px dark:from-zinc-700">
                <Image
                  src={urlFor(about.image).url()}
                  className="rounded-[15px] p-4"
                  alt="Logo"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4 2xl:ms-10 2xl:mt-20 2xl:scale-130">
              <div className="text-muted-foreground">
                <PortableText
                  value={about.description1}
                  components={PortableTextComponents}
                />
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <div>
                    <PortableText
                      value={about.description2}
                      components={PortableTextComponents}
                    />
                  </div>

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
        <div className="relative z-10 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-primary-blue text-4xl font-medium text-balance md:text-4xl lg:text-5xl xl:text-7xl">
                {whatMakesItDifferent.title}
              </h2>
              <p className="text-muted-foreground mt-6">
                {whatMakesItDifferent.description}
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {whatMakesItDifferent.cards.map(
                ({ title, description, icon }, i) => (
                  <Cards
                    key={i}
                    icon={icon}
                    title={title}
                    description={description}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #1f3c61 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
      </section>

      <Gallery data={data} />

      <section className="relative py-16 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-primary-blue relative z-10 max-w-xl text-3xl font-semibold text-balance md:text-4xl lg:text-5xl xl:text-7xl">
            {securityTrust.title}
          </h2>
          <div className="relative">
            <div className="relative z-10 space-y-4 md:w-1/2">
              <p>{securityTrust.description}</p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-8 pt-6">
                {securityTrust.cards.map(({ title, description, icon }, i) => (
                  <div className="space-y-3" key={i}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={urlFor(icon).url()}
                        width={32}
                        height={32}
                        alt={title}
                        className="size-8"
                      />
                      <h3 className="text-sm font-medium">{title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 h-fit md:absolute md:inset-x-0 md:-inset-y-12 md:mt-0 md:mask-l-from-35% md:mask-l-to-55%">
              <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                <Image
                  src={urlFor(securityTrust.image).url()}
                  className="hidden rounded-[12px] dark:block"
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src={urlFor(securityTrust.image).url()}
                  className="rounded-[12px] shadow dark:hidden"
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 py-28 md:py-32 dark:bg-transparent">
        <div className="@container relative z-10 mx-auto mb-8 max-w-350 px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-primary-blue text-4xl font-semibold text-balance lg:text-5xl xl:text-7xl">
              {whoCanBenefit.title}
            </h2>

            {whoCanBenefit.description && (
              <p className="text-muted-foreground">
                {whoCanBenefit.description}
              </p>
            )}
          </div>
        </div>

        <ExpandableCards data={data} className="relative z-10" />

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #1f3c61 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
      </section>

      <section className="dark relative py-32">
        <div className="absolute top-0 h-full w-full rotate-180 overflow-hidden bg-slate-950">
          <Grainient
            color1="#1f3c61"
            color2="#1f3c61"
            color3="#1f3c61"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <div className="relative container mx-auto">
          <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
            <div className="flex-1">
              <h3 className="mb-3 max-w-120 text-2xl font-semibold text-white md:mb-4 md:text-4xl lg:mb-6">
                {cta.title}
              </h3>
              <p className="max-w-xl text-slate-200 lg:text-lg">
                {cta.description}
              </p>

              <Button asChild size="lg" className="mt-10 px-5 text-base">
                <Link href={cta.buttonLink}>
                  <span className="text-nowrap">{cta.buttonTitle}</span>
                </Link>
              </Button>
            </div>
            <div className="shrink-0">
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                  <img
                    src={urlFor(about.image).url()}
                    alt="Logo"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Cards = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ImageType;
}) => {
  return (
    <Card className="bg-gray-50/50 p-6">
      <div className="relative">
        <div className="shadow-primary-green/70 bg-primary-green/20 flex size-15 items-center justify-center rounded-lg border border-gray-100 shadow-2xl">
          <Image
            src={urlFor(icon).url()}
            className="size-10"
            alt={title}
            width={24}
            height={24}
          />
        </div>

        <div className="space-y-2 py-6">
          <h3 className="text-primary-blue text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
