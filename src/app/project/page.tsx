"use client";

import Image from "next/image";
import {
    FiCheckSquare,
    FiTrendingUp,
    FiSearch,
    FiSettings,
    FiShoppingCart,
    FiGlobe,
    FiCpu,
    FiMail,
    FiClock,
    FiGithub,
    FiBarChart2,
    FiFileText,
    FiPhone,
    
} from "react-icons/fi";
import { MdSecurity,MdPhoneIphone, MdOutlineDataUsage, MdAnalytics } from "react-icons/md";
import {
    HiOutlineUsers,
    HiOutlineClipboardList,
    HiOutlineCheckCircle,
    HiOutlineCalendar,
    HiOutlineCursorClick,
    HiOutlineDocumentText,
    HiOutlineDatabase,
    HiOutlineUserGroup,
    HiOutlineCode,
    HiOutlineChartBar,
    HiOutlineLightBulb,
} from "react-icons/hi";
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
    // Portfolio next
    {
        id: 1,
        title: "portfolio-next.js",
        subtitle: "Next.js Portfolio Site",
        description: "Modern developer portfolio built with Next.js and TypeScript for fast, SEO-optimized personal branding and project showcases.",
        liveLink: "https://imadityavk.vercel.com",
        docsLink: "https://github.com/cyberfortify/portfolio-next.js",
        imageSrc: "/projects/portfolio.png",
        features: [
            {
                icon: <MdPhoneIphone size={24} />,
                title: "Mobile Responsive",
                desc: "Fully polished on all device sizes from phones to desktops.",
            },
            {
                icon: <HiOutlineCode size={24} />,
                title: "TypeScript",
                desc: "Built with strict TypeScript for scalable and maintainable code.",
            },
            {
                icon: <HiOutlineLightBulb size={24} />,
                title: "SEO Optimized",
                desc: "Optimized metadata and structure for best SEO results with Next.js.",
            },
        ],
    },
    // my portfolio
    {
        id: 2,
        title: "my-portfolio",
        subtitle: "React Portfolio Website",
        description: "A stylish personal developer portfolio featuring smooth animations and fully responsive layout built with React, Tailwind CSS, and Framer Motion.",
        liveLink: "https://my-portfolio-uoiw.vercel.app/",
        docsLink: "https://github.com/cyberfortify/my-portfolio",
        imageSrc: "/projects/portfolio2.png",
        features: [
            {
                icon: <FiGlobe size={24} />,
                title: "Responsive Design",
                desc: "Designed to look great on all screen sizes with Tailwind CSS.",
            },
            {
                icon: <FiSettings size={24} />,
                title: "Framer Motion",
                desc: "Smooth animations with Framer Motion for engaging UI experience.",
            },
            {
                icon: <HiOutlineDocumentText size={24} />,
                title: "Easy to Customize",
                desc: "Simple configuration to add or update content and projects.",
            },
        ],
    },
    // fundraising-intern-portal
    {
        id: 3,
        title: "fundraising-intern-portal",
        subtitle: "Internship Portal",
        description: "A portal for managing fundraising intern applications, built with React and JavaScript for robust applicant tracking.",
        liveLink: "https://fundraising-intern-portal-lyart.vercel.app/",
        docsLink: "https://github.com/cyberfortify/fundraising-intern-portal",
        imageSrc: "/projects/fund.png",
        features: [
            {
                icon: <HiOutlineUserGroup size={24} />,
                title: "Applicant Tracking",
                desc: "Manage and view intern applications with ease.",
            },
            {
                icon: <FiMail size={24} />,
                title: "Email Notifications",
                desc: "Automated notifications for applicants and admins.",
            },
            {
                icon: <HiOutlineDatabase size={24} />,
                title: "Data Persistence",
                desc: "Stores application data reliably for future reference.",
            },
        ],
    },
    // shopping-cart-react
    {
        id: 4,
        title: "shopping-cart-react",
        subtitle: "React Shopping Cart",
        description: "A simple yet powerful shopping cart demo in React, demonstrating state management and e-commerce logic.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/shopping-cart-react",
        imageSrc: "/projects/shopping-cart.jpg",
        features: [
            {
                icon: <FiShoppingCart size={24} />,
                title: "Dynamic Cart Management",
                desc: "Add, remove, and update items seamlessly in the cart.",
            },
            {
                icon: <FiCpu size={24} />,
                title: "State Management",
                desc: "Handles state using React hooks and context for efficiency.",
            },
            {
                icon: <MdPhoneIphone size={24} />,
                title: "Mobile Friendly",
                desc: "Responsive UI that adjusts for smaller screens.",
            },
        ],
    },
    // naukri-profile-updater
    {
        id: 5,
        title: "naukri-profile-updater",
        subtitle: "Naukri Profile Automation",
        description: "A Python automation tool to update Naukri.com profiles and boost job-seeker engagement.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/naukri-profile-updater",
        imageSrc: "/projects/naukri.jpg",
        features: [
            {
                icon: <MdSecurity size={24} />,
                title: "Secure Automation",
                desc: "Safe and automated access with encrypted credentials.",
            },
            {
                icon: <FiClock size={24} />,
                title: "Scheduled Updates",
                desc: "Runs scheduled profile updates effortlessly.",
            },
            {
                icon: <HiOutlineCursorClick size={24} />,
                title: "One-Click Run",
                desc: "Simple interface to trigger updates anytime.",
            },
        ],
    },
    // employee-report-app
    {
        id: 6,
        title: "employee-report-app",
        subtitle: "Employee Reporting App",
        description: "A simple app to generate and manage employee reports—track attendance, leaves, and more using Python (Flask backend).",
        liveLink: "https://employee-report-app.streamlit.app/",
        docsLink: "https://github.com/cyberfortify/employee-report-app",
        imageSrc: "/projects/era.png",
        features: [
            {
                icon: <FiFileText size={24} />,
                title: "Report Generation",
                desc: "Generate detailed reports for employee attendance and leaves.",
            },
            {
                icon: <HiOutlineDatabase size={24} />,
                title: "Data Storage",
                desc: "Stores employee data efficiently in backend databases.",
            },
            {
                icon: <HiOutlineDocumentText size={24} />,
                title: "Export Options",
                desc: "Export reports as PDFs or Excel sheets.",
            },
        ],
    },
    // Alibaba_RFQ_Scraper
    {
        id: 7,
        title: "Alibaba_RFQ_Scraper",
        subtitle: "Alibaba RFQ Scraper",
        description: "A Python script to automatically scrape RFQs (Requests for Quotation) from Alibaba, making procurement research easier.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/Alibaba_RFQ_Scraper",
        imageSrc: "/projects/Aibaba.png",
        features: [
            {
                icon: <FiGlobe size={24} />,
                title: "Web Scraping",
                desc: "Automates extraction of RFQ data from Alibaba.",
            },
            {
                icon: <MdOutlineDataUsage size={24} />,
                title: "Data Cleaning",
                desc: "Filters and organizes scraped data for usability.",
            },
            {
                icon: <FiFileText size={24} />,
                title: "Export Data",
                desc: "Outputs data in CSV or JSON formats.",
            },
        ],
    },
    // 3D_Website_Animation
    {
        id: 8,
        title: "3D_Website_Animation",
        subtitle: "3D Website Animations",
        description: "Collection of HTML and CSS files for stunning 3D effects and animated web layouts.",
        liveLink: "https://3d-website-animation.vercel.app/",
        docsLink: "https://github.com/cyberfortify/3D_Website_Animation",
        imageSrc: "/projects/3d.png",
        features: [
            {
                icon: <HiOutlineLightBulb size={24} />,
                title: "Creative Effects",
                desc: "Variety of 3D animations to enhance web UX/UI.",
            },
            {
                icon: <MdPhoneIphone size={24} />,
                title: "Cross-Browser Compatible",
                desc: "Works smoothly across modern browsers and devices.",
            },
        ],
    },
    // employee-management-system
    {
        id: 9,
        title: "employee-management-system",
        subtitle: "Employee Management System",
        description: "A JavaScript-based application to manage employees, attendance and payroll for small businesses.",
        liveLink: "https://employee-management-system-nu-rose.vercel.app/",
        docsLink: "https://github.com/cyberfortify/employee-management-system",
        imageSrc: "/projects/ems.png",
        features: [
            {
                icon: <HiOutlineUsers size={26} />,
                title: "Employee Directory",
                desc: "Manage employee profiles with detailed information and roles.",
            },
            {
                icon: <FiCheckSquare size={26} />,
                title: "Attendance Tracking",
                desc: "Monitor daily attendance and leaves with automatic status updates.",
            },
            {
                icon: <HiOutlineCalendar size={26} />,
                title: "Shift Scheduling",
                desc: "Create and manage employee shifts and schedules efficiently.",
            },
            {
                icon: <FiFileText size={26} />,
                title: "Payroll Management",
                desc: "Calculate salaries, bonuses, and deductions automatically.",
            },
            {
                icon: <MdPhoneIphone size={26} />,
                title: "Mobile Friendly",
                desc: "Access management features on any device with a responsive UI.",
            },
            {
                icon: <MdSecurity size={26} />,
                title: "User Authentication",
                desc: "Secure login system to protect sensitive employee data.",
            },
        ],
    },
    // to-do-flask-app
    {
        id: 10,
        title: "to-do-flask-app",
        subtitle: "Flask To-Do App",
        description: "A minimalist to-do list application with backend powered by Flask.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/to-do-flask-app",
        imageSrc: "/projects/todo-flas.jpg",
        features: [
            {
                icon: <FiCheckSquare size={26} />,
                title: "Task Management",
                desc: "Create, update, and delete tasks with ease.",
            },
            {
                icon: <FiClock size={26} />,
                title: "Due Date Tracking",
                desc: "Set deadlines and get reminders for pending tasks.",
            },
            {
                icon: <FiTrendingUp size={26} />,
                title: "Priority Levels",
                desc: "Organize tasks according to urgency and importance.",
            },
            {
                icon: <HiOutlineClipboardList size={26} />,
                title: "Task Categorization",
                desc: "Group tasks by category or project for better organization.",
            },
            {
                icon: <MdPhoneIphone size={26} />,
                title: "Responsive Design",
                desc: "Perfect user experience on desktop and mobile browsers.",
            },
            {
                icon: <MdSecurity size={26} />,
                title: "Secure Backend",
                desc: "Flask backend ensures data integrity and privacy.",
            },
        ],
    },
    // Youtube_Trending_Video_Analysis
    {
        id: 11,
        title: "Youtube_Trending_Video_Analysis",
        subtitle: "YouTube Trending Video Analyzer",
        description: "Explore YouTube trending videos via Jupyter notebooks for data-driven insights.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/Youtube_Trending_Video_Analysis",
        imageSrc: "/projects/yt-trending.png",
        features: [
            {
                icon: <FiBarChart2 size={26} />,
                title: "Data Visualization",
                desc: "Clear and interactive visual representation of trending video data.",
            },
            {
                icon: <FiSearch size={26} />,
                title: "Trend Analysis",
                desc: "Identify patterns using views, likes, and engagement stats.",
            },
            {
                icon: <MdAnalytics size={26} />,
                title: "Jupyter Notebook",
                desc: "Fully documented code for repeatable analysis and sharing.",
            },
            {
                icon: <FiFileText size={26} />,
                title: "Export Reports",
                desc: "Save analysis results in CSV or PDF formats.",
            },
        ],
    },
    // Netflix-Viewing-Habits-Analysis
    {
        id: 12,
        title: "Netflix-Viewing-Habits-Analysis",
        subtitle: "Netflix Data Analysis",
        description: "Deep analysis of Netflix viewing habits using Jupyter Notebook and Python.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/Netflix-Viewing-Habits-Analysis",
        imageSrc: "/projects/netflix.png",
        features: [
            {
                icon: <MdAnalytics size={26} />,
                title: "User Behavior Insights",
                desc: "Analyze viewing patterns across different age groups and genres.",
            },
            {
                icon: <FiBarChart2 size={26} />,
                title: "Interactive Charts",
                desc: "Visualize data trends clearly with interactive plotting libraries.",
            },
            {
                icon: <FiFileText size={26} />,
                title: "Comprehensive Reports",
                desc: "Detailed reports ready for presentation or further study.",
            },
        ],
    },
    // Superstore-Sales-Analysis
    {
        id: 13,
        title: "Superstore-Sales-Analysis",
        subtitle: "Sales Data Dashboard",
        description: "Sales data analysis of Superstore dataset visualized in a Jupyter notebook format.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/Superstore-Sales-Analysis",
        imageSrc: "/projects/superstor.png",
        features: [
            {
                icon: <FiTrendingUp size={26} />,
                title: "Sales Trend Analysis",
                desc: "Explore sales growth and seasonal trends over time.",
            },
            {
                icon: <FiBarChart2 size={26} />,
                title: "Regional Insights",
                desc: "Breakdown of sales performance by region and store.",
            },
            {
                icon: <MdOutlineDataUsage size={26} />,
                title: "Data Cleaning & Processing",
                desc: "Well-prepared dataset suitable for robust analytics.",
            },
        ],
    },
    // final_year_project
    {
        id: 14,
        title: "final_year_project",
        subtitle: "Final Year Project",
        description: "My university capstone project (code private), demonstrating advanced frontend/backend integration.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/final_year_project",
        imageSrc: "/projects/final-year-project.png",
        features: [
            {
                icon: <HiOutlineCode size={26} />,
                title: "Full-Stack Integration",
                desc: "Seamless integration of frontend UI with backend services.",
            },
            {
                icon: <MdSecurity size={26} />,
                title: "Secure Data Handling",
                desc: "Ensures data privacy and integrity throughout processes.",
            },
            {
                icon: <FiSettings size={26} />,
                title: "Scalable Architecture",
                desc: "Designed for easy feature expansion and maintenance.",
            },
        ],
    },
    // AICTE_Steganography
    {
        id: 15,
        title: "AICTE_Steganography",
        subtitle: "AICTE Steganography Tool",
        description: "A Python mini-project for hiding messages in images (steganography) as per AICTE requirements.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/AICTE_Steganography",
        imageSrc: "/projects/steganography.jpg",
        features: [
            {
                icon: <MdSecurity size={26} />,
                title: "Data Hiding",
                desc: "Embed secret messages securely within images.",
            },
            {
                icon: <MdPhoneIphone size={26} />,
                title: "Cross-Platform",
                desc: "Works on multiple OS with Python support.",
            },
            {
                icon: <FiFileText size={26} />,
                title: "Message Extraction",
                desc: "Retrieve and decode hidden data reliably.",
            },
        ],
    },
    // location_address_flow
    {
        id: 16,
        title: "location_address_flow",
        subtitle: "Location Address Flow",
        description: "A workflow tool to validate and process address information using JavaScript.",
        liveLink: "#",
        docsLink: "https://github.com/cyberfortify/location_address_flow",
        imageSrc: "/projects/location.jpg",
        features: [
            {
                icon: <FiSettings size={26} />,
                title: "Address Validation",
                desc: "Accurate verification of location data for consistency.",
            },
            {
                icon: <FiGlobe size={26} />,
                title: "Interactive Mapping",
                desc: "Visualize addresses on integrated map views.",
            },
            {
                icon: <FiSearch size={26} />,
                title: "Search Optimization",
                desc: "Efficient processing and matching of address inputs.",
            },
            {
                icon: <HiOutlineClipboardList size={26} />,
                title: "Workflow Automation",
                desc: "Streamlines address-related processes for faster results.",
            },
        ],
    },
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
