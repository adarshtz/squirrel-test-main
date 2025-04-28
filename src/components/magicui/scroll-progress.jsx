"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[4] origin-left bg-gradient-to-r from-squirrel-primary-600 via-squirrel-primary-700 to-squirrel-primary-800",
          className
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
