import AboutUs from "@/components/AboutUs/AboutUs";
import { getSettingsData, getAboutData } from "@/lib/sanity/queries";

export default async function Page() {
  const [settings, aboutUs] = await Promise.all([
    getSettingsData(),
    getAboutData(),
  ]);
  return (
    <main>
      <AboutUs settings={settings} aboutUs={aboutUs} />
    </main>
  );
}
