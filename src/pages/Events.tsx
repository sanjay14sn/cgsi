import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "Aesthetic & Functional Gynaecology",
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
    title: "Cosmetic Gynecology Society of India (CGSI)",
    description: "In collaboration with Chennai Menopause Society (CMS)\nRedefining Menopause Care:\nThe Role of Cosmetic & Functional Gynecology",
    date: "14th February, 2026",
    location: "Hotel Savera, Chennai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778325186/ChatGPT_Image_May_9_2026_04_42_37_PM_bwq4h3.png",
    type: "CME",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 3,
    title: "Functional & Aesthetic Management of Vulvar Conditions",
    description: "Society of Vaginal Surgeons of India - TN Chapter\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
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
    location: "Marriott, Madurai",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778479920/WhatsApp_Image_2026-05-11_at_10.43.29_AM_smmqh4.jpg",
    type: "CME",
    isUpcoming: false,
    hasGallery: true,
  },
  {
    id: 5,
    title: "CGSI Monthly CME – May Edition",
    description: "Vaginismus & Vulvodynia:\nIntegrating Psychosexual Care into Gynecologic Practice",
    date: "Saturday 23 May 2026",
    location: "Online / Virtual",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778484394/Screenshot_2026-05-11_at_12.56.22_PM_xcec1v.png",
    type: "Webinar",
    isUpcoming: true,
    hasGallery: false,
  },
  {
    id: 6,
    title: "Pre Conference Workshop on\nCosmetic Gynaecology",
    description: "Kancheepuram Obstetric & Gynecological Society\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
    date: "Saturday 27th June 2026 | 2.00 PM – 4.30 PM",
    location: "IMA Tambaram",
    image: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782107178/WhatsApp_Image_2026-06-17_at_4.38.30_PM_bqzzgv.jpg",
    type: "Workshop",
    isUpcoming: true,
    hasGallery: false,
  },
  {
    id: 7,
    title: "Cosmetic Gynecology Masterclass",
    description: "Scientific Partner for the Global Aesthetics Summit 2026 in collaboration with MEGO – Middle East OBGYN, Dubai.",
    date: "Sunday 19th July 2026 | 2:00 PM – 7:00 PM",
    location: "Taj Horizon, Goa",
    image: "/masterclass-goa-2026.jpg",
    type: "Seminar",
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2 whitespace-pre-line">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow whitespace-pre-line">
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

    </Layout>
  );
};

export default Events;