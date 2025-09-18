import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-toggle")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "How it works?", href: "#how-it-works", action: "scroll" },
    { name: "Pricing", href: "/get-quote", action: "navigate" },
    { name: "Faq", href: "#faq", action: "scroll" },
    { name: "Features", href: "#features", action: "scroll" },
  ];

  const handleNavClick = (item: { href: string; action: string }) => {
    setIsOpen(false);

    if (item.action === "navigate") {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      {/* Modern Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-background border-b border-border/30" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center justify-start">
              {/* Modern Logo */}
              <div className="relative">
                <img
                  src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                  alt="LUXA"
                  className="h-8 sm:h-10"
                />
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="px-5 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button and Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button
                onClick={() => navigate("/get-quote")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium text-sm"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden mobile-toggle ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors p-1"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <nav className="relative h-full w-full max-w-xs ml-auto bg-background border-l border-border/30 shadow-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <img
                src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                alt="LUXA"
                className="h-8"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors p-1"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col space-y-2 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium rounded-lg hover:bg-muted"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-border/30">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/get-quote");
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium text-sm"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
