import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bandra, Mumbai",
    role: "Home Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "Varun transformed our 2BHK into our dream home. His understanding of Indian design elements combined with modern aesthetics is exceptional. The project was completed on schedule and within budget!",
  },
  {
    id: 2,
    name: "Amit Patel",
    location: "Worli, Mumbai",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "Our office transformation exceeded expectations. Varun's phased approach allowed us to implement the design within our budget constraints without compromising on quality.",
  },
  {
    id: 3,
    name: "Neha Desai",
    location: "Fort, Mumbai",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "Working with Varun on our flagship project was a pleasure. His attention to detail with traditional materials and contemporary design made the space truly special.",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    location: "Bangalore",
    role: "Home Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "The site visits and consultations were thorough. Varun listened to our vision and delivered exactly what we wanted. Highly recommend for anyone looking for heritage-inspired designs.",
  },
  {
    id: 5,
    name: "Anjali Srivastava",
    location: "Powai, Mumbai",
    role: "Interior Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "Varun's use of Rajasthani marble and Himalayan wood elements created such a warm, sophisticated space. It's become our favorite gathering place!",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    location: "South Mumbai",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    quote:
      "His budgeted execution service was perfect for us. We could implement the design in phases without losing the overall vision. Excellent communication throughout!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-40">
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
            Client Stories
          </span>
          <h2 className="heading-section mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from homeowners, business owners, and designers across Mumbai and beyond.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="card-luxury group hover:border-primary/30 transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-base font-semibold mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wide">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
