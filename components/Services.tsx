"use client";

import { urlFor } from "@/lib/sanity/image";
import ExpandableCard, { CardList } from "./expandable-card";

const Services = ({
  settings,
  services,
}: {
  settings: SettingsType | null;
  services: ServicesType | null;
}) => {
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
    <section id="services" className="py-12">
      <h2 className="text-primary-green z-200 mx-auto mb-4 w-fit text-2xl font-semibold lg:text-7xl">
        {sectionTitle}
      </h2>
      <div className="mx-auto max-w-300">
        <ExpandableCard items={servicesData} cta={cta} />
      </div>
    </section>
  );
};

export default Services;
