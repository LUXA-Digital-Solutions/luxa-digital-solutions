import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Send,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+2347047494586",
      description: "Call us anytime",
      action: "Call Now",
      onClick: () => window.open("tel:+2347047494586", "_self"),
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@luxasolution.com",
      description: "Send us a message",
      action: "Send Email",
      onClick: () => window.open("mailto:info@luxasolution.com", "_self"),
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Digital Street",
      description: "Visit our office",
      action: "Get Directions",
      onClick: () =>
        window.open("https://maps.google.com/?q=123+Digital+Street", "_blank"),
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri 9AM-6PM",
      description: "Business hours",
      action: "Schedule Meeting",
      onClick: () => navigate("/schedule-consultation"),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-up">
          <Badge
            variant="secondary"
            className="bg-brand-teal/10 text-brand-teal border-brand-teal/20 mb-4 sm:mb-6 px-4 py-2 text-sm font-semibold"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">Ready to Start</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-bold px-4 py-2">Your Project?</span>
              <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            Let's discuss how we can help transform your business with
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-6 sm:p-8 lg:p-10 bg-card/30 border-border/30 backdrop-blur-sm relative overflow-hidden group hover:border-brand-teal/40 transition-all-spring">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 group-hover:text-brand-teal transition-colors duration-300">
                  Send us a Message
                </h3>

                <form className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm sm:text-base font-medium text-foreground"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="h-12 sm:h-14 border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm sm:text-base font-medium text-foreground"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="h-12 sm:h-14 border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm sm:text-base font-medium text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 sm:h-14 border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm sm:text-base font-medium text-foreground"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="h-12 sm:h-14 border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-sm sm:text-base font-medium text-foreground"
                    >
                      Service Interest
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 sm:h-14 border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-apps">
                          Mobile Applications
                        </SelectItem>
                        <SelectItem value="ui-ux-design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="consulting">
                          Digital Consulting
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm sm:text-base font-medium text-foreground"
                    >
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="border-border/50 hover:border-brand-teal/40 focus:border-brand-teal transition-all-spring bg-background/50 backdrop-blur-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-teal hover:shadow-cyan transition-all-spring hover-lift py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 sm:ml-3 lg:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="animate-slide-up-delayed">
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={method.title}
                    onClick={method.onClick}
                    className="p-4 sm:p-6 bg-card/30 border-border/30 hover:border-brand-teal/40 group hover-lift backdrop-blur-sm transition-all-spring relative overflow-hidden cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-3 sm:mb-4 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                        <method.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-brand-teal" />
                      </div>

                      <h4 className="font-semibold mb-2 text-sm sm:text-base lg:text-lg group-hover:text-brand-teal transition-colors duration-300">
                        {method.title}
                      </h4>

                      <p className="text-muted-foreground mb-2 text-sm sm:text-base group-hover:text-foreground/90 transition-colors duration-300">
                        {method.value}
                      </p>

                      <p className="text-xs sm:text-sm text-muted-foreground/70 group-hover:text-foreground/70 transition-colors duration-300">
                        {method.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Enhanced Free Consultation Card */}
              <Card className="p-6 sm:p-8 bg-gradient-accent border-brand-teal/20 backdrop-blur-sm relative overflow-hidden group hover:border-brand-teal/40 transition-all-spring">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-brand-teal/20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-glow transition-all-spring group-hover:scale-110">
                    <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-teal" />
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-brand-teal transition-colors duration-300">
                    Free Consultation
                  </h3>

                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">
                    Schedule a free 30-minute consultation to discuss your
                    project requirements and get expert advice.
                  </p>

                  <Button
                    variant="outline"
                    onClick={() => navigate("/schedule-consultation")}
                    className="border-brand-teal/40 text-foreground hover:bg-brand-teal/10 hover:border-brand-teal/60 transition-all-spring hover-lift px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold group"
                  >
                    <span className="flex items-center">
                      Schedule Now
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-foreground">Let's Build Something</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-bold px-4 py-2">Amazing</span>
                <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
              </span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6">
              Ready to transform your business? Our team is here to help you
              achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="bg-brand-teal hover:shadow-cyan transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold group relative overflow-hidden w-full sm:w-auto rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 w-5 h-5 sm:w-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/all-projects")}
                className="border-brand-teal/40 text-foreground hover:bg-brand-teal/10 hover:border-brand-teal/60 transition-all-spring hover-lift px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-semibold w-full sm:w-auto rounded-xl"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
