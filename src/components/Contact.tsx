import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input 
                  placeholder="Your company name"
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Budget</label>
                <select className="w-full p-3 rounded-md bg-background/50 border border-border focus:border-primary/50 transition-colors">
                  <option>Select budget range</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and requirements..."
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 border-border hover:border-primary/30 hover-lift backdrop-blur-sm transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">hello@luxadigital.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:border-primary/30 hover-lift backdrop-blur-sm transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:border-primary/30 hover-lift backdrop-blur-sm transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground">123 Digital Avenue<br />Tech City, TC 12345</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-accent border-primary/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Free Consultation</h4>
                  <p className="text-muted-foreground">Book a 30-minute strategy call</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-primary/30 text-foreground hover:bg-primary/10">
                Schedule Meeting
              </Button>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="p-12 bg-gradient-dark border-primary/20">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Scale Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 150+ successful businesses that have transformed their digital presence with LUXA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-cyan transition-all duration-300 hover-lift">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 hover-lift">
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;