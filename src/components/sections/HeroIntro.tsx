"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroIntro({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen w-full relative flex flex-col justify-center items-center px-4 sm:px-8 overflow-hidden text-center"
    >
      {/* Top Left Button */}
      <div className="absolute top-4 left-4 z-20">
        <button
          onClick={onOpenContact}
          className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-2 rounded-full font-semibold shadow-md text-xs sm:text-sm md:text-base"
        >
          Get in Touch
        </button>
      </div>

      {/* Hero Text */}
      <div className="z-10 -mt-20 sm:mt-0 space-y-4 max-w-[90%] sm:max-w-2xl">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium flex flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
          I&rsquo;m{" "}
          <span className="inline-flex items-center gap-2">
            <Image
              src="/images/p1.jpg"
              alt="Aditya's avatar"
              width={40}
              height={40}
              className="rounded-full object-cover w-13 h-8 sm:w-13 sm:h-8"
            />
            <span className="capitalize text-base sm:text-lg md:text-xl font-semibold">
              Aditya
            </span>
          </span>
        </h2>

        <h1 className="-mt-4 text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          Bringing Ideas to Reality
        </h1>
      </div>

      {/* Background Faded Text */}
      <h1 className="absolute text-[25vw] sm:text-[18vw] md:text-[14vw] font-black text-gray-100 opacity-10 z-0 select-none whitespace-nowrap pointer-events-none">
        Aditya
      </h1>
    </motion.section>
  )
}
