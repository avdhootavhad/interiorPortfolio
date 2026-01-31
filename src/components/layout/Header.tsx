import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Magazine", href: "/magazine" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "mr", name: "मराठी" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxury">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span
              className="font-serif text-xl lg:text-2xl tracking-wide"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Varun Shendkar
            </motion.span>
          </Link>

          {/* Language Toggle */}
          <div className="relative group hidden md:block">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Select language"
            >
              <Globe className="w-4 h-4" />
              {selectedLanguage.toUpperCase()}
            </button>
            {isLanguageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                      selectedLanguage === lang.code ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/consultation"
              className="btn-primary text-sm tracking-widest uppercase"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-luxury py-8 flex flex-col gap-6">
              {/* Mobile Language Toggle */}
              <div className="border-b border-border pb-6">
                <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`px-3 py-1 rounded text-sm transition-all ${
                        selectedLanguage === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-sm tracking-widest uppercase inline-block"
                >
                  Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
