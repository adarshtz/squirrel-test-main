"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const InfiniteMarquee = ({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Clone items for infinite loop effect
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerRef.current.appendChild(duplicatedItem);
    });

    const directionValue = direction === "right" ? 1 : -1;
    let animationFrame;
    let startTimestamp;

    const scroll = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      if (!scrollerRef.current) return;

      const elapsed = timestamp - startTimestamp;
      const scrollPos = (elapsed * speed) / 1000;

      // Apply scroll position
      scrollerRef.current.style.transform = `translateX(${
        directionValue * scrollPos
      }px)`;

      // Reset when enough has scrolled
      const contentWidth =
        scrollerRef.current.children[0].offsetWidth * scrollerContent.length;
      if (Math.abs(directionValue * scrollPos) >= contentWidth) {
        startTimestamp = timestamp;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Add pause on hover if enabled
    if (pauseOnHover && containerRef.current) {
      const handleMouseEnter = () => {
        cancelAnimationFrame(animationFrame);
      };

      const handleMouseLeave = () => {
        startTimestamp = null;
        animationFrame = requestAnimationFrame(scroll);
      };

      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationFrame);
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          containerRef.current.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      };
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [direction, speed, pauseOnHover]);

  return (
    <div
      className={cn("overflow-hidden relative", className)}
      ref={containerRef}
    >
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#060504] to-transparent pointer-events-none"></div>

      <div ref={scrollerRef} className="flex whitespace-nowrap">
        {children}
      </div>

      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#060504] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default InfiniteMarquee;
