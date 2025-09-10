"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollIndicator() {
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = Math.min(100, (scrollTop / docHeight) * 100);

      // Animate smoothly using spring
      controls.start({
        height: `${scrolled}%`,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 25,
        },
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });

    // Initial update in case user starts mid-page
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-blue-500 w-1 origin-top-left z-50"
      style={{ width: "4px" }} // optional: change width
      animate={controls}
      initial={{ height: "0%" }}
    />
  );
}
