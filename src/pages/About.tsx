import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="container-luxury mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              About Us
            </span>
            <h1 className="heading-display max-w-4xl mb-8">
              Creating Spaces That <br />Tell Stories
            </h1>
            <p className="text-body max-w-2xl text-lg">
              At Atelier Lumière, we believe that interior design is more than aesthetics—it's about 
              creating spaces that resonate with the people who inhabit them, blending heritage, 
              functionality, and modern living.
            </p>
          </motion.div>
        </section>

        {/* Designer Bio */}
        <section className="container-luxury mb-20 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Varun Shendkar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                The Designer
              </span>
              <h2 className="heading-section mb-6">Varun Shendkar</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  With over 12 years of experience in interior design, Varun has established himself 
                  as a leading designer specializing in heritage-fusion aesthetics that celebrate Indian 
                  craftsmanship while embracing contemporary minimalism.
                </p>
                <p>
                  A registered member of the Indian Institute of Interior Designers (IIDA), Varun's 
                  work spans residential and commercial projects across India's premier cities—Mumbai, 
                  Bangalore, and Delhi. His designs have been recognized with 5+ national awards.
                </p>
                <p>
                  Varun's philosophy centers on understanding his clients' aspirations, sourcing 
                  authentic Indian materials, and creating spaces that become the backdrop for 
                  life's most meaningful moments.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <span className="font-serif text-2xl text-primary">12+</span>
                  <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div>
                  <span className="font-serif text-2xl text-primary">50+</span>
                  <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
                </div>
                <div>
                  <span className="font-serif text-2xl text-primary">5+</span>
                  <p className="text-sm text-muted-foreground mt-2">Design Awards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-24 lg:py-40 bg-muted/30">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                Our Approach
              </span>
              <h2 className="heading-section mb-6">Design Philosophy</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Heritage First",
                  description: "We celebrate Indian design traditions—Mughal patterns, Colonial aesthetics, and Rajasthani craftsmanship—as the foundation for contemporary living spaces."
                },
                {
                  title: "Authentic Materials",
                  description: "Every project features responsibly sourced Indian materials: marble from Rajasthan, timber from the Himalayas, brass accents, and traditional textiles."
                },
                {
                  title: "Client-Centric",
                  description: "Your vision drives our process. Through detailed consultations and site surveys, we deeply understand your needs before creating the perfect space."
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-luxury"
                >
                  <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container-luxury py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Journey
            </span>
            <h2 className="heading-section">Our Story</h2>
          </motion.div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { year: "2012", title: "The Beginning", desc: "Varun founded Atelier Lumière with a vision to revolutionize Indian interior design." },
              { year: "2015", title: "IIDA Registration", desc: "Became a registered member of the Indian Institute of Interior Designers." },
              { year: "2018", title: "First Award", desc: "Won National Design Excellence Award for Heritage Fusion project." },
              { year: "2021", title: "Multi-City Expansion", desc: "Expanded operations to Bangalore and Delhi while maintaining Mumbai headquarters." },
              { year: "2024", title: "50+ Projects", desc: "Milestone of 50+ completed projects with 100% client satisfaction rate." },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 lg:gap-12 items-start"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-3xl text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-xl mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-40 bg-muted/30">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                Core Values
              </span>
              <h2 className="heading-section mb-6">What We Stand For</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                { title: "Integrity", desc: "Transparent pricing, honest communication, and delivering exactly what we promise." },
                { title: "Craftsmanship", desc: "Meticulous attention to detail in every aspect—from design concept to final installation." },
                { title: "Sustainability", desc: "Responsible sourcing and eco-conscious design practices that benefit clients and planet." },
                { title: "Innovation", desc: "Blending timeless heritage with cutting-edge design trends to create forward-thinking spaces." },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-4 border-primary pl-6"
                >
                  <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
