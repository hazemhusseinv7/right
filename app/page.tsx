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
import Milestones from "@/components/Milestones";
import ContactComponent from "./contact/ContactComponent";

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
      <Services settings={settings} services={services} />
      <AboutUs settings={settings} aboutUs={aboutUs} />
      <Milestones />
      <Values />
      <Stats />
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
