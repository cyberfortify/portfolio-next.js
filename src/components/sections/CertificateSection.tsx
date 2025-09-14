"use client";

import { Carousel_001 } from "@/components/ui/skiper-ui/skiper47";

const CertificateSection = () => {
  const images = [
    { src: "/certificates/1.png", alt: "Full Stack Web Development Certificate" },
    { src: "/certificates/2.png", alt: "Python Programming Certificate" },
    { src: "/certificates/3.png", alt: "Data Analysis Certificate" },
    { src: "/certificates/4.png", alt: "Cloud Computing Certificate" },
    { src: "/certificates/5.jpg", alt: "Full Stack Web Development Certificate" },
    { src: "/certificates/6.jpg", alt: "Python Programming Certificate" },
    { src: "/certificates/7.png", alt: "Data Analysis Certificate" },
    { src: "/certificates/8.png", alt: "Cloud Computing Certificate" },
  ];

  return (
    <section id="certificates" className="relative py-50">
      {/* 🔥 Dark mode vignette effect + vertical faded text */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        {/* Vertical faded text on the left */}
        <h1 className="absolute 
               left-[-60px] sm:left-[-80px] md:left-[-100px] lg:left-[-135px] 
               top-1/2 -translate-y-1/2 rotate-90 
               text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] 
               font-black text-white/10 z-0 select-none pointer-events-none whitespace-nowrap">
          Aditya
        </h1>
        {/* Decorative vignette */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/20 to-transparent" />
      </div>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
        My Certifications
      </h2>

      {/* Dark mode subtitle / description */}
      <p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-300 mb-12 px-6">
        Here are some of the certifications I&apos;ve earned through dedication and hard work. Explore my journey in full stack development, Python, data analysis, and cloud computing.
      </p>


      {/* Carousel */}
      <div className="max-w-5xl mx-auto flex justify-center px-4">
        <Carousel_001
          images={images}
          showPagination
          showNavigation
          loop
          autoplay
          spaceBetween={40}
          className="w-full max-w-4xl"
        />
      </div>
    </section>
  );
};

export default CertificateSection;
