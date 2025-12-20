import Image from "next/image";
import Link from "next/link";
import { getCareersData } from "@/lib/sanity/queries";
import { GoChevronRight } from "react-icons/go";
import { urlFor } from "@/lib/sanity/image";
import { TextEffect } from "@/components/ui/text-effect";

export default async function Page() {
  const careers: CareersType | null = await getCareersData();

  return (
    <main>
      {/* Card Blog */}
      <div className="mx-auto max-w-340 px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        {/* Title */}
        <div className="relative flex w-full flex-col items-center justify-center pt-32 pb-32 sm:pt-40">
          {careers?.title && (
            <TextEffect
              per="word"
              preset="blur"
              as="h1"
              speedReveal={0.3}
              speedSegment={0.3}
              className="text-primary-green relative text-4xl leading-tight uppercase opacity-70 lg:text-5xl"
            >
              {careers.title}
            </TextEffect>
          )}
          {careers?.description && (
            <TextEffect
              per="word"
              preset="blur"
              speedReveal={0.8}
              speedSegment={0.8}
              className="mt-1 text-gray-600 dark:text-neutral-400"
            >
              {careers.description}
            </TextEffect>
          )}
        </div>
        {/* End Title */}
        {!careers?.jobCards || careers.jobCards.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-600 dark:text-neutral-400">
              No jobs are currently available
            </p>
          </div>
        ) : (
          <>
            {(() => {
              return (
                <div className="space-y-10">
                  {/* Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {careers.jobCards.map(
                      ({ title, description, url, image }, i) => (
                        // Card
                        <Link
                          className="group rounded-xl bg-gray-200/70 p-5 transition hover:bg-gray-300/70 focus:bg-gray-100 focus:outline-hidden dark:bg-white/5 dark:hover:bg-white/20 dark:focus:bg-white/10"
                          href={url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="aspect-16/10">
                            <Image
                              className="size-full rounded-xl object-cover"
                              width={400}
                              height={250}
                              src={urlFor(image).width(400).height(250).url()}
                              alt={title}
                            />
                          </div>
                          <span className="mt-5 block text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            {title}
                          </span>

                          <p>{description}</p>
                          <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Read more
                            <GoChevronRight className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:-translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 rtl:group-focus:translate-x-1" />
                          </div>
                        </Link>
                        // End Card
                      ),
                    )}
                  </div>
                  {/* End Grid */}
                </div>
              );
            })()}
          </>
        )}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
