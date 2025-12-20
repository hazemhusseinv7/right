import Image from "next/image";

import { getTeamData } from "@/lib/sanity/queries";
import { FaUserCheck } from "react-icons/fa6";
import { urlFor } from "@/lib/sanity/image";
import { TextEffect } from "./ui/text-effect";

const Team = async () => {
  const data: TeamType | null = await getTeamData();

  const team = data?.teamMembers;

  if (!data || !team) return;

  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex w-full flex-col items-center justify-center">
          {data?.title && (
            <TextEffect
              per="word"
              preset="blur"
              as="h1"
              speedReveal={0.3}
              speedSegment={0.3}
              className="text-primary-green relative text-4xl leading-tight uppercase opacity-70 lg:text-5xl"
            >
              {data.title}
            </TextEffect>
          )}
          {data?.description && (
            <TextEffect
              per="word"
              preset="blur"
              speedReveal={0.8}
              speedSegment={0.8}
              className="mt-1 text-gray-600 dark:text-neutral-400"
            >
              {data.description}
            </TextEffect>
          )}
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(({ name, role, image }, index) => (
              <div key={index} className="group overflow-hidden">
                {image ? (
                  <Image
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-90 group-hover:rounded-xl hover:grayscale-0"
                    src={urlFor(image).url()}
                    alt={name}
                    width={826}
                    height={1239}
                  />
                ) : (
                  <div className="flex h-96 items-center justify-center rounded-md bg-gray-200 transition-all duration-500 group-hover:h-90 group-hover:rounded-xl">
                    <FaUserCheck className="hover:text-primary-green size-64 text-slate-900 transition-all duration-500 group-hover:size-58" />
                  </div>
                )}

                <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                  <div className="flex justify-between">
                    <h3 className="group-hover:text-primary-green text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block text-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-6 lg:opacity-0">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
