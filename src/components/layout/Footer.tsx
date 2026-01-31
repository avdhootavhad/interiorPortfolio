import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background">
      {/* Map Section */}
      <div className="w-full h-72 lg:h-96 overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0831844327606!2d72.82503!3d19.07643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e6a6c4449%3A0x8d5e1d0d0d0d0d0d!2sBandra%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Atelier Lumière Location"
        ></iframe>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-30" />
      </div>

      {/* Footer Content */}
      <div className="py-20 lg:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3 className="font-serif text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Varun Shendkar
              </h3>
              <p className="text-background/70 max-w-md leading-relaxed text-sm mb-6">
                Crafting extraordinary spaces where light, form, and function converge to create timeless interiors.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:studio@atelierlumiere.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-primary font-bold">Quick Links</h4>
              <ul className="space-y-3">
                {["About", "Portfolio", "Services", "Magazine", "Consultation"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-background/70 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                       {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-primary font-bold">Services</h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li className="hover:text-primary transition-colors"> Heritage & Fusion</li>
                <li className="hover:text-primary transition-colors"> Full Turnkey</li>
                <li className="hover:text-primary transition-colors"> Design Consultation</li>
                <li className="hover:text-primary transition-colors"> Budgeted Execution</li>
                <li className="hover:text-primary transition-colors"> Site Visits & Surveys</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-primary font-bold">Get in Touch</h4>
              <ul className="space-y-4 text-sm">
                {/* Location */}
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background/70">Bandra, Mumbai</p>
                    <p className="text-background/50 text-xs">India</p>
                  </div>
                </li>
                {/* Phone */}
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="tel:+919876543210" className="text-background/70 hover:text-primary transition-colors">
                    +91-9876543210
                  </a>
                </li>
                {/* Email */}
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:studio@atelierlumiere.com" className="text-background/70 hover:text-primary transition-colors break-all">
                    studio@atelierlumiere.com
                  </a>
                </li>
                {/* Hours */}
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-background/70">
                    <p className="text-xs">Mon - Fri: 10am - 6pm</p>
                    <p className="text-xs">Sat: 11am - 5pm</p>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919876543210?text=Hello%20Varun%2C%20I''m%20interested%20in%20your%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-300"
              >
                 Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-background/30 to-transparent my-12"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left"
          >
            <div>
              <p className="text-background/50 text-sm">
                 2024-2026 Varun Shendkar Design Studio. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-background/50 text-sm">
                Designed with intention  Built with craft  Rooted in heritage
              </p>
            </div>
            <div>
              <p className="text-background/50 text-sm">
                 Made in India | Serving South Asia
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
