import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Trophy,
  Users2,
  Globe2,
  GraduationCap
} from "lucide-react";

const membershipBenefits = [
  {
    title: "Professional Recognition",
    desc: "Association with India’s academic society for cosmetic gynecology.",
    icon: Shield
  },
  {
    title: "Academic & CME Access",
    desc: "Member rates for CGCON, workshops, and TNMC/ICOG–accredited programs.",
    icon: GraduationCap
  },
  {
    title: "Scientific Guidelines",
    desc: "Access to evidence-based guidelines and consensus statements.",
    icon: CheckCircle2
  },
  {
    title: "Research Opportunities",
    desc: "Participation in studies, publications, and case discussions.",
    icon: Globe2
  },
  {
    title: "Expert Networking",
    desc: "Collaboration with national and international experts.",
    icon: Users2
  },
  {
    title: "Academic Roles",
    desc: "Opportunities to contribute as faculty, speaker, or panelist.",
    icon: Trophy
  },
];

const MembershipSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mx-auto">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Join CGSI Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            CGSI Membership <span className="text-accent">Benefits</span>
          </h2>
          <p className="text-lg text-black font-semibold">
            Join a Society of experts.
          </p>
        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipBenefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed text-black font-semibold">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ================= FINAL CTA ================= */}
          <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-[3rem] bg-slate-100">
              <Link
                to="/become-member"
                className="inline-flex items-center gap-4 px-12 py-5 rounded-[2.8rem] bg-primary text-white font-bold text-lg hover:bg-accent hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                Register for Membership
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <p className="mt-6 text-sm font-semibold text-black italic">
              *Membership is subject to verification of credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;