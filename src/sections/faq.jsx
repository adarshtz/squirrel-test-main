"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ShinyText from "@/components/shiny-text";
import { faqData } from "@/constants";

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/5">
      <button
        className="w-full py-5 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-white text-lg font-medium">{item.question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-squirrel-primary-500"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-squirrel-neutral-100 text-base">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="faq-header text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Find answers to common questions about Squirrel's search technology
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
