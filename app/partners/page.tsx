import { urlFor } from "@/lib/sanity/image";
import { getPartnersData, getClientsData } from "@/lib/sanity/queries";
import Image from "next/image";

export default async function Page() {
  const [partners, clients] = await Promise.all([
    getPartnersData(),
    getClientsData(),
  ]);

  const itPartners = partners?.itPartners || [];
  const industrialPartners = partners?.industrialPartners || [];

  return (
    <main className="my-20">
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="text-primary-green text-center text-2xl font-medium lg:text-4xl">
            IT Partners
          </span>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {itPartners.map((logo, i) => (
              <Image
                key={`partners-${i}`}
                className="h-14 w-fit lg:h-20 dark:invert"
                src={urlFor(logo).url()}
                alt="Logo"
                height={80}
                width={80}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="text-primary-green text-center text-2xl font-medium lg:text-4xl">
            Industrial Partners
          </span>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {industrialPartners.map((logo, i) => (
              <Image
                key={`partners-${i}`}
                className="h-14 w-fit lg:h-20 dark:invert"
                src={urlFor(logo).url()}
                alt="Logo"
                height={80}
                width={80}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="text-primary-green text-center text-2xl font-medium lg:text-4xl">
            Clients
          </span>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {clients?.logos.map((logo, i) => (
              <Image
                key={`clients-${i}`}
                className="h-14 w-fit lg:h-20 dark:invert"
                src={urlFor(logo).url()}
                alt="Logo"
                height={80}
                width={80}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
