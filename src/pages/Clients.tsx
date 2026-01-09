import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, Palette, ArrowRight, Award, ShieldCheck, Heart, Sparkles } from "lucide-react";

const clientSectors = [
  {
    icon: Building2,
    title: "Corporate Sector",
    description: "Serving major companies like Coforge, DXC, and Infogain with premium corporate gifting solutions.",
    companies: ["Coforge", "DXC Technology", "Infogain"],
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description: "Trusted by Royal Bank of Scotland and other financial institutions for executive gifting.",
    companies: ["Royal Bank of Scotland", "Financial Services"],
  },
  {
    icon: Palette,
    title: "Creative Agencies",
    description: "Partnering with Crafitti, Actor Unveiled, and more creative organizations.",
    companies: ["Crafitti", "Actor Unveiled", "Creative Studios"],
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Authentic Craftsmanship",
    description: "Direct sourcing from skilled artisans across India ensures genuine handcrafted quality.",
  },
  {
    icon: Sparkles,
    title: "Customization Expertise",
    description: "We tailor each item to your specific branding requirements with precision.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality checks before delivery.",
  },
  {
    icon: Heart,
    title: "Cultural Heritage",
    description: "Our gifts tell a story and preserve India's rich craft traditions.",
  },
];

const Clients = () => {
  const heroRef = useRef(null);
  const sectorsRef = useRef(null);
  const whyRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isSectorsInView = useInView(sectorsRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });

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
              Our Clients
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Trusted by Industry Leaders
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Fortune 500 companies to creative agencies, leading organizations trust 
              Guddan for their premium corporate gifting needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Sectors */}
      <section ref={sectorsRef} className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <sector.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.companies.map((company) => (
                    <span
                      key={company}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Why Choose Guddan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Become a Client
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
