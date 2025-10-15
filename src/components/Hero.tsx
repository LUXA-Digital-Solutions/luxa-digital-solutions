import LiquidEther from "@/components/animations/LiquidEther";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <div ref={heroRef} className="relative bg-brand-dark dark:bg-black">
      {/* First Section - Hero with Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark dark:bg-black">
        {/* LiquidEther Background Animation */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={["#5227FF", "#00D9FF", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            className="w-full h-full"
          />
        </div>

        {/* Background with parallax */}
        <div
          className="absolute inset-0 bg-brand-dark/30 dark:bg-black/30 z-[1]"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 min-h-screen py-16 lg:py-20">
            {/* Left Content - Aligned to bottom */}
            <div className="flex items-end pb-24 lg:pb-32">
              <div className="space-y-6 lg:space-y-8 animate-slide-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-white dark:text-white">Crafting </span>
                  <span className="">
                    <span className="text-brand-gold dark:text-yellow-400 relative ">
                      Award{" "}
                      <span className="sm:-right-10 lg:-right-12 text-2xl sm:text-3xl lg:text-5xl">
                        🏆
                      </span>
                    </span>
                    <span className="text-brand-gold dark:text-yellow-400">
                      Winning {""}
                    </span>
                  </span>
                  <span className="text-white dark:text-white mt-2">
                    Experiences for the World's Most Influential Brands.
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Content - Aligned to top */}
            <div className="flex items-start pt-8 lg:pt-16">
              <div
                className="relative animate-slide-up-delayed w-full"
                style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
              >
                {/* Descriptive Text - Top Right */}
                <div className="mb-8 lg:mb-12 max-w-sm ml-auto">
                  <p className="text-gray-400 dark:text-gray-300 text-sm lg:text-base leading-relaxed text-right">
                    For nearly two decades, we've helped forward-thinking brands
                    bring their most original ideas to life. Leaving a mark the
                    world won't forget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Right */}
        <div className="absolute bottom-32 lg:bottom-40 right-8 lg:right-16 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500 animate-fade-in z-20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-10 lg:w-7 lg:h-12 border-2 border-gray-500 dark:border-gray-600 rounded-full flex items-start justify-center pt-2">
              <div className="w-1 h-2 lg:w-1.5 lg:h-3 bg-gray-500 dark:bg-gray-600 rounded-full animate-bounce"></div>
            </div>
          </div>
          <div className="text-xs lg:text-sm text-center">
            <p className="font-medium text-gray-400 dark:text-gray-400">
              Scroll
            </p>
            <p className="text-gray-500 dark:text-gray-500">to explore</p>
          </div>
        </div>

        {/* Bottom Trusted Brands */}
        <div className="absolute bottom-0 left-0 right-0 py-4 lg:py-6 border-t border-gray-800 dark:border-gray-800 bg-brand-dark/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <p className="text-gray-500 dark:text-gray-600 text-xs lg:text-sm mb-3">
              Trusted by
              <br className="sm:hidden" /> Global Brands
            </p>
            <div className="flex items-center gap-8 lg:gap-16 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { name: "kanba", logo: "🏢" },
                { name: "nirastate", logo: "🏛️" },
                { name: "Radiyal", logo: "✦" },
                { name: "treva", logo: "🌲" },
                { name: "velocity", logo: "⚡" },
                { name: "liva", logo: "◆" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center gap-2 text-gray-500 dark:text-gray-600 font-semibold text-sm lg:text-base whitespace-nowrap opacity-50 hover:opacity-100 hover:text-gray-400 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-base lg:text-lg">{brand.logo}</span>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Stats with Parallax */}
      <section
        className="relative min-h-screen flex items-center bg-brand-dark dark:bg-black"
        style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
      >
        {/* Subtle separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 dark:via-gray-700 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
            {/* Left - Testimonial */}
            <div className="space-y-6 lg:space-y-8 animate-slide-up order-2 lg:order-1">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 lg:w-6 lg:h-6 fill-brand-gold dark:fill-yellow-400 text-brand-gold dark:text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 dark:text-gray-300 max-w-lg">
                LUXA replaced the typical agency runaround with clarity, speed
                and top-tier creatives. No fluff, just world-class work that
                delivered real impact.
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-brand-teal to-cyan-600 dark:from-brand-teal dark:to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  CJ
                </div>
                <div>
                  <p className="font-semibold text-white dark:text-white text-base lg:text-lg">
                    Corie Johnson
                  </p>
                  <p className="text-sm lg:text-base text-gray-400 dark:text-gray-400">
                    CEO, Uniq Solutions
                  </p>
                </div>
              </div>

              {/* Years Badge */}
              <div className="inline-flex items-center border-2 border-brand-gold dark:border-yellow-400 rounded-full px-6 lg:px-8 py-4 lg:py-5 mt-6 lg:mt-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-brand-gold dark:text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <div className="text-left pl-2 border-l border-brand-gold/30 dark:border-yellow-400/30">
                    <div className="text-3xl lg:text-4xl font-bold text-brand-gold dark:text-yellow-400 leading-none">
                      5+
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-400 leading-tight">
                      years of experience
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 dark:text-gray-400 text-sm lg:text-base max-w-md pt-2">
                Yup! That's 1,825+ days of timeless ideas, crafted one day at a
                time.
              </p>
            </div>

            {/* Right - Big Stats */}
            <div className="space-y-6 lg:space-y-8 animate-slide-up-delayed order-1 lg:order-2">
              <div className="relative">
                <h2 className="text-sm lg:text-base text-gray-400 dark:text-gray-400 mb-4 lg:mb-6 font-medium">
                  In a market of
                </h2>

                {/* Large Number with Parallax */}
                <div
                  className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] xl:text-[220px] font-black leading-none tracking-tighter"
                  style={{
                    transform: `translateX(${parallaxOffset * 0.05}px)`,
                  }}
                >
                  <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                    9,994
                  </span>
                </div>

                {/* Decorative blur effect */}
                <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-brand-teal/20 dark:bg-white/10 rounded-full blur-3xl -z-10"></div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white dark:text-white max-w-xl">
                look-alikes, only bold ideas cut through the clutter.
              </h3>

              <div className="h-px bg-gradient-to-r from-gray-700 dark:from-gray-700 via-gray-600 dark:via-gray-600 to-transparent max-w-lg"></div>

              <p className="text-gray-300 dark:text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
                We help businesses turn bold ideas into beautifully crafted
                digital experiences. From brand strategy to final execution, we
                work closely with our clients, designing with purpose, moving
                with precision, and delivering meaningful impact at every stage.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-8">
                <Button
                  size="lg"
                  onClick={() => navigate("/get-quote")}
                  className="bg-brand-teal hover:bg-brand-teal/90 dark:bg-brand-teal dark:hover:bg-brand-teal/90 text-white px-8 py-6 text-base lg:text-lg font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-brand-teal/20"
                >
                  Start Your Project
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/all-projects")}
                  className="border-2 border-white/20 dark:border-white/20 text-gray-500 dark:text-white hover:bg-white/10 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/30 px-8 py-6 text-base lg:text-lg font-semibold rounded-full transition-all hover:scale-105"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Up Arrow - Bottom Right */}
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-brand-teal hover:bg-brand-teal/90 dark:bg-brand-teal dark:hover:bg-brand-teal/90 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-brand-teal/20 transition-all hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6 lg:w-7 lg:h-7 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
