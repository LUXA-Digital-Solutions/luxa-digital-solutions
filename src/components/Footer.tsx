import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
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
    { name: "Blog", href: "/blog", action: "navigate" },
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
      href: "https://www.instagram.com/luxa__agency?igsh=MWFtY25paWFpdzZheQ==",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Vb6lnPZ17EmpPBfjY60N",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      {/* Background decorative elements (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-8 top-12 h-24 w-24 rounded-full bg-brand-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        {/* Main three-column layout: Left (brand), Center (dotted art), Right (links) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Left: Big Brand / Description */}
          <div className="flex flex-col justify-between md:col-span-1">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/luxa.png"
                  alt="LUXA Digital Solutions"
                  className="h-12 w-auto"
                />
                <span className="ml-2 text-2xl font-extrabold">
                  LUXA Digital Solutions
                </span>
              </div>

              <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                LUXA Digital Solutions helps ambitious brands refine their
                vision, grow their digital presence, and drive measurable
                results.
              </p>
            </div>

            <div className="mt-12 text-sm text-muted-foreground">
              Powered by LUXA
            </div>
          </div>

          {/* Center: Dotted artwork with central white dot */}
          <div className="relative flex items-center justify-center md:col-span-1">
            <div
              className="h-72 w-full max-w-[420px] rounded-xl"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            >
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Right: Links, Expertise, Socials, Newsletter, Contact, Legal */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => handleQuickLinkClick(link)}
                        className="hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Expertise
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {services.slice(0, 4).map((s) => (
                    <li key={s} className="hover:text-white">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Socials
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {socialLinks.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold text-white">
                Newsletter
              </h4>
              <div className="relative max-w-md">
                <input
                  placeholder="Enter your email"
                  className="w-full border-0 border-b border-border/20 bg-transparent py-2 pr-4 text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 border-t border-border/20 pt-6 text-sm text-muted-foreground">
              <div className="mb-4">
                <h5 className="mb-2 text-sm font-semibold text-white">
                  Contact
                </h5>
                <div>
                  Acre Santa,
                  <br />
                  Ilorin, Kwara State,
                  <br />
                  Nigeria
                </div>
              </div>

              <div className="flex items-center gap-6">
                <a className="hover:text-white">Privacy Policy</a>
                <a className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - keep existing style */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={scrollToTop}
          className="shadow-elegant hover:shadow-cyan transition-all-spring hover-lift group fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-brand-teal/90 text-black hover:bg-brand-teal sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
