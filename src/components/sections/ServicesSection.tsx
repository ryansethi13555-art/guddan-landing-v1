import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Truck, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing",
    description: "Finding perfect gifts for any event or occasion from our network of skilled artisans.",
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Branding items to meet your specific requirements with logo embossing and personalization.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Quick and reliable delivery backed by superb service across India and globally.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Ensuring every item meets high standards through rigorous quality inspection.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6"
            >
              End-to-End Corporate Gifting Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              From sourcing authentic handcrafted items to delivering them with 
              your custom branding, we handle every aspect of corporate gifting 
              with meticulous attention to detail.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
