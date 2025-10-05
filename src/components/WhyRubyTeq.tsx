import { Zap, MapPin, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyRubyTeq = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Simple & Fast",
      description: "No complex setup required. Get your security report in minutes, not days.",
    },
    {
      icon: MapPin,
      title: "Ghanaian Businesses",
      description: "Built for Ghana. Local compliance, support in your timezone, and understanding of local needs.",
    },
    {
      icon: CreditCard,
      title: "Mobile Money",
      description: "Pay easily with MTN, Vodafone, or AirtelTigo Mobile Money. No credit card needed.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">RubyTeq</span>?
          </h2>
          <p className="text-lg text-muted-foreground">Designed for the unique needs of Ghanaian enterprises</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRubyTeq;
