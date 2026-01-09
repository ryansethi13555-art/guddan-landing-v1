import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Sparkles, Heart, Globe, Palette, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-craftsmanship.jpg";
import warliImage from "@/assets/warli-art.jpg";

const guddanDifference = [
  {
    icon: Palette,
    title: "Multi-Disciplinary Platform",
    description: "A distinctive enterprise based in Noida that celebrates diverse craft traditions.",
  },
  {
    icon: Sparkles,
    title: "Artistic Expression",
    description: "Special focus on indigenous art forms and handcrafted excellence.",
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Ensuring timeless crafts receive recognition for future generations.",
  },
];

const philosophy = [
  {
    icon: Users,
    title: "Relationship Building",
    description: "Maintaining cordial business relationships through meaningful gifts.",
  },
  {
    icon: Award,
    title: "Brand Awareness",
    description: "Promoting products and creating lasting brand recognition.",
  },
  {
    icon: Sparkles,
    title: "Quality Craftsmanship",
    description: "Authentic handcrafted items with cultural significance.",
  },
];

const About = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const differenceRef = useRef(null);
  const philosophyRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const isDifferenceInView = useInView(differenceRef, { once: true, margin: "-100px" });
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 lg:pt-48 lg:pb-40 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-8 block pl-1 border-l-2 border-primary/40">
                Our Story
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.15] mb-8">
                Celebrating India's Rich Heritage of <span className="italic">Handcrafted Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Guddan is more than a brand; it is a bridge. We connect the quiet dedication of Indian artisans with the global appreciation of corporate buyers. We are not a marketplace—we are custodians of culture and curators of meaning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Artisan at work"
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-32 lg:py-48 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Our Vision
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Honoring Tradition in a Modern World
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed font-light">
              We envision a future where corporate gifting transcends transaction and becomes a celebration of heritage. Where every gift tells a story of a craftsman's hands, a village's history, and a legacy preserved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-16">
            {[
              { icon: Globe, title: "Global Reach", text: "Connecting remote craft clusters to international appreciation." },
              { icon: Heart, title: "Cultural Stewardship", text: "Safeguarding techniques passed down through generations." },
              { icon: Sparkles, title: "Economic Empowerment", text: "Creating sustainable livelihoods for artisan communities." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="text-left group"
              >
                <item.icon size={32} className="text-primary mb-6 stroke-1" />
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Guddan Difference */}
      <section ref={differenceRef} className="py-32 lg:py-48 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={warliImage}
                  alt="Warli Art"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-primary/20 -z-10" />
            </motion.div>

            <div className="order-1 lg:order-2 self-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block"
              >
                The Guddan Difference
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-12"
              >
                Curated with Conscience
              </motion.h2>

              <div className="space-y-12">
                {guddanDifference.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isDifferenceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <item.icon size={24} className="text-primary stroke-1" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifting Philosophy */}
      <section ref={philosophyRef} className="py-32 lg:py-40 bg-foreground text-background relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Corporate Gifting, <span className="text-primary italic">Reimagined</span>
            </h2>
            <p className="text-background/70 text-xl font-light leading-relaxed">
              We believe a gift is more than an object. It is a gesture of respect, a symbol of partnership, and a reflection of your brand's values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500"
              >
                <div className="mb-6 text-primary">
                  <item.icon size={32} className="stroke-1" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
