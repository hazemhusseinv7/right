import Services from "@/components/Services";
import { getServicesData } from "@/lib/sanity/queries";

export default async function Page() {
  const services: ServicesType | null = await getServicesData();

  return (
    <main>
      <Services services={services} />
    </main>
  );
}
