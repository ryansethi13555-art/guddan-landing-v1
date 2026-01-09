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
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
                About Guddan
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                Celebrating India's Rich Heritage of Handcrafted Excellence
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guddan is a bridge between Indian artisans and global corporate buyers, 
                focused on authentic craftsmanship, cultural heritage, and premium gifting. 
                We are not a marketplace—we are curators of meaningful, culturally significant gifts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Bridge Between Artisans & Markets
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We envision a world where India's rich tradition of handcrafted goods receives 
              global recognition, where talented craftsmen from remote corners find audiences 
              who appreciate their art, and where corporate gifting becomes a celebration of 
              heritage and artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Bridging Artisans & Markets", text: "Connecting talented craftsmen from remote corners of India with global audiences." },
              { icon: Heart, title: "Preserving Heritage", text: "Honoring and showcasing India's rich tradition of handcrafted goods." },
              { icon: Sparkles, title: "Creating Opportunities", text: "Opening doors to wider markets for gifted artisans." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-background rounded-lg p-8 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Guddan Difference */}
      <section ref={differenceRef} className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isDifferenceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elevated">
                <img
                  src={warliImage}
                  alt="Warli Art"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block"
              >
                The Guddan Difference
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8"
              >
                What Sets Us Apart
              </motion.h2>

              <div className="space-y-6">
                {guddanDifference.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isDifferenceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
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
      <section ref={philosophyRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Corporate Gifting, Reimagined
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg p-8 shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
