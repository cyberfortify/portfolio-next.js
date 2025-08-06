"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Get window size with debounce
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollProgress(scrolled);
      controls.start({ height: `${scrolled}%` });
    };
    
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  // Responsive positioning
  const getPosition = () => {
    if (windowSize.width === 0) return "right-4"; // Default before measurement
    if (windowSize.width < 480) return "right-2";
    if (windowSize.width < 1024) return "right-3";
    return "right-4";
  };

  // Modern gradient colors
  const trackColor = "bg-neutral-800/20";
  const indicatorGradient = "linear-gradient(to bottom, #a3e635, #65a30d, #3f6212)";

  return (
    <div className={`fixed top-0 h-full z-50 transition-all duration-300 ease-out ${getPosition()}`}>
      <div className={`h-full w-0.5 md:w-1 rounded-full ${trackColor} backdrop-blur-sm`}>
        <motion.div
          className="w-full rounded-full origin-top"
          style={{
            background: indicatorGradient,
            boxShadow: "0 0 10px rgba(163, 230, 53, 0.5)"
          }}
          initial={{ height: 0 }}
          animate={controls}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.5,
            restDelta: 0.001
          }}
        />
      </div>
      
      {/* Floating percentage indicator */}
      {scrollProgress > 5 && (
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-bold text-lime-400 bg-neutral-900/80 px-2 py-1 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      )}
    </div>
  );
}