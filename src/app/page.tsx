"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/layout/Preloader"; // New preloader
import HeroIntro from "@/components/sections/HeroIntro";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
// import SkillsStack from "@/components/sections/SkillsStack";
import ContactSection from "@/components/sections/ContactSection";
import FloatingMenuButton from "@/components/layout/FloatingNavButton";
import BottomNavigation from "@/components/layout/BottomNavigation";
import ContactModal from "@/components/layout/ContactModal";
import CertificateSection from "@/components/sections/CertificateSection";

export default function HomePage() {
  const [showHero, setShowHero] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);


  return (
    <>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {!showHero && <Preloader onComplete={() => setShowHero(true)} />}
      </AnimatePresence>

      {/* Main Page Content */}
      {showHero && (
        <>
          <HeroIntro onOpenContact={() => setIsContactOpen(true)} />
          <AboutSection />
          <ProjectsSection />
          <CertificateSection />
          <Skiper31 />
          {/* <SkillsStack /> */}


          <ContactSection />

          {/* Floating Buttons (appear only after preloader) */}
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
  );
}
