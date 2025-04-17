import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSpice } from "@/components/HeroSpice";
import { AboutSpice } from "@/components/AboutSpice";
import { ExperienceTypes } from "@/components/ExperienceTypes";
import { BookingSteps } from "@/components/BookingSteps";
import { LoyaltyProgram } from "@/components/LoyaltyProgram";
import { SpiceTestimonials } from "@/components/SpiceTestimonials";

const SpiceExperience = () => {
  return (
    <div className="bg-[#0c0c0a] min-h-screen">
      <Navigation />
      <HeroSpice />
      <AboutSpice />
      <ExperienceTypes />
      <BookingSteps />
      <LoyaltyProgram />
      <SpiceTestimonials />
      <Footer />
    </div>
  );
};

export default SpiceExperience;
