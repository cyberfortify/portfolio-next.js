'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Top Tech Stack with light/dark icons
const topStack = [
  {
    light: '/icons/html.png',
    dark: '/icons/html.png',
  },
  {
    light: '/icons/css.png',
    dark: '/icons/css.png',
  },
  {
    light: '/icons/js.png',
    dark: '/icons/js.png',
  },
  {
    light: '/icons/tailwind.png',
    dark: '/icons/tailwind.png',
  },
  {
    light: '/icons/node.png',
    dark: '/icons/node-dar.png',
  },
  {
    light: '/icons/react.png',
    dark: '/icons/react.png',
  },
  {
    light: '/icons/mongo.png',
    dark: '/icons/mongo.png',
  },
  {
    light: '/icons/next-dark.png',
    dark: '/icons/next-light.png',
  },
  {
    light: '/icons/python.png',
    dark: '/icons/python.png',
  },
];

// Bottom Tool Stack (only visible in dark mode)
const bottomStack = [
  '/icons/vs.png',
  '/icons/github.png',
  '/icons/git.png',
  '/icons/verce-dark.png',
  '/icons/jupyter.png',
];

// Framer motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsStack() {
  return (
    <section className="w-full py-16 mt-8 px-4 text-center mb-[12rem]">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl sm:text-3xl md:text-4xl font-bold mb-20"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('{ Using the Best Possible Stack }')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
            delay: 50,
            deleteSpeed: 20,
          }}
        />
      </motion.div>

      {/* Top Tech Stack */}
      <motion.div
        className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {topStack.map((icon, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative"
          >
            {/* Light Mode Icon */}
            <Image
              src={icon.light}
              alt="Tech"
              fill
              className="object-contain dark:hidden"
            />

            {/* Dark Mode Icon */}
            <Image
              src={icon.dark}
              alt="Tech Dark"
              fill
              className="object-contain hidden dark:block"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Tool Stack - Dark Mode Only */}
      <motion.div
        className="hidden dark:flex justify-center flex-wrap gap-4 sm:gap-6 opacity-30 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Vignette Gradient */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Tool Icons */}
        {bottomStack.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 relative z-20"
          >
            <Image src={src} alt="Tool" fill className="object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
