import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-fade-in text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <Star className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO: full bleed with huge title */}
      <header className="relative h-[60vh] w-full overflow-hidden lg:h-[70vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover brightness-75 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

        <div className="container relative z-10 mx-auto flex h-full items-end pt-16 sm:pt-20 lg:items-center">
          <div className="w-full px-6 py-12 lg:px-8 lg:py-24">
            <div className="max-w-5xl">
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                >
                  {project.category}
                </Badge>
              </div>

              <h1 className="text-6xl font-extrabold leading-tight text-white drop-shadow-lg md:text-8xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* back to portfolio button - top left on hero */}
        <div className="absolute left-6 top-6 z-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/portfolio")}
            className="px-3 py-2 text-white/90 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      {/* MAIN CONTENT: left sidebar (overview/deliverables) and right content */}
      <main className="container mx-auto px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left sidebar: narrow, sticky */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <div className="mb-10">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Overview
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>

                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Deliverables
                </h4>

                <ul className="space-y-4">
                  {project.features.slice(0, 8).map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-muted-foreground">{feat}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Right content */}
          <section className="space-y-16 lg:col-span-9">
            {/* Lead paragraph and large image */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {project.description}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Gallery row (two-column large image + two smaller) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-3xl shadow-lg md:col-span-2">
                <img
                  src={project.gallery[0]}
                  alt="gallery-1"
                  className="h-96 w-full object-cover"
                />
              </div>
              <div className="grid gap-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.gallery[1]}
                    alt="gallery-2"
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.gallery[2]}
                    alt="gallery-3"
                    className="h-44 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Case study boxes: Overview / Challenge / Solution */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Overview</h3>
                    <p className="text-muted-foreground">{project.overview}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">The Challenge</h3>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Solution</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results grid */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Results</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {project.results.map((r, i) => (
                  <Card key={i} className="p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {r.value}
                    </div>
                    <div className="mb-2 font-semibold">{r.metric}</div>
                    <div className="text-sm text-muted-foreground">
                      {r.description}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="mt-6">
                <Card className="bg-card/30 p-12">
                  <div className="flex flex-col items-center gap-8 lg:flex-row">
                    <img
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="h-28 w-28 rounded-full object-cover"
                    />
                    <div>
                      <div className="mb-2 text-xl font-semibold">
                        {project.testimonial.author}
                      </div>
                      <div className="mb-6 text-muted-foreground">
                        {project.testimonial.position} —{" "}
                        {project.testimonial.company}
                      </div>
                      <blockquote className="text-lg">
                        "{project.testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-transparent p-12 text-center">
              <h3 className="mb-4 text-3xl font-bold">
                Interested in a similar project?
              </h3>
              <p className="mb-8 text-muted-foreground">
                Let's discuss how we can create transformative results for your
                brand.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  onClick={() => navigate("/pricing")}
                  className="bg-gradient-primary px-8 py-4"
                >
                  Start Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/all-projects")}
                  className="px-8 py-4"
                >
                  View More Projects
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
