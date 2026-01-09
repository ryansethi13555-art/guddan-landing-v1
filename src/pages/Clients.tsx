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
      <section ref={heroRef} className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Our Clientele
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              Trusted by <span className="italic">Industry Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              We have had the privilege/opportunity to partner with forward-thinking organizations
              that value heritage, quality, and meaningful relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Sectors */}
      <section ref={sectorsRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {clientSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group border-t border-border pt-12"
              >
                <sector.icon size={36} className="text-primary mb-6 stroke-1" />
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                  {sector.description}
                </p>
                <div className="space-y-3">
                  {sector.companies.map((company) => (
                    <div key={company} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="text-foreground/80 font-medium tracking-wide">
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              The Guddan Promise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Excellence in Every Detail
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/50 transition-colors duration-500">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-20"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start a Conversation
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
