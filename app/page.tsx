import {
  getSettingsData,
  getHeroData,
  getPartnersData,
  getServicesData,
  getAboutData,
} from "@/lib/sanity/queries";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Values from "@/components/Values";

export default async function Home() {
  const [settings, hero, partners, services, aboutUs] = await Promise.all([
    getSettingsData(),
    getHeroData(),
    getPartnersData(),
    getServicesData(),
    getAboutData(),
  ]);

  return (
    <main>
      <Hero hero={hero} partners={partners} />
      <Services services={services} />
      <AboutUs settings={settings} aboutUs={aboutUs} />
      <Values />
      <Clients />
    </main>
  );
}
