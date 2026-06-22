import React from "react";
import Layout from "@/components/layout/Layout";
import { UserPlus, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const membershipFormPath = "/CGSI membership form.pdf (1).pdf";
const membershipFormDownloadName = "CGSI-membership-form.pdf";

const BecomeMember = () => {

    const benefits = [
        "Professional Recognition – Association with India’s academic society for cosmetic gynecology",
        "Academic & CME Access – Member rates for CGCON, workshops, and TNMC/ICOG–accredited programs",
        "Scientific Guidelines – Access to evidence-based guidelines and consensus statements",
        "Research Opportunities – Participation in studies, publications, and case discussions",
        "Networking – Collaboration with national and international experts",
        "Academic Roles – Opportunities to contribute as faculty, speaker, or panelist",
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <Layout>

            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden bg-background">

                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-30 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-10 blur-[100px] rounded-full" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                            <UserPlus className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Join Our Society
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
                            Become a <span className="text-primary">CGSI Member</span>
                        </h1>

                        <p className="text-lg text-black font-semibold">
                            Join the Cosmetic Gynecology Society of India (CGSI) and become part of a
                            national academic Society committed to advancing excellence,
                            innovation, and education in cosmetic gynecology.
                        </p>

                    </motion.div>
                </div>
            </section>


            {/* Benefits Section */}
            <section className="py-16 bg-secondary/5">
                <div className="container mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT — BENEFITS */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">
                                CGSI <span className="text-primary">Membership Benefits</span>
                            </h2>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-card border border-border shadow-sm"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>

                                        <p className="text-black font-semibold">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </motion.div>



                        {/* RIGHT — REGISTER BOX */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-primary/5 p-12 rounded-[2rem] border border-primary/10 relative"
                        >

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-10 blur-3xl rounded-full" />

                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">
                                Ready to Register?
                            </h3>

                            <p className="text-black font-semibold mb-8">
                                CGSI membership is open to qualified medical professionals
                                interested in cosmetic gynecology. Click below to access the
                                membership application form and fee details.
                            </p>

                            <a
                                href={membershipFormPath}
                                download={membershipFormDownloadName}
                                className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-primary/30"
                            >
                                Access Registration Form
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>



                        </motion.div>

                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default BecomeMember;