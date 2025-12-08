import Image from "next/image";
import Link from "next/link";
import { getCareersData } from "@/lib/sanity/queries";
import { GoChevronRight } from "react-icons/go";
import { urlFor } from "@/lib/sanity/image";

export default async function Page() {
  const careers: CareersType | null = await getCareersData();

  return (
    <main>
      {/* Card Blog */}
      <div className="max-w-340 px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        {/* Title */}
        <div className="relative flex w-full flex-col items-center justify-center pt-32 sm:pt-40 pb-32">
          <h1 className="relative text-4xl lg:text-5xl uppercase leading-tight opacity-70">
            {careers?.title}
          </h1>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            {careers?.description}
          </p>
        </div>
        {/* End Title */}
        {!careers?.jobCards || careers.jobCards.length === 0 ? (
          <div className="text-center py-20">
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careers.jobCards.map(
                      ({ title, description, url, image }, i) => (
                        // Card
                        <Link
                          className="group bg-gray-200/70 hover:bg-gray-300/70 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition dark:bg-white/5 dark:hover:bg-white/20 dark:focus:bg-white/10"
                          href={url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="aspect-16/10">
                            <Image
                              className="size-full object-cover rounded-xl"
                              width={400}
                              height={250}
                              src={urlFor(image).width(400).height(250).url()}
                              alt={title}
                            />
                          </div>
                          <span className="block mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            {title}
                          </span>

                          <p>{description}</p>
                          <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Read more
                            <GoChevronRight className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:-translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-focus:translate-x-1 rtl:rotate-180" />
                          </div>
                        </Link>
                        // End Card
                      )
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
