import { Button } from "@/components/ui/button";
import { Shield, MessageCircle, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const partners = ["Afritech", "Nova Pay", "Kente Tech"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Enterprise Security</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Cyber Security Platform for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ghanaian Businesses
              </span>
            </h1>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                OWASP Top 10
              </span>
              <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                AI Remediation
              </span>
              <span className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                Mobile Money
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Run OWASP Top 10 vulnerability scans with AI‑powered fixes. Simple, fast, and safe.
              Pay with Mobile Money.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Trusted by:</span>
                <div className="flex items-center space-x-4">
                  {partners.map((partner) => (
                    <span key={partner} className="text-sm font-medium text-foreground/60">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
                >
                  Start Free Scan
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Demo
                </Button>
                <Button size="lg" variant="ghost" className="text-foreground hover:text-primary">
                  See Pricing
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div
              className="relative transform rotate-3 rounded-2xl overflow-hidden shadow-card"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
