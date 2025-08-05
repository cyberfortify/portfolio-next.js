"use client"

import { useState } from "react"
import WelcomeFlicker from "@/components/sections/WelcomeFlicker"
import HeroIntro from "@/components/sections/HeroIntro"
import FloatingMenuButton from "@/components/layout/FloatingNavButton"
import BottomNavigation from "@/components/layout/BottomNavigation"
import ContactModal from "@/components/layout/ContactModal"
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsStack from "@/components/sections/SkillsStack"
import ContactSection from "@/components/sections/ContactSection"

export default function HomePage() {
  const [showHero, setShowHero] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {!showHero && <WelcomeFlicker onComplete={() => setShowHero(true)} />}

      {showHero && (
        <>
          {/* Hero Section + Button */}
          <HeroIntro onOpenContact={() => setIsContactOpen(true)} />
          <AboutSection />
          <ProjectsSection />
          <SkillsStack/>
          <ContactSection/>
          <FloatingMenuButton />
          <BottomNavigation />

          {/* Contact Modal */}
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </>
      )}
    </>
  )
}
