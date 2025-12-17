"use client";

import { urlFor } from "@/lib/sanity/image";
import ExpandableCard, { CardList } from "./expandable-card";
import { useRef } from "react";
import { TextEffect } from "./motion-primitives/text-effect";
import { useInView } from "motion/react";
import { BsCloudCheckFill } from "react-icons/bs";
import { MdLibraryAddCheck } from "react-icons/md";

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

      {/* SVG Element */}
      <div className="absolute end-0 top-0 -translate-x-4 translate-y-40 lg:-translate-x-20 lg:translate-y-50">
        <BsCloudCheckFill className="text-primary-green size-10 lg:size-14" />
      </div>
      {/* End SVG Element */}

      {/* SVG Element */}
      <div className="absolute start-0 bottom-0 translate-x-4 -translate-y-10 lg:translate-x-20 lg:-translate-y-20">
        <MdLibraryAddCheck className="text-primary-green size-10 lg:size-14" />
      </div>
      {/* End SVG Element */}
    </section>
  );
};

export default Services;
