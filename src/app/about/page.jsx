"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFigma,
} from "react-icons/si";
import { PiStackSimpleDuotone } from "react-icons/pi";

const skills = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Python Developer",
  "Prompt Engineer",
  "Versatile Programmer",
];
const links = [
  { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/aditya-vk-professional" },
  { icon: <FaGithub />, url: "https://github.com/cyberfortify" },
  { icon: <FaInstagram />, url: "https://instagram.com/imadityavk" },
];

const spring = { type: "spring", stiffness: 60, damping: 16 };

export default function AboutPage() {
  // Live clock
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const hh = String(clock.getHours()).padStart(2, "0");
  const mm = String(clock.getMinutes()).padStart(2, "0");

  return (
    <main className="min-h-screen flex items-center justify-center transition-colors py-6 px-2 sm:px-4 lg:px-10">
      <div
        className="
          w-full max-w-6xl
          grid
          grid-cols-1
          gap-4
          py-4
          lg:grid-cols-[minmax(180px,1fr)_minmax(320px,2.5fr)_minmax(180px,1fr)]
        "
      >
        {/* Profile Image */}
        <motion.div
          drag
          dragElastic={0.2}
          whileTap={{ scale: 0.96 }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.05 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            overflow-hidden
            aspect-[3/4]
            w-full
            max-w-xs
            mx-auto
            lg:max-w-none
            lg:h-full
            flex items-center justify-center
            row-start-1
          "
        >
          <img
            src="/images/p1.jpg"
            alt="Profile"
            className="object-cover w-full h-full dark:grayscale"
          />
        </motion.div>

        {/* Center column: About, Skills+Time */}
        <div className="flex flex-col gap-4 order-2 lg:order-none">
          {/* About */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-6 flex flex-col justify-center shadow-xl/20 bg-white dark:bg-neutral-900"
          >
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
              Im <span className="font-black">Aditya</span>
              <br />
              <span className="font-black">Vishwakarma</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-sm font-medium max-w-2xl">
              My journey in the digital realm began 4 years ago with a fascination for technology. From my early curiosity to today's expertise, I've honed the craft of transforming ideas into captivating web products—bridging the gap between aesthetics and functionality. Let’s craft something remarkable together.
            </p>
          </motion.div>
          {/* Skills & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Skills */}
            <motion.div
              drag
              dragElastic={0.2}
              whileTap={{ scale: 0.96 }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.13 }}
              viewport={{ once: true }}
              className="shadow-xl/20 rounded-2xl p-6 flex flex-col justify-between min-h-[120px] w-full bg-white dark:bg-neutral-900"
            >
              <div className="font-extrabold text-2xl sm:text-3xl flex items-center">
                SKILLS.
              </div>
              <ul className="text-sm sm:text-base leading-tight">
                {skills.map((skill, idx) => (
                  <li key={idx} className="ml-2">{skill}</li>
                ))}
              </ul>
            </motion.div>
            {/* Time */}
            <motion.div
              drag
              dragElastic={0.2}
              whileTap={{ scale: 0.96 }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.17 }}
              viewport={{ once: true }}
              className="shadow-xl/20 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] w-full bg-white dark:bg-neutral-900"
            >
              <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-wide tabular-nums mb-2">
                {hh}:{mm}
              </span>
              <span className="block text-base font-semibold">
                {clock.getHours() >= 12 ? "PM" : "AM"}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right column: Social links, Recents, Resume */}
        <div className="flex flex-col gap-4">
          {/* Social Links with Animation */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.14 }}
            viewport={{ once: true }}
            className="shadow-xl/20 rounded-3xl p-4 flex flex-col items-center gap-2 bg-white dark:bg-neutral-900"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2, boxShadow: "0 0 12px 2px #3ecf8e88" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-lg cursor-pointer"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-lg text-xl hover:bg-lime-400 hover:text-black transition relative shadow-lg"
                  >
                    {link.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Recent Work */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.20 }}
            viewport={{ once: true }}
            className="shadow-xl/20 rounded-3xl p-4 h-[120px] sm:h-[180px] flex flex-col justify-between bg-white dark:bg-neutral-900"
          >
            <div className="font-black text-lg sm:text-2xl mb-1 tracking-tight">
              RECENTS<br />WORKS.
            </div>
            <div className="h-10 flex items-center justify-center text-gray-400 italic">
              {/* Replace with recent work summary or slider */}
              Nothing fresh right now!
            </div>
          </motion.div>
          {/* Resume Download Button */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.28 }}
            viewport={{ once: true }}
            className="rounded-3xl p-4 flex items-center justify-center bg-white dark:bg-neutral-900"
          >
            <a
              href="/Aditya_Vishwakarma_resume.pdf"
              download
              className="w-full text-center shadow-xl/20 font-semibold px-8 py-2 rounded-full hover:bg-neutral-900 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-black transition"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Cards below main grid */}
        <div className="lg:col-span-2 flex flex-col md:flex-row gap-4 mt-4 ">
          {/* Alias Card */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.23 }}
            viewport={{ once: true }}
            className="shadow-xl/20 rounded-3xl p-4 flex-1 min-w-[200px] bg-white dark:bg-neutral-900"
          >
            <span className="font-black text-xl mb-2">AKA.</span>
            <br />
            <span className="text-gray-500 text-base italic">
              Among fellow creators, I carry the alias <span className='text-lime-400 font-bold'>aditya</span>, a symbol of originality and dedication.
            </span>
          </motion.div>
          {/* Technologies Card (animated icons inside) */}
          <motion.div
            drag
            dragElastic={0.2}
            whileTap={{ scale: 0.96 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.24 }}
            viewport={{ once: true }}
            className="shadow-xl/20 rounded-3xl p-4 flex-1 min-w-[200px] bg-white dark:bg-neutral-900"
          >
            <span className="font-black text-xl mb-2">TECH.</span>
            <br />
            <div className="flex flex-wrap items-center gap-3 text-2xl text-gray-500">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30 transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-cyan-400"
              >
                <FaReact size={24} className="text-cyan-400 transition-colors duration-300" title="React" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30  transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-black dark:hover:shadow-white"
              >
                <SiNextdotjs size={24} className="text-black dark:text-white transition-colors duration-300" title="Next.js" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30 transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-blue-400"
              >
                <SiTypescript size={24} className="text-blue-400 transition-colors duration-300" title="TypeScript" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30 transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-teal-400"
              >
                <SiTailwindcss size={24} className="text-teal-400 transition-colors duration-300" title="Tailwind" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30 transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-yellow-400"
              >
                <SiPython size={24} className="text-yellow-400 transition-colors duration-300" title="Python" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-md bg-transparent hover:bg-opacity-30 transition-shadow duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-pink-400"
              >
                <SiFigma size={24} className="text-pink-400 transition-colors duration-300" title="Figma" />
              </motion.div>
              {/* Add more icons as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
