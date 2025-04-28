import React from "react";
import { statsData } from "@/constants";
import ShinyText from "@/components/shiny-text";

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="stats-header text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Accelerated Search at Your Fingertips
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Our platform delivers measurable results that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-8 py-4 sm:py-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative p-4 sm:p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="relative z-10 space-y-3 sm:space-y-5 w-full flex flex-col items-center sm:items-start">
                <div className="flex justify-center sm:justify-start w-full">
                  <ShinyText text={stat.preText} size={"sm"} />
                </div>

                <h3
                  className={`text-5xl sm:text-6xl font-medium leading-tight sm:leading-[70.40px] text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                >
                  {stat.number}
                </h3>
                <p className="text-base sm:text-lg font-normal leading-7 text-squirrel-neutral-100">
                  {stat.mainText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
