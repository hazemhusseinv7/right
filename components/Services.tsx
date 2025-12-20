"use client";

import { urlFor } from "@/lib/sanity/image";
import ExpandableCard, { CardList } from "./expandable-card";
import { useRef } from "react";
import { TextEffect } from "./ui/text-effect";
import { useInView } from "motion/react";
import DecorativeBackground from "./DecorativeBackground";

const Services = ({ services }: { services: ServicesType | null }) => {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-linear-to-t from-emerald-50 py-24 lg:py-40"
    >
      {sectionTitle && (
        <div className="min-h-16 lg:min-h-22">
          <h2>
            <TextEffect
              per="word"
              preset="blur"
              speedReveal={0.3}
              speedSegment={0.3}
              trigger={inView}
              className="text-primary-green z-200 mx-auto mb-4 w-fit text-5xl font-semibold lg:text-7xl"
            >
              {sectionTitle}
            </TextEffect>
          </h2>
        </div>
      )}

      <div className="mx-auto max-w-350">
        <ExpandableCard items={servicesData} />
      </div>

      <DecorativeBackground />
    </section>
  );
};

export default Services;
