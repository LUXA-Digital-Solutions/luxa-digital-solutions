import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-brand-teal">Our Portfolio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="relative bg-card rounded-3xl shadow-lg overflow-hidden flex flex-col group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                    style={{ transitionTimingFunction: 'cubic-bezier(.4,2,.3,1)' }}
                  />
                  {/* Overlay with project name and button */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent px-6 py-6 flex items-end justify-between opacity-90 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground drop-shadow-lg mb-0">
                      {project.title}
                    </h3>
                    <Button
                      size="sm"
                      className="bg-brand-teal hover:bg-brand-teal/90 text-brand-teal-foreground rounded-full font-medium text-sm shadow-lg transition-transform duration-300 hover:scale-110"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Portfolio;
