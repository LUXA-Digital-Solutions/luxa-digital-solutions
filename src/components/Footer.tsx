import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home", action: "scroll" },
    { name: "Services", href: "#services", action: "scroll" },
    { name: "Portfolio", href: "#portfolio", action: "scroll" },
    { name: "About", href: "/about", action: "navigate" },
    { name: "Contact", href: "/contact", action: "navigate" },
  ];

  const handleQuickLinkClick = (link: { href: string; action: string }) => {
    if (link.action === "navigate") {
      navigate(link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const services = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Digital Consulting",
    "Performance Optimization",
    "Security & Compliance",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/luxa-digital-solutions/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/16yU24EfZE/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/luxa_digital_solutions?igsh=YzljYTk1ODg3Zg==",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Vb6lnPZ17EmpPBfjY60N",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-brand-light dark:bg-brand-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="relative group cursor-pointer">
                  <div className="relative overflow-hidden rounded-full bg-black p-3 sm:p-4 lg:p-5 border border-brand-teal/25 hover:border-brand-teal/50 transition-all duration-700 hover:shadow-xl hover:shadow-brand-teal/25 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    <img
                      src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                      alt="LUXA"
                      className="h-10 sm:h-12 lg:h-16 w-auto relative z-10 group-hover:scale-105 transition-all duration-700 filter drop-shadow-lg group-hover:drop-shadow-xl"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-teal/40 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-1 -left-1 w-3 h-3 bg-brand-teal/30 rounded-full animate-pulse"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brand-teal/5 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Transforming businesses through innovative digital solutions. We
                create exceptional experiences that drive growth and success.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-teal/10 hover:bg-brand-teal/20 border border-brand-teal/20 hover:border-brand-teal/40 flex items-center justify-center transition-all-spring hover-lift group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleQuickLinkClick(link)}
                      className="text-muted-foreground hover:text-brand-teal transition-colors duration-300 text-sm sm:text-base lg:text-lg group flex items-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all-spring group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
                Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="text-muted-foreground hover:text-brand-teal transition-colors duration-300 text-sm sm:text-base lg:text-lg cursor-pointer group flex items-center">
                      <span className="relative">
                        {service}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all-spring group-hover:w-full"></span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-foreground">
                Contact Info
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div
                  onClick={() => window.open("mailto:hello@luxa.com", "_self")}
                  className="flex items-start group cursor-pointer"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                      hello@luxa.com
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => window.open("tel:+15551234567", "_self")}
                  className="flex items-start group cursor-pointer"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=123+Digital+Street+Tech+City+TC+12345",
                      "_blank"
                    )
                  }
                  className="flex items-start group cursor-pointer"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                      123 Digital Street
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                      Mon-Fri: 9AM-6PM
                      <br />
                      Sat: 10AM-4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center text-muted-foreground text-sm sm:text-base">
              <span>© 2024 LUXA Digital Solutions. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base">
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-teal transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-teal transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-teal transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal/90 hover:bg-brand-teal text-black shadow-elegant hover:shadow-cyan transition-all-spring hover-lift z-40 group"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
      </Button>
    </footer>
  );
};

export default Footer;
