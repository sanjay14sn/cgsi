import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  ChevronRight,
  Activity,
  Globe,
  Award,
  Users,
  BookOpen
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">

        {/* --- HERO SECTION --- */}
        {/* Adjusted padding-top from pt-32 to pt-20 and padding-bottom from pb-16 to pb-10 to push the image up and reduce space below */}
        <section className="relative pt-20 pb-10 overflow-hidden bg-white"> <div className="w-full relative z-10"> <StaggerContainer className="text-center w-full mx-auto"> <StaggerItem> <div className="relative w-full flex justify-center items-center overflow-hidden h-[300px] md:h-[450px] -mt-4"> {/* Full width image with slight fade (opacity) */} <img src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778326290/WhatsApp_Image_2026-05-09_at_5.00.46_PM_ttmsjg.jpg" alt="CGSI Banner" className="absolute inset-0 w-full h-full object-cover opacity-60" /> {/* Overlaying "About Us" Text */} <div className="relative z-20"> <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary tracking-tight"> About Us </h1> </div> </div> </StaggerItem> </StaggerContainer> </div> </section>
        {/* --- HISTORY & FOUNDATION SECTION --- */}
        {/* Changed padding-top from py-1 to pt-0 and pb-1 to reduce space between sections */}
        <section className="pt-0 pb-1">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              <FadeIn className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <img
                  src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778319012/DSC07616_r6myso.jpg"
                  alt="Cosmetic Gynecology Training"
                  className="rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </FadeIn>

              <FadeIn delay={0.2} className="lg:w-1/2 space-y-8">

                <h2 className="text-4xl font-serif font-bold text-primary">

                  <br />
                  <span className="text-accent">
                    Building India's Future in Cosmetic Gynecology
                  </span>
                </h2>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  The Cosmetic Gynecology Society of India (CGSI) was established to bring together clinicians, educators, and researchers committed to advancing cosmetic, functional, regenerative, and sexual gynecology in India.

                </p>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  Officially introduced at CGCON 2025 — the 2nd Cosmetic Gynecology World Congress, Chennai — the society represents an important step toward structured education, standardized procedures, evidence-based practice, and ethical advancement in the field of intimate healthcare.
                </p>
                <p className="text-lg leading-relaxed text-black font-semibold">
                  Under the leadership of pioneers such as Dr. Deepa Ganesh, CGSI emphasizes scientific excellence, multidisciplinary collaboration, ethical conduct, and patient-centered care.

                </p>   <p className="text-lg leading-relaxed text-black font-semibold">
                  Our goal is to enhance the quality, safety, and accessibility of women’s intimate healthcare and sexual wellbeing across India by empowering healthcare professionals through education, clinical training, research, and academic exchange.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* --- VISION & MISSION SECTION --- */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">

              <FadeIn>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-10 rounded-[2rem] bg-card border border-border group transition-colors hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-3xl font-serif font-bold mb-6 text-primary">
                    Our Vision
                  </h3>

                  <div className="text-lg text-black font-semibold leading-relaxed space-y-4">
                    <p>
                      To be the leading professional society advancing cosmetic, functional, and regenerative gynecology in India through excellence in education, innovation, research, and ethical clinical practice.
                    </p>
                    <p>
                      We envision a future where women’s intimate health, sexual wellbeing, and quality of life are approached with scientific integrity, compassion, safety, and dignity, empowering healthcare professionals to deliver comprehensive, multidisciplinary, and evidence-based care.
                    </p>
                    <p>
                      CGSI strives to create awareness, establish high standards of practice, foster multidisciplinary collaboration, and promote scientific advancement to elevate the quality of intimate healthcare across the nation.
                    </p>
                  </div>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-10 rounded-[2rem] bg-primary text-primary-foreground group transition-colors hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-serif font-bold mb-6">
                    Our Mission
                  </h3>

                  <div className="text-lg text-primary-foreground/90 leading-relaxed space-y-4">
                    <p>
                      To advance the science and practice of cosmetic, functional, and regenerative gynecology through continuous medical education, structured clinical training, academic exchange, research, and evidence-based guidelines.
                    </p>
                    <p>
                      To promote ethical, safe, and patient-centered practices that prioritize women’s intimate health, sexual wellbeing, confidentiality, dignity, and quality of life.
                    </p>
                    <p>
                      To encourage innovation, scientific research, and multidisciplinary collaboration among gynecologists and allied healthcare professionals in the field of intimate healthcare.
                    </p>
                    <p>
                      To build a strong academic and professional platform that supports skill development, mentorship, awareness, standardization, and excellence in cosmetic and regenerative gynecology across India.
                    </p>
                  </div>
                </motion.div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">
              Ready to be part of the CGSI legacy?
            </h2>

            <div className="flex flex-wrap justify-center gap-4">

              <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:bg-primary/90">
                Register as Member
              </button>

            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;