import { motion } from "framer-motion";
import { Award, Users, Zap, ShieldCheck } from "lucide-react";

const badges = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "IIDA Registered",
    description: "Member of Indian Institute of Interior Designers",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Award,
    title: "Design Awards",
    description: "Recipient of 5+ national interior design awards",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Users,
    title: "Trusted by 50+",
    description: "Premium clients across Mumbai, Bangalore & Delhi",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Zap,
    title: "On-Time Delivery",
    description: "100% project completion on schedule guarantee",
    color: "from-amber-500 to-orange-500"
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 lg:py-24 border-y border-border bg-muted/20">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
            Credentials & Recognition
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl">Trusted by Design</h3>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="relative p-6 border border-border rounded-lg hover:border-primary/30 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg mb-2">{badge.title}</h4>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Certified in sustainable design practices | Specialization in heritage conservation | 
            CPD (Continuing Professional Development) compliant | GRIHA certified for green design
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
