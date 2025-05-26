"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        "fixed w-full py-[24px] backdrop-blur-sm z-30 transition-all duration-300",
        scrolled ? "shadow-md bg-black/50" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={(e) => handleLinkClick(e, "#hero")}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  filter: "brightness(1.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  rotate: { duration: 0.3 },
                }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={170}
                  height={30}
                  className="cursor-pointer transition-all duration-300"
                />
                {/* Subtle glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Navigation Items - Only these have fade-in animations */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="relative group"
                  >
                    <motion.span
                      className="text-center justify-start text-squirrel-neutral-100 hover:text-squirrel-white text-base font-normal leading-relaxed transition-colors duration-300"
                      whileHover={{
                        y: -3,
                        textShadow: "0 0 8px rgba(255,255,255,0.5)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      {item.label}
                    </motion.span>

                    {/* Enhanced underline effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{
                        width: "100%",
                        opacity: 1,
                        boxShadow: "0 0 8px rgba(139, 92, 246, 0.5)",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    {/* Background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm opacity-0 -z-10"
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Buttons and Mobile Menu */}
          <div className="flex items-center">
            {/* Get Demo Button with enhanced hover effects */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <Button className="bg-squirrel-neutral-50 cursor-pointer outline-1 md:block hidden outline-squirrel-neutral-400/20 leading-relaxed text-black font-medium py-2 px-4 rounded-full text-sm transition-all duration-300 hover:bg-white hover:shadow-lg relative overflow-hidden">
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Demo
                </motion.span>
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden ml-4">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  className="text-squirrel-white text-base font-semibold p-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
                        fill="none"
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
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-40 w-full md:hidden h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 backdrop-blur-lg border-l border-white/10"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
            >
              <div className="flex flex-col h-full p-8">
                <motion.div
                  className="flex justify-between items-center mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Link href="/" onClick={(e) => handleLinkClick(e, "#hero")}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={150}
                        height={30}
                        className="cursor-pointer"
                      />
                    </motion.div>
                  </Link>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 90,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="p-2 rounded-lg"
                  >
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
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col space-y-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="block relative group"
                      >
                        <motion.span
                          className="text-squirrel-neutral-100 hover:text-squirrel-white text-xl font-medium leading-relaxed transition-colors"
                          whileHover={{
                            x: 10,
                            scale: 1.05,
                            textShadow: "0 0 10px rgba(255,255,255,0.3)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          {item.label}
                        </motion.span>
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{
                            width: "60%",
                            boxShadow: "0 0 8px rgba(139, 92, 246, 0.6)",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile Get Demo Button */}
                <motion.div
                  className="mt-auto mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(255,255,255,0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-white text-black font-medium py-3 px-6 rounded-full text-base transition-all duration-300 hover:bg-gray-100">
                      Get Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
