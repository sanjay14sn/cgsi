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
        <section className="relative pt-32 pb-24 overflow-hidden bg-primary">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-20 rounded-l-full blur-3xl translate-x-1/2" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <StaggerContainer className="text-center max-w-4xl mx-auto">



              <StaggerItem>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                  Advancing{" "}
                  <span className="text-secondary">
                    Cosmetic & Functional Gynecology
                  </span>{" "}
                  in India
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  The Cosmetic Gynecology Society of India (CGSI) is a national
                  professional body dedicated to advancing aesthetic,
                  reconstructive, and functional gynecology through ethical
                  practice, scientific research, and advanced clinical training.
                </p>
              </StaggerItem>



            </StaggerContainer>
          </div>
        </section>


        {/* --- HISTORY & FOUNDATION SECTION --- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              <FadeIn className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                {/* Image updated to stay full color at all times */}
                <img
                  src="https://res.cloudinary.com/ddibq0tya/image/upload/v1771321782/ChatGPT_Image_Feb_17_2026_03_19_21_PM_u5vgam.png"
                  alt="Cosmetic Gynecology Training"
                  className="rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </FadeIn>

              <FadeIn delay={0.2} className="lg:w-1/2 space-y-8">

                <h2 className="text-4xl font-serif font-bold text-primary">
                  A New Era in Women's Intimate Health
                  <br />
                  <span className="text-accent">
                    Building India's Future in Cosmetic Gynecology
                  </span>
                </h2>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  The Cosmetic Gynecology Society of India (CGSI) was established
                  to bring together clinicians, educators, and researchers
                  committed to advancing cosmetic and functional gynecology in
                  India. Officially introduced around **CGCON 2025** — the 2nd
                  Cosmetic Gynecology World Congress — the society represents a
                  major step toward structured education and standardized
                  procedures.
                </p>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  Under the leadership of pioneers like **Dr. Deepa Ganesh**, CGSI
                  emphasizes evidence-based practice and ethical conduct. Our goal is
                  to ensure safe access to intimate healthcare for women nationwide
                  by empowering clinicians with world-class training.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <Activity size={20} />
                    </div>
                    <p className="text-sm font-medium">
                      Standardized clinical protocols for patient safety
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <Globe size={20} />
                    </div>
                    <p className="text-sm font-medium">
                      Global academic collaborations (FIGO & FOGSI alignment)
                    </p>
                  </div>

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

                  <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                    Our Vision
                  </h3>

                  <p className="text-lg text-black font-semibold leading-relaxed">
                    To be the leading professional organization in women's
                    healthcare and medical education, setting the gold standard
                    for cosmetic and functional gynecology practices in India.
                    We envision a future where every woman has access to dignified,
                    elite, and evidence-based intimate medical care.
                  </p>
                </motion.div>
              </FadeIn>


              <FadeIn delay={0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-10 rounded-[2rem] bg-primary text-primary-foreground group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-serif font-bold mb-4">
                    Our Mission
                  </h3>

                  <p className="text-lg text-primary-foreground/90 leading-relaxed">
                    To enhance maternal and intimate care through continuous education,
                    rigorous research, and extensive Society outreach. We strive to
                    advocate for women’s health and promote safe, ethical birth and
                    aesthetic practices across the region.
                  </p>
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