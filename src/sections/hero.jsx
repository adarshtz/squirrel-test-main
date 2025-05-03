import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Globe } from "@/components/magicui/globe";

import ShinyText from "@/components/shiny-text";

const Hero = () => {
  const darkGlobeConfig = {
    width: 600,
    height: 600,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.3,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.717, 0.196, 0.075],
    glowColor: [0.1, 0.1, 0.2],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };

  return (
    <section
      id="hero"
      className="container mx-auto py-8 px-4 sm:py-12 md:py-16 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <ShinyText text="Squirrel AI Chatbot is here" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-white via-white to-white/20 text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2] max-w-4xl">
            Driving Innovation with Apps, Software, and IT Solutions
          </h1>

          <p className="self-stretch justify-start text-squirrel-neutral-100 text-base sm:text-lg font-light leading-7 max-w-xl mx-auto lg:mx-0">
            Providing cutting-edge IT solutions, custom apps, and software
            development to drive your business forward. Partner with us for
            innovative and reliable digital solutions.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div> */}
        </div>

        {/* Globe component - only visible on large screens (PC) */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center relative mt-8 lg:mt-0">
          <div className="relative w-[90%] h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-900/20 to-transparent blur-2xl"></div>
            <Globe config={darkGlobeConfig} className="z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
