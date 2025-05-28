"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    // After animation completes, hide the component completely
    setTimeout(() => setShouldShow(false), 600);
  };

  if (!shouldShow) return null;
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="hidden lg:block lg:absolute w-full mt-28 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 z-10"
          initial={{
            y: -100,
            opacity: 0,
            height: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            height: "auto",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            height: { duration: 0.4 },
          }}
        >
          {/* Animated particle effects */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-${2 + (i % 3) * 2} h-${
                  2 + (i % 3) * 2
                } rounded-full bg-white/30`}
                style={{
                  top: `${20 + (i % 3) * 20}%`,
                  left: `${10 + i * 12}%`,
                }}
                initial={{
                  scale: 0,
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.8, 0.3],
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Flowing background effect with enhanced animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Pulsing overlay */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="container mx-auto relative z-10">
            <motion.div
              className="flex items-center justify-center py-2 px-4 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="mr-3 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.span
                  className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-white/20 text-xs font-medium"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  NEW
                </motion.span>
              </motion.div>

              <motion.p
                className="text-sm sm:text-base font-medium"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  className="hidden sm:inline"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                >
                  ✨
                </motion.span>{" "}
                Introducing our AI-powered chatbot! Elevate your customer
                support{" "}
                <motion.span
                  className="hidden sm:inline"
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                >
                  ✨
                </motion.span>
              </motion.p>

              <motion.div
                className="ml-auto pl-3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href="#chatbot"
                    className={cn(
                      "text-sm whitespace-nowrap font-medium rounded-md px-3 py-1 border border-transparent",
                      "bg-white/20 hover:bg-white/30 hover:border-white/60 transition-all duration-200",
                      "flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    )}
                  >
                    Learn more
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Close button */}
              <motion.button
                onClick={handleClose}
                className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close announcement"
              >
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
