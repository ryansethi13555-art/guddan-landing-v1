import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-craftsmanship.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisan craftsmanship details"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm uppercase mb-8 pl-1 border-l-2 border-primary/40">
              Corporate & Artisan Gifting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-medium text-foreground leading-[1.1] mb-8"
          >
            Bridging <span className="italic text-foreground/80">Artisans</span>
            <br />
            & Global Markets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg font-light"
          >
            Curating authentic Indian craftsmanship for meaningful corporate relationships. We transform gifting into a cultural dialogue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/products">
              <Button variant="hero" size="xl">
                Explore Collection
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="elegant" size="xl" className="mt-2 sm:mt-0">
                Partner With Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scroll Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <div className="flex flex-col items-start gap-4">
          <motion.div
            animate={{ height: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-primary/40 origin-top"
          />
          <span className="text-muted-foreground/60 text-[10px] tracking-[0.3em] uppercase -rotate-90 origin-bottom-left translate-x-2">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
