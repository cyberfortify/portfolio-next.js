"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full", className)}
    >
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={loop}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } : false}
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center !w-[250px] sm:!w-[300px] md:!w-[350px] lg:!w-[400px] h-auto"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="swiper-button-next after:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <ChevronRightIcon className="h-6 w-6 text-black dark:text-white" />
            </div>
            <div className="swiper-button-prev after:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <ChevronLeftIcon className="h-6 w-6 text-black dark:text-white" />
            </div>
          </>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_001 };
