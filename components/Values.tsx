import Image from "next/image";
import { getValuesData } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const Values = async () => {
  const data: ValuesType | null = await getValuesData();

  const values = data?.cards;

  if (!data || !values) return;

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-350 space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2 className="text-primary-green text-5xl font-semibold text-balance lg:text-7xl">
            {data.title}
          </h2>
          <p className="text-primary-blue">{data.description}</p>
        </div>

        <div className="relative mx-auto grid divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, description, icon }, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src={urlFor(icon).url()}
                  width={1000}
                  height={1000}
                  alt={title}
                  className="size-5"
                />
                <h3 className="text-sm font-medium">{title}</h3>
              </div>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
