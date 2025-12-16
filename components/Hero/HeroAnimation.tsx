"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeroAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage: string;
  children: React.ReactNode;
}

const HeroAnimation = React.forwardRef<HTMLDivElement, HeroAnimationProps>(
  ({ className, backgroundImage, children, ...props }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      <motion.div
        ref={ref}
        className={cn(
          "text-foreground relative flex min-h-screen w-full flex-col overflow-hidden md:flex-row",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>{children}</div>
        </div>

        <motion.div
          className="min-h-[300px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut" }}
        />
      </motion.div>
    );
  },
);

HeroAnimation.displayName = "HeroAnimation";

export { HeroAnimation };
