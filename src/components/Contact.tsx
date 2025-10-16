import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
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
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute right-20 top-20 h-32 w-32 rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="bg-brand-teal/3 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="animate-slide-up mb-16 text-center sm:mb-20 lg:mb-24">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal sm:mb-6"
          >
            Get In Touch
          </Badge>
          <h2 className="mb-6 text-3xl font-bold leading-tight sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-foreground">Ready to Start</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-4 py-2 font-bold text-white">
                Your Project?
              </span>
              <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
            </span>
          </h2>
          <p className="mx-auto max-w-4xl px-4 text-lg leading-relaxed text-muted-foreground sm:px-6 sm:text-xl md:text-2xl lg:text-3xl">
            Let's discuss how we can help transform your business with
            innovative digital solutions.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 sm:mb-20 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            <Card className="transition-all-spring group relative overflow-hidden border-border/30 bg-card/30 p-6 backdrop-blur-sm hover:border-brand-teal/40 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold transition-colors duration-300 group-hover:text-brand-teal sm:mb-8 sm:text-3xl lg:text-4xl">
                  Send us a Message
                </h3>

                <form className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-foreground sm:text-base"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="transition-all-spring h-12 border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal sm:h-14"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-foreground sm:text-base"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="transition-all-spring h-12 border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal sm:h-14"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground sm:text-base"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="transition-all-spring h-12 border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal sm:h-14"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground sm:text-base"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="transition-all-spring h-12 border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal sm:h-14"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-sm font-medium text-foreground sm:text-base"
                    >
                      Service Interest
                    </Label>
                    <Select>
                      <SelectTrigger className="transition-all-spring h-12 border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal sm:h-14">
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
                      className="text-sm font-medium text-foreground sm:text-base"
                    >
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="transition-all-spring resize-none border-border/50 bg-background/50 backdrop-blur-sm hover:border-brand-teal/40 focus:border-brand-teal"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="hover:shadow-cyan transition-all-spring hover-lift group relative w-full overflow-hidden bg-brand-teal py-4 text-lg font-semibold sm:py-5 sm:text-xl lg:py-6 lg:text-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:ml-3 sm:h-6 sm:w-6 lg:ml-4 lg:h-7 lg:w-7" />
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={method.title}
                    onClick={method.onClick}
                    className="hover-lift transition-all-spring group relative cursor-pointer overflow-hidden border-border/30 bg-card/30 p-4 backdrop-blur-sm hover:border-brand-teal/40 sm:p-6"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-teal/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <div className="relative z-10">
                      <div className="bg-gradient-accent group-hover:animate-glow transition-all-spring mb-3 flex h-10 w-10 items-center justify-center rounded-xl group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                        <method.icon className="h-5 w-5 text-brand-teal sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                      </div>

                      <h4 className="mb-2 text-sm font-semibold transition-colors duration-300 group-hover:text-brand-teal sm:text-base lg:text-lg">
                        {method.title}
                      </h4>

                      <p className="mb-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 sm:text-base">
                        {method.value}
                      </p>

                      <p className="text-xs text-muted-foreground/70 transition-colors duration-300 group-hover:text-foreground/70 sm:text-sm">
                        {method.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Enhanced Free Consultation Card */}
              <Card className="bg-gradient-accent transition-all-spring group relative overflow-hidden border-brand-teal/20 p-6 backdrop-blur-sm hover:border-brand-teal/40 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-transparent to-brand-teal/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 text-center">
                  <div className="group-hover:animate-glow transition-all-spring mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-teal/20 group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                    <MessageSquare className="h-8 w-8 text-brand-teal sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-brand-teal sm:mb-4 sm:text-2xl lg:text-3xl">
                    Free Consultation
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 sm:mb-6 sm:text-base lg:text-lg">
                    Schedule a free 30-minute consultation to discuss your
                    project requirements and get expert advice.
                  </p>

                  <Button
                    variant="outline"
                    onClick={() => navigate("/schedule-consultation")}
                    className="transition-all-spring hover-lift group border-brand-teal/40 px-6 py-3 text-sm font-semibold text-foreground hover:border-brand-teal/60 hover:bg-brand-teal/10 sm:px-8 sm:py-4 sm:text-base lg:text-lg"
                  >
                    <span className="flex items-center">
                      Schedule Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="animate-slide-up text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-foreground">Let's Build Something</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-4 py-2 font-bold text-white">
                  Amazing
                </span>
                <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
              </span>
            </h3>
            <p className="mb-8 px-4 text-lg leading-relaxed text-muted-foreground sm:mb-10 sm:px-6 sm:text-xl md:text-2xl">
              Ready to transform your business? Our team is here to help you
              achieve your digital goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                onClick={() => navigate("/pricing")}
                className="hover:shadow-cyan transition-all-spring hover-lift group relative w-full overflow-hidden rounded-xl bg-brand-teal px-8 py-4 text-lg font-semibold sm:w-auto sm:px-10 sm:py-5 sm:text-xl lg:px-12 lg:py-6 lg:text-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:ml-3 sm:w-6 lg:ml-4 lg:h-7 lg:w-7" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/all-projects")}
                className="transition-all-spring hover-lift w-full rounded-xl border-brand-teal/40 px-8 py-4 text-lg font-semibold text-foreground hover:border-brand-teal/60 hover:bg-brand-teal/10 sm:w-auto sm:px-10 sm:py-5 sm:text-xl lg:px-12 lg:py-6 lg:text-2xl"
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
