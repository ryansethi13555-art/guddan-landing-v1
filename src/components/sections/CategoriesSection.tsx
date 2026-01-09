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
    <section ref={ref} className="py-32 lg:py-40 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
            Product Categories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Curated Collections of Authentic Craft
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
            Each category represents centuries of artisan tradition, carefully curated for discerning corporate gifting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 z-20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-3xl font-medium text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
          className="text-center mt-20"
        >
          <Link to="/products">
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-white rounded-none px-12 py-6 uppercase tracking-widest text-xs">
              View All Categories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
