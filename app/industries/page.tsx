import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaConciergeBell, FaHeartbeat } from "react-icons/fa";
import {
  FaChartLine,
  FaGraduationCap,
  FaHelmetSafety,
  FaLandmark,
  FaWater,
} from "react-icons/fa6";
import { RiOilFill } from "react-icons/ri";

export default function Page() {
  const industries = [
    {
      title: "Energy, Oil, Gas & Petrochemicals",
      description:
        "Advanced network systems, cybersecurity, OT/IT integration and industrial equipment to enhance safety and operational efficiency",
      icon: RiOilFill,
    },
    {
      title: "Environment & Utilities",
      description:
        "Reliable IT systems, monitoring solutions, and industrial hardware for stable, compliant, and efficient services.",
      icon: FaWater,
    },
    {
      title: "Construction & Engineering",
      description:
        "We provide reliable IT infrastructure, on site technical support, and essential industrial tools that keeps projects running smoothly.",
      icon: FaHelmetSafety,
    },
    {
      title: "Government & Public Sector",
      description:
        "Secure IT environmental, data center solutions, and digital transformation services built to met national standards.",
      icon: FaLandmark,
    },
    {
      title: "Hospitality & Tourism",
      description:
        "Fast, secure IT systems, guest experience technologies, and responsive technical support for seamless operations.",
      icon: FaConciergeBell,
    },
    {
      title: "Finance & Investment",
      description:
        "Highsecurity infrastructure, Cybersecurity services, and cloud solutions tailored for mission critical financial operations.",
      icon: FaChartLine,
    },
    {
      title: "Education",
      description:
        "Digital learning tools, strong network infrastructure, and managed services that modernize and support academic environments.",
      icon: FaGraduationCap,
    },
    {
      title: "Healthcare",
      description:
        "Protected networks, cloud systems, and technical support that ensure confidentiality and smooth clinical operations.",
      icon: FaHeartbeat,
    },
  ];

  return (
    <main>
      <section className="bg-zinc-50 py-28 md:py-32 dark:bg-transparent">
        <div className="@container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold lg:text-5xl text-primary-blue">
              Industries
            </h1>
            {/* <p className="mt-4"></p> */}
          </div>
          <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
            {industries.map(({ title, description, icon: Icon }, i) => (
              <div key={i} className="group shadow-zinc-950/5">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6 text-primary-green" aria-hidden />
                  </CardDecorator>

                  <h3 className="mt-6 font-medium text-primary-blue">
                    {title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm">{description}</p>
                </CardContent>
              </div>
            ))}
          </Card>
        </div>
      </section>
    </main>
  );
}
const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
