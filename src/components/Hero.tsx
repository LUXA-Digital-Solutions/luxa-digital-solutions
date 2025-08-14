import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Code, label: "Custom Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Globe, label: "Web Solutions" },
    { icon: Zap, label: "Performance" },
    { icon: Shield, label: "Security" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-primary/60 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-80 left-1/2 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-96 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-primary/60 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-primary/40 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-primary/50 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-80 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-96 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-slow blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto pt-20">
          {/* Enhanced Logo */}
          {/* <div className="mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-accent p-4 mb-6 group">
              <img 
                src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png" 
                alt="LUXA" 
                className="w-full h-full object-contain transition-all-spring group-hover:scale-110 group-hover:animate-pulse"
              />
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div> */}

          {/* Enhanced Headline */}
          <div className="mb-6 sm:mb-8 lg:mb-10 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-foreground">We Build</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent relative inline-block">
                Digital
                <Sparkles className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ml-2 sm:ml-3 lg:ml-4 text-primary animate-glow" />
              </span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h1>
          </div>

          {/* Enhanced Subheadline */}
          <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-up-delayed">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Transform your business with cutting-edge digital solutions. 
              We create innovative, scalable, and user-centric applications that drive results.
            </p>
          </div>

          {/* Enhanced Feature Icons */}
          <div className="mb-10 sm:mb-12 lg:mb-16 animate-slide-up-delayed">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="flex flex-col items-center p-3 sm:p-4 lg:p-5 rounded-2xl hover:bg-primary/5 transition-all-spring hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-2 sm:mb-3 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up-delayed">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/get-quote')}
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/all-projects')}
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto"
              >
                View Our Work
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={() => navigate('/about')}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto"
              >
                About Us
              </Button>
            </div>
          </div>

          {/* Trust Indicators Placeholder */}
          <div className="mb-8 sm:mb-12 animate-slide-up-delayed">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm sm:text-base">500+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm sm:text-base">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-sm sm:text-base">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;