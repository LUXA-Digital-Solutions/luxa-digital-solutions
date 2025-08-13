import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, Database, Rocket, Shield, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "TypeScript", "API Integration", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive designs and progressive web apps that work perfectly on all devices",
      features: ["PWA Development", "Mobile-First Design", "Cross-Platform", "App Store Ready"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server architectures and database solutions for your business needs",
      features: ["Cloud Infrastructure", "Database Design", "API Development", "Security First"]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and superior user experience",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Setup", "Caching Strategies"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security measures and ongoing support for your digital assets",
      features: ["SSL Certificates", "Regular Updates", "Backup Solutions", "24/7 Monitoring"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Growth",
      description: "Data-driven insights and conversion optimization to maximize your ROI",
      features: ["Google Analytics", "A/B Testing", "Conversion Tracking", "Growth Strategy"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 border-border hover:border-primary/30 group hover-lift backdrop-blur-sm transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;