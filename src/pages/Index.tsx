import HeroSection from "@/components/sections/HeroSection";
import ChaosSection from "@/components/sections/ChaosSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ConversionForm from "@/components/sections/ConversionForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChaosSection />
      <SolutionSection />
      <ConversionForm />
    </div>
  );
};

export default Index;
