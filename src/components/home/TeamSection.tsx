import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

// Updated Team Data: Focused on the Executive Trio
const teamMembers = [
  {
    id: 1,
    name: "Dr. Deepa Ganesh",
    role: "President",
    image: "/deepa.png"
  },
  {
    id: 2,
    name: "Dr. Shamika Dechamma",
    role: "Secretary",
    image: "/shamika.png"
  },
  {
    id: 3,
    name: "Dr. Anitha Prem",
    role: "Treasurer",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771399674/WhatsApp_Image_2026-02-10_at_12.54.13_PM_wlraqx.jpg"
  },
];

const TeamSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4"
        >

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-primary">
            CGSI  <span className="text-accent">TEAM</span>
          </h2>

          <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </motion.div>

        {/* ================= TEAM GRID ================= */}
        {/* Changed lg:grid-cols-4 to lg:grid-cols-3 for 3-member symmetry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative ${index === 2 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:max-w-none" : ""}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-[2rem] border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* Royal Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Reveal Info on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="w-full h-[1px] bg-white/20 mt-4" />
                </div>
              </div>

              {/* Static Labels (Visible by default, fades on hover) */}
              <div className="mt-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-serif font-bold leading-tight text-primary">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mt-2 text-black">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ELEGANT CTA ================= */}

      </div>
    </section>
  );
};

export default TeamSection;