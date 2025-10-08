import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Award,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "E-commerce",
    "SaaS",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-primary mb-6 group transition-all-spring hover-lift"
              >
                <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2 text-sm font-semibold"
              >
                Case Studies
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-bold px-4 py-2">
                    Stories
                  </span>
                  <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how we've helped businesses achieve remarkable results
                through innovative digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-muted-foreground">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>10+ projects delivered</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="w-5 h-5 mr-2" />
                  <span>98% client satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 px-6 bg-background border-b border-border/30">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all-spring hover-scale px-4 py-2 text-sm font-medium cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group bg-card/30 border-border/30 hover:border-primary/40 transition-all-spring hover-lift backdrop-blur-sm relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all-spring group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all-spring"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all-spring transform -translate-y-2 group-hover:translate-y-0">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30 text-xs font-medium"
                      >
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

                  {/* Content Area */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight flex-1 mr-4">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                    </div>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{project.teamSize} people</span>
                      </div>
                    </div>

                    {/* Results Preview */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Results:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.results
                            .slice(0, 2)
                            .map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="text-center p-3 bg-primary/5 rounded-lg"
                              >
                                <div className="text-lg font-bold text-primary">
                                  {result.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {result.metric}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary bg-primary/10 text-xs font-medium hover:bg-primary/20 hover:border-primary/50 transition-all-spring hover-scale"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-border/50 text-muted-foreground text-xs"
                        >
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="w-full bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift font-semibold group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        View Case Study
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-bold px-4 py-2">
                    Impact
                  </span>
                  <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Numbers that speak for themselves - the results we've delivered
                for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="font-semibold mb-2">Projects Delivered</div>
                <div className="text-sm text-muted-foreground">
                  Successful launches across industries
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="font-semibold mb-2">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">
                  Exceeding expectations consistently
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="font-semibold mb-2">Awards Won</div>
                <div className="text-sm text-muted-foreground">
                  Industry recognition & excellence
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="font-semibold mb-2">Average ROI</div>
                <div className="text-sm text-muted-foreground">
                  Client growth & success
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-dark">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-bold px-4 py-2">
                  Success Story?
                </span>
                <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-10 py-5 text-xl font-semibold group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Project</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
