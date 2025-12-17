import ButtonHoverMultiple from "@/components/ButtonHoverMultiple";
import NewItemsLoading from "@/components/new-items-loading";
import WordAnimator from "@/components/word-animator";
import Partners from "@/components/Partners";

const Hero = ({
  hero,
  partners,
}: {
  hero: HeroType | null;
  partners: PartnersType | null;
}) => {
  const buttonData = hero?.button;
  const headingData = hero?.heading;
  const description = hero?.description;
  const ctaButton = hero?.ctaButton;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-linear-to-b bg-[url('/background.webp')] from-blue-50 bg-cover bg-center bg-no-repeat"
    >
      <div className="relative z-2 grid px-4 pt-32 pb-14 sm:px-0 lg:pt-56 lg:pb-24">
        <NewItemsLoading data={buttonData} />
        <h1 className="text-primary-blue text-center text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl dark:text-white">
          <span className="relative mt-4 flex translate-x-0 justify-center gap-2 max-lg:flex-col lg:mt-8">
            <div className="flex translate-x-0 justify-center gap-2">
              {headingData?.firstWord}{" "}
              {headingData?.rotatingWords && (
                <WordAnimator
                  words={headingData.rotatingWords}
                  duration={5}
                  className="w-fit border-neutral-200 bg-gray-200 pr-3 italic dark:border-neutral-800 dark:bg-gray-800"
                />
              )}{" "}
            </div>
            <span>
              {headingData?.lastWord}{" "}
              <strong className="text-primary-green font-semibold uppercase">
                {headingData?.highlightedWord.text}
              </strong>
            </span>
          </span>
        </h1>
        <p className="text-primary-blue mx-auto mt-5 text-center text-sm sm:w-[80%] sm:text-lg lg:w-[700px] dark:text-white">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <ButtonHoverMultiple link={ctaButton?.link || "#"}>
            {ctaButton?.text}
          </ButtonHoverMultiple>
        </div>
      </div>

      <Partners className="relative z-10 mt-4 py-0! lg:mt-20" data={partners} />
    </section>
  );
};

export default Hero;
