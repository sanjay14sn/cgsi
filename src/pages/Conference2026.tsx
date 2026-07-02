import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { MapPin, Mail, Phone } from "lucide-react";
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
    "https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png";

const FLOWERS = {
    topLeft:
        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782978267/ChatGPT_Image_Jul_2_2026_01_13_46_PM_avouff.png",
    topRight:
        "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782978267/ChatGPT_Image_Jul_2_2026_01_13_46_PM_avouff.png",
    bottomLeft:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-44-r9r291shocubdgh4wlgs6tg2pemxkw2iiz5vhbi24q.png",
    bottomRight:
        "https://lvrii.in/conferences/wp-content/uploads/elementor/thumbs/flower-55-r9r28yyz3uqgeml8d28whc5ox90txsrbil7f1hm8ne.png",
    center: "https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png",
};

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

const organizingCommittee = [
    { name: "Dr. Alpa Khakhar", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782794582/WhatsApp_Image_2026-06-29_at_3.14.55_PM_tiqoyd.jpg" },
    { name: "Dr. Chitra Jeyaraj", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991163/WhatsApp_Image_2026-07-02_at_4.18.45_PM_eh8iku.jpg" },
    { name: "Dr. Shobha Giresh", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991242/Screenshot_2026-07-02_at_4.50.12_PM_tnvxnu.png" },
    { name: "Dr. Sri Sudha", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991177/WhatsApp_Image_2026-07-02_at_4.19.19_PM_fupsxm.jpg" },
    { name: "Dr. Ashwin Rao", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991255/WhatsApp_Image_2026-07-02_at_4.20.29_PM_rvcutf.jpg" },
    { name: "Dr Vijaya Lakshmi M", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991151/WhatsApp_Image_2026-07-02_at_4.17.48_PM_eixbls.jpg" },
    { name: "Dr. Shoba vijayakumar", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991300/Screenshot_2026-07-02_at_4.51.26_PM_htaque.png" },
    { name: "Dr. S. Chitralakshmi", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991331/WhatsApp_Image_2026-07-02_at_4.21.45_PM_fv9nks.jpg" },
    { name: "Dr.Priyadharshini Manoharan", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991345/WhatsApp_Image_2026-07-02_at_4.21.59_PM_wndjal.jpg" },
    { name: "Dr Pavithra R", img: "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782991352/WhatsApp_Image_2026-07-02_at_4.23.46_PM_t5ibgc.jpg" },
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
    { title: "9. Contact Information", body: "For questions about these Terms, please contact us at info.thecgsi@gmail.com" },
];



const Conference2026 = () => {
    const countdown = useCountdown(TARGET_DATE);

    return (
        <Layout>
            {/* Hero */}
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
                        className="absolute top-0 left-0 w-36 sm:w-44 md:w-56 lg:w-72 xl:w-80 h-auto pointer-events-none select-none"
                    />
                    <img
                        src={FLOWERS.topRight}
                        alt=""
                        aria-hidden
                        className="absolute top-0 right-0 w-36 sm:w-44 md:w-56 lg:w-72 xl:w-80 h-auto scale-x-[-1] pointer-events-none select-none"
                    />

                    <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-10 md:pb-14 text-center flex flex-col items-center">
                        <img
                            src={LOGO}
                            alt="CGSI Logo"
                            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mb-5 sm:mb-6"
                        />

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold text-[#EA7B74] tracking-wide leading-none">
                            CGCON 2026
                        </h1>

                        <h2 className="mt-3 sm:mt-4 flex flex-wrap items-baseline justify-center font-serif font-normal tracking-wide leading-none">
                            <span className="text-[#E8877F] inline-flex items-baseline">
                                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">3</span>
                                <sup className="text-sm sm:text-base md:text-lg font-normal leading-none ml-0.5 -top-2 sm:-top-3 md:-top-4 relative">rd</sup>
                            </span>
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] ml-1 sm:ml-2">
                                <span className="text-[#3a2f2c]">Cosmetic </span>
                                <span className="text-[#E8877F]">Gynecology </span>
                                <span className="text-[#3a2f2c]">World Congress</span>
                            </span>
                        </h2>

                        <p className="mt-4 sm:mt-5 max-w-xl mx-auto leading-relaxed">
                            <span className="block text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8a4e4a] tracking-wide">
                                Redefining Intimate Wellness
                            </span>
                            <span className="block text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#8a4e4a] tracking-wide mt-1">
                                Beyond Beauty
                            </span>
                        </p>

                        <img
                            src={FLOWERS.center}
                            alt="Flower Graphic"
                            className="mt-5 sm:mt-6 w-40 sm:w-52 md:w-64 lg:w-72 h-auto object-contain mx-auto"
                        />

                        <div className="mt-5 sm:mt-6 w-full max-w-lg mx-auto space-y-2 relative z-20">
                            <div className="flex overflow-hidden rounded-sm shadow-sm">
                                <div className="flex-1 bg-[#e8957a] px-4 py-3 sm:py-3.5 text-center sm:text-left">
                                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
                                        20<sup className="text-xs sm:text-sm">th</sup>–22<sup className="text-xs sm:text-sm">nd</sup>
                                    </p>
                                    <p className="text-lg sm:text-xl font-bold text-slate-900 leading-none mt-0.5">November 2026</p>
                                </div>
                                <div className="w-px bg-slate-900/30 shrink-0" />
                                <div className="flex-1 bg-[#e8957a] px-4 py-3 sm:py-3.5 flex flex-col items-center justify-center text-center">
                                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                                        Hotel GRT Grand
                                    </p>
                                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug mt-0.5">
                                        T-Nagar, Chennai.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#a8d4d4] px-4 py-2 sm:py-2.5 text-center shadow-sm rounded-sm">
                                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                                    Workshop - 20<sup>th</sup> November 2026
                                </p>
                            </div>

                            <div className="bg-[#a8d4d4] px-4 py-2 sm:py-2.5 text-center shadow-sm rounded-sm">
                                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                                    Conference - 21<sup>st</sup> &amp; 22<sup>nd</sup> November 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
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
                        20<sup>th</sup> – 22<sup>nd</sup> November 2026 · Hotel GRT Grand, T-Nagar, Chennai.
                    </p>
                    <Link to="/CGCON2026-registration" className="inline-block px-6 sm:px-8 py-3 bg-white/90 hover:bg-white text-primary font-bold rounded-full shadow-lg text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        Register Now
                    </Link>
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
                                <strong className="text-slate-900">21st and 22nd November 2026</strong> at Hotel
                                GRT Grand, T-Nagar, Chennai. The scientific program has been thoughtfully
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
                                Hotel GRT Grand, T-Nagar, Chennai, and be part of a transformative journey that
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
                                <p className="text-sm text-slate-600 mt-2">Founder President,</p>
                                <p className="text-sm text-slate-600">Cosmetic Gynecology Society of India (CGSI)</p>
                                <p className="text-sm text-slate-600">Organizing Chairperson, CGCON 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team CGCON */}
            <section className="py-14 sm:py-16 md:py-20 bg-slate-50/50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Team CGCON</h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
                        {organizingTeam.map((doc) => (
                            <div key={doc.name} className="text-center flex flex-col items-center">
                                <div className="mx-auto mb-5 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-white shadow-xl">
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

                    {/* Organizing Committee */}
                    <div className="mt-14 pt-12 border-t border-slate-200/70">
                        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">Organizing Committee</p>
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 max-w-5xl mx-auto">
                            {organizingCommittee.map((doc) => (
                                <div key={doc.name} className="text-center flex flex-col items-center w-36 sm:w-40">
                                    <div className="mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-lg overflow-hidden border-4 border-primary/25 shadow-lg bg-white">
                                        <img
                                            src={doc.img}
                                            alt={doc.name}
                                            className="h-full w-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 leading-snug">{doc.name}</h3>
                                    <p className="text-xs text-slate-500 mt-1">Organizing Committee</p>
                                </div>
                            ))}
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

            {/* Registration Details Table */}
            <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-[#fdf8f6] via-white to-[#fbf1f1] border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900 uppercase tracking-wide">
                            Registration Details
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>

                    {/* Delegate Fee Table */}
                    <div className="overflow-x-auto mb-3">
                        <p className="font-bold text-slate-800 text-base sm:text-lg mb-3">
                            Conference November 21<sup>st</sup> & 22<sup>nd</sup>, 2026
                        </p>
                        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr className="bg-[#e8a598] text-slate-900">
                                    <th className="px-4 sm:px-6 py-4 text-left font-bold text-sm sm:text-base">Category</th>
                                    <th className="px-4 sm:px-6 py-4 text-center font-bold text-sm sm:text-base leading-snug">
                                        Early Bird
                                        <span className="block font-semibold text-xs sm:text-sm mt-0.5">Up to August 15<sup>th</sup></span>
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-center font-bold text-sm sm:text-base leading-snug">
                                        Up to November 19
                                    </th>
                                    <th className="px-4 sm:px-6 py-4 text-center font-bold text-sm sm:text-base leading-snug">
                                        Spot
                                        <span className="block font-semibold text-xs sm:text-sm mt-0.5">Registration</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { cat: "CGSI Members", a: "₹15,000", b: "₹18,000", c: "₹20,000" },
                                    { cat: "Non-CGSI Members", a: "₹16,000", b: "₹19,000", c: "₹21,000" },
                                    { cat: "Post Graduates", a: "₹10,000", b: "₹10,000", c: "₹10,000" },
                                ].map((row, i) => (
                                    <tr key={row.cat} className={i % 2 === 0 ? "bg-[#fbeae7] text-slate-900" : "bg-[#f7dbd7] text-slate-900"}>
                                        <td className="px-6 py-4 font-semibold text-base">{row.cat}</td>
                                        <td className="px-6 py-4 text-center font-semibold text-base">{row.a}</td>
                                        <td className="px-6 py-4 text-center font-semibold text-base">{row.b}</td>
                                        <td className="px-6 py-4 text-center font-semibold text-base">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pre-Conference Workshop Table */}
                    <div className="overflow-x-auto mb-3 mt-10">
                        <p className="font-bold text-slate-800 text-base mb-3">Pre-Conference Workshop – November 20<sup>th</sup>, 2026</p>
                        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr className="bg-[#e8a598] text-slate-900">
                                    <th className="px-6 py-4 text-left font-bold text-base">Category</th>
                                    <th className="px-6 py-4 text-center font-bold text-base">Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#fbeae7] text-slate-900">
                                    <td className="px-6 py-4 font-semibold text-base">CGSI Members</td>
                                    <td className="px-6 py-4 text-center font-semibold text-base">₹5,900</td>
                                </tr>
                                <tr className="bg-[#f7dbd7] text-slate-900">
                                    <td className="px-6 py-4 font-semibold text-base">Non-CGSI Members</td>
                                    <td className="px-6 py-4 text-center font-semibold text-base">₹6,900</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-sm text-slate-800 font-bold mb-10 leading-relaxed">
                        Note: The registration fee includes GST @ 18% and Banquet
                        <br />
                        Conference registration is mandatory for workshop participation.
                    </p>

                    <div className="text-center">
                        <Link
                            to="/CGCON2026-registration"
                            className="inline-block px-10 py-3.5 bg-[#d87a76] hover:bg-[#c46a66] text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Registration Fee & Cancellation Policy */}
            <section className="py-14 sm:py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Registration Information
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Registration Fee Includes */}
                        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/5 p-6 sm:p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary uppercase tracking-wide">
                                    Registration Fee Includes
                                </h3>
                            </div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Delegate</p>
                            <ul className="space-y-3">
                                {[
                                    "Admission to Scientific Sessions and Exhibition",
                                    "Refreshments During Breaks",
                                    "Lunches, Banquet",
                                    "Registration Materials and Kit",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                        <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cancellation & Refund Policy */}
                        <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-rose-50/30 p-6 sm:p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100">
                                    <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-rose-700 uppercase tracking-wide">
                                    Cancellation & Refund Policy
                                </h3>
                            </div>
                            <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-rose-400" />
                                    <span><strong className="text-slate-900">No Refund</strong> will be given for cancellation requests received after <strong>20/10/2026</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-rose-400" />
                                    <span>All cancellation requests must be sent to the conference secretariat <strong>in writing by email only</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-rose-400" />
                                    <span>Cancellation requests for any paid registration <strong>MUST BE received by the Conference Secretariat through email</strong> to be entitled to a refund.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500" />
                                    <span><strong className="text-emerald-700">REFUND</strong> for cancellation if request is received on or before <strong>20/10/2026</strong> — after deducting administrative charges and cost towards refund, if any.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-red-500" />
                                    <span><strong className="text-red-700">NO REFUND</strong> for cancellation requests received through email after <strong>20/10/2026</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-rose-400" />
                                    <span>Refund, if any, will be credited post-conference to the original payment method within <strong>20 business days</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-rose-400" />
                                    <span>A similar mode of transfer will be adopted for refund as the fund was received. <strong>NO CASH refund policy.</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Venue */}
            <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10 border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black text-center uppercase tracking-wide mb-10 sm:mb-12">
                        Conference Venue
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
                        <div className="flex flex-col gap-4">
                            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                                <div className="bg-[#e8957a] px-6 py-8 text-center">
                                    <p className="text-sm sm:text-base font-bold tracking-[0.2em] text-black uppercase">Conference</p>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-black leading-none mt-1">Venue</p>
                                    <hr className="my-4 border-black/25 max-w-xs mx-auto" />
                                    <p className="text-lg sm:text-xl font-extrabold text-black uppercase">Hotel GRT Grand</p>
                                    <p className="text-lg sm:text-xl font-extrabold text-black uppercase">T-Nagar, Chennai</p>
                                </div>
                                <img
                                    src="https://lvrii.in/conferences/wp-content/uploads/2025/09/THE-GRAND-CHENNAI.jpg"
                                    alt="Hotel GRT Grand"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-black">Hotel GRT Grand</p>
                                    <p className="text-base text-gray-600">T-Nagar, Chennai</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-xl min-h-[320px] sm:min-h-[400px] md:min-h-0 md:h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=Hotel%20GRT%20Grand%20T-Nagar%20Chennai&t=m&z=15&output=embed&iwloc=near"
                                title="Hotel GRT Grand T-Nagar Chennai"
                                aria-label="Hotel GRT Grand T-Nagar Chennai"
                                className="w-full h-full min-h-[320px] sm:min-h-[400px] border-0"
                                loading="lazy"
                            />
                        </div>
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
                                <p className="text-base text-slate-600">Founder President,</p>
                                <p className="text-base text-slate-600">Cosmetic Gynecology Society of India (CGSI)</p>
                                <p className="text-base text-slate-600">Organizing Chairperson, CGCON 2026</p>
                            </div>
                            <a
                                href="tel:+919940117779"
                                className="flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                +91 99401 17779
                            </a>
                            <a
                                href="mailto:info.thecgsi@gmail.com"
                                className="flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                info.thecgsi@gmail.com
                            </a>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md space-y-3">
                            <h3 className="font-bold text-primary text-lg uppercase tracking-wide">
                                Conference Venue
                            </h3>
                            <div className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <address className="not-italic">
                                    Hotel GRT Grand,
                                    <br />
                                    T-Nagar, Chennai
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
