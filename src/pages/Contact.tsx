import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const { toast } = useToast();

  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "Thank you for reaching out. We will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Contact Us
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              Start a Meaningful <span className="italic">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              We invite you to discuss your vision for corporate gifting. Whether you have a specific requirement or need strategic guidance, we are here to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl font-medium text-foreground mb-12">
                Reaching Guddan
              </h2>

              <div className="space-y-12 mb-16">
                <div className="group">
                  <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
                    <Mail size={18} className="text-primary" /> Email
                  </h3>
                  <a
                    href="mailto:guddandecor@gmail.com"
                    className="text-muted-foreground text-lg font-light hover:text-primary transition-colors border-b border-transparent hover:border-primary table"
                  >
                    guddandecor@gmail.com
                  </a>
                </div>

                <div className="group">
                  <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
                    <Phone size={18} className="text-primary" /> Phone
                  </h3>
                  <a
                    href="tel:+919810601715"
                    className="text-muted-foreground text-lg font-light hover:text-primary transition-colors border-b border-transparent hover:border-primary table"
                  >
                    +91 98106 01715
                  </a>
                </div>

                <div className="group">
                  <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-primary" /> Studio
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    2301, Tower 7, Lotus Panache,<br />
                    Sector 110, Noida, India
                  </p>
                </div>
              </div>

              <div className="bg-secondary/50 p-8 rounded-sm border-l-2 border-primary">
                <p className="text-foreground/80 leading-relaxed font-light">
                  "The most precious gift is time, but the second most precious is a thoughtful object that endures."
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card/30 p-8 md:p-12 rounded-sm border border-border">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
                  Send an Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary h-auto pb-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary h-auto pb-2"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary h-auto pb-2"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary h-auto pb-2"
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/60 uppercase tracking-widest">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[120px] resize-none"
                      placeholder="How can we assist you?"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full mt-4">
                    Send Request
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
