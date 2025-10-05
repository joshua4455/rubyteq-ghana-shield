import { Shield, Sparkles, CheckCircle, Globe, Zap, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "OWASP Top 10",
      description: "Comprehensive scanning for the most critical web application security risks.",
    },
    {
      icon: Sparkles,
      title: "AI Remediation",
      description: "Intelligent, automated fixes powered by advanced AI technology.",
    },
    {
      icon: CheckCircle,
      title: "Owner Verification",
      description: "Secure domain ownership validation before scanning begins.",
    },
    {
      icon: Globe,
      title: "Ghana DPA‑Aware",
      description: "Fully compliant with Ghana Data Protection Act requirements.",
    },
    {
      icon: Zap,
      title: "Fast & Safe",
      description: "Lightning-fast scans without disrupting your business operations.",
    },
    {
      icon: CreditCard,
      title: "Local Payments",
      description: "Pay easily with Mobile Money (MTN, Vodafone, AirtelTigo).",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="bg-gradient-primary bg-clip-text text-transparent">Security</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Ghanaian businesses with local compliance and payment integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
