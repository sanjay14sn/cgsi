import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none bg-secondary hidden sm:block" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8 order-2 lg:order-1">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-black"
            >
              President's <span className="text-primary">Message</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              {/* Large Quote Mark */}
              <Quote className="hidden sm:block absolute -top-6 -left-6 w-16 h-16 opacity-20 text-secondary" />

              <blockquote className="text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 border-l-2 border-primary/20 italic text-black font-semibold">
                <span className="block text-xl sm:text-2xl mb-4 not-italic font-bold">
                  Welcome to the Cosmetic Gynecology Society of India (CGSI).
                </span>

                "It gives me immense pleasure to welcome you to CGSI, a professional platform dedicated to advancing cosmetic, functional, and regenerative gynecology in India through education, innovation, ethical practice, and scientific excellence."
                <br /><br />
                "Women’s intimate healthcare is an evolving multidisciplinary field that deserves greater awareness, structured training, evidence-based practice, and compassionate patient-centered care. CGSI aims to create a strong academic and professional community committed to advancing safe, ethical, and scientific practice in this specialty."
                <br /><br />
                "Through CMEs, workshops, conferences, hands-on training, research initiatives, and academic collaboration, we strive to empower healthcare professionals with advanced knowledge and clinical skills while fostering innovation and professional exchange."
                <br /><br />
                "Our vision is to enhance women’s confidence, sexual wellbeing, quality of life, and overall intimate healthcare outcomes with dignity, compassion, and responsibility."
                <br /><br />
                "I warmly invite gynecologists, multidisciplinary healthcare professionals, educators, and researchers to join us in shaping the future of intimate healthcare in India."
              </blockquote>
            </motion.div>
            {/* Signature Area - Increased size to be "little bit big" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg border-secondary flex-shrink-0">
                <img
                  src="/deepa.png"
                  alt="Dr. Deepa Ganesh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Deepa+Ganesh&background=0D1B2A&color=fff";
                  }}
                />
              </div>
              <div className="space-y-1">
                <div className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-black">
                  Dr. Deepa Ganesh
                </div>
                <div className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest text-black opacity-80">
                  President
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10">
              <div className="rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white">
                <img
                  src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778059451/deepa_wpn93d.png"
                  alt="Presidential Portrait"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[600px] object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x800?text=President+Message";
                  }}
                />
              </div>
            </div>

            {/* Background Decorative Frame */}
            <div className="absolute inset-0 rounded-[3rem] opacity-30 transform rotate-3 scale-105 -z-10 bg-secondary" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;