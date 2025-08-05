"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface TextScrollProps {
  text: string
  className?: string
  href?: string
  scrollOnHover?: boolean
  velocity?: number
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export const TextScroll: React.FC<TextScrollProps> = ({
  text,
  className,
  href,
  scrollOnHover = true,
  velocity = 40,
}) => {
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [repetitions, setRepetitions] = useState(1)
  const isHovering = useRef(false)

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const textWidth = textRef.current.offsetWidth
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2
        setRepetitions(newRepetitions)
      }
    }

    calculateRepetitions()
    window.addEventListener("resize", calculateRepetitions)
    return () => window.removeEventListener("resize", calculateRepetitions)
  }, [text])

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`)

  useAnimationFrame((t, delta) => {
    if (scrollOnHover && isHovering.current) {
      const moveBy = velocity * (delta / 1000)
      baseX.set(baseX.get() + moveBy)
    }
  })

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden whitespace-nowrap group")}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      <motion.div
        className={cn("inline-block", className)}
        style={{ x }}
      >
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            <a
              href={href}
              className="hover:text-black transition-colors duration-300 px-2"
            >
              {text}
            </a>{" "}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
