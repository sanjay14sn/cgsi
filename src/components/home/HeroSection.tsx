import React from "react";
import { motion } from "framer-motion";

const logo =
  "https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png";

const desktopBg =
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782105893/Untitled_design_iug9qk.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex flex-col">
      {/* Logo + title + description */}
      <div className="bg-[#E1C7C4] w-full">
        <div className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12">
          <div className="flex justify-center">
            <motion.img
              src={logo}
              alt="CGSI Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[min(88vw,22rem)] sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto drop-shadow-2xl select-none"
            />
          </div>

          <div className="container mx-auto px-5 sm:px-6 md:px-8 pt-4 md:pt-6">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-slate-900"
              >
                Cosmetic Gynecology
                <br />
                Society of India
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-slate-800 font-semibold px-2"
              >
                The Cosmetic Gynecology Society of India (CGSI) is a professional organization dedicated to advancing cosmetic, functional, and regenerative gynecology through education, clinical training, scientific research, and evidence-based practice.
                <br />
                <br />
                We promote multidisciplinary collaboration, uphold ethical standards, and strive to enhance the quality, safety, and advancement of women's intimate healthcare across India.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Group photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <img
          src={desktopBg}
          alt="CGSI Members"
          className="w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[500px] xl:h-[580px] object-cover object-center select-none"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
