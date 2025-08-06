"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScroll } from "@/components/ui/text-scroll";
import { useMenu } from "@/components/context/MenuContext";
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
    className: `text-[5rem] font-bold text-gray-800 dark:text-gray-100 hover:bg-yellow-400 ${
      isTouchDevice ? "animate-scroll" : ""
    }`,
  });

  // Social links array
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/aditya-vk-professional" },
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
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col justify-center items-center"
          >
            {/* Close Button inside menu (optional, you can style or remove) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 dark:text-gray-300"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Menu Scroll Items */}
            <div className="w-full max-w-7xl overflow-hidden py-10">
              <hr className="border-t border-black dark:border-gray-300" />

              <TextScroll {...scrollProps("Turning ideas into reality.", "/project", -10)} />
              <TextScroll {...scrollProps("Scroll through the stories.", "https://www.instagram.com/imadityvkx", 10)} />
              <TextScroll {...scrollProps("Who is Aditya?", "/about", -10)} />

              <hr className="border-t border-black dark:border-gray-300" />
            </div>

            {/* Social Media Icons at Bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {socialLinks.map(({ icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-100 hover:text-yellow-400 transition text-2xl"
                  aria-label={`Link to social profile`}
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
