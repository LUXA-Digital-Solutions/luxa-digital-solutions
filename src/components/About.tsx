import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "150+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: Award,
      value: "200+",
      label: "Projects Delivered",
      description: "Successful launches"
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Client growth"
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                LUXA
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At LUXA Digital Solutions, we specialize in creating exceptional digital experiences 
                that drive business growth and exceed client expectations. Our team of expert 
                developers and designers work collaboratively to deliver innovative solutions.
              </p>
              
              <p>
                We understand that every business is unique, which is why we take a personalized 
                approach to each project. From initial consultation to final deployment, we ensure 
                your vision becomes a reality with precision and creativity.
              </p>
              
              <p>
                Our commitment to excellence and cutting-edge technology has helped businesses 
                across industries achieve their digital transformation goals and maximize their ROI.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies We Master</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-card/50 border-border hover:border-primary/30 group hover-lift backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24">
          <Card className="p-8 md:p-12 bg-gradient-accent border-primary/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge digital solutions that not only meet today's 
              challenges but anticipate tomorrow's opportunities. We believe in the transformative 
              power of technology when combined with creative vision and strategic thinking.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;