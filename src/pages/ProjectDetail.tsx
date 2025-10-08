import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  DollarSign,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  ArrowUpRight,
  Clock,
  Zap,
  Target,
  Lightbulb,
  Globe,
  Shield,
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Rocket,
  Eye,
  Play,
  Download,
  Share2,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Star className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getTechnologyIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react") || techLower.includes("next")) return Code;
    if (techLower.includes("design") || techLower.includes("figma"))
      return Palette;
    if (
      techLower.includes("mobile") ||
      techLower.includes("ios") ||
      techLower.includes("android")
    )
      return Smartphone;
    if (
      techLower.includes("database") ||
      techLower.includes("sql") ||
      techLower.includes("mongo")
    )
      return Database;
    if (techLower.includes("aws") || techLower.includes("cloud")) return Cloud;
    if (techLower.includes("security") || techLower.includes("ssl"))
      return Lock;
    if (techLower.includes("analytics") || techLower.includes("chart"))
      return BarChart3;
    return Globe;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Back Navigation */}
              <div className="mb-12 animate-slide-up">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/portfolio")}
                  className="text-muted-foreground hover:text-primary mb-8 group transition-all-spring hover-lift px-6 py-3"
                >
                  <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Enhanced Content */}
                <div className="animate-slide-up-delayed space-y-8">
                  {/* Project Badge */}
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold"
                  >
                    {project.category}
                  </Badge>

                  {/* Project Title */}
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                    {project.title}
                  </h1>

                  {/* Project Description */}
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Enhanced Project Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Duration
                      </div>
                      <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.duration}
                      </div>
                    </div>

                    <div className="text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Team Size
                      </div>
                      <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.teamSize} people
                      </div>
                    </div>

                    <div className="text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                        <DollarSign className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Budget
                      </div>
                      <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.budget}
                      </div>
                    </div>

                    <div className="text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Client
                      </div>
                      <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300 ">
                        {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => {
                        const Icon = getTechnologyIcon(tech);
                        return (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-primary/30 text-primary bg-primary/10 px-4 py-2 text-sm font-medium hover:bg-primary/20 hover:border-primary/60 transition-all-spring hover-scale flex items-center gap-2"
                          >
                            <Icon className="w-4 h-4" />
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  {/* Premium CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={() => window.open(project.link, "_blank")}
                      className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-8 py-4 text-lg font-semibold group relative overflow-hidden flex-1 sm:flex-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        <Play className="mr-2 w-5 h-5" />
                        View Live Project
                        <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => navigate("/get-quote")}
                      className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-8 py-4 text-lg font-semibold group flex-1 sm:flex-none"
                    >
                      <span className="flex items-center justify-center">
                        <Rocket className="mr-2 w-5 h-5" />
                        Start Similar Project
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Enhanced Project Image */}
                <div className="relative animate-slide-up-delayed">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <div className="aspect-[4/3] relative group-hover:scale-105 transition-transform duration-700 ease-out">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all-spring"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Hover Overlay Content */}
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all-spring transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-primary/30">
                          <p className="text-white font-medium text-center">
                            Click to view full project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Results Section */}
        <section className="py-32 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-bold px-4 py-2">
                    Project
                  </span>
                  <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
                </span>{" "}
                <span className="text-foreground">Results</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Measurable outcomes that demonstrate the success of our solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {project.results.map((result, index) => (
                <Card
                  key={index}
                  className="p-8 text-center bg-card/30 border-border/30 hover:border-primary/40 group hover-lift backdrop-blur-sm transition-all-spring relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      {result.value}
                    </div>
                    <div className="font-semibold mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                      {result.metric}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {result.description}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Case Study Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center animate-slide-up">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-bold px-4 py-2">
                    Case
                  </span>
                  <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
                </span>{" "}
                <span className="text-foreground">Study</span>
              </h2>

              <div className="space-y-16">
                {/* Enhanced Overview */}
                <Card className="p-12 bg-card/30 border-border/30 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-all-spring">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 flex items-center group-hover:text-primary transition-colors duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mr-6 group-hover:animate-glow transition-all-spring">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      Project Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xl group-hover:text-foreground/90 transition-colors duration-300">
                      {project.overview}
                    </p>
                  </div>
                </Card>

                {/* Enhanced Challenge */}
                <Card className="p-12 bg-card/30 border-border/30 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-all-spring">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 flex items-center group-hover:text-primary transition-colors duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mr-6 group-hover:animate-glow transition-all-spring">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xl group-hover:text-foreground/90 transition-colors duration-300">
                      {project.challenge}
                    </p>
                  </div>
                </Card>

                {/* Enhanced Solution */}
                <Card className="p-12 bg-card/30 border-border/30 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-all-spring">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 flex items-center group-hover:text-primary transition-colors duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mr-6 group-hover:animate-glow transition-all-spring">
                        <Lightbulb className="w-8 h-8 text-primary" />
                      </div>
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xl mb-10 group-hover:text-foreground/90 transition-colors duration-300">
                      {project.solution}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start group/feature"
                        >
                          <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300 leading-relaxed text-lg">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Gallery Section */}
        <section className="py-32 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center animate-slide-up">
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-bold px-4 py-2">
                  Project
                </span>
                <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
              </span>{" "}
              <span className="text-foreground">Gallery</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl shadow-elegant hover-lift transition-all-spring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-all-spring group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all-spring"></div>

                    {/* Hover Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all-spring transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                        <p className="text-white text-sm font-medium">
                          Project Screenshot {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonial Section */}
        {project.testimonial && (
          <section className="py-32 px-6 bg-gradient-accent relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
              <Card className="max-w-6xl mx-auto p-20 bg-card/30 border-primary/20 backdrop-blur-sm text-center relative overflow-hidden group hover:border-primary/40 transition-all-spring">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-10 h-10 text-primary fill-current mx-2 group-hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>

                  <blockquote className="text-4xl font-medium mb-12 leading-relaxed group-hover:text-primary transition-colors duration-300">
                    "{project.testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-24 h-24 rounded-full mr-8 border-4 border-primary/20 group-hover:border-primary/40 transition-all-spring"
                      />
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.testimonial.author}
                      </div>
                      <div className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 text-lg">
                        {project.testimonial.position} at{" "}
                        {project.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Premium CTA Section */}
        <section className="py-32 px-6 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-10 group-hover:animate-glow transition-all-spring">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 group-hover:text-primary transition-colors duration-300">
              Ready to Start{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-bold px-4 py-2">Your Project?</span>
                <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
              Let's discuss how we can create similar transformative results for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift px-12 py-6 text-2xl font-semibold group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Project</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/all-projects")}
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all-spring hover-lift px-12 py-6 text-2xl font-semibold"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
