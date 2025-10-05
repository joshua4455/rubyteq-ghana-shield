import { CheckCircle2, Search, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Verify Domain",
      description: "Confirm ownership of your domain through our secure verification process.",
    },
    {
      icon: Search,
      title: "Run Scan",
      description: "Our AI-powered scanner analyzes your website for OWASP Top 10 vulnerabilities.",
    },
    {
      icon: Download,
      title: "Download Report",
      description: "Get a detailed security report with AI-generated remediation recommendations.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-card border-2 border-primary flex items-center justify-center shadow-glow">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute top-2 right-[calc(50%-12px)] w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
