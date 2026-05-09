import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Shield, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "CGSI South Zone Conclave 2026",
    description: "The premier regional gathering of the Cosmetic Gynaecology Society of India. Focusing on 'Innovation in Intimate Wellness', featuring masterclasses on regenerative medicine and surgical art.",
    date: "April 24–26, 2026",
    location: "ITC Grand Chola, Chennai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    category: "Regional Congress"
  },
  {
    id: 2,
    title: "Hands-on Laser & EBD Workshop",
    description: "A certified intensive workshop focusing on Energy-Based Devices (EBD) and CO2 Laser applications in functional gynaecology. Includes live patient demonstrations and safety protocols.",
    date: "June 12, 2026",
    location: "Apollo Hospitals, Chennai",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
    category: "Skill Workshop"
  },
  {
    id: 3,
    title: "Mastering Aesthetic Gynaecology (MAG)",
    description: "An advanced CME programme designed for senior practitioners, covering surgical labiaplasty, fat grafting, and the business of aesthetic practice within the Indian regulatory framework.",
    date: "September 19–20, 2026",
    location: "Le Royal Méridien, Chennai",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80",
    category: "CME"
  },
];

const EventsSection = () => {
  return (
    <section data-section="events" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mx-auto"
          >
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Academic Calendar </span>
          </motion.div>




        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-[10px] font-bold uppercase border border-primary/30 backdrop-blur-md">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-primary">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-sm leading-relaxed text-black line-clamp-3 font-semibold">
                  {event.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary transition-all">
                    <ArrowRight className="w-5 h-5 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center mt-16">
          <Link
            to="/events"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-primary-foreground font-bold bg-primary hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25"
          >
            View Full Calendar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;