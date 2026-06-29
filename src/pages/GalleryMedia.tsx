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

const pressClippings2025 = [
    {
        id: 1,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782709088/WhatsApp_Image_2026-06-22_at_8.11.11_PM_hgafoa.jpg",
        alt: "CGCON 2025 press coverage — feature article",
        className: "",
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782709117/WhatsApp_Image_2026-06-22_at_8.11.11_PM_1_nvob6i.jpg",
        alt: "CGCON 2025 press coverage — newspaper clipping",
        className: "",
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782709083/WhatsApp_Image_2026-06-22_at_8.11.13_PM_atawy0.jpg",
        alt: "CGCON 2025 press coverage — media clipping",
        className: "",
    },
    {
        id: 4,
        src: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782709080/WhatsApp_Image_2026-06-22_at_8.11.15_PM_xpv0xi.jpg",
        alt: "CGCON 2025 press coverage — event highlight",
        className: "",
    },
];

const youtubeIds2024 = [
    "n1FGZhCAffU",
    "8e1zLdQsLuU",
    "H26sKcqfr1k",
    "jwuHeC88S5I",
    "_a0_7em4t3E",
    "kWJ_ViJRzuM",
    "cv8YjkjQuyI",
];

const youtubeIds2025 = [
    "GqFxZvHIDQQ",
    "KVukh2I1Vkk",
    "3tfejZGqP0Q",
    "U5Tzy3lHyho",
    "g6ft461-v20",
    "hc5qHAA87Gw",
    "XGR7TMmQxds",
    "1QnOw42qJfE",
    "dANmZpbKhAM",
    "8elWUoBdiCE",
];

const onlinePressLinks2024 = [
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

const onlinePressLinks2025 = [
    {
        label: "Daily Hunt — R News India",
        url: "http://m.dailyhunt.in/news/india/english/r+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/cgcon+2025+marks+its+2nd+edition+with+launch+of+cosmetic+gynecology+society+of+india-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_a1280c30da5f11f08fd239609cd1ad08?sm=Y",
    },
    {
        label: "Republic News India",
        url: "https://republicnewsindia.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Flipboard — Republic News India",
        url: "https://flipboard.com/@republicnewsind/-cgcon-2025-marks-its-2nd-edition-with-l/a-C79CVT6wReWBg80s79im6A%3Aa%3A3544623556-6785fd4136%2Frepublicnewsindia.com",
    },
    {
        label: "The Indian Bulletin",
        url: "https://theindianbulletin.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "RD Times",
        url: "https://rdtimes.in/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Indian Sentinel",
        url: "https://indiansentinel.in/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Abhyuday Times",
        url: "https://abhyudaytimes.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Hindustan Saga",
        url: "https://hindustansaga.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Let India Shine",
        url: "https://letindiashine.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Indian Scoops",
        url: "https://indianscoops.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "National Age",
        url: "https://nationalage.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "News Outlook",
        url: "https://news-outlook.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Times Bulletin",
        url: "https://times-bulletin.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "India Thrive",
        url: "https://indiathrive.com/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Telangana Post",
        url: "https://telanganapost.co.in/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
    },
    {
        label: "Kerala Reporter",
        url: "https://keralareporter.in/cgcon-2025-marks-its-2nd-edition-with-launch-of-cosmetic-gynecology-society-of-india/",
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
    const [activeImage, setActiveImage] = React.useState<string | null>(null);

    return (
        <Layout>
            <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                {/* Main Page Title */}
                <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-16 sm:mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
                            CGCON <span className="text-primary italic">Media Coverage</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground">
                            Press features, news clippings, and television coverage from the Cosmetic Gynecology World Congresses.
                        </p>
                    </div>
                </div>

                {/* ==================== CGCON 2024 SECTION ==================== */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl mb-24">
                    <div className="border-l-4 border-slate-400 pl-4 sm:pl-6 mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                            CGCON 2024 (1st Cosmetic Gynecology World Congress)
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Press features, news clippings, and television coverage from the 1st Cosmetic Gynecology Congress.
                        </p>
                    </div>

                    {/* Press Clippings Grid - 2024 */}
                    <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-900/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
                            {pressClippings2024.map((clip, i) => (
                                <motion.div
                                    key={clip.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setActiveImage(clip.src)}
                                    className={`relative overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center cursor-pointer group/clip border-b border-r border-slate-100 dark:border-slate-800 ${clip.className}`}
                                >
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/clip:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                        <span className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/30">
                                            Zoom Clipping
                                        </span>
                                    </div>
                                    <img
                                        src={clip.src}
                                        alt={clip.alt}
                                        className="block w-full h-auto max-w-full object-contain object-center group-hover/clip:scale-[1.02] transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Videos Grid - 2024 */}
                    <div className="w-full mb-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-1 sm:gap-2 bg-slate-100 dark:bg-slate-900/60 p-1 sm:p-2">
                            {youtubeIds2024.map((id, i) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[360px] bg-black overflow-hidden rounded-lg"
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
                    <div className="w-full mt-10">
                        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-950 dark:via-slate-900 dark:to-primary/10 p-5 sm:p-8 md:p-10 shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-6">
                                Online Press Coverage (2024)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                                {onlinePressLinks2024.map((item, i) => (
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

                {/* Elegant separator */}
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20">
                    <hr className="border-slate-200 dark:border-slate-800" />
                </div>

                {/* ==================== CGCON 2025 SECTION ==================== */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl mb-24">
                    <div className="border-l-4 border-primary pl-4 sm:pl-6 mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                            CGCON 2025 (2nd Cosmetic Gynecology World Congress)
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Press features, news clippings, and television coverage from the 2nd Cosmetic Gynecology World Congress.
                        </p>
                    </div>

                    {/* Press Clippings Grid - 2025 */}
                    <div className="w-full mb-10 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-900/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
                            {pressClippings2025.map((clip, i) => (
                                <motion.div
                                    key={clip.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setActiveImage(clip.src)}
                                    className={`relative overflow-hidden bg-white dark:bg-slate-900/40 flex items-center justify-center cursor-pointer group/clip border-b border-r border-slate-100 dark:border-slate-800 ${clip.className}`}
                                >
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/clip:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                        <span className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/30">
                                            Zoom Clipping
                                        </span>
                                    </div>
                                    <img
                                        src={clip.src}
                                        alt={clip.alt}
                                        className="block w-full h-auto max-w-full object-contain object-center group-hover/clip:scale-[1.02] transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Videos Grid - 2025 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 animate-fade-in">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-1 sm:gap-2 bg-slate-100 dark:bg-slate-900/60 p-1 sm:p-2">
                            {youtubeIds2025.map((id, i) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[360px] bg-black overflow-hidden rounded-lg"
                                >
                                    <iframe
                                        src={youtubeEmbedSrc(id)}
                                        title={`CGCON 2025 media coverage ${i + 1}`}
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
                    <div className="w-full mt-10">
                        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-950 dark:via-slate-900 dark:to-primary/10 p-5 sm:p-8 md:p-10 shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-6">
                                Online Press Coverage (2025)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                                {onlinePressLinks2025.map((item, i) => (
                                    <motion.a
                                        key={item.url}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.03 }}
                                        className="group flex flex-col justify-between gap-4 min-h-[120px] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-primary transition-colors">
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

            {/* Lightbox Modal */}
            {activeImage && (
                <div
                    className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setActiveImage(null)}
                >
                    <button
                        onClick={() => setActiveImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg cursor-pointer"
                        aria-label="Close lightbox"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg bg-slate-900 border border-slate-800 p-1.5 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activeImage}
                            alt="Press Clipping Detail"
                            className="max-w-full h-auto max-h-[80vh] object-contain rounded"
                        />
                    </motion.div>
                </div>
            )}
        </Layout>
    );
};

export default GalleryMedia;
