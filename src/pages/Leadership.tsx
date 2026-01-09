import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { User } from "lucide-react";

const leaders = [
  {
    name: "Rajesh Bhardwaj",
    role: "Director",
    focus: "Strategic Vision",
    description: "Leading Guddan's strategic direction and building partnerships with artisan communities across India.",
  },
  {
    name: "Payal Rajput",
    role: "Director",
    focus: "Creative Direction",
    description: "Overseeing product curation and ensuring each piece meets the highest standards of craftsmanship.",
  },
  {
    name: "Venu Kapoor",
    role: "Director",
    focus: "Business Development",
    description: "Driving growth and building relationships with corporate clients seeking premium gifting solutions.",
  },
];

const Leadership = () => {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

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
              Leadership Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Guided by Vision & Passion
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings together decades of experience in craftsmanship, 
              business development, and cultural preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                  {/* Avatar Placeholder */}
                  <div className="aspect-square bg-secondary flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <User size={48} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium mb-1">{leader.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{leader.focus}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
