"use client";

import Image from "next/image";
import {
    FiSearch,
    FiUserCheck,
    FiBook,
    FiMoon,
    FiSmartphone,
    FiHeart,
} from "react-icons/fi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";
import { motion } from "framer-motion";
import ScrollIndicator from "@/components/layout/ScrollIndicator";

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, duration: 0.6 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
    {
        id: 1,
        title: "FIX MYCODE",
        subtitle: "A MODERN CLONE OF STACK OVERFLOW",
        description:
            "Not an Amazon or Youtube clone every dev and their portfolio The FixMyCode app has: A recommendation system for posts, Global database data-fetching, AI generated answers to questions, Badge & Reputation System, Views and Voting Mechanism, Filter and Pagination for almost all pages & so much more ...",
        liveLink: "https://fixmycode.app",
        docsLink: "https://fixmycode.app/docs",
        imageSrc: "/images/fixmycode-mockup.png",
        features: [
            {
                icon: <HiOutlineCursorClick size={26} />,
                title: "Seamless One-Click Authentication",
                desc: "Effortlessly sign in with Google, Github, or Email OTP using Clerk for secure access.",
            },
            {
                icon: <FiUserCheck size={26} />,
                title: "Intelligent Recommendations",
                desc: "Our custom algorithm learns from your activity to provide personalized content.",
            },
            {
                icon: <FiSearch size={26} />,
                title: "Global Search",
                desc: "Powerful real-time search to find anything, anywhere on the platform.",
            },
            {
                icon: <MdOutlineQuestionAnswer size={26} />,
                title: "AI-Generated Answers",
                desc: "Quick, intelligent responses with our AI assistant, powered by OpenAI.",
            },
            {
                icon: <FiBook size={26} />,
                title: "Comprehensive Question Details",
                desc: "Markdown support with code blocks for clear and detailed questions and answers.",
            },
            {
                icon: <FiMoon size={26} />,
                title: "Dark and Light Mode",
                desc: "Switch between dark and light themes to suit your preference.",
            },
            {
                icon: <FiSmartphone size={26} />,
                title: "Fully Mobile Responsive Design",
                desc: "Seamless experience on any device.",
            },
            {
                icon: <FiHeart size={26} />,
                title: "Interactive Voting and Reputation System",
                desc: "Upvote and downvote to earn reputation points and badges.",
            },
        ],
    },
    {
        id: 2,
        title: "PROJECT TWO",
        subtitle: "ANOTHER EXCITING PROJECT",
        description:
            "Description for project two goes here. Highlight features, technology stack, and unique functionalities.",
        liveLink: "https://projecttwo.example",
        docsLink: "https://projecttwo.example/docs",
        imageSrc: "/images/projecttwo-mockup.png",
        features: [
            {
                icon: <FiSearch size={26} />,
                title: "Advanced Search Filters",
                desc: "Find exactly what you need using dynamic filters and sorting options.",
            },
            {
                icon: <FiBook size={26} />,
                title: "Detailed Documentation",
                desc: "Clear guides and API docs to help users get started quickly.",
            },
            {
                icon: <FiMoon size={26} />,
                title: "Dark Mode Support",
                desc: "Switch between stylish dark and light UI themes.",
            },
            {
                icon: <FiSmartphone size={26} />,
                title: "Responsive Design",
                desc: "Perfect user experience across all devices and screen sizes.",
            },
        ],
    },
    // Add more projects following the same structure
];

export default function ProjectsPage() {
    return (
        <>
            <ScrollIndicator />
            <main className=" min-h-screen  pt-10 pb-24 flex flex-col gap-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="flex flex-col gap-16"
                    >
                        {/* Project Highlight Section */}
                        <motion.section
                            className="w-full px-5 md:px-20 py-5"
                            variants={itemVariants}
                        >
                            <div
                                className={`flex flex-col lg:flex-row items-center gap-10 w-full ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Left: Project details */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold text-lime-400 leading-none">
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </h2>
                                    <h1 className="text-[2.2rem] sm:text-5xl mb-3 mt-1 leading-tight">
                                        {project.title}
                                    </h1>
                                    <p className="text-base text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                                        {project.subtitle}
                                    </p>
                                    <p className="mb-6 text-gray-400 text-base font-medium">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4 flex-wrap">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-full bg-lime-400 text-black font-semibold text-base shadow hover:bg-lime-500 transition"
                                        >
                                            Go to Live Website
                                        </a>
                                        <a
                                            href={project.docsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-full font-medium text-base shadow hover:bg-gray-200 hover:text-black transition"
                                        >
                                            Check How to use
                                        </a>
                                    </div>
                                </div>
                                {/* Right: Project image */}
                                <motion.div
                                    className="flex-1 flex justify-center w-full"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={project.imageSrc}
                                        alt={`${project.title} Project`}
                                        width={540}
                                        height={340}
                                        className="rounded-3xl object-cover drop-shadow-lg border border-neutral-800"
                                    />
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* Outstanding Features Section */}
                        <motion.section
                            className="px-5 md:px-20 pt-8 pb-2 w-full"
                            variants={itemVariants}
                        >
                            <div className="flex items-center justify-end flex-wrap mb-8">
                                <div className="text-right">
                                    <span className="text-2xl">🍥</span>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                        THE OUTSTANDING
                                        <br />
                                        <span className="text-lime-400 inline">FEATURES</span>
                                    </h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-3 w-full">
                                {project.features.map((feature, idx) => (
                                    <FeatureCard
                                        key={idx}
                                        icon={feature.icon}
                                        title={feature.title}
                                        desc={feature.desc}
                                    />
                                ))}
                            </div>
                        </motion.section>
                    </motion.div>
                ))}
            </main>
        </>
    );
}

function FeatureCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <motion.div
            className="border border-neutral-800 p-5 rounded-xl flex flex-col items-start gap-2 min-h-[155px] shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-lime-400 mb-1">{icon}</span>
            <h3 className="font-bold text-base md:text-lg tracking-tight">{title}</h3>
            <p className="text-gray-600 text-sm md:text-[1rem]">{desc}</p>
        </motion.div>
    );
}
