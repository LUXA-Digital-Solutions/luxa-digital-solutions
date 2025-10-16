import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    { name: "About", href: "/about", action: "navigate" },
    { name: "Portfolio", href: "#portfolio", action: "scroll" },
    { name: "Services", href: "#services", action: "scroll" },
    { name: "Pricing", href: "/pricing", action: "navigate" },
    { name: "Contact", href: "/contact", action: "navigate" },
  ];

  const handleNavClick = (item: { href: string; action: string }) => {
    setIsOpen(false);

    if (item.action === "navigate") {
      navigate(item.href);
    } else {
      // For scroll actions, check if we're on the homepage
      const isHomePage =
        location.pathname === "/" || location.pathname === "/index";

      if (isHomePage) {
        // We're on homepage, scroll directly
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // We're on a different page, navigate to homepage with hash
        navigate(`/${item.href}`, { replace: false });
      }
    }
  };

  return (
    <>
      {/* Modern Navigation Bar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "border-b border-border/30 bg-background"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto my-2 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <div className="flex items-center justify-start">
              {/* Modern Logo */}
              <div
                className="group relative cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="relative overflow-hidden rounded-full border border-brand-coral/20 bg-black p-2 backdrop-blur-sm transition-all duration-500 hover:border-brand-coral/40 hover:shadow-lg hover:shadow-brand-coral/20 sm:p-4">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <img
                    src="/luxa.png"
                    alt="LUXA"
                    className="relative z-10 h-8 w-auto drop-shadow-sm filter transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-md sm:h-10"
                  />
                  <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-brand-coral/30"></div>
                  <div
                    className="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse rounded-full bg-brand-gold/20"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden items-center justify-center lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="px-5 py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button and Theme Toggle */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* <ThemeToggle /> */}
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground rounded-full bg-brand-teal px-6 py-2 text-sm font-medium hover:bg-brand-teal/90"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-toggle ml-4 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-foreground transition-colors hover:text-brand-coral"
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
        className={`fixed inset-0 z-40 transform transition-all duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <nav className="relative ml-auto h-full w-full max-w-xs border-l border-border/30 bg-background shadow-xl">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border/30 p-4">
              <div
                className="group relative cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              >
                {/* <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-teal/10 via-brand-teal/5 to-transparent p-2.5 border border-brand-teal/20 hover:border-brand-teal/40 transition-all duration-500 hover:shadow-lg hover:shadow-brand-teal/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <img
                    src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                    alt="LUXA"
                    className="h-7 sm:h-8 w-auto relative z-10 group-hover:scale-110 transition-all duration-500 filter drop-shadow-sm"
                  />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-teal/30 rounded-full animate-pulse"></div>
                </div> */}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 text-foreground transition-colors hover:text-brand-coral"
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
                    className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-4 border-t border-border/30 pt-4">
                  <div className="mb-4 flex justify-center">
                    <ThemeToggle />
                  </div>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/pricing");
                    }}
                    className="text-brand-teal-foreground w-full rounded-full bg-brand-teal px-6 py-2 text-sm font-medium hover:bg-brand-teal/90"
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
