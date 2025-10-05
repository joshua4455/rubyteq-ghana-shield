import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import OWASPCoverage from "@/components/OWASPCoverage";
import WhyRubyTeq from "@/components/WhyRubyTeq";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <OWASPCoverage />
      <WhyRubyTeq />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
