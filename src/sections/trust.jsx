import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { companies } from "@/constants";
import Link from "next/link";
import InfiniteMarquee from "@/components/magicui/infinite-marquee";

const Trust = () => {
  // Double the companies array to ensure we have enough items for a smooth loop
  const extendedCompanies = [...companies, ...companies];

  const CompanyItem = ({ company, index }) => (
    <Link
      key={index}
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-64 h-32 flex items-center justify-center flex-shrink-0 mx-4",
        "p-4 rounded-lg transition-all duration-300",
        ""
      )}
    >
      <Image
        src={company.logo}
        alt={company.name}
        width={200}
        height={200}
        className="object-contain max-h-full mx-auto grayscale hover:grayscale-0"
      />
    </Link>
  );

  return (
    <section className=" overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Trusted by Leading Brands
          </h2> */}
        </div>
      </div>

      {/* First marquee - smooth scrolling left */}
      <div className="mb-8">
        <InfiniteMarquee
          direction="left"
          speed={30}
          pauseOnHover={true}
          className="py-2"
        >
          {extendedCompanies.map((company, index) => (
            <CompanyItem
              key={`left-${index}`}
              company={company}
              index={index}
            />
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
};

export default Trust;
