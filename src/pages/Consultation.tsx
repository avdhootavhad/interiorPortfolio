import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import moodBoardImage from "@/assets/mood-board.jpg";

const projectTypes = [
  { value: "cafe", label: "Café / Restaurant" },
  { value: "residential", label: "Residential" },
  { value: "retail", label: "Retail Space" },
  { value: "office", label: "Office / Corporate" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "25-50", label: "$25,000 – $50,000" },
  { value: "50-100", label: "$50,000 – $100,000" },
  { value: "100-250", label: "$100,000 – $250,000" },
  { value: "250+", label: "$250,000+" },
];

const timelines = [
  { value: "1-3", label: "1 – 3 months" },
  { value: "3-6", label: "3 – 6 months" },
  { value: "6-12", label: "6 – 12 months" },
  { value: "flexible", label: "Flexible / Not Sure" },
];

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setStep(4); // Success state
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 lg:pt-40 pb-24 lg:pb-40">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                Begin Your Journey
              </span>
              <h1 className="heading-display mb-8">
                Request a<br />Consultation
              </h1>
              <p className="text-body mb-12">
                Tell us about your project vision. We'll review your inquiry 
                and schedule a complimentary discovery call to discuss how 
                we can bring your space to life.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Studio Location</p>
                    <p className="text-muted-foreground">
                      123 Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">studio@atelierlumiere.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Hours</p>
                    <p className="text-muted-foreground">
                      Monday – Friday: 9am – 6pm<br />
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Mood Board Image */}
              <div className="hidden lg:block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={moodBoardImage}
                    alt="Design mood board"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-muted/30 p-8 lg:p-12"
            >
              {/* Progress Indicator */}
              {step < 4 && (
                <div className="flex items-center gap-2 mb-12">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 transition-colors duration-300 ${
                        s <= step ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl mb-2">About You</h2>
                      <p className="text-muted-foreground mb-8">
                        Let's start with your contact information.
                      </p>
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl mb-2">Your Project</h2>
                      <p className="text-muted-foreground mb-8">
                        Tell us about what you're envisioning.
                      </p>
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Budget Range *
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm tracking-wide mb-2 block">
                            Timeline *
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline) => (
                              <option key={timeline.value} value={timeline.value}>
                                {timeline.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Details */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl mb-2">Tell Us More</h2>
                      <p className="text-muted-foreground mb-8">
                        Share your vision, inspiration, or any questions you have.
                      </p>
                      <div>
                        <label className="text-sm tracking-wide mb-2 block">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={8}
                          className="w-full px-4 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                          placeholder="Describe your project, share inspiration links, or ask any questions..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Success */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                          <ArrowRight className="w-8 h-8 text-primary" />
                        </motion.div>
                      </div>
                      <h2 className="font-serif text-3xl mb-4">
                        Thank You
                      </h2>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        We've received your inquiry and will be in touch within 
                        24–48 hours to schedule your discovery call.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In the meantime, feel free to explore our{" "}
                        <a href="/portfolio" className="text-primary hover:underline">
                          portfolio
                        </a>{" "}
                        or{" "}
                        <a href="/magazine" className="text-primary hover:underline">
                          magazine
                        </a>
                        .
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                {step < 4 && (
                  <div className="flex justify-between mt-12">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary text-sm"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    ) : (
                      <button type="submit" className="btn-primary text-sm">
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
