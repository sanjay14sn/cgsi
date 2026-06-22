import React from "react";
import Layout from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const pressClippings2024 = [
    {
        id: 1,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782109274/WhatsApp_Image_2026-06-17_at_5.02.39_PM_gb0six.jpg",
        alt: "CGCON 2024 press coverage — newspaper clipping",
        className: "md:col-span-2",
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782109302/Screenshot_2026-06-22_at_11.51.26_AM_b74vqg.png",
        alt: "CGCON 2024 press coverage — Hindu Tamil Thisai",
        className: "",
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782109271/WhatsApp_Image_2026-06-17_at_5.02.38_PM_kvz75r.jpg",
        alt: "CGCON 2024 press coverage — Downtown Pocket Diary",
        className: "",
    },
];

const youtubeIds = [
    "KJIWmfivYSQ",
    "n1FGZhCAffU",
    "8e1zLdQsLuU",
    "H26sKcqfr1k",
    "jwuHeC88S5I",
    "_a0_7em4t3E",
    "kWJ_ViJRzuM",
    "cv8YjkjQuyI",
];

const onlinePressLinks = [
    {
        label: "Daily Hunt — Republic News India",
        url: "http://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/chennai+hosts+south+indias+first+cosmetic+gynecology+congress+cgcon+2024-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_44cb1c90ab0611efbfe5252bdf5c44af?sm=Y",
    },
    {
        label: "Republic News India",
        url: "https://republicnewsindia.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Flipboard — Republic News India",
        url: "https://flipboard.com/@republicnewsind/-chennai-hosts-south-indias-first-cosmet/a-z-M_4e_US7qh10q-CD4jDw%3Aa%3A3544623556-856e343944%2Frepublicnewsindia.com",
    },
    {
        label: "Woman Saga",
        url: "https://womansaga.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "The Indian Bulletin",
        url: "https://theindianbulletin.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "RD Times",
        url: "https://rdtimes.in/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Indian Sentinel",
        url: "https://indiansentinel.in/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Abhyuday Times",
        url: "https://abhyudaytimes.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Hindustan Saga",
        url: "https://hindustansaga.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Let India Shine",
        url: "https://letindiashine.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Indian Scoops",
        url: "https://indianscoops.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "National Age",
        url: "https://nationalage.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "News Outlook",
        url: "https://news-outlook.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Times Bulletin",
        url: "https://times-bulletin.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "India Thrive",
        url: "https://indiathrive.com/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
    {
        label: "Pioneer News",
        url: "https://pioneernews.co.in/chennai-hosts-south-indias-first-cosmetic-gynecology-congress-cgcon-2024/",
    },
];

function youtubeEmbedSrc(id: string) {
    const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",
        playsinline: "1",
        controls: "0",
        modestbranding: "1",
        rel: "0",
        loop: "1",
        playlist: id,
        enablejsapi: "1",
    });
    return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

const GalleryMedia = () => {
    return (
        <Layout>
            <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-10 sm:mb-14">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            CGCON 2024 <span className="text-primary italic">Media Coverage</span>
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Press features, news clippings, and television coverage from the 1st Cosmetic Gynecology Congress.
                        </p>
                    </div>
                </div>

                {/* Press — full bleed */}
                <div className="relative z-10 w-full mb-14 sm:mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
                        {pressClippings2024.map((clip, i) => (
                            <motion.div
                                key={clip.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`overflow-hidden bg-slate-50 flex items-center justify-center ${clip.className}`}
                            >
                                <img
                                    src={clip.src}
                                    alt={clip.alt}
                                    className="block w-full h-auto max-w-full object-contain object-center"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Videos — 3×3 grid, larger tiles */}
                <div className="relative z-10 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-1 sm:gap-2">
                        {youtubeIds.map((id, i) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[360px] xl:min-h-[420px] bg-black overflow-hidden"
                            >
                                <iframe
                                    src={youtubeEmbedSrc(id)}
                                    title={`CGCON 2024 media coverage ${i + 1}`}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Online press links — grid cards */}
                <div className="relative z-10 w-full mt-10 sm:mt-14">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-primary/5 p-5 sm:p-8 md:p-10 shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                                {onlinePressLinks.map((item, i) => (
                                    <motion.a
                                        key={item.url}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.03 }}
                                        className="group flex flex-col justify-between gap-4 min-h-[120px] rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug group-hover:text-primary transition-colors">
                                            {item.label}
                                        </span>
                                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
                                            Read article
                                            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GalleryMedia;
