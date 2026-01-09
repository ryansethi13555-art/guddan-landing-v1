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
      <section ref={heroRef} className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Corporate Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              End-to-End Corporate Gifting Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From sourcing authentic handcrafted items to delivering them with your custom 
              branding, we handle every aspect of corporate gifting with meticulous attention 
              to detail and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Simple, Seamless Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="font-serif text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Your Project
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
