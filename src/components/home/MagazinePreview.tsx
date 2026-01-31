import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import cafeImage from "@/assets/cafe-interior.jpg";
import farmhouseImage from "@/assets/farmhouse-interior.jpg";
import moodBoardImage from "@/assets/mood-board.jpg";

const articles = [
  {
    id: 1,
    title: "The Art of Balancing Warmth and Minimalism",
    category: "Design Philosophy",
    excerpt:
      "How we approach the delicate interplay between cozy comfort and refined simplicity in our projects.",
    image: moodBoardImage,
    date: "Jan 2024",
    featured: true,
  },
  {
    id: 2,
    title: "Behind the Design: The Copper Kettle",
    category: "Project Story",
    excerpt: "An intimate look at our creative process for this urban café.",
    image: cafeImage,
    date: "Dec 2023",
    featured: false,
  },
  {
    id: 3,
    title: "Bringing Nature Indoors: Modern Rustic Living",
    category: "Trends",
    excerpt: "Exploring the resurgence of organic materials in contemporary design.",
    image: farmhouseImage,
    date: "Nov 2023",
    featured: false,
  },
];

const MagazinePreview = () => {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

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
              The Magazine
            </span>
            <h2 className="heading-section">
              Insights &<br />Inspiration
            </h2>
          </div>
          <Link to="/magazine" className="btn-outline text-sm">
            View All Articles
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article */}
          {featuredArticle && (
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group lg:row-span-2"
            >
              <Link to={`/magazine/${featuredArticle.id}`}>
                <div className="relative overflow-hidden aspect-[4/5] mb-8">
                  <motion.img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                    Featured
                  </div>
                </div>
                <span className="text-sm tracking-widest uppercase text-muted-foreground mb-3 block">
                  {featuredArticle.category}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>
                <span className="text-sm text-muted-foreground">
                  {featuredArticle.date}
                </span>
              </Link>
            </motion.article>
          )}

          {/* Other Articles */}
          <div className="flex flex-col gap-8">
            {otherArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={`/magazine/${article.id}`}
                  className="flex gap-6 items-start"
                >
                  <div className="relative overflow-hidden w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-lg lg:text-xl mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 hidden lg:block">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-muted-foreground mt-3 block">
                      {article.date}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazinePreview;
