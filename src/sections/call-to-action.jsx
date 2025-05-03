import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-squirrel-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-squirrel-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Elevate Your Digital Presence Today
          </h2>
          <p className="text-base sm:text-lg text-squirrel-neutral-100 mb-10 max-w-2xl">
            Join countless businesses that have transformed their online
            platforms with Squirrel's cutting-edge web and software development
            solutions. Get started now and experience the impact!
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-squirrel-primary-500/30 rounded-full blur-xl"></div>

            {/* <Button
              size="sm"
              className="text-white bg-squirrel-primary-500 hover:bg-squirrel-primary-600 shadow-lg shadow-squirrel-primary-800/20 text-lg font-medium px-8 py-3 h-auto relative z-10 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
