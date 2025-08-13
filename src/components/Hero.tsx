import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-slide-up">
            <img 
              src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png" 
              alt="LUXA Digital Solutions"
              className="h-20 mx-auto mb-6 animate-glow"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Premium{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital
            </span>{' '}
            Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            We craft exceptional web experiences that drive results and elevate your business to new heights
          </p>

          {/* Feature icons */}
          <div className="flex justify-center gap-8 mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-card border border-primary/20 group-hover:border-primary/60 transition-all duration-300 hover-lift">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-muted-foreground">Development</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-card border border-primary/20 group-hover:border-primary/60 transition-all duration-300 hover-lift">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-muted-foreground">Design</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-card border border-primary/20 group-hover:border-primary/60 transition-all duration-300 hover-lift">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm mt-2 text-muted-foreground">Performance</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
            <Button size="lg" className="group bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 hover-lift">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;