import { Shield, Sparkles, CheckCircle, Globe, Zap, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: Shield,
      title: "OWASP Top 10",
      description: "Comprehensive scanning for the most critical web application security risks.",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "AI Remediation",
      description: "Intelligent, automated fixes powered by advanced AI technology.",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: CheckCircle,
      title: "Owner Verification",
      description: "Secure domain ownership validation before scanning begins.",
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Ghana DPA‑Aware",
      description: "Fully compliant with Ghana Data Protection Act requirements.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Zap,
      title: "Fast & Safe",
      description: "Lightning-fast scans without disrupting your business operations.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: CreditCard,
      title: "Local Payments",
      description: "Pay easily with Mobile Money (MTN, Vodafone, AirtelTigo).",
      color: "from-cyan-600 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Enterprise-Grade{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Security</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for Ghanaian businesses with local compliance and payment integration.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
