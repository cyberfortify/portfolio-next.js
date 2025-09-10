"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  "Hello",          // animated (first)
  "Bonjour",
  "こんにちは",
  "नमस्ते",
  "你好",
  "Привет",
  "Hola",           // animated (last)
]

export default function WelcomeFlicker({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1
        if (next === greetings.length) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            onComplete()  // Trigger Hero reveal
          }, 500)
        }
        return next % greetings.length
      })
    }, 300)
    return () => clearInterval(interval)
  }, [onComplete])

  const isAnimated = index === 0 || index === greetings.length - 1

  if (!visible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      {isAnimated ? (
        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[index]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      ) : (
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide text-center">
          {greetings[index]}
        </h1>
      )}
    </div>
  )
}
