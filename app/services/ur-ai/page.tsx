import Image from "next/image";

import { getURAiData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Clients from "@/components/Clients";
import Grainient from "@/components/Grainient";
import ExpandableCards from "@/components/ExpandableCards";
// import { PortableTextComponents } from "@/lib/PortableTextComponents";
import HoverCards from "./HoverCards";
import { YouTubeEmbed } from "@next/third-parties/google";
import Cards from "./cards";
import ReactLenis from "lenis/react";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa6";

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
    about,
    whatMakesItDifferent,
    howItWorks,
    securityTrust,
    whoCanBenefit,
    cta,
  } = data;

  const features = [
    {
      title: "Deploy Locally",
      description: "Install on your own infrastructure, with full control",
    },
    {
      title: "Configure Easily",
      description:
        "Customize workflows, processes, and AI behavior to fit your needs",
    },
    {
      title: "Integrate Seamlessly",
      description:
        "Connect with your existing systems, including ERP, CRM, and more",
    },
    {
      title: "Stay Compliant",
      description:
        "Align with local regulations and standards such as SDAIA and NCA",
    },
    {
      title: "Scale Effortlessly",
      description:
        "Expand AI capabilities as your business grows, without complications",
    },
  ];

  const securityData = [
    {
      category: "AI SECURITY",
      title: "AI Models Protection",
      description:
        "Ensure continuous monitoring and scanning of models deployed on the internet.",
      icon: <IoShieldCheckmark className="size-12 text-white" />,
    },
    {
      category: "AI ORCHESTRATION",
      title: "Prevent Users Misuse",
      description:
        "Safeguard against attempts to manipulate or control AI responses.",
      icon: <BsDatabaseFillCheck className="size-12 text-white" />,
    },
    {
      category: "AI GOVERNANCE",
      title: "Guard Against Malicious Data Injection",
      description:
        "Prevent attackers from introducing harmful or corrupt data into the system.",
      icon: <FaUserCheck className="size-12 text-white" />,
    },
  ];

  const videoUrl = hero.videoUrl;

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

          <h1 className="text-primary-blue mb-8 max-w-5xl text-5xl font-light tracking-tight md:text-7xl">
            Own your enterprise{" "}
            <span className="font-medium uppercase opacity-90">
              Intelligence
            </span>
          </h1>

          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Deploy AI built for your systems and data, with customizable models,
            automated workflows, and secure on-premise and air-gapped
            environment — Delivering enterprise intelligence fully under your
            control.
          </p>

          <button className="group relative overflow-hidden rounded-sm bg-gradient-to-r from-[#006050] to-[#164e63] px-10 py-4 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-105 active:scale-95">
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
              {/* <h2 className="text-primary-blue text-4xl font-semibold text-balance lg:text-5xl xl:text-7xl">
                {whoCanBenefit.title}
              </h2> */}

              <div className="mb-16 text-center">
                <h2 className="text-3xl font-light tracking-tight text-[#1f3c61] md:text-4xl">
                  Adopt AI the{" "}
                  <span className="font-extrabold text-[#66bc46]">
                    RIGHT WAY
                  </span>
                </h2>
                <p className="mt-3 text-sm font-medium tracking-widest text-[#1f3c61] uppercase opacity-60">
                  Ur AI is built differently for you
                </p>
              </div>

              {whoCanBenefit.description && (
                <p className="text-muted-foreground">
                  {whoCanBenefit.description}
                </p>
              )}
            </div>
          </div>

          <ExpandableCards data={data} className="relative z-10" />

          {/* <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #1f3c61 100%)
      `,
              backgroundSize: "100% 100%",
            }}
          /> */}
        </section>

        <HoverCards />

        {videoId && (
          <div className="relative z-10 mt-32 mb-14 w-full px-4 py-20">
            <YouTubeEmbed
              videoid={videoId}
              style="width: 1000px; height: auto; max-width: 100%;"
            />
          </div>
        )}

        <Cards />

        <section className="relative flex min-h-screen items-center justify-center p-4 md:p-10">
          <div className="relative flex w-full max-w-[1600px] flex-col justify-center overflow-hidden rounded-[48px] border border-white/[0.08] bg-[#0d1124] px-8 py-20 shadow-[0_0_80px_rgba(0,0,0,0.6)] md:px-24">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
              <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.4] blur-[120px]" />
              <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.4] blur-[100px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-20">
              {securityData.map((item, index) => (
                <div key={index} className="flex flex-col space-y-12">
                  {item.icon}
                  <div className="space-y-8">
                    <span className="block text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
                      {item.category}
                    </span>

                    <h3 className="text-4xl leading-[1.1] font-light tracking-tight text-white lg:text-5xl">
                      {item.title}
                    </h3>

                    <p className="max-w-[320px] text-base leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark relative bg-[url('/img.svg')] bg-cover bg-center bg-no-repeat py-32">
          <div className="absolute top-0 h-full w-full overflow-hidden opacity-95">
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
    </ReactLenis>
  );
}
