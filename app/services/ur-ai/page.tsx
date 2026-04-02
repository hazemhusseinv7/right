import Image from "next/image";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import ReactLenis from "lenis/react";
import { Button } from "@/components/ui/button";
import Clients from "@/components/Clients";
import { getURAiData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import AccordionModal from "./image-accordion";
import HoverCards from "./HoverCards";
import Cards from "./cards";

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
    clients,
    whoCanBenefit,
    experienceAi,
    video,
    securityTrust,
    scrollCards,
    cta,
  } = data;

  const videoUrl = video.videoUrl;

  const videoId = videoUrl ? getVideoId(videoUrl) : null;

  return (
    <ReactLenis root>
      <main className="relative pt-20">
        <section className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center bg-white px-4 py-24 text-center">
          <div className="mb-10 flex flex-col items-center gap-3">
            <div className="relative h-auto w-48">
              <Image
                src={urlFor(hero.image).url()}
                alt="Ur AI"
                width={1207}
                height={929}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-primary-blue mb-8 text-3xl font-light tracking-tight md:text-5xl">
            {hero.title.text}{" "}
            <span className="from-primary-blue to-primary-green bg-linear-to-r bg-clip-text font-medium text-transparent uppercase opacity-90">
              {hero.title.highlight}
            </span>
          </h1>

          <p className="mb-12 max-w-3xl text-justify text-lg leading-relaxed text-slate-600 [text-align-last:center] md:text-2xl">
            {hero.description}
          </p>

          <button className="group relative cursor-pointer overflow-hidden rounded-sm bg-gradient-to-r from-[#006050] to-[#164e63] px-10 py-4 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
            {hero.buttonTitle}
          </button>
        </section>

        <div className="relative -mt-1">
          <div
            className="absolute inset-0 top-0 z-0 opacity-40"
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
          <Clients logos={clients?.logos} />
        </div>

        <section className="relative z-20 py-14 md:py-32 dark:bg-transparent">
          <div className="@container relative z-10 mx-auto mb-8 max-w-350 px-6">
            <div className="space-y-6 text-center">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-light tracking-tight text-[#1f3c61] md:text-4xl">
                  {whoCanBenefit.title.text}{" "}
                  <span className="font-extrabold text-[#66bc46] uppercase">
                    {whoCanBenefit.title.highlight}
                  </span>
                </h2>
                <p className="mt-3 text-sm font-medium tracking-widest text-[#1f3c61] uppercase opacity-60">
                  {whoCanBenefit.description}
                </p>
              </div>
            </div>
          </div>

          <AccordionModal data={whoCanBenefit} className="relative z-10" />
        </section>

        <HoverCards data={experienceAi} />

        {videoId && (
          <div className="relative z-10 mt-32 mb-14 w-full px-4 py-20">
            <YouTubeEmbed
              videoid={videoId}
              style="width: 1000px; height: auto; max-width: 100%;"
            />
          </div>
        )}

        <Cards data={scrollCards} />

        <section className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-10">
          <div className="flex flex-col items-center justify-center gap-4 py-10 pt-14">
            <h2 className="text-primary-blue relative z-10 max-w-xl text-3xl font-semibold text-balance md:text-4xl lg:text-5xl xl:text-7xl">
              {securityTrust.title}
            </h2>
            <p>{securityTrust.description}</p>
          </div>

          <div className="relative flex w-full max-w-[1600px] flex-col justify-center overflow-hidden rounded-[48px] border border-white/[0.08] bg-[#0d1124] px-8 py-20 shadow-[0_0_80px_rgba(0,0,0,0.6)] md:px-24">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
              <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.5] blur-[120px]" />
              <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.5] blur-[100px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-20">
              {securityTrust.cards.map(
                ({ category, title, description, icon }, index) => (
                  <div key={index} className="flex flex-col space-y-12">
                    <Image
                      src={urlFor(icon.asset).url()}
                      width={48}
                      height={48}
                      alt={title}
                      className="size-12 brightness-0 invert"
                    />
                    <div className="h-full space-y-8">
                      <span className="block text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                        {category}
                      </span>

                      <h3 className="text-4xl leading-[1.1] font-light tracking-tight text-white lg:text-5xl">
                        {title}
                      </h3>

                      <p className="max-w-[320px] text-base leading-relaxed text-white/70">
                        {description}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0d1124] bg-cover bg-center bg-no-repeat py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
            <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.5] blur-[120px]" />
            <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.5] blur-[100px]" />
            <div className="size-full -rotate-3 bg-[url('/img.svg')] bg-cover bg-center bg-no-repeat opacity-3" />
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

                <Button
                  asChild
                  size="lg"
                  className="mt-10 px-5 text-base"
                  variant="outline"
                >
                  <Link href={cta.buttonLink}>
                    <span className="text-nowrap">{cta.buttonTitle}</span>
                  </Link>
                </Button>
              </div>
              <div className="shrink-0">
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                    <img
                      src="/services/ur-ai/icon.png"
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
    </ReactLenis>
  );
}
