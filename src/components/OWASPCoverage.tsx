import { Shield, Lock, Database, Code, AlertTriangle, FileCode, Server, Key, Bug, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const OWASPCoverage = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const owaspItems = [
    { icon: Lock, title: "Broken Access Control", description: "A01:2021", color: "from-red-500 to-orange-500" },
    { icon: Code, title: "Cryptographic Failures", description: "A02:2021", color: "from-orange-500 to-yellow-500" },
    { icon: AlertTriangle, title: "Injection", description: "A03:2021", color: "from-yellow-500 to-green-500" },
    { icon: Settings, title: "Insecure Design", description: "A04:2021", color: "from-green-500 to-teal-500" },
    { icon: FileCode, title: "Security Misconfiguration", description: "A05:2021", color: "from-teal-500 to-cyan-500" },
    { icon: Bug, title: "Vulnerable Components", description: "A06:2021", color: "from-cyan-500 to-blue-500" },
    { icon: Key, title: "Authentication Failures", description: "A07:2021", color: "from-blue-500 to-indigo-500" },
    { icon: Database, title: "Data Integrity Failures", description: "A08:2021", color: "from-indigo-500 to-purple-500" },
    { icon: Server, title: "Security Logging Failures", description: "A09:2021", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Server-Side Request Forgery", description: "A10:2021", color: "from-pink-500 to-red-500" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Complete <span className="bg-gradient-primary bg-clip-text text-transparent">OWASP Top 10</span> Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive scanning for all critical web application security risks defined by OWASP
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {owaspItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                className="group p-6 bg-gradient-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-glow relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="text-xs font-mono text-primary font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {item.description}
                  </div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-primary rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OWASPCoverage;
