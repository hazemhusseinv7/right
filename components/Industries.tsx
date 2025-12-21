import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getIndustriesData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import DecorativeBackground from "./DecorativeBackground";

const Industries = async () => {
  const data: IndustriesType | null = await getIndustriesData();

  const industries = data?.cards;

  if (!data || !industries) return;

  return (
    <section
      id="industries"
      className="relative z-200 py-28 md:py-32 dark:bg-transparent"
    >
      <div className="@container relative z-10 mx-auto max-w-350 px-6">
        <div className="text-center">
          <h2 className="text-primary-green text-4xl font-semibold text-balance lg:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4">{data.description}</p>
        </div>
        <Card className="mx-auto mt-8 grid max-w-sm divide-y overflow-hidden rounded-none shadow-zinc-950/5 *:text-center md:mt-16 @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0">
          {industries.map(({ title, description, icon }, i) => (
            <div key={i} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Image
                    src={urlFor(icon).url()}
                    width={1000}
                    height={1000}
                    alt={title}
                    className="size-5"
                  />
                </CardDecorator>

                <h3 className="text-primary-blue mt-6 font-medium">{title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{description}</p>
              </CardContent>
            </div>
          ))}
        </Card>
      </div>

      <DecorativeBackground />
    </section>
  );
};

export default Industries;

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto size-36 mask-radial-from-40% mask-radial-to-60% duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);
