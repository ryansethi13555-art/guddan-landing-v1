import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Globe } from "lucide-react";

const visionPillars = [
  {
    icon: Globe,
    title: "Bridging Artisans & Markets",
    description:
      "Connecting talented craftsmen from remote corners of India with global audiences.",
  },
  {
    icon: Heart,
    title: "Preserving Heritage",
    description:
      "Honoring and showcasing India's rich tradition of handcrafted goods.",
  },
  {
    icon: Sparkles,
    title: "Creating Opportunities",
    description:
      "Opening doors to wider markets for gifted artisans.",
  },
];

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Our Vision
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            A Multi-Disciplinary Platform for Indian Craft
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-lg p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <pillar.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
