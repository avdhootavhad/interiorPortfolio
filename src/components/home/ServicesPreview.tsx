import { motion } from "framer-motion";
import { ArrowRight, Compass, Palette, Building2, Sparkles, DollarSign, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Compass,
    title: "Full Turnkey",
    description:
      "End-to-end design and execution, from concept to completion. We manage every detail so you don't have to.",
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description:
      "Strategic guidance for your space. Perfect for those who want professional direction with flexibility in execution.",
  },
  {
    icon: Sparkles,
    title: "Heritage & Fusion",
    description:
      "Blending traditional Indian aesthetics—Mughal, Colonial, and Rajasthani patterns—with contemporary design. We source premium Indian materials: marble from Rajasthan, timber from the Himalayas, brass elements, and traditional textiles to create spaces that honor heritage while embracing modern living.",
  },
  {
    icon: MapPin,
    title: "Site Visits & Surveys",
    description:
      "Professional in-home consultations and detailed site assessments. We understand your space intimately before proposing design solutions, ensuring practicality and perfect fit for your home.",
  },
  {
    icon: DollarSign,
    title: "Budgeted Execution",
    description:
      "Flexible, phased implementation within your budget. Transform your space modularly—Design Consultation → Budgeted Execution → Phased Implementation. Start small and scale at your pace.",
  },
  {
    icon: Building2,
    title: "Commercial Branding",
    description:
      "Creating immersive brand experiences through interior design. Ideal for hospitality, retail, and corporate spaces.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 lg:py-40 bg-muted/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Our Services
          </span>
          <h2 className="heading-section mb-6">
            Tailored Design Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Every project begins with understanding your vision. 
            We offer flexible services designed to meet you where you are.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-luxury group hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-primary group-hover:gap-4 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
