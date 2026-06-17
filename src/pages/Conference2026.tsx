import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Users, MessageSquare, Sparkles } from "lucide-react";
import "./Conference2026.css";

const LOGO =
    "https://res.cloudinary.com/dq6gr5zjc/image/upload/v1778057479/6b3a6033-b4e8-44a9-aa71-98bea42dc8b2_zjpno8.jpg";

const organizingTeam = [
    {
        name: "Dr. Deepa Ganesh",
        role: "Organizing Chairperson",
        img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-deepa-ganesh-1.png",
    },
    {
        name: "Dr. Shamikha Dechamma",
        role: "Organizing Secretary",
        img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/dr-shamikha-dechamma.png",
    },
    {
        name: "Dr. Anitha Prem",
        role: "Organizing Committee",
        img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Anitha-Prem.png",
    },
    {
        name: "Dr. Chitra Jeyaraj",
        role: "Organizing Committee",
        img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Chitra-Jeyaraj.png",
    },
    {
        name: "Dr. Shobha Giresh",
        role: "Organizing Committee",
        img: "https://lvrii.in/conferences/wp-content/uploads/2025/08/Dr-Shobha-Giresh.png",
    },
];

const highlights = [
    {
        icon: Users,
        title: "Global Faculty",
        text: "Renowned national and international experts meet to debate, demonstrate and inspire.",
    },
    {
        icon: MessageSquare,
        title: "Bold Discussions",
        text: "Where experience meets evidence-based decision making in cosmetic gynecology.",
    },
    {
        icon: Sparkles,
        title: "Brilliant Surgical Insights",
        text: "Master cutting-edge techniques with step-by-step masterclasses and live sessions.",
    },
];

const InfoBadge = ({
    label,
    value,
    icon: Icon,
}: {
    label: string;
    value: React.ReactNode;
    icon: React.ElementType;
}) => (
    <div className="info-badge-vertical">
        <div className="badge-icon-vertical">
            <Icon className="h-7 w-7" />
        </div>
        <div>
            <span className="badge-label">{label}</span>
            <span className="badge-value">{value}</span>
        </div>
    </div>
);

const Conference2026 = () => {
    return (
        <Layout>
            <div className="cgcon-2026 -mt-20">
                {/* Hero */}
                <section className="hero-bg">
                    <div className="hero-flower" />
                    <div className="hero-overlay" />

                    <div className="hero-main-grid px-4">
                        <div className="hero-badge-container left-badge">
                            <InfoBadge
                                label="Date"
                                value={
                                    <>
                                        20<sup>th</sup> – 22<sup>nd</sup> November 2026
                                        <span className="block text-sm opacity-80 mt-1 font-normal leading-snug">
                                            Pre-Congress Workshop: 20 Nov
                                            <br />
                                            Main Conference: 21 &amp; 22 Nov
                                        </span>
                                    </>
                                }
                                icon={Calendar}
                            />
                        </div>

                        <div className="hero-center-col">
                            <div className="hero-logo-container">
                                <img src={LOGO} alt="CGSI Logo" />
                            </div>
                            <p className="hero-subtitle">CGCON 2026</p>
                            <h1 className="hero-title">
                                3rd Cosmetic Gynecology
                                <br />
                                World Congress
                            </h1>
                            <div className="hero-divider-container">
                                <div className="hero-line" />
                                <div className="hero-divider-dot" />
                                <div className="hero-line" />
                            </div>
                        </div>

                        <div className="hero-badge-container right-badge">
                            <InfoBadge
                                label="Venue"
                                value="Grand Chennai by GRT Hotels, Chennai"
                                icon={MapPin}
                            />
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="highlights-section">
                    <div className="highlights-grid">
                        {highlights.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="highlight-card">
                                <div className="highlight-icon">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="highlight-title">{title}</h3>
                                <p className="highlight-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Organizing Team */}
                <section className="office-bearers">
                    <div className="section-header">
                        <h2 className="section-title">Team CGCON</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="cards-grid-new px-4">
                        {organizingTeam.map((doc) => (
                            <div key={doc.name} className="team-card">
                                <div className="doctor-image-ring">
                                    <img src={doc.img} alt={doc.name} />
                                </div>
                                <h3 className="doctor-name-small">{doc.name}</h3>
                                <p className="doctor-role-small">{doc.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Welcome Message */}
                <section className="chairman-section">
                    <div className="chairman-content px-4">
                        <h2 className="chairman-title">Welcome Message</h2>

                        <div className="chairman-text">
                            <p>Dear Friends and Colleagues,</p>

                            <p>
                                It gives me immense pleasure to welcome you to{" "}
                                <strong>CGCON 2026 – The 3rd Cosmetic Gynecology World Congress</strong>,
                                proudly organized by the Cosmetic Gynecology Society of India (CGSI).
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
                                <strong>CGCON 2026</strong> represents another significant milestone in this
                                journey.
                            </p>

                            <p>
                                In response to the growing demand for structured training and skill enhancement,{" "}
                                <strong>CGCON 2026</strong> will commence with an exclusive Pre-Congress Hands-On
                                Workshop on <strong>20th November 2026</strong>, offering participants practical
                                exposure to the latest techniques, technologies, and procedures in Cosmetic,
                                Functional and Regenerative Gynecology.
                            </p>

                            <p>
                                This will be followed by the Main Scientific Conference on{" "}
                                <strong>21st and 22nd November 2026</strong> at Grand Chennai by GRT Hotels,
                                Chennai. The scientific program has been thoughtfully curated to showcase
                                cutting-edge innovations, surgical advancements, regenerative therapies, aesthetic
                                and functional procedures, and the latest evidence-based research in women&apos;s
                                intimate health and wellness.
                            </p>

                            <p>
                                Renowned national and international experts will share their knowledge through
                                keynote lectures, panel discussions, interactive sessions, debates, case-based
                                learning, video sessions, and live demonstrations. Whether you are an experienced
                                practitioner, an academician, or a clinician exploring this field for the first
                                time, <strong>CGCON 2026</strong> offers an unparalleled opportunity to learn,
                                collaborate, exchange ideas, and build lasting professional relationships.
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
                                Join us on <strong>20th–22nd November 2026</strong> at Grand Chennai by GRT
                                Hotels, Chennai, and be part of a transformative journey that is shaping the future
                                of Cosmetic Gynecology.
                            </p>

                            <div className="chairman-signature">
                                <p>
                                    <strong>Warm Regards,</strong>
                                </p>
                                <p className="chairman-signature-name mt-4">Dr. Deepa Ganesh</p>
                                <p className="chairman-signature-role">
                                    Founder President, Cosmetic Gynecology Society of India (CGSI)
                                    <br />
                                    Organizing Chairperson, CGCON 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Conference2026;
