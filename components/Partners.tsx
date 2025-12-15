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

  const itPartners = data?.itPartners || [];
  const industrialPartners = data?.industrialPartners || [];
  const allLogos = [...itPartners, ...industrialPartners];

  const carouselLogos = allLogos.map((logo, index) => ({
    id: index + 1,
    name: `Partner ${index + 1}`,
    img: urlFor(logo).url(),
  }));

  return (
    <div className={cn(className, "space-y-8 md:py-24")}>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading asChild className="text-primary-blue!">
            {sectionTitle}
          </GradientHeading>
        </div>
        <LogoCarousel columnCount={3} logos={carouselLogos} />
      </div>
    </div>
  );
};

export default Partners;
