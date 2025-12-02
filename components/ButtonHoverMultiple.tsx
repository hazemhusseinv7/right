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
        bg-linear-to-r dark:from-[#070e41] dark:to-[#263381] from-emerald-800 to-emerald-500 group-hover:from-emerald-900 group-hover:to-emerald-700 dark:border-[rgb(76_100_255)] border-2 border-emerald-700 shadow-2xl shadow-emerald-950
         bg-transparent px-10 font-medium dark:text-white text-white  transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3"
        >
          {children}
        </div>
        <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:[box-shadow:5px_5px_oklch(50.8%_0.118_165.612),10px_10px_oklch(59.6%_0.145_163.225),15px_15px_oklch(69.6%_0.17_162.48)]" />
      </Link>
    </>
  );
};

export default ButtonHoverMultiple;
