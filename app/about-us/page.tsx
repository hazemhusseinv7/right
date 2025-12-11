import { urlFor } from "@/lib/sanity/image";
import { getAboutData } from "@/lib/sanity/queries";
import AboutUs from "./AboutUs";
import Values from "@/components/Values";
import Industries from "@/components/Industries";

export default async function Page() {
  const aboutUs: AboutUsType | null = await getAboutData();

  const img = urlFor(aboutUs?.heroImage).url();

  return (
    <main className="bg-linear-to-t from-emerald-50 pt-11">
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="flex h-80 flex-col rounded-2xl bg-cover bg-center bg-no-repeat md:h-[80dvh]"
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

      <div className="-mt-20">
        <Values />
      </div>

      <Industries />
    </main>
  );
}
