import Image from "next/image";

import { urlFor } from "@/lib/sanity/image";
import { getAboutData } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";

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

        <div className="py-20">
          <div className="text-3xl leading-[110%]! font-semibold text-primary-green mb-8">
            {aboutUs?.certificateTitle}
          </div>
          <p className="text-lg leading-[170%]! font-semibold text-primary-blue dark:text-gray-300 mb-8 max-w-3xl">
            {aboutUs?.certificateDescription}
          </p>

          <div className="flex gap-10">
            {aboutUs?.certificateImages.map((img, i) => (
              <Image
                key={i}
                src={urlFor(img).url()}
                width={128}
                height={128}
                alt="Certificate Badge"
                className="size-32 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-340 py-40 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h3 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Our Vision
            </h3>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Empowering our clients with innovative IT & Industrial solutions.
            </p>
          </div>
          {/* End Col */}

          <div className="relative md:ms-4">
            <Image
              src={img}
              width={1000}
              height={1000}
              alt="Our Vision"
              className="w-full rounded-md"
            />

            <div className="absolute inset-0 -z-1 bg-linear-to-tr from-primary-green/40 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />

            {/* SVG*/}
            <div className="absolute bottom-0 start-0 rounded-md overflow-hidden">
              <svg
                className="w-2/3 ms-auto h-auto text-primary-green dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="relative md:ms-4">
            <Image
              src={img}
              width={1000}
              height={1000}
              alt="Our Vision"
              className="w-full rounded-md"
            />

            <div className="absolute inset-0 -z-1 bg-linear-to-tr from-primary-green/40 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />

            {/* SVG*/}
            <div className="absolute bottom-0 start-0 rounded-md overflow-hidden">
              <svg
                className="w-2/3 ms-auto h-auto text-primary-green dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}

          <div>
            <h3 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Delivering advanced solutions that optimize business performance,
              build enduring partnerships, and empower organizations to thrive.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </main>
  );
}
