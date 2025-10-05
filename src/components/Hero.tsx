import { Button } from "@/components/ui/button";
import { Shield, MessageCircle, ArrowRight, Sparkles, Lock, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const partners = ["Afritech", "Nova Pay", "Kente Tech"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingIcons = [
    { Icon: Shield, delay: 0, x: "10%", y: "20%" },
    { Icon: Lock, delay: 2, x: "80%", y: "30%" },
    { Icon: Zap, delay: 4, x: "15%", y: "70%" },
    { Icon: Sparkles, delay: 1, x: "85%", y: "65%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-hero z-10" />

      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute z-10 opacity-20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-16 h-16 text-primary" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm shadow-glow"
            >
              <Sparkles className="w-4 h-4 text-primary mr-2 animate-glow-pulse" />
              <span className="text-sm text-primary font-medium">AI-Powered Security Platform</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              <span className="block text-foreground">Cyber Security</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                for Ghana
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["OWASP Top 10", "AI Remediation", "Mobile Money"].map((chip, index) => (
                <motion.span
                  key={chip}
                  className="px-5 py-2 rounded-full bg-gradient-card border border-primary/20 text-sm font-medium backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-glow cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Run OWASP Top 10 vulnerability scans with <span className="text-primary font-semibold">AI‑powered fixes</span>. 
              Simple, fast, and safe. Pay with Mobile Money.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Trusted by:</span>
                <div className="flex items-center space-x-4">
                  {partners.map((partner) => (
                    <span key={partner} className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow-lg group"
                  >
                    Start Free Scan
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 hover:shadow-glow"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Demo
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="ghost" className="text-foreground hover:text-primary">
                    See Pricing
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-glow-lg border border-primary/20"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
