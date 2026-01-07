import Image from "next/image";

import { YouTubeEmbed } from "@next/third-parties/google";
import { PortableText } from "@portabletext/react";
import { getURAiData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

import ButtonHoverMultiple from "@/components/ButtonHoverMultiple";
import DecorativeBackground from "@/components/DecorativeBackground";
import Aurora from "@/components/Aurora";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { FaCheck } from "react-icons/fa6";

const getVideoId = (url: string) => {
  if (!url) return null;

  const urlObj = new URL(url);

  if (url.includes("youtube.com/watch")) {
    return urlObj.searchParams.get("v");
  }

  if (url.includes("youtu.be/")) {
    return urlObj.pathname.split("/").pop();
  }

  if (url.includes("youtube.com/embed")) {
    return urlObj.pathname.split("/").pop();
  }

  return null;
};

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
            className="mx-auto rounded-lg"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function Page() {
  const data: URAiType | null = await getURAiData();

  if (!data) return;

  const {
    hero,
    about,
    whatMakesItDifferent,
    howItWorks,
    securityTrust,
    whoCanBenefit,
    cta,
  } = data;

  const videoUrl = hero.videoUrl;

  const videoId = videoUrl ? getVideoId(videoUrl) : null;

  return (
    <main className="relative overflow-hidden pt-12">
      <section className="relative py-24 md:py-32">
        <Aurora
          props={{
            colorStops: ["#66bc46", "#66bc46", "#155dfc"],
            blend: 0.5,
            amplitude: 1.0,
            speed: 0.5,
          }}
        />

        <div className="mx-auto max-w-5xl px-6">
          <Image
            src={urlFor(hero.image).url()}
            className="relative z-10 mx-auto h-auto w-80 xl:w-100"
            alt="Logo"
            width={1207}
            height={929}
          />

          <div className="relative z-20 mx-auto mt-12 max-w-210 space-y-6 text-center">
            {/* <h1 className="text-primary-green text-3xl font-semibold text-balance md:text-4xl xl:text-7xl">
              UR AI
            </h1> */}
            <h1>
              <p className="text-muted-foreground xl:text-3xl">
                {hero.description}
              </p>
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2">
              <ButtonHoverMultiple link={hero.buttonLink}>
                {hero.buttonTitle}
              </ButtonHoverMultiple>
            </div>
          </div>
          {videoId && (
            <div className="mx-auto mt-8 overflow-hidden rounded-2xl md:w-180 2xl:mt-70 2xl:scale-180">
              <YouTubeEmbed videoid={videoId} />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-primary-blue relative z-10 max-w-xl text-4xl font-medium lg:text-5xl xl:text-7xl">
            {about.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="from-primary-green/10 relative aspect-76/59 rounded-2xl bg-linear-to-b to-transparent p-px dark:from-zinc-700">
                <Image
                  src={urlFor(about.image).url()}
                  className="rounded-[15px] p-4"
                  alt="Logo"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="text-muted-foreground">
                <PortableText
                  value={about.description1}
                  components={portableTextComponents}
                />
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <div>
                    <PortableText
                      value={about.description2}
                      components={portableTextComponents}
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <img
                      className="h-20 w-fit dark:invert"
                      src="/logo/logo.png"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative z-10 py-24 md:py-32">
          <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-3 md:gap-24">
            <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
              <div className="space-y-6">
                <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl xl:text-7xl">
                  {whatMakesItDifferent.title}
                </h2>
                {whatMakesItDifferent.description && (
                  <p className="text-muted-foreground">
                    {whatMakesItDifferent.description}
                  </p>
                )}
              </div>
            </div>

            <div className="-mx-6 mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-2xl md:col-span-2 md:-mx-6 md:mr-0 md:ml-auto">
              <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                <div className="grid grid-cols-2 gap-2">
                  {whatMakesItDifferent.cards.map(
                    ({ title, description, icon }, i) => (
                      <Integration
                        key={i}
                        icon={icon}
                        name={title}
                        description={description}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DecorativeBackground />
      </section>

      <section>
        <div className="bg-primary-green/10 dark:bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto mb-14 max-w-lg space-y-6 text-center">
              <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl xl:text-7xl">
                {howItWorks.title}
              </h2>
              {howItWorks.description && (
                <p className="text-muted-foreground">
                  {howItWorks.description}
                </p>
              )}

              {/* <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button> */}
            </div>

            <div className="mx-auto max-w-2xl mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6">
              <div className="bg-background dark:bg-muted/50 rounded-xl border px-6 pt-3 pb-12 shadow-xl">
                {howItWorks.cards.map(({ title, description, icon }, i) => (
                  <IntegrationItem
                    key={i}
                    icon={icon}
                    name={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="dark:bg-background pt-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
              <h2 className="text-primary-blue text-3xl font-semibold text-balance md:text-4xl lg:text-5xl xl:text-7xl">
                {securityTrust.title}
              </h2>
              {securityTrust.description && (
                <p className="text-muted-foreground">
                  {securityTrust.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 max-md:flex-col xl:gap-10">
          <div className="flex max-w-sm flex-col gap-4 py-10">
            {securityTrust.cards.map(({ title, description, icon }, i) => (
              <IntegrationCard key={i} title={title} description={description}>
                <Image
                  src={urlFor(icon).url()}
                  width={32}
                  height={32}
                  alt={title}
                  className="size-8"
                />
              </IntegrationCard>
            ))}
          </div>

          <div className="flex items-end">
            <Image
              src={urlFor(securityTrust.image).url()}
              width={200}
              height={200}
              alt="Image"
              className="size-80 md:size-140"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 py-28 md:py-32 dark:bg-transparent">
        <div className="@container relative z-10 mx-auto max-w-350 px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-primary-green text-4xl font-semibold text-balance lg:text-5xl xl:text-7xl">
              {whoCanBenefit.title}
            </h2>

            {whoCanBenefit.description && (
              <p className="text-muted-foreground">
                {whoCanBenefit.description}
              </p>
            )}
          </div>

          <Card className="mx-auto mt-8 grid max-w-sm divide-y overflow-hidden rounded-2xl shadow-zinc-950/5 *:text-center md:mt-16 @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0">
            {whoCanBenefit.cards.map(
              ({ title, description, icon: Icon }, i) => (
                <div key={i} className="group shadow-zinc-950/5">
                  <CardHeader className="pb-3">
                    {/* <CardDecorator>
                    <Image
                      src={urlFor(icon).url()}
                      width={1000}
                      height={1000}
                      alt={title}
                      className="size-5"
                    />
                  </CardDecorator> */}

                    <CardDecorator>
                      <Image
                        src={urlFor(Icon).url()}
                        width={28}
                        height={28}
                        alt="Image"
                        className="size-7"
                      />
                    </CardDecorator>

                    <h3 className="text-primary-blue mt-6 font-medium">
                      {title}
                    </h3>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm">{description}</p>
                  </CardContent>
                </div>
              ),
            )}
          </Card>
        </div>

        <DecorativeBackground />
      </section>

      <section className="relative min-h-180">
        <div className="relative z-10 px-4 py-32">
          <div className="container mx-auto">
            <div className="from-accent/40 to-accent/70 mx-auto flex w-full max-w-5xl flex-col items-center gap-16 overflow-hidden rounded-lg bg-linear-to-tr p-8 md:rounded-xl lg:p-12">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-primary-blue mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  {cta.title}
                </h2>
                <p className="text-muted-foreground max-w-xl lg:text-lg">
                  {cta.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <ButtonHoverMultiple link={cta.buttonLink}>
                  {cta.buttonTitle}
                </ButtonHoverMultiple>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Aurora
            props={{
              colorStops: ["#66bc46", "#66bc46", "#155dfc"],
              blend: 0.5,
              amplitude: 1.0,
              speed: 0.5,
            }}
            className="top-0! rotate-180"
          />
        </div>
      </section>
    </main>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: ImageType;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">
        <Image
          src={urlFor(icon).url()}
          className="size-8"
          alt={name}
          width={32}
          height={32}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 min-h-24 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const IntegrationItem = ({
  icon,
  name,
  description,
}: {
  icon: ImageType;
  name: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        <Image
          src={urlFor(icon).url()}
          className="size-6"
          alt={name}
          width={24}
          height={24}
        />
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <Button variant="outline" size="icon" aria-label="Add integration">
        <FaCheck className="text-primary-green size-4" />
      </Button>
    </div>
  );
};

const IntegrationCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-6 shadow-2xl">
      <div className="relative">
        <div className="space-y-2 py-2">
          <div className="flex items-center gap-3">
            <div className="*:size-8">{children}</div>
            <h3 className="text-base font-medium">{title}</h3>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

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
