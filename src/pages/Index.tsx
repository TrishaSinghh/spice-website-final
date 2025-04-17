
import { HeroGeometric } from "@/components/HeroGeometric";
import { Navigation } from "@/components/Navigation";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#030303] min-h-screen">
      <Navigation />
      <HeroGeometric 
        badge=""
        title1="Elevate your experience"
        title2="With SPICE"
      />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
