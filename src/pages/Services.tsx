import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Palette, Truck, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing",
    description: "Finding perfect gifts for any event or occasion.",
    details: [
      "Direct connections with artisans across India",
      "Curated selection based on your requirements",
      "Access to rare and unique craft traditions",
      "Sustainable and ethical sourcing practices",
    ],
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Branding items to meet your specific requirements.",
    details: [
      "Logo embossing and engraving",
      "Custom color palettes and finishes",
      "Personalized packaging solutions",
      "Bespoke design consultation",
    ],
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Quick and reliable delivery backed by superb service.",
    details: [
      "Pan-India delivery network",
      "International shipping capabilities",
      "Secure and careful packaging",
      "Real-time tracking and updates",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Ensuring every item meets high standards.",
    details: [
      "Rigorous multi-point quality checks",
      "Authenticity verification",
      "Damage protection guarantee",
      "Satisfaction assurance",
    ],
  },
];

const processSteps = [
  { number: "01", title: "Browse Catalog", description: "Explore our extensive product range" },
  { number: "02", title: "Consultation", description: "Discuss your specific gifting needs" },
  { number: "03", title: "Customization", description: "Personalize items with your branding" },
  { number: "04", title: "Delivery", description: "Receive your perfect gifting solution" },
];

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Strategic Partnership
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              End-to-End <span className="italic">Gifting Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              We function as an extension of your brand team. From sourcing authentic handcrafted items to delivering them with your custom
              branding, we handle every aspect with meticulous attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 lg:p-12 border border-border/50 hover:border-primary/20 transition-colors duration-500 rounded-sm bg-card/50 hover:bg-card"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors duration-500">
                  <service.icon size={32} className="text-primary stroke-1" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 font-light">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="text-foreground/80 text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Engagement Model
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              A Seamless Journey
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              We've refined our process to be effortless for you, while we handle the complexity of craft procurement and logistics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-foreground md:bg-transparent pt-8 md:pt-0"
              >
                <div className="font-serif text-6xl font-medium text-primary/20 mb-6 bg-foreground inline-block px-2">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl font-medium text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Partner With Us
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
