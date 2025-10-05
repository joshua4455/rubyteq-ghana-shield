import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const faqs = [
    {
      question: "How does billing work?",
      answer: "Pay per scan with Mobile Money (MTN, Vodafone, AirtelTigo). No subscriptions, no hidden fees. You only pay when you run a scan.",
    },
    {
      question: "What is domain verification?",
      answer: "Domain verification confirms you own the website before scanning. We provide a verification code to add to your DNS or website to prove ownership.",
    },
    {
      question: "What format are the reports?",
      answer: "Reports are delivered as comprehensive PDF documents with executive summaries, technical details, and AI-powered remediation recommendations.",
    },
    {
      question: "How long is data retained?",
      answer: "Scan data is retained for 90 days for your reference. After that, it's automatically deleted in compliance with Ghana DPA requirements.",
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We're Ghana DPA compliant, use end-to-end encryption, and never store sensitive information. All scans are conducted securely and ethically.",
    },
    {
      question: "Can I scan multiple domains?",
      answer: "Absolutely. Each domain requires separate verification and payment, but you can manage unlimited domains from one account.",
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
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about RubyTeq</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-gradient-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-all hover:shadow-glow"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index + 3}`}
                    className="bg-gradient-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-all hover:shadow-glow"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
