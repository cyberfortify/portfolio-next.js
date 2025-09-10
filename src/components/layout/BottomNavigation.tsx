"use client"
import ThemeToggleButton from "../ui/theme-toggle-button"
import { useMenu } from "@/components/context/MenuContext"
import Link from "next/link"

export default function BottomNavigation() {
  const { isOpen } = useMenu()

  if (isOpen) return null // Hide when menu is open

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border border-gray-300 rounded-full shadow-md px-3 sm:px-6 py-2 flex items-center justify-center gap-3 sm:gap-6 z-50 w-auto max-w-full whitespace-nowrap overflow-x-auto">
      <ThemeToggleButton variant="circle" start="center" />

      <Link
        href='/'
        className="text-xs sm:text-sm md:text-base font-medium hover:text-lime-500 transition"
      >
        Home
      </Link>
      <button className="text-xs sm:text-sm md:text-base font-medium hover:text-lime-500 transition">
        Who is Aditya?
      </button>
      <Link
        href="/project"
        className="text-xs sm:text-sm md:text-base font-medium text-gray-500 hover:text-lime-500 transition"
      >
        My Projects
      </Link>
    </div>
  )
}
