import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Show only first 4 projects on homepage
  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    // Initially show all cards (remove animation dependency)
    setVisibleCards(new Set(featuredProjects.map((_, idx) => idx)));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const cardRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Decorative Cutouts */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-10">
        <img
          src="/cutout-top.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-10">
        <img
          src="/cutout-bottom-left.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Header Section */}
      <div className="container relative z-10 mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p className="mb-4 text-sm uppercase tracking-wider text-brand-coral">
            02 / 04
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-foreground">Our Portfolio</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            We've helped businesses across industries achieve their goals. Here
            are some of our selected works.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => cardRef(el, index)}
              data-index={index}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-100 shadow-lg transition-all duration-700 hover:shadow-2xl dark:bg-gray-900"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badges (top-right) */}
                <div className="absolute right-4 top-4 flex gap-2 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-brand-charcoal shadow-sm backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-brand-teal/90 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
                    {project.tech[0]}
                  </span>
                </div>

                {/* Dark overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Circular CTA that appears on hover */}
                <button
                  aria-label={`Open ${project.title}`}
                  className="absolute bottom-6 right-6 flex h-16 w-16 translate-y-8 transform items-center justify-center rounded-full bg-brand-gold text-brand-charcoal opacity-0 shadow-xl transition-all duration-500 hover:bg-brand-teal hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </button>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-brand-muted dark:text-gray-400">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-brand-coral sm:text-3xl">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-teal to-brand-coral px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              View All Projects
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>

            {/* Shine effect */}
            <div className="group-hover:animate-shine absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-20"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
