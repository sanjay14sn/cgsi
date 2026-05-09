"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/animations";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/home/EventsSection";
import AboutSection from "@/components/home/AboutSection";
import PresidentMessage from "@/components/home/PresidentMessage";
import TeamSection from "@/components/home/TeamSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import PreviousEvents from "@/components/home/PreviousEvents";
import ScrollToTop from "@/components/ui/ScrollToTop";
import GynecologySection from "@/components/home/GynecologySection";
import VideoSection from "@/components/home/VideoSection"; // 1. Import the component


const SplashScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
  >
    {/* Subtle Animated Background Glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
    />

    <div className="relative z-10 flex flex-col items-center">
      {/* Logo: Increased 3x (w-96 = 384px) with floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-96 h-96 mb-8 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png"
          alt="Logo"
          className="w-full h-full object-contain"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </motion.div>

      {/* Typography Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-serif font-light tracking-tight text-primary">
          CGSI
        </h2>
        <div className="h-[1px] w-12 bg-accent/40 mx-auto my-3" />
        <h3 className="text-sm font-medium text-accent tracking-[0.15em] uppercase">
          Cosmetic Gynecology Society of India
        </h3>

      </motion.div>
    </div>
  </motion.div>
);


const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Reduced to 2s for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Layout>
            <FadeIn>
              <HeroSection />
            </FadeIn>

            {/* Added a wrapper with z-index to ensure it sits above any layout backgrounds */}



            <FadeIn delay={0.4}>
              <AboutSection />
            </FadeIn>

            <FadeIn delay={0.3}>
              <PresidentMessage />
            </FadeIn>
            <FadeIn delay={0.3}>
              <TeamSection />
            </FadeIn>
            <FadeIn delay={0.75}>
              <VideoSection />
            </FadeIn>




            <FadeIn delay={0.3}>
              <EventsSection />
            </FadeIn>

            {/* 2. Insert Video Section here */}

            <FadeIn delay={0.8}>
              <ProgramsSection />
            </FadeIn>




            <ScrollToTop />
          </Layout>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
