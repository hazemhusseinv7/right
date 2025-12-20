"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const AnimatedSVG = () => {
  const pathRef = useRef<SVGPathElement>(null);

  return (
    <div className="absolute -bottom-7 left-1/2 size-140 sm:-bottom-14 sm:size-300 -translate-x-1/2 2xl:-bottom-24 2xl:size-500">
      <svg
        viewBox="0 0 512 512"
        className="text-primary-green/20 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <motion.clipPath id="svgClipPath">
            <motion.rect
              initial={{ width: 0 }}
              animate={{ width: 512 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              height="512"
              x="0"
              y="0"
            />
          </motion.clipPath>
        </defs>

        <motion.path
          ref={pathRef}
          d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          clipPath="url(#svgClipPath)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedSVG;
