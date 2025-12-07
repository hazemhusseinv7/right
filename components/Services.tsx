"use client";

import { urlFor } from "@/lib/sanity/image";
import ExpandableCard, { CardList } from "./expandable-card";

const Services = ({ services }: { services: ServicesType | null }) => {
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
    <section id="services" className="py-40">
      <h2 className="font-semibold text-2xl lg:text-7xl mx-auto w-fit text-primary-blue mb-4 z-200">
        {sectionTitle}
      </h2>
      <div className="max-w-300 mx-auto">
        <ExpandableCard items={servicesData} />
      </div>
    </section>
  );
};

export default Services;
