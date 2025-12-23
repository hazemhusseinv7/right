"use client";

import Image from "next/image";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { urlFor } from "@/lib/sanity/image";
import { GoChevronRight } from "react-icons/go";

const HeroCards = ({ data }: { data: HeroType | null }) => {
  const cards = data?.cards;

  if (!cards) return;

  return (
    <div className="flex items-center justify-center gap-4 px-8 max-lg:flex-col">
      {cards.map(({ title, description, icon }, i) => (
        <Card as="a" href="/services" key={i} className="group max-w-100">
          <CardHeader className="bg-primary-blue group-hover:bg-primary-green flex gap-2 font-medium text-white transition-colors duration-300">
            {icon && (
              <Image
                src={urlFor(icon).url()}
                alt={title}
                width={32}
                height={32}
                className="size-5"
              />
            )}
            <span>{title}</span>
            <GoChevronRight className="transition-transform duration-300 group-hover:translate-x-2 group-hover:animate-pulse" />
          </CardHeader>
          <Divider className="bg-primary-green h-1" />
          <CardBody className="group-hover:bg-primary-green/10 font-light transition-colors duration-300 max-lg:text-sm">
            <p>{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default HeroCards;
