import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScroll } from "@/components/ui/text-scroll";
import { useMenu } from "@/components/context/MenuContext";

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

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white w-10 h-10 sm:w-20 sm:h-10 shadow-md rounded-full flex items-center justify-center text-xl font-bold transition"
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
            {/* Close Button inside menu */}
            <button
              onClick={() => setIsOpen(false)}
            >
              
            </button>

            {/* Menu Scroll Items */}
            <div className="w-full max-w-7xl overflow-hidden py-10">
              <hr className="border-t border-black dark:border-gray-300" />

              <TextScroll {...scrollProps("Turning ideas into reality.", "#projects", -10)} />
              <TextScroll {...scrollProps("Scroll through the stories.", "#blogs", 10)} />
              <TextScroll {...scrollProps("Who is Aditya?", "#about", -10)} />

              <hr className="border-t border-black dark:border-gray-300" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
