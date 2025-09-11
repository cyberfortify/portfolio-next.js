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
      <div className="z-10 -mt-20 sm:mt-0 space-y-4 w-full text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl flex flex-row items-center justify-center gap-4 sm:gap-6 font-extralight flex-wrap">
          I&rsquo;m{" "}
          <span className="inline-flex items-center gap-4 sm:gap-6">
            <Image
              src="/images/heroSection1.jpg"
              alt="Aditya's avatar"
              width={400}   // bada rakho
              height={300}  // bada rakho
              className="rounded-full object-cover w-16 h-10 sm:w-24 sm:h-14 md:w-32 md:h-20 lg:w-40 lg:h-24"
            />
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-extralight">
              aditya
            </span>
          </span>
        </h2>


        <h1 className="-mt-4 text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
          Bringing Ideas to Reality
        </h1>
      </div>


      {/* Background Faded Text */}
      <h1 className="absolute text-[25vw] sm:text-[18vw] md:text-[14vw] font-black text-gray-100 opacity-5 z-0 select-none whitespace-nowrap pointer-events-none">
        Aditya
      </h1>
    </motion.section>
  )
}
