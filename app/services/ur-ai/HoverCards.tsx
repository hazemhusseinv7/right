"use client";

import { useState, useEffect, useRef } from "react";

export default function HoverCards({
  data,
}: {
  data: {
    title: HighlightedTitle;
    cards: {
      _key?: string;
      content: string;
    }[];
  };
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = data.cards;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-200 w-full items-center overflow-hidden py-32"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 bg-[#0d1124]"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          background:
            "radial-gradient(circle at 20% 50%, #2a4e7a 0%, #0d1124 70%, #142844 100%)",
        }}
      >
        <div className="relative z-200 size-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-[#1e2a78] opacity-40 blur-[140px] duration-[8s]" />
            <div className="absolute -right-[10%] -bottom-[20%] h-[60%] w-[60%] rounded-full bg-[#66bc46] opacity-[0.5] blur-[120px]" />
            <div className="absolute top-[30%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#0ea5e9] opacity-[0.5] blur-[100px]" />
            <div className="size-full -rotate-3 bg-[url('/img.svg')] bg-cover bg-center bg-no-repeat opacity-1" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex flex-col items-center gap-24 px-6">
        <div className="md:pr-10">
          <h2 className="text-3xl font-extralight tracking-tighter text-white md:text-4xl xl:text-7xl">
            {data.title.text}{" "}
            <span className="relative mt-2 block font-black tracking-tighter text-[#66bc46] uppercase italic">
              {data.title.highlight}
              {/* Neon Glow Layer */}
              <span className="absolute inset-0 -z-10 text-[#66bc46] opacity-40 blur-xl select-none">
                {data.title.highlight}
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-4">
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-0 transition-all duration-500 ${isHovered ? "translate-x-4" : ""}`}
              >
                {/* CLAMPING CORNERS */}
                <div
                  className={`ease-spring absolute top-0 right-0 z-30 h-4 w-4 border-t-2 border-r-2 border-[#66bc46] transition-all duration-500 ${
                    isHovered
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : "translate-x-4 -translate-y-4 opacity-0"
                  }`}
                />
                <div
                  className={`ease-spring absolute right-0 bottom-0 z-30 h-4 w-4 border-r-2 border-b-2 border-[#66bc46] transition-all duration-500 ${
                    isHovered
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : "translate-x-4 translate-y-4 opacity-0"
                  }`}
                />

                <div
                  className={`relative flex items-center justify-center overflow-hidden border-l-[3px] p-8 transition-all duration-500 ${
                    isHovered
                      ? "border-[#66bc46] bg-white/[0.05] shadow-[0_0_30px_rgba(102,188,70,0.15)]"
                      : "border-white/10 bg-transparent"
                  }`}
                >
                  {/* DIGITAL NOISE */}
                  {isHovered && (
                    <div className="pointer-events-none absolute inset-0 z-0">
                      <div
                        className="animate-digital-noise absolute inset-0 opacity-[0.15]"
                        style={{
                          backgroundImage: `repeating-linear-gradient(0deg, #66bc46 0px, transparent 1px, transparent 2px)`,
                          backgroundSize: "100% 3px",
                        }}
                      />
                    </div>
                  )}

                  {/* SCANNER BEAM */}
                  {isHovered && (
                    <>
                      <div className="animate-scan-intense absolute top-0 left-0 z-20 h-[2px] w-full bg-[#66bc46] shadow-[0_0_15px_#66bc46]" />
                      <div className="animate-scan-trail absolute top-0 left-0 z-10 h-[60px] w-full bg-gradient-to-t from-transparent via-[#66bc46]/10 to-transparent" />
                    </>
                  )}

                  <div className="relative z-10 flex items-baseline gap-6">
                    {/* <span
                      className={`font-mono text-[10px] ${isHovered ? "text-[#66bc46]" : "text-white/20"}`}
                    >
                      {"//0"}
                      {index + 1}
                    </span> */}
                    <div className="flex flex-col">
                      <p
                        className={`text-2xl font-semibold transition-all duration-500 md:text-4xl ${isHovered ? "translate-x-1 text-white" : "text-white/40"}`}
                      >
                        {feature.content}
                      </p>
                      {/* <span
                        className={`mt-2 font-mono text-[9px] tracking-[0.4em] uppercase transition-all duration-700 ${isHovered ? "translate-y-0 opacity-50" : "-translate-y-1 opacity-0"}`}
                      >
                        System_Core_Active
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-intense {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          15%,
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(130px);
            opacity: 0;
          }
        }
        @keyframes scan-trail {
          0% {
            transform: translateY(-60px);
            opacity: 0;
          }
          20%,
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(130px);
            opacity: 0;
          }
        }
        @keyframes digital-noise {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
        .animate-scan-intense {
          animation: scan-intense 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-scan-trail {
          animation: scan-trail 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-digital-noise {
          animation: digital-noise 0.2s steps(5) infinite;
        }
        .ease-spring {
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
}
