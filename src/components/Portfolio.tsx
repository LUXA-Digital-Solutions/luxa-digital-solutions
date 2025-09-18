import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Eye,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const featuredProjects = projects.slice(0, 3); // Show only 3 featured projects

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <Badge
            variant="secondary"
            className="bg-brand-teal/10 text-brand-teal border-brand-teal/20 mb-4 sm:mb-6 px-4 py-2 text-sm font-semibold"
          >
            Our Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">Transformative</span>{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            Discover how we've helped businesses achieve remarkable digital
            transformation through innovative technology solutions.
          </p>
        </div>

        {/* Premium Single-Column Project Layout */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 mb-16 sm:mb-20 lg:mb-24">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card/30 border-border/30 hover:border-brand-teal/40 backdrop-blur-sm transition-all-spring hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Layout Indicator Badge */}
              <div
                className={`absolute top-6 left-6 z-20 ${
                  index % 2 === 0 ? "lg:hidden" : "hidden"
                }`}
              >
                <Badge
                  variant="secondary"
                  className="bg-brand-teal/20 text-brand-teal border-brand-teal/30 text-xs font-medium"
                >
                  Image Left
                </Badge>
              </div>
              <div
                className={`absolute top-6 left-6 z-20 ${
                  index % 2 === 0 ? "hidden" : "lg:hidden"
                }`}
              >
                <Badge
                  variant="secondary"
                  className="bg-brand-teal/20 text-brand-teal border-brand-teal/30 text-xs font-medium"
                >
                  Image Right
                </Badge>
              </div>

              <div className="relative z-10">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Enhanced Project Image - Alternating Position */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="aspect-[16/10] relative group-hover:scale-105 transition-transform duration-700 ease-out">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all-spring"
                      />
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Hover Action Buttons */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all-spring transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="bg-brand-teal/90 hover:bg-brand-teal text-black font-semibold w-10 h-10 p-0 rounded-full hover:scale-110 transition-all-spring shadow-lg"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => window.open(project.link, "_blank")}
                            className="bg-white/90 hover:bg-white text-black font-semibold w-10 h-10 p-0 rounded-full hover:scale-110 transition-all-spring shadow-lg"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Project Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-brand-teal/90 text-black border-0 font-semibold px-3 py-1 text-xs"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Project Content - Alternating Position */}
                  <div
                    className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-6 sm:space-y-8">
                      {/* Project Title & Description */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 group-hover:text-brand-teal transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl group-hover:text-foreground/90 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Enhanced Project Stats */}
                      <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="flex items-center space-x-3 group/stat">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300">
                            <Users className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Team Size
                            </div>
                            <div className="font-semibold text-foreground group-hover/stat:text-brand-teal transition-colors duration-300">
                              {project.teamSize} people
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 group/stat">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300">
                            <Calendar className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Duration
                            </div>
                            <div className="font-semibold text-foreground group-hover/stat:text-brand-teal transition-colors duration-300">
                              {project.duration}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 group/stat">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Budget
                            </div>
                            <div className="font-semibold text-foreground group-hover/stat:text-brand-teal transition-colors duration-300">
                              {project.budget}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 group/stat">
                          <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300">
                            <Award className="w-4 h-4 text-brand-teal" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Client
                            </div>
                            <div className="font-semibold text-foreground group-hover/stat:text-brand-teal transition-colors duration-300 text-sm">
                              {project.client}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 6).map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-brand-teal/30 text-brand-teal bg-brand-teal/10 text-xs font-medium hover:bg-brand-teal/20 hover:border-brand-teal/50 transition-all-spring hover-scale"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 6 && (
                            <Badge
                              variant="outline"
                              className="border-border/30 text-muted-foreground text-xs"
                            >
                              +{project.tech.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Enhanced CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          onClick={() => navigate(`/project/${project.id}`)}
                          className="bg-brand-teal hover:shadow-cyan transition-all-spring hover-lift px-8 py-4 text-lg font-semibold group relative overflow-hidden flex-1 sm:flex-none"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative z-10 flex items-center justify-center">
                            View Project Details
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </span>
                        </Button>

                        <Button
                          variant="outline"
                          onClick={() => window.open(project.link, "_blank")}
                          className="border-brand-teal/40 text-foreground hover:bg-brand-teal/10 hover:border-brand-teal/60 transition-all-spring hover-lift px-8 py-4 text-lg font-semibold group flex-1 sm:flex-none"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Live Demo
                            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </div>
                    </div>
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
              <span className="text-foreground">Ready to Start Your</span>{" "}
              <span className="bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
                Project?
              </span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6">
              Let's discuss how we can create similar transformative results for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="bg-brand-teal hover:shadow-cyan transition-all-spring hover-lift px-10 sm:px-12 lg:px-16 py-5 sm:py-6 lg:py-7 text-xl sm:text-2xl lg:text-3xl font-semibold group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowUpRight className="ml-2 sm:ml-3 lg:ml-4 w-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/all-projects")}
                className="border-brand-teal/40 text-foreground hover:bg-brand-teal/10 hover:border-brand-teal/60 transition-all-spring hover-lift px-10 sm:px-12 lg:px-16 py-5 sm:py-6 lg:py-7 text-xl sm:text-2xl lg:text-3xl font-semibold w-full sm:w-auto"
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
