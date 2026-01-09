import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import WhyGuddanSection from "@/components/sections/WhyGuddanSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <CategoriesSection />
      <WhyGuddanSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
