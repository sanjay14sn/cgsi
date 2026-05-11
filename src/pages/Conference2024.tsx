import React from "react";
import Layout from "@/components/layout/Layout";
import {
    Calendar,
    MapPin,
    Users,
    Heart,
    Info,
    PlayCircle,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

const Conference2024 = () => {
    // Organized images from your provided links
    const eventImages = [
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407207/IMG_1490_qbsycl.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407195/IMG_2914_agmgkd.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407196/IMG_2912_igfpzl.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407194/IMG_2909_wvc2px.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407192/IMG_2913_aggpe9.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407190/IMG_2908_qljo9j.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407189/IMG_2906_tdwzap.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407188/IMG_2904_wpzv7j.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407185/IMG_2902_v8pfzs.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407186/IMG_2905_rafj0b.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407185/IMG_2903_hdgfos.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407182/IMG_2891_m64yaa.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407180/IMG_2901_bsaxio.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407179/IMG_2892_ga1ufo.jpg",
        "https://res.cloudinary.com/ddibq0tya/image/upload/v1771407177/IMG_2891_2_bdggux.jpg"
    ];

    const eventVideo = "https://res.cloudinary.com/ddibq0tya/video/upload/v1771399981/WhatsApp_Video_2026-02-13_at_9.23.31_AM_mplpkn.mp4";

    return (
        <Layout>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 bg-background overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Historic First Edition</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6">
                            CGCON <span className="text-accent italic">2024</span>
                        </h1>
                        <p className="text-xl text-black max-w-2xl mx-auto mb-8 italic">
                            “South India’s First Dedicated Cosmetic Gynecology Congress”
                        </p>
                        <div className="flex justify-center gap-8 font-bold text-primary">
                            <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Tamil Nadu</div>
                            <div className="flex items-center gap-2"><Users className="w-5 h-5" /> 150+ Delegates</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DYNAMIC CONTENT GRID */}
            <section className="py-12">
                <div className="container mx-auto px-6 space-y-24">

                    {/* Block 1: Intro + 2 Images */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-black">A Landmark Beginning</h2>
                            <p className="text-lg text-black leading-relaxed text-justify">
                                CGCON 2024 marked South India’s first dedicated Cosmetic Gynecology Congress —
                                a truly historic academic milestone that signaled the rapid emergence of this
                                specialized field in modern women’s healthcare. Originally planned for 60 participants,
                                the congress proudly welcomed more than 150 enthusiastic delegates.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src={eventImages[0]} alt="Event 1" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                            <img src={eventImages[1]} alt="Event 2" className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8" />
                        </div>
                    </div>

                    {/* Block 2: 2 Images + Text (Reversed) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
                            <img src={eventImages[2]} alt="Event 3" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                            <img src={eventImages[3]} alt="Event 4" className="rounded-2xl h-64 w-full object-cover shadow-lg mb-8" />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl font-serif font-bold text-accent italic">Eminent Leadership</h2>
                            <p className="text-lg text-black leading-relaxed text-justify">
                                The inauguration ceremony brought immense prestige with the presence of Prof. Dr. Narayanasamy,
                                Vice Chancellor of Tamil Nadu Medical University, and Dr. Vijaya S, President of OGSSI.
                                Their inspiring words highlighted the importance of structured education and ethical practice
                                in this emerging subspecialty.
                            </p>
                        </div>
                    </div>

                    {/* Block 3: Video Highlight Section - Autoplay Fixed */}
                    <div className="bg-secondary/10 rounded-[3rem] p-8 md:p-12">
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    <Zap className="animate-pulse" /> LIVE HIGHLIGHTS
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-black">Relive the Experience</h2>
                                <p className="text-black">
                                    Watch the key moments from our scientific sessions and the vibrant interaction
                                    between experts and delegates.
                                </p>
                            </div>
                            <div className="lg:col-span-3">
                                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src={eventVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block 4: Text + Info Box */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-black">Beyond the Lecture Halls</h2>
                            <p className="text-lg text-black leading-relaxed">
                                CGCON 2024 fostered strong professional networking and mentorship opportunities.
                                Participants connected with pioneers in cosmetic gynecology, explored training pathways,
                                and discussed future research directions that will help shape the discipline
                                across South India and beyond.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={eventImages[4]} alt="Event 5" className="rounded-2xl h-48 w-full object-cover" />
                                <img src={eventImages[5]} alt="Event 6" className="rounded-2xl h-48 w-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-8 rounded-3xl bg-accent text-accent-foreground">
                                <Info className="mb-4 w-10 h-10" />
                                <h4 className="text-xl font-bold mb-4">Congress Stats</h4>
                                <ul className="space-y-3 text-sm opacity-90">
                                    <li>• 150+ Registered Delegates</li>
                                    <li>• 12+ Scientific Sessions</li>
                                    <li>• 10+ Expert Speakers</li>
                                    <li>• 1 Goal: Clinical Excellence</li>
                                </ul>
                            </div>
                            <img src={eventImages[6]} alt="Side" className="rounded-3xl h-64 w-full object-cover shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL MASONRY-STYLE GALLERY */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <h2 className="text-4xl font-serif font-bold text-black">Event <span className="text-accent italic">Gallery</span></h2>
                        <p className="text-black max-w-xs text-right">Capturing the smiles and scientific milestones of CGCON 2024.</p>
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {eventImages.slice(7).map((url, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <img src={url} alt={`Gallery ${index}`} className="w-full h-auto object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CALLOUT */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-6">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-black mb-4">Ready for the Next Chapter?</h2>
                    <p className="text-black mb-8">The legacy of CGCON 2024 continues to inspire our upcoming editions.</p>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2024;