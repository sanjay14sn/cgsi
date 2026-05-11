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
    category: "Webinar"
  },
  {
    id: 2,
    title: "Hands-on Laser & EBD Workshop",
    description: "Redefining Menopause Care: The Role of Cosmetic & Functional Gynecology",
    date: "14th February, 2026",
    location: "Hotel Savera, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325186/ChatGPT_Image_May_9_2026_04_42_37_PM_bwq4h3.png",
    category: "Seminar"
  },
  {
    id: 3,
    title: "Mastering Aesthetic Gynaecology (MAG)",
    description: "Functional & Aesthetic Management of Vulvar Conditions",
    date: "28th March, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325586/ChatGPT_Image_May_9_2026_04_48_52_PM_vljkpu.png",
    category: "Webinar"
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">

        {/* Upcoming Conference Banner Section */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-white p-4 rounded-[2rem] shadow-xl border border-blue-100 relative overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
                  Upcoming <span className="text-blue-600">Conference</span>
                </h2>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>

              <div className="relative group max-w-2xl w-full">
                {/* Image Border/Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                <img
                  src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778474503/WhatsApp_Image_2026-05-11_at_10.08.46_AM_wbghqg.jpg"
                  alt="Main Conference Banner"
                  className="relative rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-white transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>
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
              className="group flex flex-col h-[600px] rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
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
                  <span className="bg-blue-600 text-white text-[10px] px-3 py-1.5 rounded-full font-bold shadow-md uppercase tracking-wider">
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
                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner"
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