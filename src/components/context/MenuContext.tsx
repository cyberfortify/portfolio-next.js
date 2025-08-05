"use client"
import { createContext, useContext, useState } from "react"

type MenuContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const MenuContext = createContext<MenuContextType | null>(null)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) throw new Error("useMenu must be used within a MenuProvider")
  return context
}

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
