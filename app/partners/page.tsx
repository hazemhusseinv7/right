import { TextEffect } from "@/components/ui/text-effect";
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
      <section className="bg-background py-27">
        <div className="mx-auto max-w-350 px-6 text-center">
          <TextEffect
            per="word"
            preset="blur"
            as="span"
            speedReveal={0.3}
            speedSegment={0.3}
            className="text-primary-green text-center text-2xl font-medium lg:text-4xl"
          >
            IT Partners
          </TextEffect>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {itPartners.map((logo, i) => (
              <div
                key={`it-partners-${i}`}
                className="relative flex min-h-10 items-center justify-center pr-12 after:absolute after:top-1/2 after:-right-1.5 after:h-8 after:w-px after:-translate-y-1/2 after:bg-gray-300 last:after:hidden sm:pr-16 sm:after:-right-2 sm:after:h-12 lg:min-h-32"
              >
                <Image
                  className="h-fit w-14 lg:w-48 dark:invert"
                  src={urlFor(logo).url()}
                  alt="Logo"
                  height={192}
                  width={192}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-27">
        <div className="mx-auto max-w-350 px-6 text-center">
          <TextEffect
            per="word"
            preset="blur"
            as="span"
            speedReveal={0.3}
            speedSegment={0.3}
            className="text-primary-green text-center text-2xl font-medium lg:text-4xl"
          >
            Industrial Partners
          </TextEffect>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {industrialPartners.map((logo, i) => (
              <div
                key={`industrial-partners-${i}`}
                className="relative flex min-h-10 items-center justify-center pr-12 after:absolute after:top-1/2 after:-right-1.5 after:h-8 after:w-px after:-translate-y-1/2 after:bg-gray-300 last:after:hidden sm:pr-16 sm:after:-right-2 sm:after:h-12 lg:min-h-32"
              >
                <Image
                  className="h-fit w-14 lg:w-48 dark:invert"
                  src={urlFor(logo).url()}
                  alt="Logo"
                  height={192}
                  width={192}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-27">
        <div className="mx-auto max-w-350 px-6 text-center">
          <TextEffect
            per="word"
            preset="blur"
            as="span"
            speedReveal={0.3}
            speedSegment={0.3}
            className="text-primary-green text-center text-2xl font-medium lg:text-4xl"
          >
            Clients
          </TextEffect>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {clients?.logos.map((logo, i) => (
              <div
                key={`clients-${i}`}
                className="relative flex min-h-10 items-center justify-center pr-12 after:absolute after:top-1/2 after:-right-1.5 after:h-8 after:w-px after:-translate-y-1/2 after:bg-gray-300 last:after:hidden sm:pr-16 sm:after:-right-2 sm:after:h-12 lg:min-h-32"
              >
                <Image
                  className="h-fit w-14 lg:w-48 dark:invert"
                  src={urlFor(logo).url()}
                  alt="Logo"
                  height={192}
                  width={192}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
