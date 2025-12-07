import Link from "next/link";

const ButtonHoverMultiple = ({
  link,
  children,
}: {
  link: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <Link href={link} className="group relative">
        <div
          className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
        bg-linear-to-r dark:from-[#070e41] dark:to-[#263381] from-primary-blue to-primary-blue/90 group-hover:from-primary-blue group-hover:to-primary-blue/90 dark:border-[rgb(76_100_255)] border-2 border-primary-blue shadow-2xl shadow-primary-blue
         bg-transparent px-10 font-medium dark:text-white text-white  transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3"
        >
          {children}
        </div>
        <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#24456f,10px_10px_#284e7e,15px_15px_#2d578c]" />
      </Link>
    </>
  );
};

export default ButtonHoverMultiple;
