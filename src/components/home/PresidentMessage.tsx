import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const PresidentMessage = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none bg-secondary" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= CONTENT SIDE ================= */}
          <div className="space-y-8 order-2 lg:order-1">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold leading-tight text-primary"
            >
              President's <span className="text-accent">Message</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              {/* Large Quote Mark */}
              <Quote className="absolute -top-6 -left-6 w-16 h-16 opacity-20 text-secondary" />
              <blockquote className="text-lg leading-relaxed pl-8 border-l-2 border-primary/20 italic text-black font-semibold">
                "The Cosmetic Gynecology Society of India (CGSI) has been formed with a shared vision to develop this evolving subspecialty in a structured, ethical, and evidence-based manner."
                <br />
                <br />
                "The primary goal of the society is to promote scientific education, formulate clinical guidelines, encourage research, and create a strong academic and professional platform for clinicians who are practicing or aspiring to practice cosmetic gynecology in India, while prioritizing patient safety and ethical practice."
              </blockquote>
            </motion.div>

            {/* Signature Area - Increased size to be "little bit big" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 pt-6"
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
                <div className="font-serif font-bold text-3xl md:text-4xl text-primary">
                  Dr. Deepa Ganesh
                </div>
                <div className="text-lg md:text-xl font-bold uppercase tracking-widest text-muted-foreground opacity-80">
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
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img
                  src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778059451/deepa_wpn93d.png"
                  alt="Presidential Portrait"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
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