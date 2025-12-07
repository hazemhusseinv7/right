import Image from "next/image";

import { urlFor } from "@/lib/sanity/image";
import { getAboutData } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import AboutUsCards from "./AboutUsCards";

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="rounded-lg mx-auto"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};
export default async function Page() {
  const aboutUs: AboutUsType | null = await getAboutData();

  const img = urlFor(aboutUs?.heroImage).url();

  return (
    <main className="bg-linear-to-t from-emerald-50">
      <div className="px-4 sm:px-6 lg:px-8 py-24">
        <div
          className="h-80 md:h-[80dvh] flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white">
              {aboutUs?.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-20 flex flex-col gap-8">
        <div className="space-y-2 text-emerald-950">
          <h2 className="font-semibold text-2xl">{aboutUs?.heading}</h2>
          <p className="text-xl">{aboutUs?.subheading}</p>
        </div>

        <article className="space-y-4 w-[85%]">
          <PortableText
            value={aboutUs?.content}
            components={portableTextComponents}
          />
        </article>
      </div>

      <AboutUsCards />
    </main>
  );
}
