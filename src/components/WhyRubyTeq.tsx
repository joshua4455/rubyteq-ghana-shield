import { Zap, MapPin, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WhyRubyTeq = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const reasons = [
    {
      icon: Zap,
      title: "Simple & Fast",
      description: "No complex setup required. Get your security report in minutes, not days.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: MapPin,
      title: "Ghanaian Businesses",
      description: "Built for Ghana. Local compliance, support in your timezone, and understanding of local needs.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: CreditCard,
      title: "Mobile Money",
      description: "Pay easily with MTN, Vodafone, or AirtelTigo Mobile Money. No credit card needed.",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">RubyTeq</span>?
          </h2>
          <p className="text-xl text-muted-foreground">Designed for the unique needs of Ghanaian enterprises</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group p-10 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg text-center h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-8 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <reason.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{reason.description}</p>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRubyTeq;
