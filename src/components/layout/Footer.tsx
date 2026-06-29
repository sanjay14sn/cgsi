import { Link } from "react-router-dom";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-10 pb-6">
        {/* Main relative container */}
        <div className="relative flex flex-col justify-center">

          {/* --- CENTERED WATERMARK --- */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 w-full text-center">
            <h2 className="text-[12vw] leading-none font-bold text-primary-foreground/[0.04] tracking-tighter uppercase">
              CGSI
            </h2>
          </div>

          {/* Grid Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            {/* Brand */}
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-serif font-bold text-primary-foreground">
                  CGSI
                </span>
              </Link>

              <p className="text-primary-foreground/70 leading-relaxed">
                The Cosmetic Gynecology Society of India (CGSI)
              </p>

              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/70">
                    Chennai, Tamil Nadu, India
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:cgsi@yahoo.com"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    info.thecgsi@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+919940117779"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 99401 17779
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} COSMETIC GYNECOLOGY SOCIETY OF INDIA. All
            rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
