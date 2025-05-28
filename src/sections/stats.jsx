"use client";

import React from "react";
import { statsData } from "@/constants";
import ShinyText from "@/components/shiny-text";
import { motion } from "framer-motion";

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="stats"
      className="relative py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="stats-header text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
          variants={headerVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Key Statistics That Define <br /> Our Impact
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Explore the Numbers Behind Our Success and Growth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-8 py-4 sm:py-8"
          variants={containerVariants}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="relative p-4 sm:p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left group"
              variants={statVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              <div className="relative z-10 space-y-3 sm:space-y-5 w-full flex flex-col items-center sm:items-start">
                <motion.div
                  className="flex justify-center sm:justify-start w-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ShinyText text={stat.preText} size={"sm"} />
                </motion.div>

                <motion.h3
                  className={`text-5xl sm:text-6xl font-medium leading-tight sm:leading-[70.40px] text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                  variants={numberVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg font-normal leading-7 text-zinc-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {stat.mainText}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
