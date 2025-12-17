"use client";
import Image from "next/image";
import { JSX, useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";
import { urlFor } from "@/lib/sanity/image";

export default function HorizontalScroll({
  aboutUs,
}: {
  aboutUs: AboutUsType | null;
}): JSX.Element {
  const ulRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ulRef.current || !sectionRef.current) return;

    const items = document.querySelectorAll("li");

    const controls = animate(
      ulRef.current,
      {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      } as any,
      { easing: spring() } as any,
    );

    scroll(controls, { target: sectionRef.current });

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h2");

      if (header && sectionRef.current) {
        scroll(animate([header] as any, { x: [800, -800] } as any), {
          target: sectionRef.current,
          offset: [
            [i * segmentLength, 1],
            [(i + 1) * segmentLength, 0],
          ],
        });
      }
    });
  }, []);

  return (
    <ReactLenis root>
      <section ref={sectionRef} className="relative h-[500vh]">
        <ul ref={ulRef} className="sticky top-0 flex">
          <li className="bg-primary-green flex h-screen w-screen min-w-screen flex-col items-center justify-start overflow-hidden pt-20">
            <h2 className="text-primary-blue relative bottom-5 inline-block text-[10vw] font-semibold">
              {aboutUs?.ourVision.title}
            </h2>
            <p className="text-primary-blue relative bottom-5 inline-block max-w-5xl px-8 text-lg lg:text-2xl">
              {aboutUs?.ourVision.description}
            </p>
            <Image
              src={urlFor(aboutUs?.ourVision.image).url()}
              className="absolute bottom-0 w-[380px] 2xl:w-[750px]"
              width={500}
              height={500}
              alt={aboutUs?.ourVision.title || "image"}
            />
          </li>
          <li className="bg-primary-blue flex h-screen w-screen min-w-screen flex-col items-center justify-start overflow-hidden pt-20">
            <h2 className="text-primary-green relative bottom-5 inline-block text-[10vw] font-semibold">
              {aboutUs?.ourMission.title}
            </h2>
            <p className="text-primary-green relative bottom-5 inline-block max-w-5xl px-8 text-lg lg:text-2xl">
              {aboutUs?.ourMission.description}
            </p>
            <Image
              src={urlFor(aboutUs?.ourMission.image).url()}
              className="absolute bottom-0 w-[380px] 2xl:w-[750px]"
              width={500}
              height={500}
              alt={aboutUs?.ourMission.title || "image"}
            />
          </li>
        </ul>
      </section>
    </ReactLenis>
  );
}
