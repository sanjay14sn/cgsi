import React, { useRef } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
    const videoRef = useRef(null);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-muted/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12 px-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-snug"
                    >
                        The official launch of the Cosmetic Gynecology Society of India (CGSI)
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-accent mx-auto mb-6 origin-center"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-black text-base sm:text-lg leading-relaxed font-semibold px-2"
                    >
                        Unveiled at CGCON 2025 — the 2nd Cosmetic Gynecology World Congress,
                        marking a milestone for ethical, evidence-based cosmetic and functional gynecology in India.
                    </motion.p>
                </div>

                {/* 6 Images Grid View */}
                <div className="mb-10 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto items-start">
                    {[
                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778129593/7ed26161-1717-4eca-9ca7-58b369d031cb_qiu13p.jpg",
                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778129628/453abc5d-02e8-46d0-b798-471e88a64524_hpq0s5.jpg",

                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778321895/Screenshot_2026-05-09_at_3.47.46_PM_rubowq.png",
                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778129758/e96c4585-512f-476d-b3bd-f2928076b960_iggwr3.jpg",
                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778129719/4780be76-9a45-4f12-b82d-ec030b377cd4_yxsgad.jpg",
                        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778129752/b297b996-6a09-4bc4-a7a4-ee8b9001bcf6_icknql.jpg",

                    ].map((imgUrl, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src={imgUrl}
                                alt={`CGCON 2025 Highlight ${idx + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black aspect-video group"
                >
                    {/* Native Video Tag */}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    >
                        <source
                            src="https://res.cloudinary.com/dq6gr5zjc/video/upload/v1778130184/WhatsApp_Video_2026-05-07_at_10.31.14_AM_so8hjk.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Decorative Gradient Overlay (Only visible when not hovering) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

                    {/* Border Glow */}
                    <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;