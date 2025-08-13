export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  client: string;
  duration: string;
  teamSize: number;
  budget: string;
  overview: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
  features: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description: "Modern e-commerce solution with advanced features and seamless user experience",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    link: "#",
    client: "RetailCorp Inc.",
    duration: "4 months",
    teamSize: 5,
    budget: "$75,000",
    overview: "RetailCorp approached us to build a comprehensive e-commerce platform that could handle their growing online business. They needed a scalable solution with advanced inventory management, multi-payment gateway integration, and real-time analytics.",
    challenge: "The client was struggling with their existing platform's performance issues, limited customization options, and poor mobile experience. They were losing customers due to slow load times and a complicated checkout process.",
    solution: "We built a custom e-commerce platform using React and Node.js with microservices architecture. The solution included advanced search functionality, AI-powered product recommendations, streamlined checkout process, and comprehensive admin dashboard.",
    results: [
      {
        metric: "Page Load Speed",
        value: "75% faster",
        description: "Improved from 4.2s to 1.1s average load time"
      },
      {
        metric: "Conversion Rate",
        value: "+185%",
        description: "Increased from 2.1% to 6.0% conversion rate"
      },
      {
        metric: "Mobile Revenue",
        value: "+220%",
        description: "Mobile sales increased significantly"
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        description: "Average customer rating improved"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "LUXA transformed our online business completely. The new platform not only looks amazing but has tripled our online sales. Their team's expertise and attention to detail is unmatched.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "RetailCorp Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Advanced product search and filtering",
      "AI-powered recommendations",
      "Multi-payment gateway integration",
      "Real-time inventory management",
      "Comprehensive analytics dashboard",
      "Mobile-optimized checkout",
      "Customer account management",
      "Order tracking system"
    ]
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Comprehensive analytics dashboard with real-time data visualization",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    link: "#",
    client: "DataFlow Solutions",
    duration: "6 months",
    teamSize: 4,
    budget: "$120,000",
    overview: "DataFlow Solutions needed a powerful analytics dashboard to help their clients visualize complex data sets and generate actionable insights. The platform required real-time data processing and interactive visualizations.",
    challenge: "The existing solution was built on legacy technology that couldn't handle large datasets efficiently. Users complained about slow loading times and limited customization options for reports.",
    solution: "We developed a modern SaaS dashboard using Next.js and TypeScript with a robust backend architecture. The solution features real-time data streaming, customizable widgets, advanced filtering, and automated report generation.",
    results: [
      {
        metric: "Data Processing",
        value: "10x faster",
        description: "Real-time processing of large datasets"
      },
      {
        metric: "User Engagement",
        value: "+150%",
        description: "Time spent on platform increased"
      },
      {
        metric: "Client Retention",
        value: "+95%",
        description: "Significant improvement in retention"
      },
      {
        metric: "Revenue Growth",
        value: "+300%",
        description: "Client's revenue increased substantially"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "The dashboard LUXA built for us has revolutionized how we serve our clients. The real-time analytics and beautiful visualizations have become our biggest selling point.",
      author: "Michael Chen",
      position: "CTO",
      company: "DataFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Advanced filtering and search",
      "Automated report generation",
      "Multi-tenant architecture",
      "Role-based access control",
      "API integration capabilities",
      "Export and sharing options"
    ]
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    category: "Brand Identity",
    description: "Professional corporate presence with modern design and optimal performance",
    tech: ["React", "Tailwind", "Framer Motion", "Vercel", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    link: "#",
    client: "TechVentures Global",
    duration: "3 months",
    teamSize: 3,
    budget: "$45,000",
    overview: "TechVentures Global, a leading investment firm, needed a complete website redesign to better reflect their premium brand and attract high-value clients. The new site needed to showcase their portfolio and expertise effectively.",
    challenge: "Their existing website looked outdated and didn't reflect their position as industry leaders. The site had poor SEO performance and wasn't generating quality leads for their business development team.",
    solution: "We created a sophisticated, modern website with elegant animations and premium design elements. The solution included a content management system, SEO optimization, and lead generation tools.",
    results: [
      {
        metric: "Organic Traffic",
        value: "+240%",
        description: "Significant increase in search visibility"
      },
      {
        metric: "Lead Generation",
        value: "+180%",
        description: "High-quality leads increased"
      },
      {
        metric: "Page Speed",
        value: "95/100",
        description: "Google PageSpeed score achieved"
      },
      {
        metric: "Bounce Rate",
        value: "-60%",
        description: "Users staying longer on site"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "Our new website has become our most powerful marketing tool. The design perfectly captures our brand essence and has significantly improved our lead quality.",
      author: "David Rodriguez",
      position: "Managing Partner",
      company: "TechVentures Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Responsive modern design",
      "Content management system",
      "SEO optimization",
      "Lead capture forms",
      "Portfolio showcase",
      "Blog integration",
      "Contact management",
      "Performance optimization"
    ]
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Application",
    category: "FinTech Solution",
    description: "Secure and intuitive mobile banking experience with advanced features",
    tech: ["React Native", "Firebase", "Stripe", "Biometric Auth", "AWS", "Node.js"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    link: "#",
    client: "SecureBank Financial",
    duration: "8 months",
    teamSize: 6,
    budget: "$200,000",
    overview: "SecureBank Financial needed a modern mobile banking app to compete with digital-first banks. The app required advanced security features, intuitive UX, and comprehensive banking functionality.",
    challenge: "The existing mobile app had poor user reviews, limited functionality, and security concerns. Customer adoption was low, and the bank was losing market share to more modern competitors.",
    solution: "We developed a comprehensive mobile banking application with biometric authentication, real-time notifications, advanced transaction management, and seamless user experience across iOS and Android platforms.",
    results: [
      {
        metric: "User Adoption",
        value: "+400%",
        description: "Active mobile users increased"
      },
      {
        metric: "App Store Rating",
        value: "4.9/5",
        description: "Excellent user satisfaction"
      },
      {
        metric: "Transaction Volume",
        value: "+250%",
        description: "Mobile transactions increased"
      },
      {
        metric: "Customer Support",
        value: "-70%",
        description: "Reduced support tickets"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "LUXA delivered a mobile banking app that exceeded all our expectations. Our customers love the new experience, and we've seen unprecedented adoption rates.",
      author: "Lisa Thompson",
      position: "Head of Digital Banking",
      company: "SecureBank Financial",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Biometric authentication",
      "Real-time notifications",
      "Account management",
      "Transfer and payments",
      "Investment tracking",
      "Expense categorization",
      "Customer support chat",
      "Advanced security features"
    ]
  }
];