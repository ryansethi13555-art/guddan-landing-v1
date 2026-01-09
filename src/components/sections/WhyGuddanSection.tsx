import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Palette, ShieldCheck, History } from "lucide-react";
import productsImage from "@/assets/products-flatlay.jpg";

const reasons = [
  {
    icon: Award,
    title: "Authentic Craftsmanship",
    description: "Direct sourcing from skilled artisans across India.",
  },
  {
    icon: Palette,
    title: "Customization Expertise",
    description: "Tailoring each item to your specific branding needs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous standards for every product we deliver.",
  },
  {
    icon: History,
    title: "Cultural Heritage",
    description: "Gifts that tell a story and preserve traditions.",
  },
];

const WhyGuddanSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-elevated">
              <img
                src={productsImage}
                alt="Curated gifting products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block"
            >
              Why Choose Guddan
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8"
            >
              Trusted by Leading Corporations
            </motion.h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGuddanSection;
