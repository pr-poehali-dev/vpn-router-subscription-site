import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import PaymentForm from "@/components/PaymentForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <PaymentForm />
    </div>
  );
};

export default Index;
