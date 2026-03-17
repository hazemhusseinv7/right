import { getClientsData } from "@/lib/sanity/queries";
import { LogoCloud } from "./logo-cloud";
import { urlFor } from "@/lib/sanity/image";

interface ClientsProps {
  logos?: ImageType[];
}

const Clients = async ({ logos: data }: ClientsProps = {}) => {
  let logos: { url: string }[] = [];

  if (data && data.length > 0) {
    logos = data.map((clientLogo) => ({
      url: urlFor(clientLogo).url(),
    }));
  } else {
    const clients: ClientsType | null = await getClientsData();
    if (clients?.logos?.length) {
      logos = clients.logos.map((clientLogo) => ({
        url: urlFor(clientLogo).url(),
      }));
    }
  }

  if (logos.length === 0) return null;

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20">
      <LogoCloud logos={duplicatedLogos} />
    </section>
  );
};

export default Clients;
