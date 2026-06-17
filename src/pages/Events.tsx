import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "Inspire Series: Aesthetic & Functional Gynaecology",
    description: "In association with ISAR and CGSI.",
    date: "January 07, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778324119/ChatGPT_Image_May_9_2026_04_24_38_PM_ja0nyk.png",
    type: "Webinar",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 2,
    title: "Hands-on Laser & EBD Workshop",
    description: "Redefining Menopause Care: The Role of Cosmetic & Functional Gynecology",
    date: "14th February, 2026",
    location: "Hotel Savera, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325186/ChatGPT_Image_May_9_2026_04_42_37_PM_bwq4h3.png",
    type: "Seminar",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 3,
    title: "Mastering Aesthetic Gynaecology (MAG)",
    description: "Functional & Aesthetic Management of Vulvar Conditions",
    date: "28th March, 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325586/ChatGPT_Image_May_9_2026_04_48_52_PM_vljkpu.png",
    type: "Webinar",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 4,
    title: "Modern Aesthetic Gynecology",
    description: "Monthly CME focused on the latest modalities in menopause care and aesthetic gynecology.",
    date: "18th April, 2026",
    location: "Marriott, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676699/71787968-1405-4b80-ac38-1ffa0d1e81ec_zktrd1.jpg",
    type: "Seminar",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 5,
    title: "Upcoming Event",
    description: "Stay tuned for details on our next exclusive CGSI event.",
    date: "Saturday 23 May 2026 ",
    location: " Online / Virtual ",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778484394/Screenshot_2026-05-11_at_12.56.22_PM_xcec1v.png",
    type: "Upcoming",
    isUpcoming: true,
    hasGallery: false,
  },
];

const Events = () => {
  return (
    <Layout>
      {/* --- Hero Section --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Conference <span className="text-primary">Events</span> &amp; Programs
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Stay updated with our latest conferences, workshops, and educational programs
              designed to empower healthcare professionals through knowledge and connection.
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Events Grid --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
            Academic Calendar 2026
            <span className="h-px flex-1 bg-slate-200 ml-4"></span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`flex flex-col md:flex-row bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow ${event.isUpcoming
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-slate-200"
                  }`}
              >
                <div className="md:w-2/5 h-56 md:h-auto relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {event.isUpcoming && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest shadow animate-pulse">
                      ● Upcoming
                    </div>
                  )}
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <div className="mb-3">
                    <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>

                  {(event.hasGallery || event.isUpcoming) && (
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                    >
                      {event.isUpcoming ? (
                        <>View Details <ArrowRight className="w-4 h-4" /></>
                      ) : (
                        <><Images className="w-4 h-4" /> View Gallery <ArrowRight className="w-4 h-4" /></>
                      )}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- CTA --- */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Want to host a CME or Workshop?</h2>
          <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;