import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-brand-teal/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-brand-teal/15 rounded-full blur-md"></div>
      </div>

      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-brand-teal to-brand-teal/70 bg-clip-text text-transparent">
            404
          </h1>
          <div className="w-24 h-1 bg-brand-teal mx-auto mb-6 rounded-full"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-brand-teal/40 text-foreground hover:bg-brand-teal/10 hover:border-brand-teal/60 transition-all-spring hover-lift px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-brand-teal hover:bg-brand-teal/90 text-brand-teal-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group transition-all-spring hover-lift"
          >
            <Home className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
