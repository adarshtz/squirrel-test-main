"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ShinyText from "@/components/shiny-text";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Squirrel } from "@/components/squirrel";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="container mx-auto pt-36 px-10 sm:py-12 md:pt-36 lg:pb-32 lg:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        <motion.div
          className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white via-white to-white/20 text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Driving Innovation with Apps, Software, and IT Solutions
          </motion.h1>

          <motion.p
            className="self-stretch justify-start text-squirrel-neutral-100 text-xs sm:text-lg font-light leading-7 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Providing cutting-edge IT solutions, custom apps, and software
            development to drive your business forward. Partner with us for
            innovative and reliable digital solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg">Get Started</Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="w-full lg:w-1/2 h-[300px] z-10 block md:hidden">
          <Canvas>
            <ambientLight intensity={0.75} />
            <pointLight position={[10, 10, 10]} />
            <Squirrel
              scale={9}
              position={[0.5, -1.5, 0]}
              rotation={[0, Math.PI, 0]}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="w-full lg:w-1/2 h-[500px] z-10 hidden md:block">
          <Canvas>
            <ambientLight intensity={0.75} />
            <pointLight position={[10, 10, 10]} />
            <Squirrel
              scale={[8, 8, 8]}
              position={[0, -1.5, 0]}
              rotation={[0, Math.PI, 0]}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
