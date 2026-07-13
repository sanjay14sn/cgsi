import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Event Gallery Data ──────────────────────────────────── */
const eventDetails: Record<
    string,
    {
        title: string;
        subtitle: string;
        date: string;
        location: string;
        category: string;
        images: string[];
        isUpcoming?: boolean;
        poster?: string;
    }
> = {
    "1": {
        title: "Aesthetic & Functional Gynaecology",
        subtitle: "In association with ISAR and CGSI.",
        date: "January 07, 2026",
        location: "Online / Virtual",
        category: "Webinar",
        images: [
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778777841/WhatsApp_Image_2026-05-09_at_5.02.22_PM_t5bz7w.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778777833/3cdf0ee6-dd91-4f90-9150-41cd881ee39d_qb2ewq.jpg"
        ],
    },
    "2": {
        title: "Cosmetic Gynecology Society of India (CGSI)",
        subtitle: "In collaboration with Chennai Menopause Society (CMS)\nRedefining Menopause Care:\nThe Role of Cosmetic & Functional Gynecology",
        date: "14th February, 2026",
        location: "Hotel Savera, Chennai",
        category: "CME",
        images: [
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483261/WhatsApp_Image_2026-05-11_at_11.51.01_AM_cohdrq.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483260/WhatsApp_Image_2026-05-11_at_11.50.53_AM_z6ufai.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483260/WhatsApp_Image_2026-05-11_at_11.50.52_AM_1_wmvjd5.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483260/WhatsApp_Image_2026-05-11_at_11.50.53_AM_1_ehp8z3.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483259/WhatsApp_Image_2026-05-11_at_11.50.12_AM_bhrraj.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483260/WhatsApp_Image_2026-05-11_at_11.50.51_AM_rhdzem.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483259/WhatsApp_Image_2026-05-11_at_11.50.51_AM_1_hthsng.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483259/WhatsApp_Image_2026-05-11_at_11.50.01_AM_pc9ehh.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483259/WhatsApp_Image_2026-05-11_at_11.50.26_AM_tspmyq.jpg",
        ],
    },
    "3": {
        title: "Functional & Aesthetic Management of Vulvar Conditions",
        subtitle: "Society of Vaginal Surgeons of India - TN Chapter\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
        date: "28th March, 2026",
        location: "Online / Virtual",
        category: "Webinar",
        images: [
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483598/WhatsApp_Image_2026-05-11_at_12.30.57_PM_f8h7hc.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483598/WhatsApp_Image_2026-05-11_at_12.30.57_PM_1_i8wkug.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483598/WhatsApp_Image_2026-05-11_at_12.31.38_PM_cfkd6t.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483599/WhatsApp_Image_2026-05-11_at_12.32.56_PM_1_qxyfsn.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483599/WhatsApp_Image_2026-05-11_at_12.31.39_PM_cuzugx.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483599/WhatsApp_Image_2026-05-11_at_12.32.56_PM_2_gklmid.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483599/WhatsApp_Image_2026-05-11_at_12.32.56_PM_xysz5z.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778483599/WhatsApp_Image_2026-05-11_at_12.32.57_PM_lueace.jpg",
        ],
    },
    "4": {
        title: "Modern Aesthetic Gynecology",
        subtitle: "Monthly CME focused on the latest modalities in menopause care and aesthetic gynecology.",
        date: "18th April, 2026",
        location: "Marriott, Madurai",
        category: "CME",
        images: [
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781694504/WhatsApp_Image_2026-06-17_at_4.36.08_PM_nyabqr.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676699/71787968-1405-4b80-ac38-1ffa0d1e81ec_zktrd1.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778479920/WhatsApp_Image_2026-05-11_at_10.43.29_AM_smmqh4.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676681/9770fe90-8912-4fa3-a770-3d506cee046f_yrugga.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676666/de2a622e-630a-4534-ae38-03715e2dea7b_ikwgd0.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676651/728c8d21-edc2-4606-b35b-1d00f4d53cf1_mvd4bm.jpg",
            "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1781676638/30b0545e-8f2a-4175-ad85-057fa1ed6c3f_fgm3mc.jpg",
        ],
    },
    "5": {
        title: "CGSI Monthly CME – May Edition",
        subtitle: "Vaginismus & Vulvodynia:\nIntegrating Psychosexual Care into Gynecologic Practice",
        date: "Saturday 23 May 2026",
        location: "Online / Virtual",
        category: "Webinar",
        isUpcoming: true,
        poster: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778484394/Screenshot_2026-05-11_at_12.56.22_PM_xcec1v.png",
        images: [],
    },
    "6": {
        title: "Pre Conference Workshop on\nCosmetic Gynaecology",
        subtitle: "Kancheepuram Obstetric & Gynecological Society\nin collaboration with\nCosmetic Gynecology Society of India (CGSI)",
        date: "Saturday 27th June 2026 | 2.00 PM – 4.30 PM",
        location: "IMA Tambaram",
        category: "Workshop",
        isUpcoming: true,
        poster: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782107178/WhatsApp_Image_2026-06-17_at_4.38.30_PM_bqzzgv.jpg",
        images: [],
    },
    "7": {
        title: "Cosmetic Gynecology Masterclass",
        subtitle: "Scientific Partner for the Global Aesthetics Summit 2026 in collaboration with MEGO – Middle East OBGYN, Dubai.",
        date: "Sunday 19th July 2026 | 2:00 PM – 7:00 PM",
        location: "Taj Horizon, Goa",
        category: "Masterclass",
        isUpcoming: true,
        poster: "/masterclass-goa-2026.jpg",
        images: [],
    },
};

const EventDetail = () => {
    const { id } = useParams<{ id: string }>();
    const event = id ? eventDetails[id] : null;

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () =>
        setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + event!.images.length) % event!.images.length : null
        );
    const nextImage = () =>
        setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % event!.images.length : null
        );

    if (!event) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                    <p className="text-2xl font-bold text-gray-700">Event not found.</p>
                    <Link to="/events" className="text-primary underline">← Back to Events</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* ── HERO ── */}
            <section className="pt-28 pb-12 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link
                        to="/events"
                        className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Events
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-4">
                            {event.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4 leading-tight whitespace-pre-line">
                            {event.title}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6 max-w-2xl whitespace-pre-line">{event.subtitle}</p>
                        <div className="flex flex-wrap gap-6 text-gray-600 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                {event.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                {event.location}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── PHOTO GALLERY or UPCOMING POSTER ── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    {event.isUpcoming ? (
                        /* Upcoming — show poster prominently */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {/* Glowing upcoming badge */}
                            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/30 animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-white inline-block" />
                                Upcoming Event — Stay Tuned!
                            </div>
                            {/* Poster image */}
                            {event.poster && (
                                <div className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                                    <img
                                        src={event.poster}
                                        alt="Event Poster"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            )}
                            <p className="text-gray-500 text-base italic text-center max-w-lg">
                                Details and registration will be available soon. Check back here for updates!
                            </p>
                        </motion.div>
                    ) : (
                        /* Past event — photo gallery */
                        <>
                            <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-10 text-center">
                                Event Gallery
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                                {event.images.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group aspect-[4/3]"
                                        onClick={() => openLightbox(i)}
                                    >
                                        <img
                                            src={src}
                                            alt={`Event photo ${i + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                View
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            src={event.images[lightboxIndex]}
                            alt={`Photo ${lightboxIndex + 1}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-5 text-white/60 text-sm">
                            {lightboxIndex + 1} / {event.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default EventDetail;
