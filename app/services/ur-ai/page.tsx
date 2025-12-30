import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonHoverMultiple from "@/components/ButtonHoverMultiple";
import {
  HiDocumentCheck,
  HiDocumentMagnifyingGlass,
  HiMiniDocumentArrowUp,
  HiMiniDocumentChartBar,
  HiMiniDocumentPlus,
  HiMiniDocumentText,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
 import {
  HiShieldCheck,
  HiCog,
  HiServer,
  HiArrowTrendingUp,
} from "react-icons/hi2";
import { Plus } from "lucide-react";
import {
  HiMagnifyingGlass,
  HiOutlineLightBulb,
  HiWrenchScrewdriver,
  HiArrowPath,
} from "react-icons/hi2";

export default function Page() {
  return (
    <main className="relative overflow-hidden py-24">
      <section className="py-24 md:py-32 2xl:scale-140 2xl:py-52 z-10 relative">
        <div className="mx-auto max-w-5xl px-6">
          <div className="group relative mx-auto flex aspect-16/10 max-w-88 items-center justify-between sm:max-w-sm">
            <div
              role="presentation"
              className="border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t bg-linear-to-b from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
            />
            <div
              role="presentation"
              className="border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t bg-linear-to-b from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
            />
            <div className="from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t bg-linear-to-b to-transparent to-25%">
              <IntegrationCard className="absolute top-1/4 left-0 -translate-x-1/6 -translate-y-1/4">
                <HiDocumentMagnifyingGlass className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <HiDocumentCheck className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 right-0 translate-x-1/6 -translate-y-1/4">
                <HiMiniDocumentText className="text-primary-green" />
              </IntegrationCard>
            </div>
            <div className="from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t bg-linear-to-b to-transparent to-25%">
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <HiMiniDocumentPlus className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 left-0 -translate-x-1/4 -translate-y-1/4">
                <HiMiniDocumentChartBar className="text-primary-green" />
              </IntegrationCard>
              <IntegrationCard className="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/4">
                <HiMiniDocumentArrowUp className="text-primary-green" />
              </IntegrationCard>
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-full border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
                  isCenter={true}
                >
                  <Image
                    src="/services/ur-ai/icon.png"
                    width={32}
                    height={32}
                    alt="Logo"
                    className="size-8"
                  />
                </IntegrationCard>
              </div>
            </div>
          </div>
          <div className="from-background relative z-20 mx-auto mt-12 max-w-lg space-y-6 bg-linear-to-t from-55% text-center">
            <h1 className="text-primary-green text-3xl font-semibold text-balance md:text-4xl">
              UR AI
            </h1>
            <div>
              <p className="text-muted-foreground">
                Ready to see what Ur AI can do for your business?
              </p>
              <p className="text-muted-foreground">
                Explore how it can be tailored to your business&apos;s need.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <ButtonHoverMultiple link="/contact">
                Get Started
              </ButtonHoverMultiple>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 2xl:scale-140 2xl:py-52">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-primary-blue relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            What Ur AI?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="from-primary-green/10 relative aspect-76/59 rounded-2xl bg-linear-to-b to-transparent p-px dark:from-zinc-700">
                <Image
                  src="/services/ur-ai/icon.png"
                  className="rounded-[15px] p-4"
                  alt="Logo"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                The next generation of <strong>On-Premise & Private</strong> AI
                that is crafted to accelerate your AI adoption, transforming
                your business with tailored unique AI strategy planning.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>
                    Ur AI is designed around your workflows, your data, and your
                    goals — not generic assumptions. It integrates securely into
                    your existing systems, keeps your data protected and under
                    your control, and delivers intelligence that truly
                    understands how your business operates.
                  </p>

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

      <section className="2xl:scale-140 2xl:py-52">
        <div className="bg-muted dark:bg-background py-24 md:py-32">
          <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
            <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                  What Makes Ur AI Different?
                </h2>
                <p className="text-muted-foreground">
                  Unlike generic AI tools, Ur AI is built around your data, your
                  systems, and your goals.
                </p>
              </div>
            </div>

            <div className="-mx-6 mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:mr-0 md:ml-auto">
              <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                <div className="grid grid-cols-2 gap-2">
                  <Integration
                    icon={<HiShieldCheck className="text-primary-green" />}
                    name="Full Data Sovereignty:"
                    description="On-premise deployment ensuring strict compliance with SDAIA, SAMA, NCA, and ISO 27001
security standards."
                  />
                  <Integration
                    icon={<HiCog className="text-primary-green" />}
                    name="Tailored Integration:"
                    description="Fine-tuned on your data with seamless ERP integration and ethical filters aligned with Saudi
values and company policy."
                  />
                  <Integration
                    icon={<HiServer className="text-primary-green" />}
                    name="Offline Power:"
                    description="Local GPU processing for low-latency, cloud-free operation—perfect for secure edge locations and
industrial sites."
                  />
                  <Integration
                    icon={<HiArrowTrendingUp className="text-primary-green" />}
                    name="Future-Proof Independence:"
                    description="Scalable hardware and models that ensure resilience, data ownership, and alignment
with Vision 2030 goals."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:scale-140 2xl:py-52">
        <div className="bg-muted dark:bg-background py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6">
              <div className="bg-background dark:bg-muted/50 rounded-xl border px-6 pt-3 pb-12 shadow-xl">
                <IntegrationItem
                  icon={<HiMagnifyingGlass className="text-primary-green" />}
                  name="Understand"
                  description="We analyze your business processes, data, and objectives"
                />
                <IntegrationItem
                  icon={<HiOutlineLightBulb className="text-primary-green" />}
                  name="Design"
                  description="We architect an AI solution tailored to your environment"
                />
                <IntegrationItem
                  icon={<HiWrenchScrewdriver className="text-primary-green" />}
                  name="Build & Integrate"
                  description="We deploy securely into your systems"
                />
                <IntegrationItem
                  icon={<HiArrowPath className="text-primary-green" />}
                  name="Optimize"
                  description="Continuous monitoring, learning, and improvement"
                />
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                How It Works?
              </h2>
              {/* <p className="text-muted-foreground"></p> */}

              {/* <Button variant="outline" size="sm" asChild>
                <Link href="#">Get Started</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className,
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 min-h-40 text-sm md:line-clamp-2">
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
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <Button variant="outline" size="icon" aria-label="Add integration">
        <Plus className="size-4" />
      </Button>
    </div>
  );
};
