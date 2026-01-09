import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background mb-6">
            Ready to Create Meaningful Corporate Gifts?
          </h2>
          <p className="text-background/70 text-lg leading-relaxed mb-10">
            Let us help you discover the perfect artisan-crafted gifts that 
            celebrate tradition while elevating your brand presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-primary hover:bg-primary/90">
                Request Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="tel:+919810601715">
              <Button variant="elegant" size="xl" className="border-background/30 text-background hover:bg-background/10 hover:text-background">
                <Phone size={18} />
                Call Us Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
