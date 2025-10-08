import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar as CalendarIcon,
  Clock, 
  CheckCircle,
  Star,
  MessageSquare,
  Video,
  Phone,
  MapPin,
  Users,
  Target,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const ScheduleConsultation = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const consultationTypes = [
    {
      type: "video",
      title: "Video Call",
      description: "Face-to-face consultation via Zoom or Google Meet",
      icon: Video,
      duration: "30 minutes",
      benefits: ["Screen sharing", "Personal interaction", "Recorded session"]
    },
    {
      type: "phone",
      title: "Phone Call",
      description: "Traditional phone consultation for quick discussions",
      icon: Phone,
      duration: "20 minutes",
      benefits: ["Quick setup", "No technical requirements", "Flexible timing"]
    },
    {
      type: "in-person",
      title: "In-Person Meeting",
      description: "Meet at our office for a comprehensive discussion",
      icon: MapPin,
      duration: "45 minutes",
      benefits: ["Full attention", "Document review", "Team introduction"]
    }
  ];

  const benefits = [
    "Free 30-minute consultation",
    "No obligation to proceed",
    "Expert advice from our team",
    "Custom project roadmap",
    "Pricing estimate",
    "Timeline planning"
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
                onClick={() => navigate('/')}
                className="text-muted-foreground hover:text-primary mb-6 group transition-all-spring hover-lift"
              >
                <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2 text-sm font-semibold">
                Free Consultation
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Schedule Your{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Book a free consultation with our experts to discuss your project requirements and get personalized advice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>30 minutes free</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>No obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Consultation Type
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select the consultation method that works best for you and your schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <Card 
                  key={type.type}
                  className={`p-8 relative overflow-hidden group hover-lift transition-all-spring cursor-pointer ${
                    consultationType === type.type 
                      ? 'border-primary/40 bg-gradient-accent' 
                      : 'border-border/30 bg-card/30 hover:border-primary/40'
                  }`}
                  onClick={() => setConsultationType(type.type)}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all-spring ${
                      consultationType === type.type 
                        ? 'bg-primary/20' 
                        : 'bg-gradient-accent group-hover:animate-glow'
                    }`}>
                      <type.icon className="w-10 h-10 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="text-lg font-semibold text-primary mb-6">{type.duration}</div>
                    
                    <ul className="space-y-2 text-left mb-6">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={consultationType === type.type ? "default" : "outline"}
                      className={`w-full ${
                        consultationType === type.type 
                          ? 'bg-primary text-black' 
                          : 'border-primary/30 text-primary hover:bg-primary/10'
                      } transition-all-spring hover-lift`}
                    >
                      {consultationType === type.type ? 'Selected' : 'Choose This'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                What You'll{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Get
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our free consultation provides real value and actionable insights for your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling Form */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Pick Your{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Perfect Time
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Select a date and time that works best for your schedule.
                </p>
              </div>

              <Card className="p-8 lg:p-12 bg-card/30 border-border/30 backdrop-blur-sm">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
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
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
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
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
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
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
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
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
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
                      <Label className="text-sm font-medium text-foreground">
                        Preferred Date *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 justify-start text-left font-normal border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring ${
                              !date && "text-muted-foreground"
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">
                        Preferred Time *
                      </Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-sm font-medium text-foreground">
                      Project Type
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-apps">Mobile Applications</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Digital Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium text-foreground">
                      Project Description
                    </Label>
                    <Textarea 
                      id="description" 
                      placeholder="Briefly describe your project or what you'd like to discuss..." 
                      rows={4}
                      className="border-border/50 hover:border-primary/40 focus:border-primary transition-all-spring resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={!date || !selectedTime || !consultationType}
                    className="w-full bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift py-6 text-xl font-semibold group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Schedule Consultation
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
                Why Choose{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  LUXA?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We deliver exceptional results with transparent communication and unmatched expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our experienced professionals provide valuable insights and practical solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Focused Approach</h3>
                <p className="text-muted-foreground">
                  We focus on understanding your specific needs and providing tailored solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our track record speaks for itself with successful projects and satisfied clients.
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

export default ScheduleConsultation;
