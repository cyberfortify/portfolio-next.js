"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();
  const [width] = useWindowSize();

  useEffect(() => {
    function updateScroll() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
      controls.start({ height: `${scrolled}%` });
    }
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  // Responsive left position change
  let leftPosition = "left-4"; // default 1rem
  if (width < 768) leftPosition = "left-2"; // smaller screens
  if (width < 480) leftPosition = "left-1"; // very small screens

  return (
    <div
      className={`${leftPosition} fixed top-0 h-full w-1 bg-neutral-800 rounded-full z-50 transition-all duration-300 ease-in-out`}
    >
      <motion.div
        className="w-1 rounded-full bg-lime-400 origin-top"
        initial={{ height: 0 }}
        animate={controls}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
          ease: "easeInOut",
          mass: 0.7,
          delay: 0.05,
        }}
      />
    </div>
  );
}
