import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Globe,
  Palette,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Code, label: "Custom Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Globe, label: "Web Solutions" },
    { icon: Zap, label: "Performance" },
    { icon: Shield, label: "Security" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light dark:bg-brand-dark"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-muted/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-muted/40 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-muted/25 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-muted/35 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-80 left-1/2 w-2 h-2 bg-muted/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-96 right-1/4 w-1.5 h-1.5 bg-muted/25 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-muted/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-muted/30 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-muted/25 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-muted/35 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-80 left-1/3 w-2 h-2 bg-muted/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-96 right-1/3 w-1.5 h-1.5 bg-muted/25 rounded-full animate-float-slow blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto lg:pt-20">
          {/* Enhanced Headline */}
          <div className="mb-6 sm:mb-8 lg:mb-10 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="">We</span> {}
              <span className="text-primary">Build</span> {}
              <span className="text-foreground dark:text-brand-light">
                Digital
              </span>
              <span className="text-foreground dark:text-brand-light">
                {" "}
                Solutions
              </span>
            </h1>
          </div>

          {/* Enhanced Subheadline */}
          <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-up-delayed">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Transform your business with Websites, mobile apps, and digital
              solutions designed to help your brand stand out and succeed.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up-delayed">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="bg-brand-teal hover:shadow-cyan transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold group relative overflow-hidden w-full sm:w-auto rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/all-projects")}
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto rounded-xl"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Trust Indicators Placeholder */}
          <div className="mb-8 sm:mb-12 animate-slide-up-delayed">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-muted/40 rounded-full mr-2"></div>
                <span className="text-xl sm:text-base">
                  10+ Projects Completed
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-muted/40 rounded-full mr-2"></div>
                <span className="text-xl sm:text-base">
                  98% Client Satisfaction
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-muted/40 rounded-full mr-2"></div>
                <span className="text-xl sm:text-base">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
