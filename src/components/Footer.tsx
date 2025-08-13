import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-dark border-t border-border/20">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png" 
              alt="LUXA Digital Solutions"
              className="h-8 mb-6"
            />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative digital solutions. We create exceptional 
              web experiences that drive growth and deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "UI/UX Design", "E-Commerce", "SEO Optimization", "Maintenance"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">hello@luxadigital.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">123 Digital Avenue<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 LUXA Digital Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;