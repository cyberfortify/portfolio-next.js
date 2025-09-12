"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Emp Report System :: Python",
    image: "/projects/era.png",
    description:
      "A Streamlit web application that allows you to upload an Excel sheet of employee work data and instantly generate reports and analytics.",
    link: "https://employee-report-app.streamlit.app/",
  },
  {
    title: "3D Website :: Vanilla",
    image: "/projects/3d.png",
    description:
      "A fully responsive 3D scroll animation website built with Three.js, GSAP, Locomotive Scroll and Tailwind CSS. Smooth transitions and interactive 3D elements.",
    link: "https://3d-website-animation.vercel.app/",
  },
  {
    title: "Video Analysis :: Data Analysis",
    image: "/projects/yt-trending.png",
    description:
      "A data-driven exploration of trending video behavior across India and the USA, uncovering what makes videos trend and how fast they do.",
    link: "https://github.com/cyberfortify/Youtube_Trending_Video_Analysis",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const total = projects.length;
    // --- tweak yaha se offsets & scale agar tumko alag look chahiye ---
    const peekX = 10; // each stacked card shifts this many px to right
    const peekY = 10; // each stacked card shifts this many px upward (negative Y)
    const peekScaleBase = 0.50; // front-most peek card scale (smaller overall)
    const scaleStep = 0.03; // how much each deeper card shrinks
    // -------------------------------------------------------------------

    // compute peek transforms for each card (static stack order)
    const transforms = projects.map((_, i) => {
      const stackPos = total - 1 - i; // last array item will be closest to front in stack
      const x = stackPos * peekX;
      const y = -stackPos * peekY;
      const scale = Math.max(0.6, peekScaleBase - stackPos * scaleStep);
      const z = 20 + stackPos; // z-index base for peek cards
      return { x, y, scale, z };
    });

    // first set all cards to their peek state (so they appear layered)
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      const { x, y, scale, z } = transforms[i];
      gsap.set(c, { x, y, scale, opacity: i === activeIndex ? 1 : 0.85, zIndex: i === activeIndex ? 200 : z });
    });

    // animate the active card to center / front
    const activeEl = cardRefs.current[activeIndex];
    if (activeEl) {
      // animate from slightly above-right into center for a 'coming down' effect
      gsap.fromTo(
        activeEl,
        { x: 0, y: "-100%", scale: 0.95, opacity: 0, zIndex: 400 },
        { x: 0, y: 0, scale: 1, opacity: 1, duration: 1, ease: "expo.out", zIndex: 400 }
      );
    }

    // animate other cards back to their peek positions
    cardRefs.current.forEach((c, i) => {
      if (!c || i === activeIndex) return;
      const { x, y, scale, z } = transforms[i];
      gsap.to(c, { x, y, scale, opacity: 0.85, zIndex: z, duration: 0.8, ease: "power4.inOut" });
    });
  }, [activeIndex]);

  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch mt-12 px-4 sm:px-6 md:px-20 py-12 md:py-20 gap-10">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[70%] flex flex-col gap-6">
        {/* Card stack */}
        <div className="relative w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] mx-auto h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el; // ✅ TypeScript-friendly
              }}
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md"
              style={{ willChange: "transform, opacity" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="p-4 sm:p-6 rounded-xl text-sm sm:text-base md:text-lg leading-relaxed bg-white/5 backdrop-blur-md shadow-md">
          <p className="text-gray-500">
            {projects[activeIndex].description}{" "}
            <a
              href={projects[activeIndex].link}
              target="_blank"
              rel="noreferrer"
              className="text-lime-500 font-semibold hover:underline ml-1"
            >
              See Live Demo
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[30%] flex flex-col justify-start mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-[3rem] leading-none mb-6 sm:mb-7">
          <span className="text-gray-400">*</span> <br /> SOME <br />
          FEATURED <br />
          <span className="font-bold">PROJECTS</span>
        </h2>

        <a
          href="/project"
          className="w-fit sm:w-[75%] bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-lime-300 transition"
        >
          Go to Projects Page
        </a>

        <ul className="mt-10 space-y-3 text-lg">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition ${activeIndex === index ? "text-lime-400 font-semibold" : "text-gray-500 hover:text-lime-300"
                }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
}
