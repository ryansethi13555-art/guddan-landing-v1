import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dokraImage from "@/assets/dokra-art.jpg";
import marbleImage from "@/assets/marble-product.jpg";
import leatherImage from "@/assets/leather-products.jpg";
import officeImage from "@/assets/office-items.jpg";

const categories = [
  {
    title: "Dokra Art",
    description: "Traditional lost-wax metal casting preserving tribal heritage.",
    image: dokraImage,
  },
  {
    title: "Marble Products",
    description: "Handcrafted marble with intricate stone inlay techniques.",
    image: marbleImage,
  },
  {
    title: "Leather Goods",
    description: "Premium leather portfolios, bags, and accessories.",
    image: leatherImage,
  },
  {
    title: "Office & Desk Items",
    description: "Elegant accessories for professional settings.",
    image: officeImage,
  },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
            Product Categories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Curated Collections of Authentic Craft
          </h2>
          <p className="text-muted-foreground">
            Each category represents centuries of artisan tradition, carefully curated for discerning corporate gifting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl font-semibold text-background mb-2">
                  {category.title}
                </h3>
                <p className="text-background/80 text-sm mb-4">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <Button variant="hero" size="lg">
              View All Categories
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
