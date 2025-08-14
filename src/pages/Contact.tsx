import Navigation from "@/components/Navigation";
import Footer from "@/components/Contact";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary mb-8 group transition-all-spring hover-lift"
          >
            <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Button>
        </div>

        {/* Contact Content */}
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
