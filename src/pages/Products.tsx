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
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Curated Collection
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              A Selection of Authentic <span className="italic">Indian Craft</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              From traditional Dokra artistry to contemporary leather goods, each category
              represents centuries of artisan tradition, carefully curated for discerning
              corporate gifting needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={gridRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 z-10" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed border-l border-primary/30 pl-4">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Categories */}
      <section ref={moreRef} className="py-32 bg-secondary text-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMoreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl font-medium mb-6">
              Extended Catalog
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              From writing instruments and apparel to eco-friendly options and gourmet hampers,
              our diverse catalog meets all corporate gifting needs.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
            {additionalCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isMoreInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-background border border-border text-foreground/80 font-medium text-sm tracking-wide uppercase hover:border-primary hover:text-primary transition-colors duration-300"
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
              <Button variant="hero" size="xl">
                Request Complete Catalog
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
