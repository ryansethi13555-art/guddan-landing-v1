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
    <section ref={ref} className="py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
            Our Vision
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
            A Multi-Disciplinary Platform for Indian Craft
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500">
                <pillar.icon size={28} className="text-primary/80 group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
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
