import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "RubyTeq helped us identify critical vulnerabilities before they became problems. The AI remediation saved our team weeks of work.",
      author: "Kwame Mensah",
      role: "CTO, Afritech Solutions",
      company: "Afritech",
    },
    {
      quote: "The Mobile Money integration made it so easy to get started. We had our first security scan running within 10 minutes.",
      author: "Ama Osei",
      role: "Head of Security, Nova Pay",
      company: "Nova Pay",
    },
    {
      quote: "Finally, a security platform that understands Ghana DPA requirements. The compliance reporting alone is worth it.",
      author: "Kofi Addo",
      role: "CEO, Kente Tech",
      company: "Kente Tech",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana's Best</span>
          </h2>
          <p className="text-lg text-muted-foreground">See what our customers say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
