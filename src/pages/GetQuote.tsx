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
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Clock,
  CheckCircle,
  Star,
  DollarSign,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: "Starter",
      price: "$5,000 - $15,000",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic website or web application",
        "Responsive design",
        "SEO optimization",
        "Basic analytics setup",
        "2 weeks delivery",
        "30 days support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$15,000 - $50,000",
      description: "Ideal for growing businesses",
      features: [
        "Custom web application",
        "Advanced UI/UX design",
        "Database integration",
        "API development",
        "Performance optimization",
        "4-6 weeks delivery",
        "90 days support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$50,000+",
      description: "For large-scale business solutions",
      features: [
        "Complex enterprise application",
        "Multi-platform solution",
        "Advanced security features",
        "Scalable architecture",
        "Custom integrations",
        "8-12 weeks delivery",
        "1 year support",
      ],
      popular: false,
    },
  ];

  const services = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Digital Consulting",
    "Performance Optimization",
    "Security & Compliance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-primary mb-6 group transition-all-spring hover-lift"
              >
                <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2 text-sm font-semibold"
              >
                Get Your Quote
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-bold px-4 py-2">
                    Amazing
                  </span>
                  <div className="absolute inset-0 bg-brand-teal rounded-lg transform -skew-x-12"></div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get a personalized quote for your project. Our team will analyze
                your requirements and provide you with a detailed proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free consultation included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Transparent{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understand our pricing structure to make an informed decision
                about your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`p-8 relative overflow-hidden group hover-lift transition-all-spring ${
                    tier.popular
                      ? "border-primary/40 bg-gradient-accent"
                      : "border-border/30 bg-card/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge className="bg-primary text-black font-semibold px-4 py-2">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {tier.price}
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {tier.description}
                    </p>

                    <ul className="space-y-3 text-left mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-gradient-primary hover:shadow-cyan"
                          : "bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
                      } transition-all-spring hover-lift`}
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Custom Quote
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Fill out the form below and we'll provide you with a detailed
                  quote for your project.
                </p>
              </div>

              <Card className="p-8 lg:p-12 bg-card/30 border-border/30 backdrop-blur-sm">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-foreground"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-foreground"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+2347047494586"
                        className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Primary Service *
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service.toLowerCase().replace(/\s+/g, "-")}
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="text-sm font-medium text-foreground"
                      >
                        Budget Range *
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">
                            $5,000 - $15,000
                          </SelectItem>
                          <SelectItem value="15k-50k">
                            $15,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="timeline"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Timeline
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">
                          As soon as possible
                        </SelectItem>
                        <SelectItem value="1-2-months">1-2 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months+">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      rows={6}
                      required
                      className="border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="additional"
                      className="text-sm font-medium text-foreground"
                    >
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="additional"
                      placeholder="Any additional information, questions, or special requirements..."
                      rows={4}
                      className="border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift py-6 text-xl font-semibold group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Get My Quote
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  LUXA?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We deliver exceptional results with transparent pricing and
                unmatched quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden costs. Get a detailed breakdown of your project
                  costs upfront.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fast Response</h3>
                <p className="text-muted-foreground">
                  Receive your custom quote within 24 hours of submitting your
                  request.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with quality guarantees and ongoing
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetQuote;
