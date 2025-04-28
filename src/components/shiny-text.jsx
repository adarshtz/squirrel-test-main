import React from "react";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const ShinyText = ({ text, size }) => {
  return (
    <div className="z-10 flex items-center w-full justify-start md:justify-start sm:justify-start xs:justify-center">
      <div
        className={cn(
          "group rounded-full border-1 border-white/20 bg-neutral-900 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-900 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-gradient-to-r from-white/0 via-white/10 to-white/0",
          size === "sm" ? "p-0" : size === "lg" ? "p-1" : "p-1" // Default to p-1 if size is not provided
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-white hover:duration-300 hover:dark:text-neutral-400">
          <span className="bg-gradient-to-r from-white to-[#999999] text-transparent bg-clip-text text-sm font-semibold font-['Figtree'] leading-snug">
            {text}
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default ShinyText;
