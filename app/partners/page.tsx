import { urlFor } from "@/lib/sanity/image";
import { getPartnersData, getClientsData } from "@/lib/sanity/queries";
import Image from "next/image";

export default async function Page() {
  const [partners, clients] = await Promise.all([
    getPartnersData(),
    getClientsData(),
  ]);

  return (
    <main className="my-20">
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-center text-2xl lg:text-4xl font-medium text-primary-green">
            Partners
          </span>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {partners?.logos.map((logo, i) => (
              <Image
                key={`partners-${i}`}
                className="h-14 lg:h-20 w-fit dark:invert"
                src={urlFor(logo).url()}
                alt="Logo"
                height={96}
                width={96}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-center text-2xl lg:text-4xl font-medium text-primary-green">
            Clients
          </span>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {clients?.logos.map((logo, i) => (
              <Image
                key={`clients-${i}`}
                className="h-14 lg:h-20 w-fit dark:invert"
                src={urlFor(logo).url()}
                alt="Logo"
                height={96}
                width={96}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
