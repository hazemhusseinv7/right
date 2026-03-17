"use client";

import { useState, useEffect, useRef } from "react";

export default function HoverCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    "Control",
    "Data Sovereignty",
    "Security & Privacy",
    "Compliance",
  ];

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
      className="relative z-10 w-full cursor-none overflow-hidden py-32"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* 1. REALISTIC LENS CURSOR */}
      <div
        className={`pointer-events-none fixed z-1000 transition-opacity duration-300 ${
          isInside ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-21.5px, -21.5px)`,
        }}
      >
        <div className="relative h-12 w-12 scale-150">
          {/* THE LENS GLASS */}
          <div
            className="absolute top-[5px] left-[5px] h-[20px] w-[20px] overflow-hidden rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 80%)",
              backdropFilter: "blur(3px) brightness(1.2) contrast(1.2)",
              boxShadow:
                "inset 0 0 4px rgba(255,255,255,0.3), 0 0 15px rgba(102,188,70,0.15)",
            }}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          </div>

          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#66bc46"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10"
          >
            <circle cx="11" cy="11" r="8" className="stroke-[#66bc46]" />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              className="opacity-90"
            />
          </svg>
        </div>
      </div>

      {/* 2. GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 bg-[#1f3c61]"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          background:
            "radial-gradient(circle at 20% 50%, #2a4e7a 0%, #1f3c61 70%, #142844 100%)",
        }}
      >
        <div className="size-full -rotate-3 bg-[url('/img.svg')] bg-cover bg-center bg-no-repeat opacity-3" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="md:pr-10">
          <h2 className="text-5xl font-extralight tracking-tighter text-white md:text-7xl">
            Experience AI without{" "}
            <span className="relative mt-2 block font-black tracking-tighter text-[#66bc46] uppercase italic">
              Compromising
              {/* Neon Glow Layer */}
              <span className="absolute inset-0 -z-10 text-[#66bc46] opacity-40 blur-xl select-none">
                Compromising
              </span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
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
                  className={`relative overflow-hidden border-l-[3px] p-8 transition-all duration-500 ${
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
                    <span
                      className={`font-mono text-[10px] ${isHovered ? "text-[#66bc46]" : "text-white/20"}`}
                    >
                      {"//0"}
                      {index + 1}
                    </span>
                    <div className="flex flex-col">
                      <p
                        className={`text-2xl font-bold transition-all duration-500 ${isHovered ? "translate-x-1 text-white" : "text-white/40"}`}
                      >
                        {feature}
                      </p>
                      <span
                        className={`mt-2 font-mono text-[9px] tracking-[0.4em] uppercase transition-all duration-700 ${isHovered ? "translate-y-0 opacity-50" : "-translate-y-1 opacity-0"}`}
                      >
                        System_Core_Active
                      </span>
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
