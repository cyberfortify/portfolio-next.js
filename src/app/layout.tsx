// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { MenuProvider } from '@/components/context/MenuContext'
import { ThemeProvider } from 'next-themes'
import FloatingMenuButton from '@/components/layout/FloatingNavButton'
import BottomNavigation from '@/components/layout/BottomNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya | Portfolio',
  description: 'Bringing Ideas to Reality',
}

interface RootLayoutProps {
  children: ReactNode
  showFloatingComponents?: boolean
}

export default function RootLayout({
  children,
  showFloatingComponents = true,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MenuProvider>
            {children}

            {/* Floating buttons only when showFloatingComponents=true */}
            {showFloatingComponents && (
              <>
                <FloatingMenuButton />
                <BottomNavigation />
              </>
            )}
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
