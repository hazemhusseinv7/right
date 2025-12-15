"use client";

import { urlFor } from "@/lib/sanity/image";
import ExpandableCard, { CardList } from "./expandable-card";
import { useRef } from "react";
import { TextEffect } from "./motion-primitives/text-effect";
import { useInView } from "motion/react";

const Services = ({
  settings,
  services,
}: {
  settings: SettingsType | null;
  services: ServicesType | null;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const servicesData: CardList[] =
    services?.serviceCategories?.map((category) => ({
      title: category.categoryTitle,
      list: category.services.map((service) => ({
        title: service.title,
        description: service.description,
        icon: urlFor(service.icon).url(),
        items: service.items,
      })),
    })) || [];

  const sectionTitle = services?.title;

  const cta = settings?.whatsapp;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-linear-to-b from-emerald-50 py-24 lg:py-40"
    >
      {sectionTitle && (
        <TextEffect
          per="word"
          preset="blur"
          as="h2"
          speedReveal={0.3}
          speedSegment={0.3}
          trigger={inView}
          className="text-primary-green z-200 mx-auto mb-4 w-fit text-5xl font-semibold lg:text-7xl"
        >
          {sectionTitle}
        </TextEffect>
      )}

      <div className="mx-auto max-w-350">
        <ExpandableCard items={servicesData} cta={cta} />
      </div>
    </section>
  );
};

export default Services;
