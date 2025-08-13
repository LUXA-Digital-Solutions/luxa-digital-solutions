import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ExternalLink, Code } from "lucide-react";

const Portfolio = () => {

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through successful client projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/50 border-border hover:border-primary/30 group hover-lift backdrop-blur-sm transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-black/50 backdrop-blur-sm hover:bg-black/70">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                  <Code className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link to={`/project/${project.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 text-foreground hover:bg-primary/10 group-hover:border-primary/60 transition-all"
                  >
                    View Project Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;