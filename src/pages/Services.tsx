import { motion } from "framer-motion";
import { ArrowRight, Compass, Palette, Building2, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Compass,
    title: "Full Turnkey",
    subtitle: "Complete Design & Build",
    description:
      "End-to-end design and execution, from initial concept through final installation. We manage every aspect of your project, ensuring a seamless experience and exceptional results.",
    features: [
      "Comprehensive design development",
      "Material & furniture sourcing",
      "Contractor coordination",
      "Project management",
      "Final styling & installation",
    ],
    ideal: "Ideal for clients seeking a hands-off experience with turnkey results.",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    subtitle: "Strategic Guidance",
    description:
      "Professional design direction with the flexibility to execute on your own terms. Perfect for those who want expert guidance while maintaining control over the process.",
    features: [
      "Space planning & layout",
      "Color & material palette",
      "Furniture recommendations",
      "Lighting design concepts",
      "Design documentation",
    ],
    ideal: "Ideal for DIY enthusiasts or those working with their own contractors.",
  },
  {
    icon: Building2,
    title: "Commercial Branding",
    subtitle: "Immersive Experiences",
    description:
      "Creating brand-aligned interior environments that captivate customers and reinforce your identity. We translate brand values into tangible spatial experiences.",
    features: [
      "Brand integration strategy",
      "Customer journey mapping",
      "Signage & wayfinding",
      "Custom fixtures & displays",
      "Multi-location consistency",
    ],
    ideal: "Ideal for restaurants, retail, hospitality, and corporate spaces.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-luxury mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Our Services
            </span>
            <h1 className="heading-display mb-8">
              Design Solutions<br />Tailored to You
            </h1>
            <p className="text-body">
              Every project is unique, and so is our approach. We offer flexible 
              services designed to meet you where you are, whether you're looking 
              for complete project management or strategic design guidance.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="container-luxury pb-24 lg:pb-40">
          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 ${
                  index !== services.length - 1 ? "pb-16 lg:pb-24 border-b border-border" : ""
                }`}
              >
                {/* Left Column - Info */}
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm tracking-widest uppercase text-muted-foreground mb-2 block">
                    {service.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    to="/consultation"
                    className="inline-flex items-center gap-3 text-sm tracking-wide text-primary hover:gap-5 transition-all duration-300"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Column - Features */}
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground italic border-t border-border pt-6">
                    {service.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-secondary-foreground py-24 lg:py-32">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                Not Sure Which Service Fits?
              </h2>
              <p className="text-secondary-foreground/70 mb-10">
                Schedule a discovery call to discuss your project goals. 
                We'll recommend the right approach for your needs and budget.
              </p>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-4 bg-secondary-foreground text-secondary px-10 py-5 text-sm tracking-widest uppercase hover:gap-6 transition-all duration-300"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
