import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about RubyTeq</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem
                  key={index + 3}
                  value={`item-${index + 3}`}
                  className="bg-gradient-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
