"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { navItems } from "@/constants";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle the home link differently
    if (href === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full py-[24px] backdrop-blur-sm z-20 transition-all duration-300",
        scrolled ? "shadow-md bg-black/50" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={(e) => handleLinkClick(e, "#hero")}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={170}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-center justify-start text-squirrel-neutral-100 hover:text-squirrel-white text-base font-normal leading-relaxed transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Button className="bg-squirrel-neutral-50 outline-1 md:block hidden outline-squirrel-neutral-400/20 leading-relaxed text-black font-medium py-2 px-4 rounded-full text-sm transition-colors">
              Get Demo
            </Button>

            <div className="flex md:hidden ml-4">
              <Button
                className="text-squirrel-white text-base font-semibold"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full md:hidden transform transition-transform duration-300 ease-in-out h-screen bg-squirrel-neutral-900 backdrop-blur-lg",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={(e) => handleLinkClick(e, "#hero")}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={30}
                className="cursor-pointer"
              />
            </Link>
            <Button
              className="text-squirrel-white text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          <div className="flex flex-col space-y-6 mt-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-squirrel-neutral-100 hover:text-squirrel-white text-2xl font-medium leading-relaxed transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-squirrel-neutral-50 outline-1 outline-squirrel-neutral-400/20 leading-relaxed text-black font-medium py-3 px-6 rounded-full text-lg transition-colors mt-4 w-full">
              Get Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
