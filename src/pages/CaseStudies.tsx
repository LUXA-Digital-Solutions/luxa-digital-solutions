import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Calendar,
  ExternalLink,
  Eye,
  Star,
  Target,
  TrendingUp,
  Users,
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
        <section className="bg-gradient-dark relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0">
            <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="transition-all-spring hover-lift group mb-6 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                Case Studies
              </Badge>

              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Success{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-4 py-2 font-bold text-white">
                    Stories
                  </span>
                  <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
                </span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Discover how we've helped businesses achieve remarkable results
                through innovative digital solutions.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="flex items-center text-muted-foreground">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  <span>10+ projects delivered</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="mr-2 h-5 w-5" />
                  <span>98% client satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-b border-border/30 bg-background px-6 py-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="transition-all-spring hover-scale cursor-pointer border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:border-primary/50 hover:bg-primary/20"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-background px-6 py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="transition-all-spring hover-lift group relative overflow-hidden border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="transition-all-spring h-full w-full object-cover group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="transition-all-spring absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100"></div>

                    {/* Category Badge */}
                    <div className="transition-all-spring absolute left-4 top-4 -translate-y-2 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Badge
                        variant="secondary"
                        className="border-primary/30 bg-primary/20 text-xs font-medium text-primary"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Action Button */}
                    <div className="transition-all-spring absolute bottom-4 right-4 translate-y-2 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        className="transition-all-spring h-10 w-10 rounded-full bg-primary/90 p-0 font-semibold text-black hover:scale-110 hover:bg-primary"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="mr-4 flex-1 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                    </div>

                    {/* Project Description */}
                    <p className="mb-6 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{project.teamSize} people</span>
                      </div>
                    </div>

                    {/* Results Preview */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold text-foreground">
                          Key Results:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.results
                            .slice(0, 2)
                            .map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="rounded-lg bg-primary/5 p-3 text-center"
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
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="transition-all-spring hover-scale border-primary/30 bg-primary/10 text-xs font-medium text-primary hover:border-primary/50 hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-border/50 text-xs text-muted-foreground"
                        >
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift group relative w-full overflow-hidden font-semibold"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        View Case Study
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-b from-background to-card/20 px-6 py-24">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-4 py-2 font-bold text-white">
                    Impact
                  </span>
                  <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                Numbers that speak for themselves - the results we've delivered
                for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary">10+</div>
                <div className="mb-2 font-semibold">Projects Delivered</div>
                <div className="text-sm text-muted-foreground">
                  Successful launches across industries
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary">98%</div>
                <div className="mb-2 font-semibold">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">
                  Exceeding expectations consistently
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary">25+</div>
                <div className="mb-2 font-semibold">Awards Won</div>
                <div className="text-sm text-muted-foreground">
                  Industry recognition & excellence
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-primary">300%</div>
                <div className="mb-2 font-semibold">Average ROI</div>
                <div className="text-sm text-muted-foreground">
                  Client growth & success
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-dark px-6 py-24">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Create Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-4 py-2 font-bold text-white">
                  Success Story?
                </span>
                <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Let's discuss how we can help you achieve similar results for your
              business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/pricing")}
                className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift group relative overflow-hidden px-10 py-5 text-xl font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
                className="transition-all-spring hover-lift w-full border-primary/40 px-8 py-4 text-lg font-semibold text-foreground hover:border-primary/60 hover:bg-primary/10 sm:w-auto sm:px-10 sm:py-5 sm:text-xl lg:px-12 lg:py-6 lg:text-2xl"
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
