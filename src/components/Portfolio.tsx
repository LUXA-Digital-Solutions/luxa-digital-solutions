import ScrollStack, {
  ScrollStackItem,
} from "@/components/animations/ScrollStack";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="relative bg-background overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8">
        <div className="text-left max-w-4xl">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 tracking-wider uppercase">
            01 / 03
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Our Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            We've helped businesses across industries achieve their goals. Here
            are some of our selected works.
          </p>
        </div>
      </div>

      {/* ScrollStack Portfolio Cards */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={150}
        itemScale={0.05}
        itemStackDistance={40}
        stackPosition="25%"
        scaleEndPosition="15%"
        baseScale={0.88}
        className="min-h-screen"
      >
        {projects.map((project, idx) => (
          <ScrollStackItem
            key={project.id}
            itemClassName="bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-950 dark:via-black dark:to-gray-900 border border-gray-800/50"
          >
            <div className="relative w-full h-full flex items-center justify-between gap-8 group">
              {/* Left Content */}
              <div className="flex-1 space-y-6 z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent max-w-[100px]"></div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Year, Role, Services */}
                <div className="grid grid-cols-3 gap-6 max-w-xl">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Year</p>
                    <p className="text-white font-semibold">2025</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Role</p>
                    <p className="text-white font-semibold">Lead Designer</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Services</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="text-white text-xs font-medium"
                        >
                          {tech}
                          {i < 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Project Link */}
                <Button
                  variant="ghost"
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="text-white hover:text-brand-teal transition-colors group/btn p-0 h-auto font-medium text-base"
                >
                  View Project
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative w-[45%] h-full flex items-center justify-end">
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                  {/* Laptop Frame Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Screen Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* Bottom padding to allow last card to scroll properly */}
      <div className="h-[50vh]"></div>
    </section>
  );
};

export default Portfolio;
