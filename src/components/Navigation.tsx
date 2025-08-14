import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-toggle')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home", action: "scroll" },
    { name: "Services", href: "#services", action: "scroll" },
    { name: "Portfolio", href: "#portfolio", action: "scroll" },
    { name: "About", href: "/about", action: "navigate" },
    { name: "Contact", href: "/contact", action: "navigate" }
  ];

  const handleNavClick = (item: { href: string; action: string }) => {
    setIsOpen(false);
    
    if (item.action === "navigate") {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <>
      {/* Modern Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-spring ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-elegant' 
          : 'bg-background/80 backdrop-blur-lg border-b border-border/20'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Modern Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png" 
                  alt="LUXA"
                  className="h-8 sm:h-10 transition-all-spring group-hover:scale-110"
                />
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="relative text-muted-foreground hover:text-primary transition-all-spring font-medium py-2 group text-sm xl:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all-spring group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => navigate('/get-quote')}
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-6 py-2.5 font-semibold relative overflow-hidden group text-sm xl:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Quote</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden mobile-toggle">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-all-spring p-2 relative"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`w-6 h-6 absolute inset-0 transition-all-spring ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                  <X className={`w-6 h-6 absolute inset-0 transition-all-spring ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all-spring ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all-spring ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-0 right-0 w-80 h-full bg-background/95 backdrop-blur-xl border-l border-border/30 shadow-elegant transform transition-all-spring ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png" 
                  alt="LUXA"
                  className="h-8"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-all-spring p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-all-spring font-medium py-4 px-4 rounded-xl hover:bg-primary/5 group"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <span className="text-lg">{item.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all-spring group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              {/* Mobile CTA Section */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <Button 
                  onClick={() => navigate('/get-quote')}
                  className="w-full bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift font-semibold py-4 text-lg mb-4"
                  style={{ 
                    animationDelay: '0.5s',
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  Get Quote
                </Button>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div 
                    onClick={() => window.open('tel:+15551234567', '_self')}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group cursor-pointer"
                  >
                    <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div 
                    onClick={() => window.open('mailto:hello@luxa.com', '_self')}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group cursor-pointer"
                  >
                    <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">hello@luxa.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;