import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

import Layout from "@/components/layout/Layout";
import { FadeIn } from "@/components/ui/animations";

const ABOUT_HERO_IMAGE =
  "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781698730/Screenshot_2026-06-17_at_5.48.12_PM_fgeh02.png";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground font-sans">

        {/* ================================= HERO ================================= */}

        <section className="relative w-full overflow-hidden bg-white">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[60vh] min-h-[180px]"
          >
            <img
              src={ABOUT_HERO_IMAGE}
              alt="CGSI launch at CGCON 2025"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="absolute inset-y-0 left-0 flex items-center px-5 sm:px-8 md:px-12 lg:px-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-md"
            >
              About Us
            </motion.h1>
          </motion.div>

        </section>

        {/* ========================= HISTORY SECTION ========================= */}

        <section className="py-20">

          <div className="container mx-auto px-6">

            <div className="flex flex-col lg:flex-row items-center gap-16">

              <FadeIn className="lg:w-1/2 relative">

                <div
                  className="
                    absolute

                    -top-4

                    -left-4

                    w-full

                    h-full

                    border-2

                    border-primary/20

                    rounded-3xl

                    translate-x-4

                    translate-y-4

                    -z-10
                  "
                />

                <img
                  src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778319012/DSC07616_r6myso.jpg"
                  alt="Cosmetic Gynecology Training"
                  className="
                    rounded-3xl

                    shadow-2xl

                    transition-transform

                    duration-700

                    hover:scale-[1.02]
                  "
                />

              </FadeIn>

              <FadeIn
                delay={0.2}
                className="lg:w-1/2 space-y-8"
              >

                <h2
                  className="
                  text-4xl

                  font-serif

                  font-bold

                  text-primary
                "
                >
                  Building India's Future in Cosmetic Gynecology
                </h2>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  The Cosmetic Gynecology Society of India (CGSI)
                  was established to bring together clinicians,
                  educators and researchers committed to advancing
                  cosmetic, functional, regenerative and sexual
                  gynecology in India.
                </p>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  Officially introduced at CGCON 2025 — the
                  2nd Cosmetic Gynecology World Congress,
                  Chennai — the society represents an important
                  step toward structured education,
                  standardized procedures, evidence-based
                  practice and ethical advancement.
                </p>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  Under the leadership of pioneers such as
                  Dr. Deepa Ganesh, CGSI emphasizes
                  scientific excellence, multidisciplinary
                  collaboration, ethical conduct and
                  patient-centered care.
                </p>

                <p className="text-lg leading-relaxed text-black font-semibold">
                  Our goal is to enhance the quality,
                  safety and accessibility of women's
                  intimate healthcare and sexual wellbeing
                  across India.
                </p>

              </FadeIn>

            </div>

          </div>

        </section>

        {/* ======================= VISION & MISSION ======================= */}

        <section className="py-24 bg-secondary/30">

          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-12">

              {/* Vision */}

              <FadeIn>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="
                    h-full

                    p-10

                    rounded-[2rem]

                    bg-card

                    border

                    border-border

                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      w-16

                      h-16

                      rounded-2xl

                      bg-primary/10

                      flex

                      items-center

                      justify-center

                      mb-8
                    "
                  >

                    <Eye className="w-8 h-8 text-primary" />

                  </div>

                  <h3
                    className="
                    text-3xl

                    font-serif

                    font-bold

                    mb-6

                    text-primary
                  "
                  >
                    Our Vision
                  </h3>

                  <p className="text-lg text-black font-semibold leading-relaxed">

                    To be the leading professional society
                    advancing cosmetic, functional and
                    regenerative gynecology in India through
                    excellence in education, innovation,
                    research and ethical clinical practice.

                  </p>

                </motion.div>

              </FadeIn>

              {/* Mission */}

              <FadeIn delay={0.2}>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="
                    h-full

                    p-10

                    rounded-[2rem]

                    bg-primary

                    text-white

                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      w-16

                      h-16

                      rounded-2xl

                      bg-white/20

                      flex

                      items-center

                      justify-center

                      mb-8
                    "
                  >

                    <Target className="w-8 h-8" />

                  </div>

                  <h3
                    className="
                    text-3xl

                    font-serif

                    font-bold

                    mb-6
                  "
                  >
                    Our Mission
                  </h3>

                  <p className="text-lg leading-relaxed">

                    To advance cosmetic, functional and
                    regenerative gynecology through
                    education, training, research,
                    academic exchange and evidence-based
                    guidelines.

                  </p>

                </motion.div>

              </FadeIn>

            </div>

          </div>

        </section>

      </div>
    </Layout>
  );
};

export default About;