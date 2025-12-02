import React from "react";
import LogoCarousel from "./ui/logo-carousel";
import { GradientHeading } from "./ui/gradient-heading";
import { cn } from "@/lib/utils";

const Clients = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "space-y-8 md:py-24")}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">Our Clients</GradientHeading>
        </div>
        <LogoCarousel columnCount={3} />
      </div>
    </div>
  );
};

export default Clients;
