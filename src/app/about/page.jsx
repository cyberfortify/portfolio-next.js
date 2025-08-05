"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaBehance, FaGithub, FaInstagram } from "react-icons/fa";
import { PiStackSimpleDuotone } from "react-icons/pi";
import { MdStars } from "react-icons/md";

const skills = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Animator",
    "Logo Designer",
    "Versatile Programmer"
];

const links = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/" },
    { icon: <FaBehance />, url: "https://behance.net/" },
    { icon: <FaGithub />, url: "https://github.com/" },
    { icon: <PiStackSimpleDuotone size={20} />, url: "https://dribbble.com/" },
    { icon: <FaInstagram />, url: "https://instagram.com/" }
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
        <main className="min-h-screen flex items-center justify-center transition-colors py-10 px-2 sm:px-6">
            <div className="w-full max-w-screen-xl grid grid-cols-[200px_minmax(300px,_1fr)_100px] md:grid-cols-[350px_minmax(300px,_1fr)_200px] gap-2 md:gap-3 py-4 px-1 md:px-8">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...spring, delay: 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-3xl overflow-hidden md:row-span-5 h-[300px] md:h-[560px] flex items-center justify-cente"
                >
                    <img
                        src="/images/p1.jpg" // <-- Your image in /public/images/
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Center column: About, Skills+Time */}
                <div className="grid grid-cols-1 gap-4 h-[300px] md:h-[560px] ">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.10 }}
                        viewport={{ once: true }}
                        className=" rounded-3xl p-6 flex flex-col justify-center shadow-xl/20"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
                            Im <span className="font-black">Aditya</span><br />
                            <span className="font-black">Vishwakarma</span>
                        </h1>
                        <p className="text-gray-500 text-base sm:text-sm font-medium max-w-2xl">
                            My journey in the digital realm began 4 years ago with a fascination for technology. From my early curiosity to today's expertise, I've honed the craft of transforming ideas into captivating web products—bridging the gap between aesthetics and functionality. Let’s craft something remarkable together.
                        </p>
                    </motion.div>
                    {/* Skills & Time */}
                    <div className="grid grid-cols-[400px_minmax(200px,_1fr)] gap-2 md:gap-3">
                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ...spring, delay: 0.13 }}
                            viewport={{ once: true }}
                            className="shadow-xl/20 rounded-2xl p-6 flex flex-col justify-between min-h-[158px] relative"
                        >
                            <div className="font-extrabold text-2xl sm:text-3xl flex items-center">
                                SKILLS.
                            </div>
                            <ul className="text-sm sm:text-base leading-tight">
                                {skills.map((skill, idx) => (
                                    <li key={idx} className="ml-2 list-none list-inside">{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* Time */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ...spring, delay: 0.17 }}
                            viewport={{ once: true }}
                            className="shadow-xl/20 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[158px]"
                        >
                            <span className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-wide tabular-nums mb-2">
                                {hh}:{mm}
                            </span>
                            <span className="block text-base font-semibold">PM</span>
                        </motion.div>
                    </div>
                </div>
                {/* Right column: Social links, Recents, Resume */}
                <div className="grid grid-cols-1 gap-2">
                    {/* Social Link */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...spring, delay: 0.14 }}
                        viewport={{ once: true }}
                        className=" shadow-xl/20 rounded-3xl p-2 flex flex-col items-center gap-3 h-[150px] md:h-[130px]"
                    >
                        <div className="flex flex-wrap gap-2">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-13 h-13 flex items-center justify-center  rounded-lg text-xl hover:bg-lime-400 hover:text-black transition"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                    {/* Recent Work */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...spring, delay: 0.20 }}
                        viewport={{ once: true }}
                        className="shadow-xl/20 rounded-3xl p-4 h-[250px] md:h-[280px] flex flex-col justify-between"
                    >
                        <div className="font-black text-lg sm:text-3xl mb-2 tracking-tight">
                            RECENTS<br />WORKS.
                        </div>
                        <div className="h-10 flex items-center justify-center text-gray-400 italic">
                            {/* Replace with recent work summary or slider */}
                            Nothing fresh right now!
                        </div>
                    </motion.div>
                    {/* Resume Download Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.28 }}
                        viewport={{ once: true }}
                        className=" rounded-3xl p-4 flex items-center justify-center"
                    >
                        <a
                            href="/resume.pdf"
                            download
                            className="w-full shadow-xl/20 font-semibold px-[50px] py-1  rounded-full  hover:bg-neutral-900 transition"
                        >
                            Resume
                        </a>
                    </motion.div>
                </div>
                <div className="grid grid-cols-2 col-span-2 gap-2">
                    {/* Leftover/free cards in grid */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...spring, delay: 0.23 }}
                    viewport={{ once: true }}
                    className="shadow-xl/20 rounded-3xl p-4 w-[280px] md:w-[440px] "
                >
                    <span className="font-black text-xl mb-2">AKA.</span><br />
                    <span className="text-gray-400 text-base italic">
                        Within the realm of creators, I’m recognized by the alias <span className="text-lime-400 font-bold">aditya</span>.
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...spring, delay: 0.24 }}
                    viewport={{ once: true }}
                    className="shadow-xl/20 rounded-3xl p-4 w-[280px] md:w-[400px] ml-6 "
                >
                    <span className="text-gray-400 text-base italic">
                        React, Next.js, TypeScript, Tailwind, Python, Figma and more.
                    </span>
                </motion.div>
                </div>
            </div>
        </main>
    );
}
