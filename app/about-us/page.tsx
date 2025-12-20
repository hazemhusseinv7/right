import { urlFor } from "@/lib/sanity/image";
import { getAboutData, getValuesData } from "@/lib/sanity/queries";
import AboutUs from "./AboutUs";
import Values from "@/components/Values";
import Industries from "@/components/Industries";
import Timeline3D, {
  TimelineEvent,
} from "@/components/3d-interactive-timeline";
import { FaLightbulb } from "react-icons/fa6";
import { BiSolidAward } from "react-icons/bi";

export default async function Page() {
  const [aboutUs, values] = await Promise.all([
    getAboutData(),
    getValuesData(),
  ]);

  const img = urlFor(aboutUs?.heroImage).url();

  const timelineEvents: TimelineEvent[] = [
    {
      id: "1",
      title: aboutUs?.ourVision.title,
      description: aboutUs?.ourVision.description,
      icon: <FaLightbulb className="size-5 text-white" />,
      image: aboutUs?.ourVision.image,
    },
    {
      id: "2",
      title: aboutUs?.ourMission.title,
      description: aboutUs?.ourMission.description,
      icon: <BiSolidAward className="size-5 text-white" />,
      image: aboutUs?.ourMission.image,
    },
  ];

  return (
    <main className="bg-linear-to-t from-emerald-50 pt-11">
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="flex h-80 flex-col rounded-sm bg-cover bg-center bg-no-repeat md:h-[80dvh]"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="mt-auto w-2/3 ps-5 pb-5 md:max-w-lg md:ps-10 md:pb-10">
            <h1 className="text-xl text-white md:text-3xl lg:text-5xl">
              {aboutUs?.title}
            </h1>
          </div>
        </div>
      </div>

      <AboutUs aboutUs={aboutUs} />

      <Timeline3D events={timelineEvents} />

      <Values values={values} />

      <Industries />
    </main>
  );
}
