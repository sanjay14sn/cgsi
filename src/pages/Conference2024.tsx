import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin } from "lucide-react";

const ASSETS = "https://lvrii.in/wp-content/themes/lvrii/assets/congress";

function SponsorSection({
    title,
    children,
    className = "",
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`mt-8 ${className}`}>
            <h3 className="text-center bg-[#80c0be] text-white mx-auto py-1.5 w-full max-w-[349px] text-[23px]">
                {title}
            </h3>
            <div className="mt-6">{children}</div>
        </div>
    );
}

const Conference2024 = () => {
    return (
        <Layout>
            {/* Banner */}
            <div className="w-full pt-4 lg:pt-12 bg-white">
                <img
                    src={`${ASSETS}/Website Banner (1920 x 400 px) (1).png`}
                    className="w-full h-auto object-contain"
                    alt="CGCON 2024 — 1st Cosmetic Gynecology Congress"
                />
            </div>

            {/* Welcome Message */}
            <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#fdf8f6] via-white to-[#f0f8f8]">
                <div
                    className="absolute inset-0 opacity-[0.08] bg-no-repeat bg-left-bottom bg-contain pointer-events-none"
                    style={{
                        backgroundImage:
                            "url('https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png')",
                    }}
                />
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div className="text-center mb-10 lg:mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#f08683] uppercase tracking-wide">
                            Welcome Message
                        </h2>
                        <div className="mt-4 mx-auto h-0.5 w-28 bg-gradient-to-r from-[#f08683] via-[#f08683] to-[#6da7ab]" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
                        <div className="lg:col-span-2 space-y-5">
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full bg-[#f08683]/10 px-4 py-2 text-sm font-semibold text-[#c45f5c]">
                                    <Calendar className="w-4 h-4 shrink-0" />
                                    16th &amp; 17th November 2024
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-[#6da7ab]/10 px-4 py-2 text-sm font-semibold text-[#4d8589]">
                                    <MapPin className="w-4 h-4 shrink-0" />
                                    Radisson Blu, Egmore, Chennai
                                </span>
                            </div>

                            <p className="text-gray-800 leading-relaxed text-lg">Dear Friends,</p>
                            <p className="text-gray-700 leading-relaxed">
                                It is with great pleasure that I invite you to{" "}
                                <strong className="text-gray-900">CGCON 2024</strong> – the First Cosmetic
                                Gynecology Congress in South India, organized by the Laser Vaginal
                                Rejuvenation Institute of India (LVRII).
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Cosmetic Gynecology is an emerging subspeciality in women&apos;s healthcare,
                                dedicated to enhancing intimate wellness with compassion and innovation. This
                                congress aims to bring together the latest scientific advancements, innovative
                                techniques, and clinical expertise to empower clinicians with knowledge and
                                skills in this rapidly evolving field.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The congress will feature esteemed pioneers and experts from India and abroad,
                                who will share their insights, experience, and evidence-based approaches
                                through engaging scientific sessions.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                I warmly invite you to be part of this landmark event that marks the beginning
                                of a new era in Cosmetic Gynecology in South India.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 lg:sticky lg:top-24">
                            <div className="relative">
                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#f08683]/80" />
                                <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-[#6da7ab]/80" />
                                <img
                                    src="https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-deepa-ganesh.png"
                                    alt="Dr. Deepa Ganesh"
                                    className="relative w-40 h-40 rounded-full object-cover shadow-xl border-4 border-[#f08683]/30"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600 italic mb-1">Warm regards,</p>
                                <p className="font-bold text-[#f08683] text-lg">Dr. Deepa Ganesh</p>
                                <div className="mt-2 mx-auto w-16 h-px bg-gray-300" />
                                <p className="text-sm text-gray-600 mt-2">Founder, President – LVRII</p>
                                <p className="text-sm text-gray-600">Organizing Chairperson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee */}
            <div className="w-full mt-10">
                <img
                    src={`${ASSETS}/Org Committee (2).png`}
                    className="w-full h-auto"
                    alt="Organizing Committee"
                />
            </div>

            {/* Committee Members */}
            <div className="w-full">
                <img
                    src={`${ASSETS}/Committee Members (1).png`}
                    className="w-full h-auto"
                    alt="Committee Members"
                />
            </div>

            {/* International Faculty */}
            <div className="w-full">
                <img
                    src={`${ASSETS}/International Faculty (3).png`}
                    className="w-full h-auto"
                    alt="International Faculty"
                />
            </div>

            {/* Congress Highlights */}
            <div className="w-full">
                <img
                    src={`${ASSETS}/Congress Highlights (1).png`}
                    className="w-full h-auto"
                    alt="Congress Highlights"
                />
            </div>

            {/* Registration Table */}
            <div className="w-full mt-10">
                <img
                    src={`${ASSETS}/Navaratri Special Offer Registration Table (1).png`}
                    className="w-full h-auto"
                    alt="Registration Table"
                />
            </div>

            {/* Conference Venue */}
            <div className="container mx-auto mt-10 px-4">
                <h3 className="text-center text-[40px] text-[#f08683] font-bold">
                    CONFERENCE<span className="text-[#6da7ab]"> VENUE</span>
                </h3>
            </div>

            <div className="container mx-auto mt-10 px-4">
                <div className="grid md:grid-cols-2 gap-6">
                    <img
                        src={`${ASSETS}/venue.png`}
                        className="w-full h-auto"
                        alt="Radisson Blu Hotel"
                    />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5042890298805!2d80.25585775!3d13.0671945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266131f8469c7%3A0xaa76dcf81b1d582!2sRadisson%20Blu%20Hotel%20Chennai%20City%20Centre%2C%20Egmore%2C%20Chennai%2C%20Tamil%20Nadu%20600008!5e0!3m2!1sen!2sin!4v1725954689019!5m2!1sen!2sin"
                        width="100%"
                        height="475"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Radisson Blu Hotel Chennai City Centre"
                    />
                </div>
            </div>

            {/* Sponsors */}
            <div className="container mx-auto px-4 pb-12">
                <SponsorSection title="HEALTHCARE PARTNER">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="hidden md:block" />
                        <img src={`${ASSETS}/sims_logo.png`} className="w-full h-auto" alt="SIMS Healthcare" />
                        <div className="hidden md:block" />
                    </div>
                </SponsorSection>

                <SponsorSection title="DIAMOND SPONSORSHIP">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        <img src={`${ASSETS}/nk_logo.png`} className="w-full h-auto" alt="NK Logo" />
                        <img
                            src={`${ASSETS}/lasotronix_logo.png`}
                            className="w-full h-auto md:pt-11"
                            alt="Lasotronix"
                        />
                        <img src={`${ASSETS}/g3_logo.jpeg`} className="w-full h-auto" alt="G3 Logo" />
                    </div>
                </SponsorSection>

                <SponsorSection title="GOLD SPONSORSHIP">
                    <div className="grid md:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
                        <img src={`${ASSETS}/thumbnail.png`} className="w-full h-auto" alt="Gold Sponsor 1" />
                        <img
                            src={`${ASSETS}/reveal_logo.png`}
                            className="w-full h-auto md:pt-11"
                            alt="Reveal Logo"
                        />
                    </div>
                </SponsorSection>

                <SponsorSection title="SILVER SPONSORSHIP" className="mb-12">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        <img src={`${ASSETS}/aakar_logo.png`} className="w-full h-auto" alt="Aakar Logo" />
                        <img src={`${ASSETS}/rosh.png`} className="w-full h-auto" alt="Rosh Logo" />
                        <img src={`${ASSETS}/imedd.png`} className="w-full h-auto" alt="iMedd Logo" />
                    </div>
                </SponsorSection>
            </div>

            {/* Congress Footer Banner */}
            <div className="w-full">
                <img
                    src={`${ASSETS}/n_footer.png`}
                    className="w-full h-auto"
                    alt="Congress Footer"
                />
            </div>
        </Layout>
    );
};

export default Conference2024;
