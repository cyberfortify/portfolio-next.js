"use client"
import ThemeToggleButton from "../ui/theme-toggle-button"
import { useMenu } from "@/components/context/MenuContext"
import Link from "next/link"

export default function BottomNavigation() {
  const { isOpen } = useMenu()

  if (isOpen) return null // Hide when menu is open

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border border-gray-300 rounded-full shadow-md px-3 sm:px-6 py-2 flex items-center justify-center gap-3 sm:gap-6 z-50 w-auto max-w-full whitespace-nowrap overflow-x-auto">
      <ThemeToggleButton variant="gif" url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN6a29sN2M4MGR6M292MDFsZnNjZWhkaTVoeGFlMG1ibzNkcWRsMSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/h2MouomJFCpMfWVfUj/giphy.gif" />

      <button className="text-xs sm:text-sm md:text-base font-medium hover:text-lime-500 transition">
        Home
      </button>
      <button className="text-xs sm:text-sm md:text-base font-medium hover:text-lime-500 transition">
        Who is Aditya?
      </button>
      <Link
        href="#"
        className="text-xs sm:text-sm md:text-base font-medium text-gray-400 hover:text-lime-500 transition"
      >
        My Projects
      </Link>

      <Link
        href="#"
        className="text-xs sm:text-sm md:text-base font-medium text-gray-400 hover:text-lime-500 transition"
      >
        My Designs
      </Link>
    </div>
  )
}
