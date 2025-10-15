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
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      // topRightCutout: "cutout-2.svg",
    },
    {
      title: "CUSTOM DASHBOARDS",
      description:
        "Interactive business intelligence dashboards that transform your data into actionable insights for smarter decision-making.",
      bgColorClass: "bg-gradient-to-br from-indigo-400 to-indigo-500",
      arrowColor: "text-indigo-600",
      // topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Custom software solutions that streamline your daily operations and enhance business efficiency.",
      bgColorClass: "bg-gradient-to-br from-rose-500 to-red-600",
      arrowColor: "text-rose-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "MOBILE APPS",
      description:
        "Custom mobile applications for iOS and Android that engage users and extend your brand's reach.",
      bgColorClass: "bg-gradient-to-br from-emerald-400 to-green-500",
      arrowColor: "text-emerald-600",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Boost your website's visibility and attract organic traffic with SEO tailored to your business goals.",
      bgColorClass: "bg-gradient-to-br from-orange-400 to-orange-500",
      arrowColor: "text-orange-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      // topRightCutout: "cutout-2.svg",
    },
    {
      title: "CONTENT MARKETING",
      description:
        "Enhance your brand's online presence and drive engagement with a strategy customized to your needs.",
      bgColorClass: "bg-gradient-to-br from-purple-400 to-purple-500",
      arrowColor: "text-purple-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
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
              className={`group relative h-full min-h-[420px] md:min-h-[460px] xl:min-h-[500px] p-8 sm:p-10 lg:p-12 pt-28 sm:pt-32 ${service.bgColorClass} border-0 rounded-[50px] overflow-hidden`}
            >
              {/* SVG Cutouts */}
              <div className="pointer-events-none absolute inset-0 z-[1]">
                {/* Top center scalloped cutout */}
                <img
                  src={`/${service.topCutout}`}
                  alt=""
                  className="absolute  top-0 left-1/2 rotate-180 -translate-x-1/2 w-auto h-[35px] sm:h-[38px] lg:h-[42px] opacity-100"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                />
                {/* Top-right angular cutout (optional decorative element) */}
                <img
                  src={`/${service.topRightCutout}`}
                  alt=""
                  className="absolute top-0 right-0 w-auto h-[40px] sm:h-[44px] lg:h-[48px] opacity-100"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                />
                {/* Bottom-left angular cutout */}
                <img
                  src={`/${service.bottomCutout}`}
                  alt=""
                  className="absolute bottom-0 left-0 w-auto h-[40px] sm:h-[44px] lg:h-[48px] opacity-100"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                />
              </div>

              {/* Content */}
              <div className="relative z-[3] w-full px-2 py-auto my-auto h-full flex flex-col  justify-center space-y-6">
                <h3 className="text-white text-[2rem] sm:text-[2.5rem] lg:text-3xl font-black uppercase leading-[1.05] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow button */}
              <div className="absolute z-[4] bottom-8 right-8 sm:bottom-10 sm:right-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45">
                <ArrowUpRight className={`w-7 h-7 ${service.arrowColor}`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
