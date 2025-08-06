"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com"; // or '@emailjs/browser'

// 🔹 Rainbow Border Input Component
const RainbowBorderInput = ({
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
  name,
  disabled = false,
}: {
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`rounded-lg p-[2px] transition-all duration-300 ${
        isFocused
          ? "bg-[length:300%_300%] animate-gradient shadow-glow"
          : "bg-gray-300 dark:bg-gray-600"
      } bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg px-4 py-3 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${className}`}
        required
        disabled={disabled}
      />
    </div>
  );
};

// 🔹 Rainbow Border Textarea Component
const RainbowBorderTextarea = ({
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
}: {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  disabled?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`rounded-lg p-[2px] transition-all duration-300 ${
        isFocused
          ? "bg-[length:300%_300%] animate-gradient shadow-glow"
          : "bg-gray-300 dark:bg-gray-600"
      } bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500`}
    >
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg px-4 py-3 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
        required
        disabled={disabled}
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
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showPopup, setShowPopup] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_dhvhi7e", // Your Service ID
        "template_i5klu6d", // Your Template ID
        {
          from_name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
        },
        "u-b3b-DWHEoVQQW0n" // Your Public Key
      );
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });

      // Close modal immediately
      onClose();

      // Show popup after modal closes (~350ms) and auto-hide after 3 seconds
      setTimeout(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }, 350);
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
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
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl transition-colors"
                aria-label="Close contact form"
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <RainbowBorderInput
                      placeholder="First name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex-1">
                    <RainbowBorderInput
                      placeholder="Last name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                </div>

                <RainbowBorderInput
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                />

                <RainbowBorderTextarea
                  placeholder="Your message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>

              {/* Error Feedback */}
              {status === "error" && (
                <div className="mt-4 text-red-600 font-semibold text-center">
                  Something went wrong. Please try again or contact me via email.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup notification outside of modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-lg px-6 py-3 shadow-lg z-60"
          >
            Message sent successfully! Thank you for reaching out.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
