import { getClientsData } from "@/lib/sanity/queries";
import { LogoCloud } from "./logo-cloud";
import { urlFor } from "@/lib/sanity/image";

const Clients = async () => {
  const clients: ClientsType | null = await getClientsData();

  const title = clients?.title;

  let logos =
    clients?.logos?.map((clientLogo) => ({
      url: urlFor(clientLogo).width(100).height(50).url(),
    })) || [];

  logos = [...logos, ...logos];

  return (
    <section className="py-20">
      <LogoCloud logos={logos} title={title} />
    </section>
  );
};

export default Clients;
