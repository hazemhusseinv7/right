import {
  getSettingsData,
  getHeroData,
  getServicesData,
  getAboutData,
  getStatsData,
  getValuesData,
  getMilestonesData,
  getTestimonialsData,
  getPartnersData,
} from "@/lib/sanity/queries";

import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Milestones from "@/components/Milestones";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import ContactComponent from "./contact/ContactComponent";

export default async function Home() {
  const [
    settings,
    hero,
    services,
    aboutUs,
    stats,
    values,
    milestones,
    testimonials,
    partners,
  ] = await Promise.all([
    getSettingsData(),
    getHeroData(),
    getServicesData(),
    getAboutData(),
    getStatsData(),
    getValuesData(),
    getMilestonesData(),
    getTestimonialsData(),
    getPartnersData(),
  ]);

  return (
    <main>
      <Hero hero={hero} partners={partners} />
      <Services services={services} />
      <AboutUs settings={settings} aboutUs={aboutUs} />
      <Stats stats={stats} />
      <Values values={values} />
      <Milestones milestones={milestones} />
      <Testimonials testimonials={testimonials} />
      <Clients />

      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full">
          <ContactComponent settings={settings || undefined} />
        </div>
      </div>
    </main>
  );
}
