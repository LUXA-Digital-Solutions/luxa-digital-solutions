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
    id: "muwahhid-graphics-website",
    title: "Muwahhid Graphics Studio",
    category: "Creative Portfolio",
    description: "Professional portfolio website for a graphics designer showcasing creative works and services",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/assets/muwahhid.png",
    link: "#",
    client: "Muwahhid Graphics Studio",
    duration: "2 months",
    teamSize: 2,
    budget: "$8,000",
    overview: "Muwahhid Graphics Studio, a talented graphics designer, needed a professional online presence to showcase their creative portfolio and attract new clients. They required a visually stunning website that would reflect their design aesthetic and creative expertise.",
    challenge: "The client was relying on social media platforms to showcase their work, which limited their professional credibility and made it difficult for potential clients to find and contact them. They needed a centralized platform to display their portfolio effectively.",
    solution: "We created a modern, visually striking portfolio website with smooth animations and an intuitive gallery system. The solution features a responsive design, contact integration, service showcase, and optimized loading for high-quality images.",
    results: [
      {
        metric: "Online Visibility",
        value: "+300%",
        description: "Significant increase in professional inquiries"
      },
      {
        metric: "Client Acquisition",
        value: "+150%",
        description: "New client bookings increased substantially"
      },
      {
        metric: "Portfolio Views",
        value: "+400%",
        description: "Portfolio engagement improved dramatically"
      },
      {
        metric: "Professional Credibility",
        value: "95%",
        description: "Client satisfaction with professional presentation"
      }
    ],
    gallery: [
      "/assets/muwahhid.png",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "LUXA created a stunning portfolio website that perfectly captures my creative vision. The professional presentation has helped me attract high-quality clients and establish credibility in the industry.",
      author: "Muwahhid",
      position: "Creative Director",
      company: "Muwahhid Graphics Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Responsive portfolio gallery",
      "Smooth scroll animations",
      "Contact form integration",
      "Service showcase pages",
      "Mobile-optimized design",
      "Fast image loading",
      "SEO optimization",
      "Social media integration"
    ]
  },
  {
    id: "360data-dashboard",
    title: "360Data Management Dashboard",
    category: "Business Dashboard",
    description: "Comprehensive dashboard for data and airtime vendor operations management",
    tech: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "/assets/360data.png",
    link: "#",
    client: "360Data Solutions",
    duration: "3 months",
    teamSize: 3,
    budget: "$25,000",
    overview: "360Data Solutions, a growing data and airtime vendor, needed a comprehensive management dashboard to streamline their operations, track sales, manage inventory, and monitor customer transactions in real-time.",
    challenge: "The client was managing their business through multiple disconnected systems and spreadsheets, making it difficult to get real-time insights into their operations. They needed a centralized platform to manage their growing customer base and transaction volume.",
    solution: "We built a comprehensive business dashboard with real-time transaction monitoring, inventory management, customer analytics, sales reporting, and automated billing systems. The solution provides a complete overview of business operations in one centralized platform.",
    results: [
      {
        metric: "Operational Efficiency",
        value: "+200%",
        description: "Streamlined business operations significantly"
      },
      {
        metric: "Transaction Processing",
        value: "5x faster",
        description: "Real-time transaction monitoring and processing"
      },
      {
        metric: "Revenue Tracking",
        value: "+180%",
        description: "Better insights led to improved revenue"
      },
      {
        metric: "Customer Satisfaction",
        value: "+150%",
        description: "Improved service delivery and response time"
      }
    ],
    gallery: [
      "/assets/360data.png",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    ],
    testimonial: {
      quote: "LUXA's dashboard has completely transformed our business operations. We can now monitor everything in real-time and make data-driven decisions that have significantly improved our profitability.",
      author: "Abdulrahim",
      position: "CEO",
      company: "360Data Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    features: [
      "Real-time transaction monitoring",
      "Inventory management system",
      "Customer analytics dashboard",
      "Sales reporting and insights",
      "Automated billing system",
      "Multi-user access control",
      "Data export capabilities",
      "Mobile responsive design"
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