import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { getMilestonesData } from "@/lib/sanity/queries";
import { Check, LoaderCircleIcon } from "lucide-react";

const Milestones = async () => {
  const data: MilestonesType | null = await getMilestonesData();

  const milestones = data?.milestones
    ? [
        ...data?.milestones,
        {
          year: new Date().getFullYear().toString(),
          title: "Ongoing",
          _key: "ongoing",
        },
      ]
    : [];

  if (!data) return;

  return (
    <section className="px-4 py-12 md:py-20">
      <div className="relative z-10 mx-auto mb-10 max-w-xl space-y-6 text-center md:space-y-12">
        <h2 className="text-primary-green text-5xl font-semibold text-balance lg:text-7xl">
          {data.title}
        </h2>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Stepper
          className="flex flex-col items-center justify-center gap-10"
          value={milestones.length}
          orientation="vertical"
          indicators={{
            completed: <Check className="size-4" />,
            loading: <LoaderCircleIcon className="size-4 animate-spin" />,
          }}
        >
          <StepperNav>
            {milestones.map((step, index) => (
              <StepperItem
                key={index}
                step={index + 1}
                loading={index === 2}
                className="relative items-start not-last:flex-1"
              >
                <StepperTrigger className="items-start gap-2.5 pb-12 last:pb-0">
                  <StepperIndicator className="bg-primary-blue! data-[state=completed]:bg-primary-green! data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:text-white data-[state=inactive]:text-gray-500">
                    {index + 1}
                  </StepperIndicator>
                  <div className="mt-0.5 space-y-2 text-left">
                    <StepperTitle>{step.title}</StepperTitle>
                    <StepperDescription>{step.year}</StepperDescription>
                  </div>
                </StepperTrigger>
                {index < milestones.length - 1 && (
                  <StepperSeparator className="group-data-[state=completed]/step:bg-primary-green absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)]" />
                )}
              </StepperItem>
            ))}
          </StepperNav>
        </Stepper>
      </div>

      <Stepper
        value={milestones.length}
        indicators={{
          completed: <Check className="size-4" />,
          loading: <LoaderCircleIcon className="size-4 animate-spin" />,
        }}
        className="mx-auto max-w-7xl space-y-8 max-lg:hidden"
      >
        <StepperNav className="mb-15 gap-3">
          {milestones.map((step, index) => {
            return (
              <StepperItem
                key={index}
                step={index + 1}
                className="relative flex items-start"
              >
                <StepperTrigger
                  className="flex grow flex-col items-start justify-center gap-2.5"
                  asChild
                >
                  <StepperIndicator className="bg-primary-blue! data-[state=completed]:bg-primary-green! data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground size-8 border-2 data-[state=completed]:text-white data-[state=inactive]:bg-transparent">
                    <LoaderCircleIcon className="size-4 animate-spin" />
                  </StepperIndicator>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-muted-foreground text-[10px] font-semibold uppercase">
                      {step.year}
                    </div>
                    <StepperTitle className="text-primary-blue group-data-[state=inactive]/step:text-muted-foreground text-start text-base font-semibold">
                      {step.title}
                    </StepperTitle>
                  </div>
                </StepperTrigger>
                {milestones.length > index + 1 && (
                  <StepperSeparator className="group-data-[state=completed]/step:bg-primary-green absolute inset-x-0 start-9 top-4 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
                )}
              </StepperItem>
            );
          })}
        </StepperNav>
      </Stepper>
    </section>
  );
};

export default Milestones;
