import React, { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Volume2, VolumeX, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const videosData = [
    {
        id: 1,
        title: "CGCON 2024",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771399981/WhatsApp_Video_2026-02-13_at_9.23.31_AM_mplpkn.mp4",
        Description: "1st Cosmetic Gynecology World Congress"
    },
    {
        id: 2,
        title: "CGCON 2025",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408768/WhatsApp_Video_2026-02-13_at_9.22.03_AM_pdyxnq.mp4",
        Description: "Pre Congress Workshop"
    },
    {
        id: 3,
        title: "CGCON 2025",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408856/2025v_znrc3o.mp4",
        Description: "2nd Cosmetic Gynecology World Congress",
    },
];

const GalleryVideos = () => {
    type VideoRefs = { [key: number]: HTMLVideoElement | null };

    const videoRefs = useRef<VideoRefs>({});
    const [unmutedId, setUnmutedId] = useState<number | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<(typeof videosData)[0] | null>(null);

    const handleToggleMute = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();

        const currentVideo = videoRefs.current[id];

        if (unmutedId === id) {
            if (currentVideo) currentVideo.muted = true;
            setUnmutedId(null);
        } else {
            Object.values(videoRefs.current).forEach((video) => {
                if (video) video.muted = true;
            });

            if (currentVideo) {
                currentVideo.muted = false;
                setUnmutedId(id);
            }
        }
    };

    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl font-serif font-bold text-black mb-6">
                            Our <span className="text-primary italic">Video Gallery</span>
                        </h1>

                        <p className="text-lg text-black font-semibold">
                            Click a video to expand. Use the speaker icon for audio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videosData.map((video) => (
                            <motion.div
                                key={video.id}
                                layoutId={`card-${video.id}`}
                                onClick={() => setSelectedVideo(video)}
                                className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm group hover:shadow-xl transition-all cursor-pointer"
                            >
                                <div className="aspect-video relative bg-black">
                                    <video
                                        ref={(el) => (videoRefs.current[video.id] = el)}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={video.url} type="video/mp4" />
                                    </video>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 className="text-white w-10 h-10" />
                                    </div>

                                    <button
                                        onClick={(e) => handleToggleMute(e, video.id)}
                                        className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-primary text-white backdrop-blur-md transition-all"
                                    >
                                        {unmutedId === video.id ? (
                                            <Volume2 className="w-5 h-5" />
                                        ) : (
                                            <VolumeX className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* TITLE + DESCRIPTION */}
                                <div className="p-8">
                                    <h3 className="text-xl font-serif font-bold text-black group-hover:text-primary transition-colors mb-2">
                                        {video.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {video.Description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FULL VIEW MODAL */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110]"
                            >
                                <X className="w-10 h-10" />
                            </button>

                            <motion.div
                                layoutId={`card-${selectedVideo.id}`}
                                className="w-full max-w-6xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <video
                                    className="w-full h-full"
                                    controls
                                    autoPlay
                                    src={selectedVideo.url}
                                />
                            </motion.div>

                            <div className="absolute bottom-10 left-0 right-0 text-center px-4">
                                <h2 className="text-white text-2xl font-serif font-bold mb-2">
                                    {selectedVideo.title}
                                </h2>

                                <p className="text-gray-300 text-sm md:text-base">
                                    {selectedVideo.Description}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </Layout>
    );
};

export default GalleryVideos;