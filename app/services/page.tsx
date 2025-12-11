import Services from "@/components/Services";
import { getSettingsData, getServicesData } from "@/lib/sanity/queries";

export default async function Page() {
  const [settings, services] = await Promise.all([
    getSettingsData(),
    getServicesData(),
  ]);

  return (
    <main className="bg-linear-to-t from-blue-100 py-40">
      <Services settings={settings} services={services} />
    </main>
  );
}
