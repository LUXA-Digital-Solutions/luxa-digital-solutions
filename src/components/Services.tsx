import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.",
      features: ["Full-stack development", "API integration", "Database design", "Scalable architecture"],
      category: "Development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement across all platforms.",
      features: ["User research", "Wireframing", "Prototyping", "Design systems"],
      category: "Design"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
      features: ["Native development", "Cross-platform", "App store optimization", "Performance tuning"],
      category: "Mobile"
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Modern, responsive websites and web applications that work seamlessly across all devices and browsers.",
      features: ["Responsive design", "SEO optimization", "Performance", "Security"],
      category: "Web"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code, caching strategies, and performance monitoring.",
      features: ["Code optimization", "Caching strategies", "CDN setup", "Monitoring"],
      category: "Performance"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance solutions to protect your data and users.",
      features: ["Security audits", "Compliance", "Data protection", "Penetration testing"],
      category: "Security"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4 sm:mb-6 px-4 py-2 text-sm font-semibold">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">Comprehensive</span>{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            From concept to deployment, we provide end-to-end digital solutions that drive business growth and innovation.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group p-6 sm:p-8 lg:p-10 bg-card/30 border-border/30 hover:border-primary/40 transition-all-spring hover-lift backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:animate-glow transition-all-spring group-hover:scale-110">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm font-medium">
                    {service.category}
                  </Badge>
                </div>

                {/* Service Content */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 sm:mr-4 group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-8 lg:right-10 opacity-0 group-hover:opacity-100 transition-all-spring transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-foreground">Ready to Transform Your</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Business?
              </span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6">
              Let's discuss how our services can help you achieve your digital goals and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                size="lg" 
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
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;