import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="how-we-work">
          <HowWeWork />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
