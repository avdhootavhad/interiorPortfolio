import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import cafeImage from "@/assets/cafe-interior.jpg";
import farmhouseImage from "@/assets/farmhouse-interior.jpg";

const projects = [
  {
    id: 1,
    title: "The Copper Kettle",
    category: "Urban Commercial",
    description: "A contemporary café where warmth meets sophistication",
    image: cafeImage,
    year: "2024",
  },
  {
    id: 2,
    title: "Willow Creek Estate",
    category: "Modern Rustic",
    description: "A countryside retreat embracing natural elegance",
    image: farmhouseImage,
    year: "2023",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 lg:py-40">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-24"
        >
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Selected Works
            </span>
            <h2 className="heading-section">
              Projects that Define<br />Our Craft
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="btn-outline text-sm"
          >
            View All Projects
          </Link>
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group ${index === 0 ? "lg:mt-0" : "lg:mt-24"}`}
            >
              <Link to={`/portfolio/${project.id}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5] mb-8">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  
                  {/* Arrow Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileHover={{ opacity: 1, x: 0, y: 0 }}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm tracking-widest uppercase text-muted-foreground mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
