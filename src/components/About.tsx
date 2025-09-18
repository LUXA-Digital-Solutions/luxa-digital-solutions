import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";

const About = () => {
  const achievements = [
    "500+ successful projects delivered",
    "98% client satisfaction rate",
    "24/7 dedicated support team",
    "ISO 27001 certified security",
    "Award-winning design team",
    "Global client base across 25+ countries",
  ];

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Figma",
    "Adobe Creative Suite",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
  ];

  const stats = [
    {
      icon: Users,
      value: "150+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
    },
    {
      icon: Award,
      value: "25+",
      label: "Awards Won",
      description: "Industry recognition & excellence",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Growth Rate",
      description: "Average client ROI increase",
    },
    {
      icon: Target,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service delivery",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <Badge
            variant="secondary"
            className="bg-brand-teal/10 text-brand-teal border-brand-teal/20 mb-4 sm:mb-6 px-4 py-2 text-sm font-semibold"
          >
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">We're More Than Just</span>{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
              Developers
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            We're a team of passionate innovators, designers, and
            problem-solvers dedicated to transforming businesses through
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Enhanced Left Column */}
          <div className="animate-slide-up">
            <div className="space-y-6 sm:space-y-8">
              <div className="group">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl group-hover:text-foreground/90 transition-colors duration-300">
                  At LUXA Digital Solutions, we believe that exceptional digital
                  experiences are the foundation of business success. Our
                  mission is to create innovative, scalable, and user-centric
                  solutions that not only meet our clients' immediate needs but
                  also position them for long-term growth and success.
                </p>
              </div>

              <div className="group">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl group-hover:text-foreground/90 transition-colors duration-300">
                  With over a decade of experience in the digital landscape,
                  we've helped hundreds of businesses across various industries
                  transform their digital presence and achieve remarkable
                  results. Our approach combines cutting-edge technology with
                  proven business strategies.
                </p>
              </div>
            </div>

            {/* Enhanced Achievements List */}
            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-teal mr-3 sm:mr-4" />
                Our Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center group">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm sm:text-base lg:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Technologies Section */}
            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-teal mr-3 sm:mr-4" />
                Technologies We Master
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-brand-teal/30 text-brand-teal bg-brand-teal/10 text-xs sm:text-sm font-medium hover:bg-brand-teal/20 hover:border-brand-teal/50 transition-all-spring hover-scale"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Stats Grid */}
          <div className="animate-slide-up-delayed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="p-6 sm:p-8 text-center bg-card/30 border-border/30 hover:border-brand-teal/40 group hover-lift backdrop-blur-sm transition-all-spring relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-brand-teal" />
                    </div>

                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-teal mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>

                    <div className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg group-hover:text-brand-teal transition-colors duration-300">
                      {stat.label}
                    </div>

                    <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Mission Statement Card */}
        <div className="animate-slide-up">
          <Card className="p-8 sm:p-12 lg:p-16 bg-gradient-accent border-brand-teal/20 backdrop-blur-sm relative overflow-hidden group hover:border-brand-teal/40 transition-all-spring">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-brand-teal/20 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-teal" />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 group-hover:text-brand-teal transition-colors duration-300 leading-tight">
                Our Mission
              </h3>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 px-4 sm:px-6">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving digital landscape.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
