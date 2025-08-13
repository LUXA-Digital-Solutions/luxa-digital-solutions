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
  Award
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-primary">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-dark">
          <div className="container mx-auto">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-muted-foreground hover:text-primary mb-6"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                  {project.category}
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Team Size</div>
                    <div className="font-semibold">{project.teamSize} people</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Budget</div>
                    <div className="font-semibold">{project.budget}</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Client</div>
                    <div className="font-semibold text-sm">{project.client}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="border-primary/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button className="bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift">
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-elegant hover-lift transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Project{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable outcomes that demonstrate the success of our solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {project.results.map((result, index) => (
                <Card 
                  key={index}
                  className="p-8 text-center bg-card/50 border-border hover:border-primary/30 group hover-lift backdrop-blur-sm transition-all duration-300"
                >
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4 group-hover:animate-glow" />
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {result.value}
                  </div>
                  <div className="font-semibold mb-2">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center">
                Case{' '}
                <span className="text-primary">
                  Study
                </span>
              </h2>

              <div className="space-y-12">
                {/* Overview */}
                <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Star className="w-6 h-6 text-primary mr-3" />
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </Card>

                {/* Challenge */}
                <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-primary mr-3" />
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </Card>

                {/* Solution */}
                <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.solution}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Project{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {project.testimonial && (
          <section className="py-24 px-6 bg-gradient-accent">
            <div className="container mx-auto">
              <Card className="max-w-4xl mx-auto p-12 bg-card/50 border-primary/20 backdrop-blur-sm text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                  "{project.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-muted-foreground">
                      {project.testimonial.position} at {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-dark">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 hover-lift">
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