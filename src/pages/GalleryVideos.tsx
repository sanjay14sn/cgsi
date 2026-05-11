import React, { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { PlayCircle, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const videosData = [
    {
        id: 1,
        title: "CGCON 2024",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771399981/WhatsApp_Video_2026-02-13_at_9.23.31_AM_mplpkn.mp4",

    },
    {
        id: 2,
        title: "CGCON 2025",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408768/WhatsApp_Video_2026-02-13_at_9.22.03_AM_pdyxnq.mp4",

    },
    {
        id: 3,
        title: "2025",
        url: "https://res.cloudinary.com/ddibq0tya/video/upload/v1771408856/2025v_znrc3o.mp4",

    },
];

const GalleryVideos = () => {
    // We store refs to all video elements to control their volume/mute status
    type VideoRefs = { [key: number]: HTMLVideoElement | null };
    const videoRefs = useRef<VideoRefs>({});
    const [unmutedId, setUnmutedId] = useState<number | null>(null);

    const handleToggleMute = (id: number) => {
        const currentVideo = videoRefs.current[id];
        if (unmutedId === id) {
            // If clicking the same video that is already unmuted, mute it
            if (currentVideo) currentVideo.muted = true;
            setUnmutedId(null);
        } else {
            // Mute all videos first
            Object.values(videoRefs.current).forEach((video) => {
                if (video) video.muted = true;
            });
            // Unmute the selected one
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
                            Videos autoplay silently. Click the speaker icon to enable audio for a specific video.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videosData.map((video) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm group hover:shadow-xl transition-all"
                            >
                                <div className="aspect-video relative bg-black">
                                    <video
                                        ref={(el) => (videoRefs.current[video.id] = el)}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted // Required for autoplay to work in most browsers
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={video.url} type="video/mp4" />
                                    </video>

                                    {/* Custom Mute/Unmute Overlay Button */}
                                    <button
                                        onClick={() => handleToggleMute(video.id)}
                                        className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-primary text-white backdrop-blur-md transition-all"
                                    >
                                        {unmutedId === video.id ? (
                                            <Volume2 className="w-5 h-5" />
                                        ) : (
                                            <VolumeX className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="p-8">

                                    <h3 className="text-xl font-serif font-bold text-black group-hover:text-primary transition-colors">
                                        {video.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GalleryVideos;