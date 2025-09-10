"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Emp Report System :: Python",
    image: "/projects/era.png",
    description:
      "A Streamlit web application that allows you to upload an Excel sheet of employee work data and instantly generate",
    link: "https://employee-report-app.streamlit.app/",
  },
  {
    title: "3D Website :: Vanilla",
    image: "/projects/3d.png",
    description:
      "A fully responsive 3D scroll animation website built with Three.js, GSAP, Locomotive Scroll, and Tailwind CSS, inspired by modern product landing pages. Experience smooth transitions and interactive 3D elements.",
    link: "https://3d-website-animation.vercel.app/",
  },
  {
    title: "Video Analysis :: Data Analysis",
    image: "/projects/yt-trending.png",
    description:
      "A data-driven exploration of trending video behavior across India 🇮🇳 and the USA 🇺🇸, uncovering what makes videos trend, how fast they trend, and what factors influence visibility on YouTube.",
    link: "https://github.com/cyberfortify/Youtube_Trending_Video_Analysis",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    // Reset position
    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch px-4 sm:px-6 md:px-20 py-12 md:py-20 gap-10">

      {/* LEFT SIDE: Animated Card */}
      <div className="w-full md:w-[70%] h-[500px] flex flex-col gap-4">
        <div
          ref={cardRef}
          className="relative h-[250px] sm:h-[300px] md:h-[335px] w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={projects[activeIndex].image}
            alt={projects[activeIndex].title}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>

        {/* Description */}
        <div className="p-4 sm:p-5 rounded-xl text-sm sm:text-base leading-relaxed">
          {projects[activeIndex].description}
          <a
            href={projects[activeIndex].link}
            target="_blank"
            className="text-blue-400 font-semibold hover:underline ml-1"
          >
            click to See Live Demo
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Project List */}
      <div className="w-full md:w-[30%] flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-[3rem] leading-none mb-6 sm:mb-7">
          <span className="text-gray-400">*</span><br /> SOME <br />
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
              className={`cursor-pointer transition ${
                activeIndex === index
                  ? "text-lime-400 font-semibold"
                  : "text-gray-500 hover:text-lime-300"
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
