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
    <section id="services" className="relative py-12">
      <h2 className="text-primary-green z-200 mx-auto mb-4 w-fit text-5xl font-semibold lg:text-7xl">
        {sectionTitle}
      </h2>
      <div className="mx-auto max-w-350">
        <ExpandableCard items={servicesData} cta={cta} />
      </div>

      {/* SVG Element */}
      <div className="absolute end-0 top-0 hidden -translate-x-20 translate-y-32 md:block">
        <svg
          className="text-primary-green h-auto w-16"
          width="121"
          height="135"
          viewBox="0 0 121 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* End SVG Element */}

      {/* SVG Element */}
      <div className="absolute start-0 bottom-0 hidden translate-x-20 translate-y-4 md:block">
        <svg
          className="text-primary-green h-auto w-40"
          width="347"
          height="188"
          viewBox="0 0 347 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* End SVG Element */}
    </section>
  );
};

export default Services;
