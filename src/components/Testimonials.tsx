import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const testimonials = [
    {
      quote: "RubyTeq helped us identify critical vulnerabilities before they became problems. The AI remediation saved our team weeks of work.",
      author: "Kwame Mensah",
      role: "CTO, Afritech Solutions",
      company: "Afritech",
      rating: 5,
    },
    {
      quote: "The Mobile Money integration made it so easy to get started. We had our first security scan running within 10 minutes.",
      author: "Ama Osei",
      role: "Head of Security, Nova Pay",
      company: "Nova Pay",
      rating: 5,
    },
    {
      quote: "Finally, a security platform that understands Ghana DPA requirements. The compliance reporting alone is worth it.",
      author: "Kofi Addo",
      role: "CEO, Kente Tech",
      company: "Kente Tech",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana's Best</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what our customers say about us</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-lg h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-10 h-10 text-primary mb-4" />
                  </motion.div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-primary flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary font-semibold">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
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

export default Testimonials;
