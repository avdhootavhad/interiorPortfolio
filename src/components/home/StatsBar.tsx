import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const stats = [
  { number: 30, label: "Handcrafted Spaces", suffix: "+" },
  { number: 15, label: "Happy Clients", suffix: "+" },
  { number: 5, label: "Design Awards", suffix: "+" },
];

const StatsBar = () => {
  return (
    <section className="py-16 lg:py-24 border-y border-border bg-gradient-to-r from-muted/20 via-transparent to-muted/20">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-4 justify-center lg:justify-start">
                <motion.span
                  className="font-serif text-5xl lg:text-6xl text-primary"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Counter from={0} to={stat.number} duration={2} suffix={stat.suffix} />
                </motion.span>
                <motion.span
                  className="text-muted-foreground tracking-wide pb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {stat.label}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
