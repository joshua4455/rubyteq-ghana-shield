import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: ["Company", "Team", "Careers", "Blog"],
    },
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Roadmap"],
    },
    {
      title: "Company",
      links: ["About Us", "Partners", "Press Kit", "News"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "DPA Compliance", "Security"],
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-primary/20 backdrop-blur-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              RubyTeq
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Enterprise cybersecurity platform for Ghanaian businesses. Simple, fast, and secure.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/company/rubyteq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:shadow-glow transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://twitter.com/rubyteq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center hover:shadow-glow transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-bold text-foreground mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:contact@rubyteq.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@rubyteq.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="https://wa.me/233597095202" className="text-muted-foreground hover:text-primary transition-colors">
                  +233 59 709 5202
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-primary/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            &copy; 2025 RubyTeq. All rights reserved. Made in <span className="text-primary font-semibold">Ghana</span> 🇬🇭
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
