"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScroll } from "@/components/ui/text-scroll";
import { useMenu } from "@/components/context/MenuContext";
import { Skiper58 } from "@/components/ui/skiper-ui/skiper58";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function FloatingNavButton() {
  const { isOpen, setIsOpen } = useMenu();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const scrollProps = (text: string, href: string, velocity: number) => ({
    text,
    href,
    velocity,
    scrollOnHover: !isTouchDevice,
    className: `text-[5rem] font-bold text-gray-800 dark:text-gray-100 hover:bg-yellow-400 ${isTouchDevice ? "animate-scroll" : ""
      }`,
  });

  // Social links array
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/imadityavk" },
    { icon: <FaGithub />, url: "https://github.com/cyberfortify" },
    { icon: <FaInstagram />, url: "https://instagram.com/imadityavkx" },
    { icon: <FaTwitter />, url: "https://twitter.com/imadityvkx" }, // Example, add/remove as needed
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white w-10 h-10 sm:w-20 sm:h-10 shadow-md rounded-full flex items-center justify-center text-xl font-bold transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "X" : "≡"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col justify-center items-center"
          >
            {/* Navigation Items (New Skiper58) */}
            <Skiper58 />

            {/* Social Media Icons */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-6">
              {socialLinks.map(({ icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-100 hover:text-yellow-400 text-2xl transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
