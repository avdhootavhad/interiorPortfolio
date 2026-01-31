import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import cafeImage from "@/assets/cafe-interior.jpg";
import farmhouseImage from "@/assets/farmhouse-interior.jpg";
import moodBoardImage from "@/assets/mood-board.jpg";

const articles = [
  {
    id: 1,
    title: "The Art of Balancing Warmth and Minimalism",
    category: "Design Philosophy",
    excerpt:
      "How we approach the delicate interplay between cozy comfort and refined simplicity in our projects. The secret lies in understanding that minimalism isn't about absence—it's about intentionality.",
    image: moodBoardImage,
    date: "January 15, 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Behind the Design: The Copper Kettle",
    category: "Project Story",
    excerpt:
      "An intimate look at our creative process for Brooklyn's most talked-about café. From initial concept sketches to the final pour.",
    image: cafeImage,
    date: "December 8, 2023",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Bringing Nature Indoors: Modern Rustic Living",
    category: "Trends",
    excerpt:
      "Exploring the resurgence of organic materials in contemporary design and why clients are craving connection to nature.",
    image: farmhouseImage,
    date: "November 22, 2023",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "The Psychology of Space: How Interiors Affect Wellbeing",
    category: "Insights",
    excerpt:
      "Research-backed insights on how thoughtful design choices can enhance mental health, productivity, and daily joy.",
    image: moodBoardImage,
    date: "October 30, 2023",
    readTime: "7 min read",
    featured: false,
  },
];

const Magazine = () => {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

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
              The Magazine
            </span>
            <h1 className="heading-display max-w-4xl mb-8">
              Insights, Stories &<br />Inspiration
            </h1>
            <p className="text-body max-w-2xl">
              Thoughts on design, behind-the-scenes looks at our projects, 
              and curated inspiration for creating spaces that matter.
            </p>
          </motion.div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="container-luxury mb-24 lg:mb-32">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <Link to={`/magazine/${featuredArticle.id}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                      Featured
                    </div>
                  </div>
                  <div className="py-4">
                    <span className="text-sm tracking-widest uppercase text-muted-foreground mb-4 block">
                      {featuredArticle.category}
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl mb-6 group-hover:text-primary transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          </section>
        )}

        {/* Articles Grid */}
        <section className="container-luxury pb-24 lg:pb-40">
          <div className="border-t border-border pt-16">
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-12">
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {otherArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/magazine/${article.id}`}>
                    <div className="relative overflow-hidden aspect-[4/3] mb-6">
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    </div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Magazine;
