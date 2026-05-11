import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, MapPin, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Inspire Series: Aesthetic & Functional Gynaecology",
    description: "In association with ISAR and CGSI.",
    date: "January 07, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778324119/ChatGPT_Image_May_9_2026_04_24_38_PM_ja0nyk.png",
    category: "Webinar",
    isUpcoming: false,
  },
  {
    id: 2,
    title: "Hands-on Laser & EBD Workshop",
    description: "Redefining Menopause Care: The Role of Cosmetic & Functional Gynecology",
    date: "14th February, 2026",
    location: "Hotel Savera, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325186/ChatGPT_Image_May_9_2026_04_42_37_PM_bwq4h3.png",
    category: "Seminar",
    isUpcoming: false,
  },
  {
    id: 3,
    title: "Mastering Aesthetic Gynaecology (MAG)",
    description: "Functional & Aesthetic Management of Vulvar Conditions",
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
    location: "Marriott, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778479920/WhatsApp_Image_2026-05-11_at_10.43.29_AM_smmqh4.jpg",
    category: "Seminar",
    isUpcoming: false,
  },
  {
    id: 5,
    title: "Upcoming Event",
    description: "Stay tuned for details on our next exclusive CGSI event.",
    date: "Coming Soon",
    location: "To Be Announced",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778484394/Screenshot_2026-05-11_at_12.56.22_PM_xcec1v.png",
    category: "Upcoming",
    isUpcoming: true,
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">

        {/* Upcoming Conference Banner Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-3">
              <Sparkles className="text-blue-600 w-8 h-8" />
              Upcoming Conference
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white"
          >
            <img
              src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778476123/ChatGPT_Image_May_11_2026_10_38_06_AM_xejj7j.png"
              alt="Upcoming Conference"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Section Header for Calendar */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-4"
          >
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-tighter">Academic Calendar 2026</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">CGSI Specialized Events</h2>
          <p className="mt-4 text-slate-500">Join our curated sessions led by industry experts</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col h-[600px] rounded-[2.5rem] overflow-hidden bg-white border shadow-sm hover:shadow-xl transition-all duration-500 ${event.isUpcoming
                  ? "border-primary ring-2 ring-primary/30 ring-offset-2"
                  : "border-slate-200"
                }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-[65%] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] px-3 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    {event.date}
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
              <div className="p-8 flex flex-col h-[35%] justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{event.location}</span>
                  </div>

                  <h3 className="text-xl font-extrabold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center justify-end">
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