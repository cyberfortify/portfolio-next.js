"use client"

import React from "react"
import Image from "next/image"
import MaskedDiv from "../ui/masked-div"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch md:px-20 lg:px-30 px-4 sm:px-6 py-12 gap-10">
      {/* LEFT SIDE */}
      <motion.div
        className="w-full md:w-[70%] p-6 sm:p-8 border-2 shadow-md rounded-3xl flex flex-col justify-between bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, boxShadow: "0px 15px 35px rgba(0,0,0,0.2)" }}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-4 sm:mt-6">
            <span className="text-gray-400">*</span>
            <br />
            I&rsquo;m your Full Stack Developer
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis libero illo totam
            provident aliquam rerum fugiat tempora in aspernatur consectetur vel ad sed, porro
            repellendus iste pariatur dolorum quasi sit.
          </p>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl text-orange-500 leading-relaxed min-h-[50px] sm:min-h-[60px]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("{ Simplicity for the Future }")
                .pauseFor(2500)
                .deleteAll()
                .start()
            }}
            options={{
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="w-full md:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <MaskedDiv
          maskType="type-1"
          size={0.8}
          floating
          className="w-full max-w-[400px] aspect-[4/3]"
        >
          <Image
            width={1920}
            height={1080}
            src="/images/aboutSection1.jpg"
            alt="About Section"
          />
        </MaskedDiv>
      </motion.div>
    </section>
  )
}

export default AboutSection
