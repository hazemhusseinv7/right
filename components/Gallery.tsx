"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/sanity/image";
import Grainient from "./Grainient";
import Image from "next/image";

const Gallery = ({
  data,
  className,
}: {
  data: URAiType;
  className?: string;
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn("relative bg-slate-950 py-32", className)}>
      {/* Background Gradient */}
      <div className="absolute top-0 h-full w-full rotate-180 overflow-hidden">
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
        <div className="mb-8 flex flex-col justify-between max-lg:px-12 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-4xl font-medium text-balance text-white md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl xl:text-7xl">
              {data.howItWorks.title}
            </h2>
            <p className="text-lg text-slate-200 md:mb-4 md:text-xl">
              {data.howItWorks.description}
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:-left-4"
        >
          <CarouselContent className="hide-scrollbar -ml-4 w-full max-w-full gap-8 pr-8 pl-8 md:-mr-4 md:pr-8 md:pl-8 2xl:pr-[max(2rem,calc(50vw-700px+1rem))] 2xl:pl-[max(2rem,calc(50vw-700px+1rem))]">
            {data.howItWorks.cards.map(
              ({ _key, title, description, icon, image }) => (
                <CarouselItem key={_key} className="md:max-w-[452px]">
                  <div className="group flex flex-col justify-between">
                    <div>
                      <div className="flex aspect-3/2 overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative flex h-full w-full origin-bottom items-center justify-center bg-linear-to-tr from-slate-800 to-slate-600 transition duration-300 group-hover:scale-105">
                            <Image
                              src={urlFor(image).url()}
                              alt={title}
                              width={1024}
                              height={1024}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 flex items-center gap-2 pt-4 text-lg font-medium wrap-break-word text-white md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      <Image
                        src={urlFor(icon).url()}
                        alt={title}
                        width={32}
                        height={32}
                        className="size-8"
                      />
                      <span>{title}</span>
                    </div>
                    <div className="mb-8 line-clamp-2 text-sm text-slate-200 md:mb-12 md:text-base lg:mb-9">
                      {description}
                    </div>
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>

          {/* <CarouselItem key={item.id} className="ml-8 md:max-w-[452px]">
            <a href={item.url} className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-3/2 overflow-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                {item.title}
              </div>
              <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                {item.summary}
              </div>
              <div className="flex items-center text-sm">
                Read more{" "}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </CarouselItem> */}
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery };
