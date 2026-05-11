import React from "react";
import Layout from "@/components/layout/Layout";
import {
    Sparkles,
    Calendar,
    MapPin,
    Users,
    Award,
    Shield,
    Info,
    PlayCircle,
    Heart,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

const Conference2025 = () => {
    // 24 provided image links
    const eventImages = [
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408324/83a943f7-cca7-48cd-8906-50ef77cc73b2_3_e8isky.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408323/79ec1af2-98c1-4f41-97c1-1a9a0f5f54db_3_l2gld2.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408322/73b294a4-3026-47f9-ba0f-0c0489a72de6_3_cairep.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408327/DOT01099_vy0py7.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408340/DOT09612_gb0s41.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DSC00013_qhgfu6.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT08396_wlbrvi.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408343/DOT01146_jumznb.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408346/DSC00156_clynjk.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408345/DSC00204_hssqvw.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408347/DSC00211_n37f7h.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408348/DSC08137_pehprk.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408354/DSC08580_isqbnj.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408356/DSC08546_mgcbiu.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408360/DSC00256_ri7bbi.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408362/DSC08658_qmqnav.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408369/DSC09006_bepop5.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408368/DSC08883_opfqhu.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408370/DSC08861_duszf9.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408371/DSC08569_koxmvs.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408376/DSC08636_zqzugz.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408381/DSC09829_dk5uk1.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408384/DSC09694_gx3swj.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771408400/DSC09904_lu7xvu.jpg"
    ];

    const eventVideos = [
        "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408768/WhatsApp_Video_2026-02-13_at_9.22.03_AM_pdyxnq.mp4",
        "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408856/2025v_znrc3o.mp4"
    ];

    return (
        <Layout>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest italic">Organizing Chairperson Message</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-black leading-tight mb-8">
                            CGCON <span className="text-primary italic">2025</span>
                        </h1>
                        <div className="flex flex-wrap gap-8 text-lg font-medium text-black">
                            <span className="flex items-center gap-3"><Calendar className="text-primary" /> 2025 </span>
                            <span className="flex items-center gap-3"><MapPin className="text-primary" /> Tamil Nadu</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DYNAMIC CONTENT GRID - Z-PATTERN */}
            <section className="py-12">
                <div className="container mx-auto px-6 space-y-24">

                    {/* Block 1: Intro + 2 Images */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-black">Leading the Way</h2>
                            <p className="text-lg text-black leading-relaxed text-justify italic border-l-4 border-primary pl-6">
                                "Honored to serve as Organizing Chairperson of CGCON 2025 and be part of a landmark gathering advancing cosmetic and functional gynecology in India. The congress brought together leading national and international experts for three days of rich academic exchange, innovation, and collaborative learning."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src={eventImages[0]} alt="Event 1" className="rounded-2xl h-72 w-full object-cover shadow-xl" />
                            <img src={eventImages[1]} alt="Event 2" className="rounded-2xl h-72 w-full object-cover shadow-xl mt-12" />
                        </div>
                    </div>

                    {/* Block 2: 2 Images + CGSI Launch (Reversed) */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
                            <img src={eventImages[2]} alt="Event 3" className="rounded-2xl h-72 w-full object-cover shadow-xl" />
                            <img src={eventImages[3]} alt="Event 4" className="rounded-2xl h-72 w-full object-cover shadow-xl mb-12" />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-primary font-bold"><Shield className="w-5 h-5" /> SOCIETY LAUNCH</div>
                            <h2 className="text-4xl font-serif font-bold text-black">A Proud Milestone</h2>
                            <p className="text-lg text-black leading-relaxed text-justify">
                                A significant step forward was the launch of the **Cosmetic Gynecology Society of India (CGSI)** —
                                a step forward in strengthening ethical practice, evidence-based training, and safe,
                                accessible intimate healthcare for women across the nation.
                            </p>
                        </div>
                    </div>

                    {/* VIDEO SECTION - Feature both videos with Autoplay */}
                    {/* VIDEO SECTION - Feature both videos with Autoplay Fix */}
                    <div className="bg-secondary/10 rounded-[3rem] p-8 md:p-12">
                        <h2 className="text-3xl font-serif font-bold text-black mb-8 text-center">
                            Congress Highlights & <span className="text-primary italic">Reflections</span>
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {eventVideos.map((vid, idx) => (
                                <div key={idx} className="space-y-4">
                                    <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black relative">
                                        <video
                                            key={`video-${idx}`}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            className="w-full h-full object-cover"
                                        >
                                            <source src={vid} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <p className="text-center font-bold flex items-center justify-center gap-2">
                                        <Zap className="text-primary w-5 h-5 animate-pulse" /> Live Highlight {idx + 1}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Block 3: Scientific Sessions + Side Grid */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-black">Scientific Sessions</h2>
                            <p className="text-lg text-black leading-relaxed">
                                From sessions on pelvic wellness, regenerative therapies, and emerging technologies to meaningful
                                discussions that help normalize conversations around vulvar health, CGCON 2025 reflected our
                                shared commitment to elevating women’s healthcare standards.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <img src={eventImages[4]} alt="S1" className="rounded-xl h-40 w-full object-cover" />
                                <img src={eventImages[5]} alt="S2" className="rounded-xl h-40 w-full object-cover" />
                                <img src={eventImages[6]} alt="S3" className="rounded-xl h-40 w-full object-cover hidden md:block" />
                            </div>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-primary text-primary-foreground flex flex-col justify-center">
                            <Heart className="w-12 h-12 mb-6 opacity-50" />
                            <h4 className="text-2xl font-bold mb-4">Gratitude</h4>
                            <p className="opacity-90 italic">
                                "Grateful to the distinguished faculty, delegates, and organizing team who made this vision a reality."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL CLUMSY MASONRY GALLERY */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl font-serif font-bold text-black">Photo <span className="text-primary italic">Gallery</span></h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {eventImages.slice(7).map((url, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                            >
                                <img src={url} alt={`Gallery ${index}`} className="w-full h-auto object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="py-12 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Days", value: "2" },
                            { label: "Experts", value: "Leading Int'l" },
                            { label: "Focus", value: "Regenerative" },
                            { label: "Vision", value: "CGSI" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-black mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2025;