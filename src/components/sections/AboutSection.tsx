"use client"

import React from "react"
import Image from "next/image"
import MaskedDiv from "../ui/masked-div"
import Typewriter from "typewriter-effect"

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch md:px-30 py-30 px-4 sm:px-6 py-12 gap-10">
      {/* LEFT SIDE: Text Block - Wider (60%) */}
      <div className="w-full md:w-[70%] p-6 border-2 shadow-md rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-[1rem] sm:mt-[2.5rem]"><span className="text-gray-400">*</span><br />I'm your Full Stack Developer</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis libero illo totam
            provident aliquam rerum fugiat tempora in aspernatur consectetur vel ad sed, porro
            repellendus iste pariatur dolorum quasi sit.
          </p>
        </div>

        <div className="text-2xl text-orange-500 leading-relaxed min-h-[60px]">
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
      </div>

      {/* RIGHT SIDE: Masked Video - Narrower (40%) */}
      <div className="w-full md:w-[30%] h-[350px] sm:h-[300px] md:h-auto">
        <MaskedDiv maskType="type-1" size={0.8} className="w-full h-full">
          <Image width={1920} height={1080} src="/images/p2.jpg" alt="" />
        </MaskedDiv>
      </div>
    </section>
  )
}

export default AboutSection
