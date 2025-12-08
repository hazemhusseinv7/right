import {
  getSettingsData,
  getHeroData,
  getPartnersData,
  getServicesData,
  getAboutData,
  getTestimonialsData,
} from "@/lib/sanity/queries";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";

export default async function Home() {
  const [settings, hero, partners, services, aboutUs, testimonials] =
    await Promise.all([
      getSettingsData(),
      getHeroData(),
      getPartnersData(),
      getServicesData(),
      getAboutData(),
      getTestimonialsData(),
    ]);

  return (
    <main>
      <Hero hero={hero} partners={partners} />
      <Services services={services} />
      <AboutUs settings={settings} aboutUs={aboutUs} />
      <Values />
      <Stats />
      <Testimonials testimonials={testimonials} />
      <Clients />
    </main>
  );
}
