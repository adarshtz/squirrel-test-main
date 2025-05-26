"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-squirrel-primary-600/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-squirrel-primary-600/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        ></motion.div>
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 leading-[1.1] sm:leading-[1.15] md:leading-[1.2]"
            variants={itemVariants}
          >
            Elevate Your Digital Presence Today
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-squirrel-neutral-100 mb-10 max-w-2xl"
            variants={itemVariants}
          >
            Join countless businesses that have transformed their online
            platforms with Squirrel's cutting-edge web and software development
            solutions. Get started now and experience the impact!
          </motion.p>
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 bg-squirrel-primary-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="sm"
                className="text-white bg-squirrel-primary-500 hover:bg-squirrel-primary-600 shadow-lg shadow-squirrel-primary-800/20 text-lg font-medium px-8 py-3 h-auto relative z-10 transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
