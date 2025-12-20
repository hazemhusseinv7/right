"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlFor } from "@/lib/sanity/image";
import { useMediaQuery } from "@/hooks/use-media-query";

export interface TimelineEvent {
  id: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: ImageType;
  color?: string;
}

interface Timeline3DProps {
  events: TimelineEvent[];
  showImages?: boolean;
}

export const Timeline3D: React.FC<Timeline3DProps> = ({
  events,
  showImages = true,
}) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(st > lastScrollTop ? "down" : "up");
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Main timeline content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Central line */}
            <div className="bg-primary-green absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full" />

            {/* Timeline events */}
            {events.map((event, index) => {
              const [ref, inView] = useInView({
                threshold: 0.3,
                triggerOnce: false,
              });
              const controls = useAnimation();

              useEffect(() => {
                if (inView) {
                  controls.start("visible");
                }
              }, [controls, inView]);

              const isEven = index % 2 === 0;
              const eventColor = event.color ? event.color : "bg-primary-green";

              const isDescriptionVisible = isMobile
                ? true
                : activeEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  ref={ref}
                  className={`relative mb-16 md:mb-24 ${isEven ? "md:ml-auto" : "md:mr-auto"} flex md:w-1/2 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isEven ? 50 : -50,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute left-1/2 ${
                      isEven ? "md:left-1" : "md:right-1 md:left-auto"
                    } top-0 -translate-x-1/2 transform ${
                      isEven ? "md:translate-x-0" : "md:translate-x-0"
                    } z-20`}
                  >
                    <motion.div
                      className={`h-10 w-10 rounded-full ${eventColor} flex cursor-pointer items-center justify-center border-4 border-emerald-600`}
                      whileHover={{ scale: 1.2 }}
                      onClick={() =>
                        setActiveEvent(
                          activeEvent === event.id ? null : event.id,
                        )
                      }
                      animate={{
                        boxShadow:
                          activeEvent === event.id
                            ? [
                                `0 0 0 rgba(255,255,255,0.5)`,
                                `0 0 20px rgba(255,255,255,0.8)`,
                                `0 0 0 rgba(255,255,255,0.5)`,
                              ]
                            : `0 0 0 rgba(255,255,255,0)`,
                      }}
                      transition={{
                        repeat: activeEvent === event.id ? Infinity : 0,
                        duration: 1.5,
                      }}
                    >
                      {event.icon || (
                        <span className="font-bold text-white">
                          {index + 1}
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className={`bg-opacity-80 shadow-primary-green/10 relative z-10 w-full overflow-hidden rounded-2xl bg-emerald-50/80 shadow-xl backdrop-blur-lg md:w-[calc(100%-2rem)] ${
                      isEven ? "md:ml-12" : "md:mr-12"
                    } border border-emerald-50`}
                    whileHover={{
                      y: -5,
                      x: isEven ? 5 : -5,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `perspective(1000px) rotateY(${
                        mousePosition.x * (isEven ? -3 : 3)
                      }deg) rotateX(${mousePosition.y * -3}deg)`,
                    }}
                    onMouseEnter={() => setActiveEvent(event.id)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    {showImages && event.image && (
                      <div className="relative h-80 overflow-hidden">
                        <motion.img
                          src={urlFor(event.image).url()}
                          alt={event.title}
                          className="h-full w-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{
                            scale: !isMobile && isDescriptionVisible ? 1.05 : 1,
                            y: !isMobile && isDescriptionVisible ? -10 : 0,
                          }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="from-primary-green/40 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <motion.div
                          className={`size-3 rounded-full ${eventColor}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            repeatType: "reverse",
                          }}
                        />
                      </div>

                      <h3 className="text-primary-green mb-2 text-2xl font-bold">
                        {event.title}
                      </h3>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isDescriptionVisible ? "auto" : 0,
                          opacity: isDescriptionVisible ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-primary-blue mt-3 leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 ${eventColor}`}
                      initial={{ width: "0%" }}
                      animate={{
                        width: isDescriptionVisible ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline3D;
