import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Countdown helpers ────────────────────────────────────── */
const TARGET_DATE = new Date("2025-12-13T09:00:00+05:30");

function useCountdown(target: Date) {
    const calc = () => {
        const diff = Math.max(0, target.getTime() - Date.now());
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor((diff % 86400000) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000),
        };
    };
    const [time, setTime] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

/* ─── Data ─────────────────────────────────────────────────── */
const organizingTeam = [
    { name: "Dr. Deepa Ganesh", role: "Organizing Chairperson", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-deepa-ganesh-1.png" },
    { name: "Dr. Shamikha Dechamma", role: "Organizing Secretary", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-shamikha-dechamma.png" },
    { name: "Dr. Anitha Prem", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Anitha-Prem.png" },
    { name: "Dr. Chitra Jeyaraj", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Chitra-Jeyaraj.png" },
    { name: "Dr. Shobha Giresh", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Shobha-Giresh.png" },
    { name: "Dr. Sri Sudha", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Sri-Sudha.png" },
    { name: "Dr Vijaya Lakshmi M", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Vijaya-Lakshmi-M.png" },
    { name: "Dr Ashwin Rao", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Ashwin-Rao.png" },
    { name: "Dr Pavithra R", role: "Organizing Committee", img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Pavithra-R.png" },
];

const internationalFaculty = [
    { name: "Dr Charles Runels", country: "USA", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Charles-Runels.png" },
    { name: "Dr Red Alinsod", country: "USA", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Red-Alinsod.png" },
    { name: "Dr Ariel Luksenburg", country: "Uruguay", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Ariel-Luksenburg.png" },
    { name: "Dr Tina Batalha", country: "Brazil", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Tina-Batalha.png" },
    { name: "Dr Dulce Henriques", country: "Brazil", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Dulce-Henriques.png" },
    { name: "Dr Marco Pelosi", country: "USA", img: "https://lvrii.in/conferences/wp-content/uploads/2025/09/Dr-Marco-Pelosi.png" },
];

const topicHighlights = [
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/1.png", label: "Surgical Cosmetic Gynecology — Labiaplasty, Hoodoplasty, Vaginoplasty, Colpoperineoplasty, Hymenoplasty, Monsplasty" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/2.png", label: "Fat grafting, Labia Majora Augmentation" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/3.png", label: "Mommy Makeover" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/4.png", label: "Vulvar Cosmesis" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/5.png", label: "Lasers, Radiofrequency, HIFU, Carboxytherapy" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/6.png", label: "Vulval Fillers & Threads" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/7.png", label: "G-Shot, PRP, Exosomes" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/8.png", label: "Clitogram" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/9.png", label: "BHRT and Anti-Aging" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/10.png", label: "Panel Discussions" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/11.png", label: "Nutrigenomics, Epigenetics" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/12.png", label: "Kegels Chair" },
    { img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/13.png", label: "Debates" },
];

const FLOWERS = {
    topLeft:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-11-r9r05glq2zd7qc9taf7u6e4myx7bl4zl4uj759ksp0.png",
    topRight:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-2-1-r9r03ri7qr1kroqk76t36bjocvkgot918g4mya3dxg.png",
    bottomLeft:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-44-r9r291shocubdgh4wlgs6tg2pemxkw2iiz5vhbi24q.png",
    bottomRight:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-55-r9r28yyz3uqgeml8d28whc5ox90txsrbil7f1hm8ne.png",
    center: "https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png",
};

/* ─── Component ─────────────────────────────────────────────── */
const Conference2025 = () => {
    const countdown = useCountdown(TARGET_DATE);

    return (
        <Layout>
            {/* ── HERO ───────────────────────────────────────────── */}
            <section className="relative w-full -mt-24 lg:-mt-32 pt-24 lg:pt-32 overflow-hidden bg-gradient-to-b from-[#FCF5F3] via-[#FDF8F6] to-[#F3E8E5]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full"
                >
                    <img
                        src={FLOWERS.topLeft}
                        alt=""
                        aria-hidden
                        className="absolute top-0 left-0 w-20 sm:w-28 md:w-36 lg:w-44 h-auto pointer-events-none select-none"
                    />
                    <img
                        src={FLOWERS.topRight}
                        alt=""
                        aria-hidden
                        className="absolute top-0 right-0 w-20 sm:w-28 md:w-36 lg:w-44 h-auto pointer-events-none select-none"
                    />
                    <img
                        src={FLOWERS.bottomLeft}
                        alt=""
                        aria-hidden
                        className="absolute bottom-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 h-auto pointer-events-none select-none"
                    />
                    <img
                        src={FLOWERS.bottomRight}
                        alt=""
                        aria-hidden
                        className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 h-auto pointer-events-none select-none"
                    />

                    <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-10 md:pb-14 text-center flex flex-col items-center">
                        <img
                            src="https://lvrii.in/conferences/wp-content/uploads/2025/08/lvrii-logo.png"
                            alt="LVRII Logo"
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-5 sm:mb-6"
                        />

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold text-[#EA7B74] tracking-wide leading-none">
                            CGCON 2025
                        </h1>

                        <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                            2<sup>nd</sup> Cosmetic Gynecology World Congress
                        </h2>

                        <p className="mt-4 sm:mt-5 max-w-xl mx-auto leading-relaxed">
                            <span className="block text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8a4e4a] tracking-wide">
                                Redefining Intimate Wellness
                            </span>
                            <span className="block text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8a4e4a] tracking-wide mt-1">
                                Beyond Beauty
                            </span>
                        </p>

                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 md:gap-12 font-bold text-gray-900 w-full">
                            <div className="text-center sm:text-right leading-relaxed text-[#EA7B74] text-base sm:text-lg md:text-xl">
                                <div>13th and 14th</div>
                                <div>December</div>
                            </div>

                            <div className="hidden sm:block w-px h-12 bg-gray-300 shrink-0" />

                            <MapPin
                                className="w-7 h-7 sm:w-8 sm:h-8 text-[#EA7B74] shrink-0 sm:hidden"
                                fill="currentColor"
                                strokeWidth={0}
                            />

                            <div className="flex items-center gap-3 sm:gap-4">
                                <MapPin
                                    className="hidden sm:block w-8 h-8 md:w-9 md:h-9 text-[#EA7B74] shrink-0"
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                                <div className="text-center sm:text-left leading-relaxed text-sm sm:text-base md:text-lg">
                                    <div>The Grand Chennai</div>
                                    <div>by GRT Hotels,</div>
                                    <div>T-Nagar , Chennai</div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                            12th December Pre-Congress Workshop
                        </p>

                        <img
                            src={FLOWERS.center}
                            alt="Flower Graphic"
                            className="mt-5 sm:mt-6 w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ── COUNTDOWN ──────────────────────────────────────── */}
            <section className="py-14 bg-gradient-to-r from-primary to-rose-500 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-serif font-bold mb-8 uppercase tracking-widest">COUNTDOWN TO CGCON 2025</h2>
                    <div className="flex justify-center gap-6 md:gap-12 mb-10">
                        {[
                            { label: "Days", value: countdown.days },
                            { label: "Hours", value: countdown.hours },
                            { label: "Minutes", value: countdown.minutes },
                            { label: "Seconds", value: countdown.seconds },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex flex-col items-center">
                                <span className="text-5xl md:text-7xl font-bold tabular-nums">
                                    {String(value).padStart(2, "0")}
                                </span>
                                <span className="text-sm font-semibold uppercase tracking-widest opacity-80 mt-1">{label}</span>
                            </div>
                        ))}
                    </div>
                    <span className="inline-block px-8 py-3 bg-white/30 text-white/60 font-bold rounded-full text-sm uppercase tracking-widest cursor-not-allowed border border-white/20">
                        Registration Closed
                    </span>
                </div>
            </section>

            {/* ── WELCOME MESSAGE ────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 space-y-5">
                            <h2 className="text-3xl font-serif font-bold text-black uppercase tracking-wide">Welcome Message</h2>
                            <p className="text-gray-700 leading-relaxed">Dear Friends and Colleagues,</p>
                            <p className="text-gray-700 leading-relaxed">
                                Following the overwhelming success of CGCON 2024 – the 1st Cosmetic Gynecology Congress in South India,
                                it is with great pleasure that I invite you to the <strong>2nd Cosmetic Gynecology World Congress — CGCON 2025</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Cosmetic and Functional Gynecology continues to evolve as a vital subspecialty in women's healthcare,
                                dedicated to addressing intimate wellness with precision, compassion, and innovation. Building upon the enthusiasm
                                and momentum of last year's landmark event, CGCON 2025 promises to raise the bar even higher.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                In response to the enthusiastic feedback from CGCON 2024, this year's program proudly includes a dedicated
                                <strong> Pre-Congress Hands-On Workshop on 12th December</strong>, designed to provide practical training and skill
                                enhancement in a focused clinical setting.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The Congress will showcase cutting-edge techniques, scientific advancements, and engaging sessions led by a
                                distinguished faculty of national and international experts, who will share their knowledge, clinical experience,
                                and evidence-based insights.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Whether you're exploring this field for the first time or seeking to refine and upgrade your skills, CGCON 2025
                                offers a unique opportunity to deepen your expertise and expand your professional network.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                I warmly invite you to be part of this transformative event that continues to shape the future of Cosmetic
                                Gynecology in India. Join us in Chennai this December and be part of the change.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4">
                            <img
                                src="https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-deepa-ganesh.png"
                                alt="Dr. Deepa Ganesh"
                                className="w-44 h-44 rounded-full object-cover shadow-xl border-4 border-primary/20"
                            />
                            <div>
                                <p className="text-gray-600 italic mb-1">Warm regards,</p>
                                <p className="font-bold text-black text-lg">Dr. Deepa Ganesh</p>
                                <p className="text-base text-gray-600">Founder, President – LVRII</p>
                                <p className="text-base text-gray-600">Organizing Chairperson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ORGANIZING TEAM ────────────────────────────────── */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-12">Organizing Team</h2>
                    <div className="flex flex-col gap-12 items-center">
                        {[
                            { items: organizingTeam.slice(0, 2), gap: "gap-10 md:gap-24" },
                            { items: organizingTeam.slice(2, 6), gap: "gap-8 md:gap-12" },
                            { items: organizingTeam.slice(6, 9), gap: "gap-10 md:gap-16" },
                        ].map((row, rowIndex) => (
                            <div key={rowIndex} className={`flex flex-wrap justify-center ${row.gap}`}>
                                {row.items.map((doc, i) => {
                                    const index = rowIndex === 0 ? i : rowIndex === 1 ? i + 2 : i + 6;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex flex-col items-center text-center gap-3 w-40 md:w-48"
                                        >
                                            <img
                                                src={doc.img}
                                                alt={doc.name}
                                                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
                                            />
                                            <p className="font-bold text-base md:text-lg text-black">{doc.name}</p>
                                            <p className="text-sm md:text-base text-gray-500">{doc.role}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTERNATIONAL FACULTY ──────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-12">International Faculty</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
                        {internationalFaculty.map((doc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex flex-col items-center text-center gap-4"
                            >
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-primary/20"
                                />
                                <p className="font-bold text-lg md:text-xl text-black">{doc.name}</p>
                                <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{doc.country}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TOPIC HIGHLIGHTS ───────────────────────────────── */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-12">Topic Highlights</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {topicHighlights.map((topic, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all group"
                            >
                                <img
                                    src={topic.img}
                                    alt={topic.label}
                                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-3">
                                    <p className="text-sm text-gray-700 font-medium leading-snug">{topic.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REGISTRATION DETAILS ───────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-10">Registration Details</h2>
                    <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
                        <img
                            src="https://lvrii.in/conferences/wp-content/uploads/2025/09/event-dates-1024x138.jpg"
                            alt="Event Registration Dates"
                            className="w-full rounded-2xl shadow-md"
                        />
                        <p className="text-base text-gray-600 italic text-center">
                            Note: The registration fee includes GST @ 18% and Banquet
                        </p>
                        <img
                            src="https://lvrii.in/conferences/wp-content/uploads/2025/09/pre-conference-work-shop.png"
                            alt="Pre-Conference Workshop Registration"
                            className="w-full rounded-2xl shadow-md"
                        />
                        <p className="text-base text-gray-600 italic text-center">
                            Conference Registration is Mandatory.
                        </p>
                        <span className="mt-4 inline-block px-10 py-3 bg-slate-300 text-slate-500 font-bold rounded-full text-sm uppercase tracking-widest cursor-not-allowed">
                            Registration Closed
                        </span>
                    </div>
                </div>
            </section>

            {/* ── CONFERENCE VENUE ───────────────────────────────── */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-12">Conference Venue</h2>
                    <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <img
                                src="https://lvrii.in/conferences/wp-content/uploads/2025/09/THE-GRAND-CHENNAI.jpg"
                                alt="The Grand Chennai by GRT Hotels"
                                className="w-full rounded-3xl shadow-xl object-cover"
                            />
                            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-black">The Grand Chennai by GRT Hotels</p>
                                    <p className="text-base text-gray-600">T-Nagar, Chennai, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-xl h-96">
                            <iframe
                                src="https://maps.google.com/maps?q=GRT%20Hotels%20tnagar%20chennai&t=m&z=15&output=embed&iwloc=near"
                                title="GRT Hotels T-Nagar Chennai"
                                aria-label="GRT Hotels T-Nagar Chennai"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WAYS TO PAY ─────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Ways to Pay</h2>
                    <ul className="space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
                        <li>An <strong>online registration facility</strong> is available.</li>
                        <li><strong>Post/Courier:</strong> Please post the registration form and Demand Draft in Favor of <em>CGCON 2025, 2nd Cosmetic Gynecology Congress</em> to the conference secretariat. Please send scanned AWB by e-mail in case of courier or receipt in case of speed post.</li>
                        <li>Credit / Debit card surcharge will be applicable.</li>
                    </ul>
                </div>
            </section>

            {/* ── REGISTRATION FEE INCLUDES ───────────────────────── */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Registration Fee Includes</h2>
                    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-2">
                        <p className="font-bold text-primary mb-3">Delegate:</p>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                            <li>Admission to Scientific Sessions and Exhibition</li>
                            <li>Refreshments During Breaks</li>
                            <li>Lunches</li>
                            <li>Registration Materials and Kit</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── CANCELLATION & REFUND POLICY ────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Cancellation &amp; Refund Policy</h2>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                        <p className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium">
                            No Refund will be given for cancellation requests received after <strong>25/11/2025</strong>.
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>All requests for cancellation must be sent to the conference secretariat in writing by <strong>email only</strong>.</li>
                            <li>Cancellation requests for any paid registration MUST BE received by the Conference Secretariat through email to be entitled to a refund.</li>
                            <li><strong>REFUND</strong> for cancellation of a paid registration if the request is received on or before <strong>25/11/2025</strong> — after deducting administrative charges and cost towards refund, if any.</li>
                            <li><strong>NO REFUND</strong> for cancellation requests received through email after <strong>25/11/2025</strong>.</li>
                            <li>Refund, if any, will be credited post-conference to the original payment method within <strong>20 business days</strong>.</li>
                            <li>A similar mode of transfer will be adopted for refund as the fund was received. <strong>NO CASH refund policy.</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── PAYMENT MODE ────────────────────────────────────── */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Payment Mode</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-2">
                            <p className="font-bold text-primary">Online Payment</p>
                            <p className="text-gray-700 text-base leading-relaxed">An online payment facility is available and can be accessed through the online registration portal.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-2">
                            <p className="font-bold text-primary">Offline Payment</p>
                            <p className="text-gray-700 text-base leading-relaxed">Delegates who wish to pay by Cheque / DD may draw it in favor of <em>"Laser Vaginal Rejuvenation Institute of India (LVRII)"</em> and send it along with a duly filled registration form to the Conference Secretariat.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TERMS & CONDITIONS ─────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Terms &amp; Conditions</h2>
                    <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                        {[
                            { title: "1. Acceptance of Terms", body: "By registering for and attending the medical conference event on this website, you agree to comply with and be bound by these Terms & Conditions." },
                            { title: "2. Registration & Eligibility", body: "Registrants must provide accurate and complete information during registration. Registration cannot be transferred. The event is open to healthcare professionals, researchers, and students in the medical field. We reserve the right to refuse registration at our discretion. PG students should submit a bonafide letter from the head of the department. Accompanying people and children will not be allowed to attend the scientific sessions. Airport transfers cost is not included in the registration amount." },
                            { title: "3. Payment and Refunds", body: "Registration fees, if applicable, must be paid in full before access is granted. Refunds will be handled as per the refund policy specified during registration. Generally, refunds are not provided after a specified deadline or after the event starts." },
                            { title: "4. Event Access and Use", body: "Access to the conference materials and sessions is for registered attendees only and is non-transferable. Attendees must not record, reproduce, or distribute event content without explicit permission." },
                            { title: "5. Code of Conduct", body: "Attendees agree to behave professionally and respectfully during the event. Harassment, discrimination, or disruptive behavior will not be tolerated and may result in removal from the event without refund." },
                            { title: "6. Intellectual Property", body: "All content, including presentations, videos, and materials, are the intellectual property of the conference organizers or presenters. Attendees are granted a limited, non-exclusive license to view the content for personal, educational use only." },
                            { title: "7. Limitation of Liability", body: "The organizers are not responsible for any injury, loss, or damage arising from participation in the event or use of the website." },
                            { title: "8. Changes to Terms", body: "We reserve the right to update or modify these Terms at any time. Attendees will be notified of significant changes." },
                            { title: "9. Contact Information", body: "For questions about these Terms, please contact us at info.lvrii@gmail.com" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <p className="font-bold text-black mb-1">{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRIVACY POLICY ──────────────────────────────────── */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">Privacy Policy</h2>
                    <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                        {[
                            { title: "1. Information We Collect", body: "Personal information you provide during registration (name, email, professional details). Usage data from your interaction with the event website (IP address, browser type, session times)." },
                            { title: "2. Use of Information", body: "To process registration and payments. To provide access to conference sessions and materials. To communicate important updates about the event. To improve our services and user experience." },
                            { title: "3. Data Sharing", body: "We do not sell or rent your personal information. Your information may be shared with presenters or sponsors only as necessary for event purposes. We may disclose information if required by law or to protect rights." },
                            { title: "4. Data Security", body: "We implement reasonable security measures to protect your personal information." },
                            { title: "5. Cookies and Tracking", body: "Our website uses cookies to enhance user experience and analyze traffic. You can adjust your browser settings to manage cookies." },
                            { title: "6. Your Rights", body: "You can access, update, or request deletion of your personal data by contacting us. You may opt-out of marketing communications at any time." },
                            { title: "7. Retention", body: "We retain your data only as long as necessary for event purposes or as required by law." },
                            { title: "8. Children's Privacy", body: "The event is not intended for children under 18 years old." },
                            { title: "9. Contact Us", body: "For privacy-related inquiries, please contact info.lvrii@gmail.com" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-black mb-1">{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT US ──────────────────────────────────────── */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-black text-center uppercase tracking-wide mb-12">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl shadow-md p-8 space-y-4">
                            <h3 className="font-bold text-primary text-lg uppercase tracking-wide">Congress Secretariat</h3>
                            <div className="space-y-1">
                                <p className="font-bold text-black text-lg">Dr. Deepa Ganesh</p>
                                <p className="text-base text-gray-600">Organizing Chairperson</p>
                                <p className="text-base text-gray-600">Founder, President LVRII</p>
                            </div>
                            <a href="tel:+919940117779" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.19z" /></svg>
                                +91 99401 17779
                            </a>
                            <a href="mailto:info.lvrii@gmail.com" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                info.lvrii@gmail.com
                            </a>
                        </div>
                        <div className="bg-white rounded-3xl shadow-md p-8 space-y-3">
                            <h3 className="font-bold text-primary text-lg uppercase tracking-wide">Address</h3>
                            <div className="flex items-start gap-3 text-gray-700 leading-relaxed">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <address className="not-italic">
                                    Ground Floor, No. 8, Rams Flat,<br />
                                    Gajapathy Street, Barnaby Rd,<br />
                                    Kilpauk,<br />
                                    Chennai, Tamil Nadu – 600 010.
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER CTA ─────────────────────────────────────── */}
            <section className="py-20 text-center bg-white">
                <div className="container mx-auto px-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-black mb-4">Be Part of CGCON 2025</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Join us in Chennai this December and be part of the change that shapes the future of Cosmetic Gynecology in India.
                    </p>
                    <span className="inline-block px-10 py-3 bg-slate-300 text-slate-500 font-bold rounded-full text-sm uppercase tracking-widest cursor-not-allowed">
                        Registration Closed
                    </span>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2025;
