import LogoCarousel from "./ui/logo-carousel";
import { GradientHeading } from "./ui/gradient-heading";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";

const Partners = ({
  data,
  className,
}: {
  data?: PartnersType | null;
  className?: string;
}) => {
  const sectionTitle = data?.title;
  const logos = data?.logos || [];

  const carouselLogos = logos.map((logo, index) => ({
    id: index + 1,
    name: `Partner ${index + 1}`,
    img: urlFor(logo).url(),
  }));

  return (
    <div className={cn(className, "space-y-8 md:py-24")}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">{sectionTitle}</GradientHeading>
        </div>
        <LogoCarousel columnCount={3} logos={carouselLogos} />
      </div>
    </div>
  );
};

export default Partners;
