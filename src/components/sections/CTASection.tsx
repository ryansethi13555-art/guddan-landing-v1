import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary/80 font-medium tracking-[0.2em] text-xs uppercase mb-8 block">
            Begins with a Conversation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
            Ready to Create Meaningful <span className="text-primary">Corporate Gifts?</span>
          </h2>
          <p className="text-background/60 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Let us help you discover the perfect artisan-crafted gifts that
            celebrate tradition while elevating your brand presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                Request Consultation
              </Button>
            </Link>
            <a href="tel:+919810601715" className="text-background/80 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1 text-sm tracking-widest uppercase">
              Or Call Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
