import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "WEBSITES & LANDING PAGES",
      description:
        "Conversion-focused websites and landing pages that turn visitors into customers through strategic design and compelling content.",
      bgColorClass: "bg-gradient-to-br from-cyan-400 to-teal-500",
      arrowColor: "text-teal-600",
    },
    {
      title: "CUSTOM DASHBOARDS",
      description:
        "Interactive business intelligence dashboards that transform your data into actionable insights for smarter decision-making.",
      bgColorClass: "bg-gradient-to-br from-indigo-400 to-indigo-500",
      arrowColor: "text-indigo-600",
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Custom software solutions that streamline your daily operations and enhance business efficiency.",
      bgColorClass: "bg-gradient-to-br from-rose-500 to-red-600",
      arrowColor: "text-rose-500",
    },
    {
      title: "MOBILE APPS",
      description:
        "Custom mobile applications for iOS and Android that engage users and extend your brand's reach.",
      bgColorClass: "bg-gradient-to-br from-emerald-400 to-green-500",
      arrowColor: "text-emerald-600",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Boost your website's visibility and attract organic traffic with SEO tailored to your business goals.",
      bgColorClass: "bg-gradient-to-br from-orange-400 to-orange-500",
      arrowColor: "text-orange-500",
    },
    {
      title: "CONTENT MARKETING",
      description:
        "Enhance your brand's online presence and drive engagement with a strategy customized to your needs.",
      bgColorClass: "bg-gradient-to-br from-purple-400 to-purple-500",
      arrowColor: "text-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header aligned like the reference: left title, right paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div>
            <p className="text-red-500 dark:text-brand-coral font-bold text-sm sm:text-base mb-3 uppercase tracking-wider">
              OUR SERVICES!
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">
              <span className="text-gray-900 dark:text-foreground">
                SERVICES DESIGNED TO
              </span>
              <br />
              <span className="text-gray-900 dark:text-foreground">
                DRIVE REAL RESULTS
              </span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <p className="text-lg xl:text-xl text-gray-700 dark:text-muted-foreground leading-relaxed max-w-md ml-auto">
              Experience growth through innovative digital solutions designed to
              reach, inspire, and deliver results.
            </p>
          </div>
        </div>

        {/* Cards: equal height and alignment with decorative cutouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24 items-stretch">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group relative h-full min-h-[400px] md:min-h-[430px] xl:min-h-[460px] p-7 sm:p-9 lg:p-12 pt-12 ${service.bgColorClass} border-0 rounded-[46px] overflow-hidden`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Decorative scallops (top center) */}
              <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-background" />
              <div className="pointer-events-none absolute -top-6 left-1/2 translate-x-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-background" />
              {/* inner shadows for scallops */}
              <div className="pointer-events-none absolute -top-[10px] left-1/2 -translate-x-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,transparent_70%)]" />
              <div className="pointer-events-none absolute -top-[10px] left-1/2 translate-x-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,transparent_70%)]" />

              {/* Bottom-left notch (angled cut) */}
              <div className="pointer-events-none absolute -bottom-7 -left-7 w-20 h-20 sm:w-24 sm:h-24 rotate-45 rounded-md bg-white dark:bg-background" />

              {/* Content */}
              <div className="relative z-10 pr-24 pb-20 flex flex-col gap-6">
                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.05] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-[38ch]">
                  {service.description}
                </p>
              </div>

              {/* Arrow button bottom-right */}
              <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-125 group-hover:rotate-45 hover:scale-125 hover:rotate-45">
                <ArrowUpRight
                  className={`w-7 h-7 ${service.arrowColor} transition-transform duration-300`}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
