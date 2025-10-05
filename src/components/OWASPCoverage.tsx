import { Shield, Lock, Database, Code, AlertTriangle, FileCode, Server, Key, Bug, Settings } from "lucide-react";

const OWASPCoverage = () => {
  const owaspItems = [
    { icon: Lock, title: "Broken Access Control", description: "A01:2021" },
    { icon: Code, title: "Cryptographic Failures", description: "A02:2021" },
    { icon: AlertTriangle, title: "Injection", description: "A03:2021" },
    { icon: Settings, title: "Insecure Design", description: "A04:2021" },
    { icon: FileCode, title: "Security Misconfiguration", description: "A05:2021" },
    { icon: Bug, title: "Vulnerable Components", description: "A06:2021" },
    { icon: Key, title: "Authentication Failures", description: "A07:2021" },
    { icon: Database, title: "Data Integrity Failures", description: "A08:2021" },
    { icon: Server, title: "Security Logging Failures", description: "A09:2021" },
    { icon: Shield, title: "Server-Side Request Forgery", description: "A10:2021" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="bg-gradient-primary bg-clip-text text-transparent">OWASP Top 10</span> Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive scanning for all critical web application security risks defined by OWASP
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {owaspItems.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs font-mono text-primary">{item.description}</div>
                <div className="text-sm font-medium text-foreground">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OWASPCoverage;
