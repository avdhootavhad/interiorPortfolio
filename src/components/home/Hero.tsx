import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end pb-20 lg:pb-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
          style={{ y }}
        >
          <img
            src={heroImage}
            alt="Luxury interior design"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20"
          animate={{ opacity: [0.4, 0.5, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-background/60 text-sm tracking-[0.3em] uppercase">
              Interior Design Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.1]"
            >
              Crafting
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.1]"
            >
              Extraordinary
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.1] italic"
            >
              Spaces
            </motion.h1>
          </div>

          {/* Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-16"
          >
            <p className="text-background/70 text-lg lg:text-xl max-w-md leading-relaxed">
              Where light, form, and function converge to create 
              timeless interiors for discerning clients.
            </p>
            <Link
              to="/portfolio"
              className="group flex items-center gap-4 text-background hover:text-primary-foreground transition-colors duration-300"
            >
              <span className="text-sm tracking-widest uppercase">View Projects</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center p-2"
        >
          <motion.div
            className="w-1 h-2 bg-background/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
