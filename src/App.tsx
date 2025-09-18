import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import GetQuote from "./pages/GetQuote";
import CaseStudies from "./pages/CaseStudies";
import AllProjects from "./pages/AllProjects";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route
              path="/schedule-consultation"
              element={<ScheduleConsultation />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
