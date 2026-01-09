import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import dokraImage from "@/assets/dokra-art.jpg";
import warliImage from "@/assets/warli-art.jpg";
import marbleImage from "@/assets/marble-product.jpg";
import leatherImage from "@/assets/leather-products.jpg";
import officeImage from "@/assets/office-items.jpg";
import timeImage from "@/assets/timepieces.jpg";
import teaImage from "@/assets/tea-box.jpg";
import recognitionImage from "@/assets/recognition-items.jpg";

const categories = [
  {
    title: "Office & Desk Items",
    description: "Functional and elegant accessories for professional settings. From pen holders to desk organizers, each piece combines utility with refined aesthetics.",
    image: officeImage,
  },
  {
    title: "Timepieces",
    description: "Clocks and watches that combine style with practicality. Elegant timepieces that make lasting impressions as corporate gifts.",
    image: timeImage,
  },
  {
    title: "Leather Products",
    description: "Premium leather goods including folders, backpacks, portfolios, and accessories. Handcrafted with attention to detail and durability.",
    image: leatherImage,
  },
  {
    title: "Recognition Items",
    description: "Trophies, awards, mementoes, and medals for achievements. Custom designed to celebrate excellence and milestones.",
    image: recognitionImage,
  },
  {
    title: "Tea Boxes",
    description: "Handcrafted wooden tea boxes with multiple compartments. Over 12 unique designs, fully customizable with your logo and branding.",
    image: teaImage,
  },
  {
    title: "Dokra Art",
    description: "Traditional lost-wax metal casting method preserving tribal heritage. Each piece uniquely created by skilled artisans using ancient techniques.",
    image: dokraImage,
  },
  {
    title: "Warli Art",
    description: "Ancient tribal painting style from Maharashtra. Simple stick figures depicting daily life and rituals, created using natural earth colors.",
    image: warliImage,
  },
  {
    title: "Marble Products",
    description: "Handcrafted marble with traditional stone inlay methods. Vases, frames, and decorative items featuring meticulous semi-precious stone work.",
    image: marbleImage,
  },
];

const additionalCategories = [
  "Business Card Holders",
  "Watch Cases",
  "Photo Frames",
  "Portfolio Bags",
  "Metal Figurines",
  "Customized Apparel",
  "Writing Instruments",
  "Eco-Friendly Options",
];

const Products = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const moreRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const isMoreInView = useInView(moreRef, { once: true, margin: "-100px" });

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
              Product Categories
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Curated Collections of Authentic Indian Craft
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From traditional Dokra artistry to contemporary leather goods, each category 
              represents centuries of artisan tradition, carefully curated for discerning 
              corporate gifting needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={gridRef} className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Categories */}
      <section ref={moreRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMoreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              More Product Offerings
            </h2>
            <p className="text-muted-foreground">
              From writing instruments and apparel to eco-friendly options and gourmet hampers, 
              our diverse catalog meets all corporate gifting needs.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {additionalCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isMoreInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium text-sm"
              >
                {category}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMoreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Custom Catalog
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
