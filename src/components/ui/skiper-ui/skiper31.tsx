"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef, useState } from "react";
import { MotionValue , MotionStyle} from "framer-motion";

import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string; // image path
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  // base transforms (parallax)
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 18, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 8, 0]);
  const baseScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  // hover state
  const [hovered, setHovered] = useState(false);

  // extract label from filename (e.g. "/mac/Discord.png" -> "Discord")
  const label = (char || "")
    .split("/")
    .pop()
    ?.replace(/\.\w+$/, "")
    .replace(/[-_]/g, " ") || "";

  return (
    <motion.div
      className={cn("inline-block relative px-3 select-none")}
      style={{ x, rotate, y, scale: baseScale, transformOrigin: "center" } as MotionStyle}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Icon image */}
      <motion.img
        src={char}
        alt={label}
        className={cn(
          "block rounded-lg",
          isSpace ? "w-8 h-8" : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        )}
        style={{ willChange: "transform" }}
        animate={{
          scaleX: 1, // ✅ left-right same
          scaleY: hovered ? 0.7 : 1, // ✅ squeeze sab icons ke liye
          filter: hovered ? "drop-shadow(0 6px 18px rgba(0,0,0,0.45))" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Label that appears when hovered */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 pointer-events-none"
        initial={{ opacity: 0, y: -6, scale: 0.9 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -6, scale: 0.9 }
        }
        transition={{ duration: 0.18 }}
      >
        <div className="bg-black/85 text-white text-xs sm:text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-md">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skiper31 = () => {
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });

  const macIcon = [
    "/mac/Discord.png",
    "/mac/figma.png",
    "/mac/Framer.png",
    "/mac/Github.png",
    "/mac/Monog.png",
    "/mac/notion.png",
    "/mac/Pieces.png",
    "/mac/Postman.png",
    "/mac/vsCode.png",
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);

  return (
    <ReactLenis root>
      <main className="w-full">
        {/* Fav Tech Stack Section */}
        <div
          ref={targetRef2}
          className="relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
        >
          {/* Heading */}
          <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight z-10">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
              My Tech Stack
            </span>
          </p>

          {/* Icon Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {macIcon.map((char, index) => (
              <CharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export { CharacterV2, Skiper31 };
