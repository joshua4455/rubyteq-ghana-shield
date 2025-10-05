import { CheckCircle2, Search, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const steps = [
    {
      icon: CheckCircle2,
      title: "Verify Domain",
      description: "Confirm ownership of your domain through our secure verification process.",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      icon: Search,
      title: "Run Scan",
      description: "Our AI-powered scanner analyzes your website for OWASP Top 10 vulnerabilities.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: Download,
      title: "Download Report",
      description: "Get a detailed security report with AI-generated remediation recommendations.",
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">Get started in three simple steps</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-24 left-[60%] w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent z-0"
                  initial={{ scaleX: 0 }}
                  animate={isVisible ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
              
              <motion.div
                className="relative z-10 text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-glow-lg relative overflow-hidden`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <step.icon className="w-14 h-14 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                </motion.div>
                
                <div className="absolute top-4 right-[calc(50%-16px)] w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg z-20">
                  {index + 1}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
