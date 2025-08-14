import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { 
  ArrowUpRight, 
  Code, 
  ExternalLink,
  Eye,
  Calendar,
  Users
} from "lucide-react";

const Portfolio = () => {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4 sm:mb-6 px-4 py-2 text-sm font-semibold">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">Featured</span>{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            Discover how we've helped businesses achieve their digital transformation goals through innovative solutions.
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/30 border-border/30 hover:border-primary/40 transition-all-spring hover-lift backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all-spring group-hover:scale-110"
                />
                
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all-spring"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all-spring transform -translate-y-2 group-hover:translate-y-0">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs font-medium">
                    {project.category}
                  </Badge>
                </div>

                {/* Action Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all-spring transform translate-y-2 group-hover:translate-y-0">
                  <Button 
                    size="sm" 
                    className="bg-primary/90 hover:bg-primary text-black font-semibold w-10 h-10 p-0 rounded-full hover:scale-110 transition-all-spring"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Content Area */}
              <div className="p-6 sm:p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight flex-1 mr-4">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span>{project.teamSize} people</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="border-primary/30 text-primary bg-primary/10 text-xs sm:text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all-spring hover-scale"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="border-border/50 text-muted-foreground text-xs sm:text-sm">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Enhanced CTA Button */}
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift font-semibold group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    View Project Details
                    <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-foreground">Ready to See Your</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Project Here?
              </span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowUpRight className="ml-2 sm:ml-3 lg:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;