import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import cafeImage from "@/assets/cafe-interior.jpg";
import farmhouseImage from "@/assets/farmhouse-interior.jpg";
import heroImage from "@/assets/hero-interior.jpg";

const projects = [
  {
    id: 1,
    title: "The Copper Kettle",
    category: "Urban Commercial",
    location: "Brooklyn, NY",
    year: "2024",
    image: cafeImage,
  },
  {
    id: 2,
    title: "Willow Creek Estate",
    category: "Modern Rustic",
    location: "Hudson Valley, NY",
    year: "2023",
    image: farmhouseImage,
  },
  {
    id: 3,
    title: "Lumière Showroom",
    category: "Commercial",
    location: "Manhattan, NY",
    year: "2023",
    image: heroImage,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-luxury mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Our Portfolio
            </span>
            <h1 className="heading-display max-w-4xl mb-8">
              Spaces That Tell<br />Stories
            </h1>
            <p className="text-body max-w-2xl">
              Each project is a unique narrative, crafted with meticulous attention 
              to detail and a deep understanding of our clients' aspirations.
            </p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="container-luxury mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 border-b border-border"
          >
            {["All", "Commercial", "Residential"].map((filter, index) => (
              <button
                key={filter}
                className={`pb-4 text-sm tracking-widest uppercase transition-colors duration-300 ${
                  index === 0
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="container-luxury pb-24 lg:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group ${index % 3 === 1 ? "lg:mt-24" : ""}`}
              >
                <Link to={`/portfolio/${project.id}`}>
                  <div className="relative overflow-hidden aspect-[4/5] mb-8">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                    <motion.div className="absolute bottom-6 right-6 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm tracking-widest uppercase text-muted-foreground mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl lg:text-3xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
