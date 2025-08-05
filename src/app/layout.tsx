import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { MenuProvider } from '@/components/context/MenuContext'
import { ThemeProvider } from 'next-themes' // ✅ Theme provider import

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya | Portfolio',
  description: 'Bringing Ideas to Reality',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MenuProvider>
            {children}
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
