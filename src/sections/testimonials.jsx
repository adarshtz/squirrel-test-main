import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ShinyText from "@/components/shiny-text";
import { testimonialData } from "@/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="testimonials-header text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            What Our Clients Are Saying
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Discover how Squirrel has helped businesses elevate their search
            capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-2xl border border-white/5 bg-neutral-900/30 p-6 transition-all duration-300 hover:bg-neutral-900/50 h-full"
            >
              <div className="flex flex-col h-full justify-between space-y-4">
                {/* Rating stars */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-squirrel-primary-500"
                          : "text-gray-400"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-squirrel-neutral-100 text-lg flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center mt-4">
                  {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatarSrc}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      objectFit=""
                    />
                  </div> */}
                  <div className="">
                    <h4 className="text-white font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-squirrel-neutral-200 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
