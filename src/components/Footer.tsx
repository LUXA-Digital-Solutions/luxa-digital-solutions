import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
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
    <footer className="relative overflow-hidden bg-brand-light dark:bg-brand-dark">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="bg-brand-teal/3 absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center sm:mb-8">
                <div className="group relative cursor-pointer">
                  <div className="relative overflow-hidden rounded-full border border-brand-teal/25 bg-black p-3 backdrop-blur-sm transition-all duration-700 hover:border-brand-teal/50 hover:shadow-xl hover:shadow-brand-teal/25 sm:p-4 lg:p-5">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    <img
                      src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                      alt="LUXA"
                      className="relative z-10 h-10 w-auto drop-shadow-lg filter transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-xl sm:h-12 lg:h-16"
                    />
                    <div className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full bg-brand-teal/40"></div>
                    <div
                      className="absolute -bottom-1 -left-1 h-3 w-3 animate-pulse rounded-full bg-brand-teal/30"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                      className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform animate-ping rounded-full bg-brand-teal/5"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base lg:text-lg">
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
                    className="transition-all-spring hover-lift group flex h-10 w-10 items-center justify-center rounded-xl border border-brand-teal/20 bg-brand-teal/10 hover:border-brand-teal/40 hover:bg-brand-teal/20 sm:h-12 sm:w-12"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="h-4 w-4 text-brand-teal transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-foreground sm:mb-8 sm:text-xl lg:text-2xl">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleQuickLinkClick(link)}
                      className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-brand-teal sm:text-base lg:text-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="transition-all-spring absolute bottom-0 left-0 h-0.5 w-0 bg-brand-teal group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-foreground sm:mb-8 sm:text-xl lg:text-2xl">
                Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="group flex cursor-pointer items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-brand-teal sm:text-base lg:text-lg">
                      <span className="relative">
                        {service}
                        <span className="transition-all-spring absolute bottom-0 left-0 h-0.5 w-0 bg-brand-teal group-hover:w-full"></span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-foreground sm:mb-8 sm:text-xl lg:text-2xl">
                Contact Info
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div
                  onClick={() =>
                    window.open("mailto:info@luxasolution.com", "_self")
                  }
                  className="group flex cursor-pointer items-start"
                >
                  <Mail className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-brand-teal transition-transform duration-300 group-hover:scale-110 sm:mr-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                      info@luxasolution.com
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => window.open("tel:+2347047494586", "_self")}
                  className="group flex cursor-pointer items-start"
                >
                  <Phone className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-brand-teal transition-transform duration-300 group-hover:scale-110 sm:mr-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                      +2347047494586
                    </p>
                  </div>
                </div>

                <div
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=123+Digital+Street+Tech+City+TC+12345",
                      "_blank",
                    )
                  }
                  className="group flex cursor-pointer items-start"
                >
                  <MapPin className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-brand-teal transition-transform duration-300 group-hover:scale-110 sm:mr-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                      123 Digital Street
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="group flex items-start">
                  <Clock className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-brand-teal transition-transform duration-300 group-hover:scale-110 sm:mr-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
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
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
            <div className="flex items-center text-sm text-muted-foreground sm:text-base">
              <span>© 2024 LUXA Digital Solutions. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm sm:space-x-8 sm:text-base">
              <a
                href="#"
                className="text-muted-foreground transition-colors duration-300 hover:text-brand-teal"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors duration-300 hover:text-brand-teal"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors duration-300 hover:text-brand-teal"
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
        className="shadow-elegant hover:shadow-cyan transition-all-spring hover-lift group fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-brand-teal/90 text-black hover:bg-brand-teal sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 sm:h-6 sm:w-6" />
      </Button>
    </footer>
  );
};

export default Footer;
