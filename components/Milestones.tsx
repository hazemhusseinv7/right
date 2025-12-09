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
import { Check, LoaderCircleIcon } from "lucide-react";

const Milestones = () => {
  const steps = [
    { year: 1995, title: "Established in Yanbu Al Bahar" },
    { year: 2015, title: "ISO Certified" },
    { year: new Date().getFullYear(), title: "Ongoing" },
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12 mb-10">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl text-primary-blue">
          Milestones
        </h2>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Stepper
          className="flex flex-col items-center justify-center gap-10"
          value={steps.length}
          orientation="vertical"
          indicators={{
            completed: <Check className="size-4" />,
            loading: <LoaderCircleIcon className="size-4 animate-spin" />,
          }}
        >
          <StepperNav>
            {steps.map((step, index) => (
              <StepperItem
                key={index}
                step={index + 1}
                loading={index === 2}
                className="relative items-start not-last:flex-1"
              >
                <StepperTrigger className="items-start pb-12 last:pb-0 gap-2.5">
                  <StepperIndicator className="bg-primary-blue! data-[state=completed]:bg-primary-green! data-[state=completed]:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-500">
                    {index + 1}
                  </StepperIndicator>
                  <div className="mt-0.5 text-left space-y-2">
                    <StepperTitle>{step.title}</StepperTitle>
                    <StepperDescription>{step.year}</StepperDescription>
                  </div>
                </StepperTrigger>
                {index < steps.length - 1 && (
                  <StepperSeparator className="absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)] group-data-[state=completed]/step:bg-primary-green" />
                )}
              </StepperItem>
            ))}
          </StepperNav>
        </Stepper>
      </div>

      <Stepper
        value={steps.length}
        indicators={{
          completed: <Check className="size-4" />,
          loading: <LoaderCircleIcon className="size-4 animate-spin" />,
        }}
        className="space-y-8 max-w-7xl mx-auto max-lg:hidden"
      >
        <StepperNav className="gap-3 mb-15">
          {steps.map((step, index) => {
            return (
              <StepperItem
                key={index}
                step={index + 1}
                className="relative flex items-start"
              >
                <StepperTrigger
                  className="flex flex-col items-start justify-center gap-2.5 grow"
                  asChild
                >
                  <StepperIndicator className="size-8 bg-primary-blue! border-2 data-[state=completed]:text-white data-[state=completed]:bg-primary-green! data-[state=inactive]:bg-transparent data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground">
                    <LoaderCircleIcon className="size-4 animate-spin" />
                  </StepperIndicator>
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-[10px] font-semibold uppercase text-muted-foreground">
                      {step.year}
                    </div>
                    <StepperTitle className="text-primary-blue text-start text-base font-semibold group-data-[state=inactive]/step:text-muted-foreground">
                      {step.title}
                    </StepperTitle>
                  </div>
                </StepperTrigger>
                {steps.length > index + 1 && (
                  <StepperSeparator className="absolute top-4 inset-x-0 start-9 m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none  group-data-[state=completed]/step:bg-primary-green" />
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
