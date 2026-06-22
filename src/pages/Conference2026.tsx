import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-11-20T09:00:00+05:30");

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
    }, [target]);
    return time;
}

const LOGO =
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778057479/6b3a6033-b4e8-44a9-aa71-98bea42dc8b2_zjpno8.jpg";

const organizingTeam = [
    {
        name: "Dr. Deepa Ganesh",
        role: "President",
        img: "/deepa.png",
    },
    {
        name: "Dr. Shamika Dechamma",
        role: "Secretary",
        img: "/shamika.png",
    },
    {
        name: "Dr. Anitha Prem",
        role: "Treasurer",
        img: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771399674/WhatsApp_Image_2026-02-10_at_12.54.13_PM_wlraqx.jpg",
    },
];

// Add faculty when confirmed: { name: "Dr ...", country: "..." }
const internationalFaculty: { name: string; country: string }[] = [];

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

const termsAndConditions = [
    { title: "1. Acceptance of Terms", body: "By registering for and attending the medical conference event on this website, you agree to comply with and be bound by these Terms & Conditions." },
    { title: "2. Registration & Eligibility", body: "Registrants must provide accurate and complete information during registration. Registration cannot be transferred. The event is open to healthcare professionals, researchers, and students in the medical field. We reserve the right to refuse registration at our discretion. PG students should submit a bonafide letter from the head of the department. Accompanying people and children will not be allowed to attend the scientific sessions. Airport transfers cost is not included in the registration amount." },
    { title: "3. Payment and Refunds", body: "Registration fees, if applicable, must be paid in full before access is granted. Refunds will be handled as per the refund policy specified during registration. Generally, refunds are not provided after a specified deadline or after the event starts." },
    { title: "4. Event Access and Use", body: "Access to the conference materials and sessions is for registered attendees only and is non-transferable. Attendees must not record, reproduce, or distribute event content without explicit permission." },
    { title: "5. Code of Conduct", body: "Attendees agree to behave professionally and respectfully during the event. Harassment, discrimination, or disruptive behavior will not be tolerated and may result in removal from the event without refund." },
    { title: "6. Intellectual Property", body: "All content, including presentations, videos, and materials, are the intellectual property of the conference organizers or presenters. Attendees are granted a limited, non-exclusive license to view the content for personal, educational use only." },
    { title: "7. Limitation of Liability", body: "The organizers are not responsible for any injury, loss, or damage arising from participation in the event or use of the website." },
    { title: "8. Changes to Terms", body: "We reserve the right to update or modify these Terms at any time. Attendees will be notified of significant changes." },
    { title: "9. Contact Information", body: "For questions about these Terms, please contact us at info.lvrii@gmail.com" },
];

const privacyPolicy = [
    { title: "1. Information We Collect", body: "Personal information you provide during registration (name, email, professional details). Usage data from your interaction with the event website (IP address, browser type, session times)." },
    { title: "2. Use of Information", body: "To process registration and payments. To provide access to conference sessions and materials. To communicate important updates about the event. To improve our services and user experience." },
    { title: "3. Data Sharing", body: "We do not sell or rent your personal information. Your information may be shared with presenters or sponsors only as necessary for event purposes. We may disclose information if required by law or to protect rights." },
    { title: "4. Data Security", body: "We implement reasonable security measures to protect your personal information." },
    { title: "5. Cookies and Tracking", body: "Our website uses cookies to enhance user experience and analyze traffic. You can adjust your browser settings to manage cookies." },
    { title: "6. Your Rights", body: "You can access, update, or request deletion of your personal data by contacting us. You may opt-out of marketing communications at any time." },
    { title: "7. Retention", body: "We retain your data only as long as necessary for event purposes or as required by law." },
    { title: "8. Children's Privacy", body: "The event is not intended for children under 18 years old." },
    { title: "9. Contact Us", body: "For privacy-related inquiries, please contact info.lvrii@gmail.com" },
];

const Conference2026 = () => {
    const countdown = useCountdown(TARGET_DATE);

    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-8 pb-14 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
                <div
                    className="absolute inset-0 opacity-[0.07] bg-no-repeat bg-right-bottom bg-contain pointer-events-none"
                    style={{
                        backgroundImage:
                            "url('https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png')",
                    }}
                />
                <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={LOGO}
                            alt="CGSI Logo"
                            className="mx-auto mb-6 sm:mb-8 h-24 sm:h-32 md:h-40 w-auto object-contain"
                        />

                        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-accent mb-2">
                            CGCON 2026
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                            3rd Cosmetic Gynecology
                            <br />
                            World Congress
                        </h1>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
                            <span className="inline-flex items-start sm:items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary text-left sm:text-center">
                                <Calendar className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />
                                <span>
                                    20<sup>th</sup> – 22<sup>nd</sup> November 2026
                                    <span className="block text-xs font-medium opacity-80 mt-0.5">
                                        Pre-Congress Workshop: 20 Nov · Main Conference: 21 &amp; 22 Nov
                                    </span>
                                </span>
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent">
                                <MapPin className="w-4 h-4 shrink-0" />
                                Grand Chennai by GRT Hotels, Chennai
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Countdown */}
            <section className="py-12 sm:py-14 bg-gradient-to-r from-primary to-rose-500 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold mb-6 sm:mb-8 uppercase tracking-widest">
                        Countdown to CGCON 2026
                    </h2>
                    <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-10">
                        {[
                            { label: "Days", value: countdown.days },
                            { label: "Hours", value: countdown.hours },
                            { label: "Minutes", value: countdown.minutes },
                            { label: "Seconds", value: countdown.seconds },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex flex-col items-center min-w-[4.5rem] sm:min-w-[5.5rem]">
                                <span className="text-4xl sm:text-5xl md:text-7xl font-bold tabular-nums">
                                    {String(value).padStart(2, "0")}
                                </span>
                                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest opacity-80 mt-1">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm sm:text-base opacity-90 mb-6">
                        20<sup>th</sup> – 22<sup>nd</sup> November 2026 · Grand Chennai by GRT Hotels, Chennai
                    </p>
                    <span className="inline-block px-6 sm:px-8 py-3 bg-white/90 text-primary font-bold rounded-full shadow-lg text-sm uppercase tracking-widest">
                        Online Registration Opens Soon
                    </span>
                </div>
            </section>

            {/* Team CGCON */}
            <section className="py-14 sm:py-16 md:py-20 bg-slate-50/50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Team CGCON</h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
                        {organizingTeam.map((doc) => (
                            <div key={doc.name} className="text-center">
                                <div className="mx-auto mb-4 aspect-square max-w-[160px] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                                    <img
                                        src={doc.img}
                                        alt={doc.name}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900">{doc.name}</h3>
                                <p className="text-sm text-primary font-semibold mt-1">{doc.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#fdf8f6] via-white to-[#f0f8f8]">
                <div
                    className="absolute inset-0 opacity-[0.08] bg-no-repeat bg-left-bottom bg-contain pointer-events-none"
                    style={{
                        backgroundImage:
                            "url('https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png')",
                    }}
                />
                <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
                    <div className="text-center mb-10 lg:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary uppercase tracking-wide">
                            Welcome Message
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-28 bg-gradient-to-r from-primary via-primary to-accent" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
                        <div className="lg:col-span-2 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                            <p>Dear Friends and Colleagues,</p>

                            <p>
                                It gives me immense pleasure to welcome you to{" "}
                                <strong className="text-slate-900">
                                    CGCON 2026 – The 3rd Cosmetic Gynecology World Congress
                                </strong>
                                , proudly organized by the Cosmetic Gynecology Society of India (CGSI).
                            </p>

                            <p>
                                Over the past two years, CGCON has evolved from a visionary initiative into a
                                premier international platform dedicated to advancing the science and art of
                                Cosmetic and Functional Gynecology. The overwhelming success of our previous
                                congresses has strengthened our commitment to fostering excellence, innovation,
                                education, and evidence-based practice in this rapidly growing subspecialty.
                            </p>

                            <p>
                                As the Founder President of CGSI, it is particularly gratifying to witness the
                                remarkable growth of Cosmetic Gynecology in India and the increasing global
                                recognition of the work being carried out by our members and colleagues.{" "}
                                <strong className="text-slate-900">CGCON 2026</strong> represents another
                                significant milestone in this journey.
                            </p>

                            <p>
                                In response to the growing demand for structured training and skill enhancement,{" "}
                                <strong className="text-slate-900">CGCON 2026</strong> will commence with an
                                exclusive Pre-Congress Hands-On Workshop on{" "}
                                <strong className="text-slate-900">20th November 2026</strong>, offering
                                participants practical exposure to the latest techniques, technologies, and
                                procedures in Cosmetic, Functional and Regenerative Gynecology.
                            </p>

                            <p>
                                This will be followed by the Main Scientific Conference on{" "}
                                <strong className="text-slate-900">21st and 22nd November 2026</strong> at Grand
                                Chennai by GRT Hotels, Chennai. The scientific program has been thoughtfully
                                curated to showcase cutting-edge innovations, surgical advancements, regenerative
                                therapies, aesthetic and functional procedures, and the latest evidence-based
                                research in women&apos;s intimate health and wellness.
                            </p>

                            <p>
                                Renowned national and international experts will share their knowledge through
                                keynote lectures, panel discussions, interactive sessions, debates, case-based
                                learning, video sessions, and live demonstrations. Whether you are an experienced
                                practitioner, an academician, or a clinician exploring this field for the first
                                time, <strong className="text-slate-900">CGCON 2026</strong> offers an
                                unparalleled opportunity to learn, collaborate, exchange ideas, and build lasting
                                professional relationships.
                            </p>

                            <p>
                                Beyond academics, CGCON is a celebration of innovation, excellence, and our shared
                                commitment to improving women&apos;s health, confidence, and quality of life. It is
                                a platform where science meets artistry, experience meets innovation, and global
                                experts come together to shape the future of Cosmetic Gynecology.
                            </p>

                            <p>
                                On behalf of the Cosmetic Gynecology Society of India, I warmly invite you to join
                                us for this landmark event. Together, let us continue to push boundaries, inspire
                                progress, and redefine the standards of women&apos;s intimate health care.
                            </p>

                            <p>
                                Join us on <strong className="text-slate-900">20th–22nd November 2026</strong> at
                                Grand Chennai by GRT Hotels, Chennai, and be part of a transformative journey that
                                is shaping the future of Cosmetic Gynecology.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 lg:sticky lg:top-28">
                            <div className="relative">
                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary/80" />
                                <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-accent/80" />
                                <img
                                    src="https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-deepa-ganesh.png"
                                    alt="Dr. Deepa Ganesh"
                                    className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-primary/30"
                                />
                            </div>
                            <div>
                                <p className="text-slate-600 italic mb-1">Warm Regards,</p>
                                <p className="font-bold text-primary text-lg">Dr. Deepa Ganesh</p>
                                <div className="mt-2 mx-auto w-16 h-px bg-slate-300" />
                                <p className="text-sm text-slate-600 mt-2">
                                    Founder President, Cosmetic Gynecology Society of India (CGSI)
                                </p>
                                <p className="text-sm text-slate-600">Organizing Chairperson, CGCON 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* International Faculty */}
            <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            International Faculty
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    </div>

                    {internationalFaculty.length > 0 ? (
                        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
                            {internationalFaculty.map((faculty) => (
                                <li
                                    key={faculty.name}
                                    className="flex items-start gap-3 text-base text-slate-700"
                                >
                                    <span
                                        className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <span className="font-semibold text-slate-900">{faculty.name}</span>
                                        <span className="text-slate-500"> · {faculty.country}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-primary/5 px-6 py-10 sm:px-10 sm:py-12 text-center shadow-md">
                            <p className="text-base sm:text-lg text-slate-600 italic">
                                International faculty list will be updated soon.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Topic Highlights */}
            <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Topic Highlights
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                            Scientific sessions covering the full spectrum of cosmetic and functional gynecology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {topicHighlights.map((topic, i) => (
                            <motion.div
                                key={topic.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-primary/25 transition-all duration-300"
                            >
                                <div className="bg-slate-50 p-3 sm:p-4">
                                    <img
                                        src={topic.img}
                                        alt=""
                                        className="block w-full h-auto rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-2 border-t border-slate-100 p-4 sm:p-5">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                                        {topic.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms & Conditions */}
            <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Terms &amp; Conditions
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                    <div className="space-y-4 sm:space-y-5 text-slate-700 text-base leading-relaxed">
                        {termsAndConditions.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5"
                            >
                                <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Policy */}
            <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Privacy Policy
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    </div>
                    <div className="space-y-4 sm:space-y-5 text-slate-700 text-base leading-relaxed">
                        {privacyPolicy.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
                            >
                                <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Contact Us
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-4">
                            <h3 className="font-bold text-primary text-lg uppercase tracking-wide">
                                Congress Secretariat
                            </h3>
                            <div className="space-y-1">
                                <p className="font-bold text-slate-900 text-lg">Dr. Deepa Ganesh</p>
                                <p className="text-base text-slate-600">Organizing Chairperson</p>
                                <p className="text-base text-slate-600">
                                    Founder President, Cosmetic Gynecology Society of India (CGSI)
                                </p>
                            </div>
                            <a
                                href="tel:+919940117779"
                                className="flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                +91 99401 17779
                            </a>
                            <a
                                href="mailto:info.lvrii@gmail.com"
                                className="flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                info.lvrii@gmail.com
                            </a>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-3">
                            <h3 className="font-bold text-primary text-lg uppercase tracking-wide">
                                Conference Venue
                            </h3>
                            <div className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <address className="not-italic">
                                    Grand Chennai by GRT Hotels,
                                    <br />
                                    T-Nagar,
                                    <br />
                                    Chennai, Tamil Nadu, India
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2026;
