import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa6";

const AboutUsCards = () => {
  return (
    <section className="pt-16">
      <div className="@container mx-auto max-w-5xl px-6">
        {/* <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl"></h2>
          <p className="mt-4"></p>
        </div> */}
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          <Card className="group border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <FaLightbulb className="size-6 text-emerald-950" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium text-2xl text-emerald-950">
                Our Vision
              </h3>
            </CardHeader>

            <CardContent>
              <p className="text-emerald-950">
                Empowering our clients with innovative IT & Industrial
                solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none bg-transparent">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BsFillClipboard2CheckFill
                  className="size-6 text-emerald-950"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium text-2xl text-emerald-950">Our Mission</h3>
            </CardHeader>

            <CardContent>
              <p className="text-emerald-950">
                Delivering advanced solutions that optimize business
                performance, build enduring partnerships, and empower
                organizations to thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCards;

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-emerald-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-emerald-200)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
    />

    <div className="bg-emerald-100/70 absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
