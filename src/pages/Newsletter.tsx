import React from "react";
import Layout from "@/components/layout/Layout";
import { Mail, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
    // Newsletters will be loaded here in the future

    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute w-[420px] h-[420px] bg-accent/10 -bottom-40 -left-40 rounded-full blur-3xl" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                            <Mail className="w-4 h-4" />
                            Stay Updated
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            CGSI <span className="text-primary">Newsletter</span>
                        </h1>
                        <p className="text-lg text-black font-semibold">
                            Download our latest newsletters and keep yourself informed about society activities and medical updates.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] border border-border/50 shadow-xl text-center mt-12 bg-white"
                    >
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <BookOpen className="w-12 h-12 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Coming Soon</h2>
                        <p className="text-black text-lg mb-10 leading-relaxed font-semibold">
                            We are currently curating the best content for our inaugural edition. Stay tuned for expert insights, clinical guidelines, and the latest CGSI updates directly to your inbox.
                        </p>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Newsletter;
