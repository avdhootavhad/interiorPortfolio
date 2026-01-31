import { motion } from "framer-motion";
import { CheckCircle2, Palette, Hammer, Home } from "lucide-react";

const phases = [
  {
    id: 1,
    icon: Palette,
    phase: "Phase 1",
    title: "Design Consultation",
    description: "Site visit, detailed assessment, concept development, and 3D renderings",
    milestones: [
      "In-home site survey",
      "Mood board creation",
      "3D rendering & design concepts",
      "Material recommendations"
    ],
    payment: "20%",
    timeline: "2-3 weeks"
  },
  {
    id: 2,
    icon: Hammer,
    phase: "Phase 2",
    title: "Budgeted Execution",
    description: "Detailed planning, vendor coordination, and budget-phased implementation",
    milestones: [
      "Finalized budget breakdown",
      "Vendor selection & procurement",
      "Construction planning",
      "Regular progress updates"
    ],
    payment: "50%",
    timeline: "Variable (phased)"
  },
  {
    id: 3,
    icon: Home,
    phase: "Phase 3",
    title: "Installation & Handover",
    description: "Professional installation, styling, and comprehensive project completion",
    milestones: [
      "Installation & setup",
      "Interior styling & finishing",
      "Quality assurance",
      "Final walkthrough"
    ],
    payment: "30%",
    timeline: "1-2 weeks"
  },
];

const ProcessPayment = () => {
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Our Process
          </span>
          <h2 className="heading-section mb-6">Simple, Transparent Phases</h2>
          <p className="text-muted-foreground text-lg">
            We believe in flexible, milestone-based payments that align with project progress. 
            Start small, scale at your pace, and pay as we deliver.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Card */}
              <div className="card-luxury h-full hover:border-primary/30 transition-all duration-500">
                {/* Phase Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-2 block">
                      {phase.phase}
                    </span>
                    <h3 className="font-serif text-2xl">{phase.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{phase.description}</p>

                {/* Milestones */}
                <div className="mb-8">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3 font-semibold">
                    Key Milestones
                  </p>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment & Timeline */}
                <div className="pt-6 border-t border-border flex justify-between items-end">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Payment</p>
                    <p className="font-serif text-xl text-primary">{phase.payment}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                    <p className="text-sm font-semibold">{phase.timeline}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/40 border border-border rounded-lg p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <h4 className="font-serif text-lg mb-2">Flexible Implementation</h4>
              <p className="text-sm text-muted-foreground">
                Implement phases simultaneously or sequentially based on your budget and timeline.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">Clear Communication</h4>
              <p className="text-sm text-muted-foreground">
                Regular updates, progress photos, and milestone completions keep you informed.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">No Hidden Costs</h4>
              <p className="text-sm text-muted-foreground">
                Transparent budgeting with detailed breakdowns ensures you know exactly where every rupee goes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPayment;
