'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔹 Rainbow Border Input Component
const RainbowBorderInput = ({
  placeholder,
  type = 'text',
  className = '',
}: {
  placeholder: string;
  type?: string;
  className?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`rounded-lg p-[2px] transition-all duration-300 ${
        isFocused 
          ? 'bg-[length:300%_300%] animate-gradient shadow-glow' 
          : 'bg-gray-300 dark:bg-gray-600'
      } bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
    >
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full rounded-lg px-4 py-3 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${className}`}
      />
    </div>
  );
};

// 🔹 Rainbow Border Textarea Component
const RainbowBorderTextarea = ({
  placeholder,
}: {
  placeholder: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`rounded-lg p-[2px] transition-all duration-300 ${
        isFocused 
          ? 'bg-[length:300%_300%] animate-gradient shadow-glow' 
          : 'bg-gray-300 dark:bg-gray-600'
      } bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
    >
      <textarea
        placeholder={placeholder}
        rows={4}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full rounded-lg px-4 py-3 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
      />
    </div>
  );
};

// 🔹 Contact Modal Component
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl max-w-md w-full relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl transition-colors"
              aria-label="Close contact form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Let's Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                We'll get back to you within 24 hours
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <RainbowBorderInput placeholder="First name" />
                </div>
                <div className="flex-1">
                  <RainbowBorderInput placeholder="Last name" />
                </div>
              </div>
              
              <RainbowBorderInput type="email" placeholder="Email Address" />
              
              <RainbowBorderTextarea placeholder="Your message" />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}