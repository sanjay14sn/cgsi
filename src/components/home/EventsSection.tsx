import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, MapPin, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Aesthetic & Functional Gynaecology",
    description: "In association with ISAR and CGSI.",
    date: "January 07, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778324119/ChatGPT_Image_May_9_2026_04_24_38_PM_ja0nyk.png",
    category: "Webinar",
    isUpcoming: false,
  },
  {
    id: 2,
    title: "Cosmetic Gynecology Society of India (CGSI)",
    description: "In collaboration with Chennai Menopause Society (CMS)\nRedefining Menopause Care:\nThe Role of Cosmetic & Functional Gynecology",
    date: "14th February, 2026",
    location: "Hotel Savera, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325186/ChatGPT_Image_May_9_2026_04_42_37_PM_bwq4h3.png",
    category: "CME",
    isUpcoming: false,
  },
  {
    id: 3,
    title: "Functional & Aesthetic Management of Vulvar Conditions",
    description: "Society of Vaginal Surgeons of India - TN Chapter\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
    date: "28th March, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325586/ChatGPT_Image_May_9_2026_04_48_52_PM_vljkpu.png",
    category: "Webinar",
    isUpcoming: false,
  },
  {
    id: 4,
    title: "Modern Aesthetic Gynecology",
    description: "Monthly CME focused on the latest modalities in menopause care and aesthetic gynecology.",
    date: "18th April, 2026",
    location: "Marriott, Madurai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778479920/WhatsApp_Image_2026-05-11_at_10.43.29_AM_smmqh4.jpg",
    category: "CME",
    isUpcoming: false,
  },
  {
    id: 5,
    title: "CGSI Monthly CME – May Edition",
    description: "Vaginismus & Vulvodynia:\nIntegrating Psychosexual Care into Gynecologic Practice",
    date: "Saturday 23 May 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778484394/Screenshot_2026-05-11_at_12.56.22_PM_xcec1v.png",
    category: "Webinar",
    isUpcoming: true,
  },
  {
    id: 6,
    title: "Pre Conference Workshop on\nCosmetic Gynaecology",
    description: "Kancheepuram Obstetric & Gynecological Society\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
    date: "Saturday 27th June 2026 | 2.00 PM – 4.30 PM",
    location: "IMA Tambaram",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782107178/WhatsApp_Image_2026-06-17_at_4.38.30_PM_bqzzgv.jpg",
    category: "Workshop",
    isUpcoming: true,
  },
  {
    id: 7,
    title: "Cosmetic Gynecology Masterclass",
    description: "Scientific Partner for the Global Aesthetics Summit 2026 in collaboration with MEGO – Middle East OBGYN, Dubai.",
    date: "Sunday 19th July 2026 | 2:00 PM – 7:00 PM",
    location: "Taj Horizon, Goa",
    image: "/masterclass-goa-2026.jpg",
    category: "Masterclass",
    isUpcoming: true,
  },
];

const EventsSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Upcoming Conference Banner Section */}
        <div className="mb-12 md:mb-24">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Sparkles className="text-blue-600 w-7 h-7 sm:w-8 sm:h-8" />
              Upcoming Conference
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white"
          >
            <img
              src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991086/ChatGPT_Image_Jul_2_2026_04_46_36_PM_ukva1y.png"
              alt="Upcoming Conference"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Section Header for Calendar */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4"
          >
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-tighter">Academic Calendar 2026</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">CGSI Specialized Events</h2>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white border shadow-sm hover:shadow-xl transition-all duration-500 ${event.isUpcoming
                ? "border-primary ring-2 ring-primary/30 ring-offset-2"
                : "border-slate-200"
                }`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 justify-between items-start pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[9px] sm:text-[10px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1 sm:gap-1.5 max-w-[70%] sm:max-w-none">
                    <Calendar className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>{event.date}</span>
                  </span>
                  <span
                    className={`text-[10px] px-3 py-1.5 rounded-full font-bold shadow-md uppercase tracking-wider ${event.isUpcoming
                      ? "bg-primary text-white animate-pulse"
                      : "bg-primary text-white"
                      }`}
                  >
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 mb-2 sm:mb-3">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">{event.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug whitespace-pre-line">
                    {event.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center justify-end mt-auto pt-2">
                  <Link
                    to={`/events/${event.id}`}
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;