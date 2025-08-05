'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

export default function ContactSection() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600); // Pulse duration
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 md:py-36 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center dark:text-white"
      >
        Got Some Ideas?{' '}
        <span className="text-primary">Let&rsquo;s Connect</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-sm sm:text-base md:text-lg text-center mt-4 text-gray-600 dark:text-gray-300"
      >
        Have a brilliant idea you&rsquo;re itching to bring to life? Let&rsquo;s collaborate and make it happen!
      </motion.p>

      {/* SVG Background Wires (dark mode only) */}
      <svg
        className="absolute hidden dark:block w-full h-[300px] top-[70%] -translate-y-1/2 z-0 pointer-events-none"
        viewBox="0 0 1200 300"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Curved Lines */}
        <path d="M 0 60 Q 300 150 600 150" stroke="white" strokeWidth="3" fill="none" opacity="0.3" filter="url(#glow)" />
        <path d="M 0 100 Q 300 180 600 150" stroke="white" strokeWidth="2" fill="none" opacity="0.4" filter="url(#glow)" />
        <path d="M 0 140 Q 300 120 600 150" stroke="white" strokeWidth="2" fill="none" opacity="0.4" filter="url(#glow)" />
        <path d="M 0 180 Q 300 150 600 150" stroke="white" strokeWidth="3" fill="none" opacity="0.3" filter="url(#glow)" />

        {/* Right Curved Lines */}
        <path d="M 600 150 Q 900 120 1200 60" stroke="white" strokeWidth="3" fill="none" opacity="0.3" filter="url(#glow)" />
        <path d="M 600 150 Q 900 180 1200 100" stroke="white" strokeWidth="2" fill="none" opacity="0.4" filter="url(#glow)" />
        <path d="M 600 150 Q 900 150 1200 140" stroke="white" strokeWidth="2" fill="none" opacity="0.4" filter="url(#glow)" />
        <path d="M 600 150 Q 900 150 1200 180" stroke="white" strokeWidth="3" fill="none" opacity="0.3" filter="url(#glow)" />
      </svg>

      {/* Email Button (centered over SVG) */}
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className={clsx(
          "relative z-10 mt-32 md:mt-40 px-6 py-3 rounded-full font-medium text-black bg-lime-400 dark:bg-lime-500 shadow-[0_0_15px_3px_rgba(132,204,22,0.6)] hover:shadow-[0_0_25px_5px_rgba(132,204,22,0.8)] transition-all duration-500",
          clicked && "animate-ping-once"
        )}
      >
        <a
          href="mailto:try.aditya2003@gmail.com"
          className="relative z-20"
        >
          try.aditya2003@gmail.com
        </a>
      </motion.button>

    </section>
  );
}
