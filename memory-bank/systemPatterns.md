# System Patterns: LUXA Digital Solutions

## System Architecture

### Overall Structure
```
LUXA Digital Solutions
├── Single Page Application (SPA)
├── Component-Based Architecture
├── Responsive Design System
└── Modern Web Technologies Stack
```

### Application Architecture
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for navigation
- **State Management**: React Query for server state (if needed)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library

## Design Patterns

### Component Architecture
- **Atomic Design**: Components built from smallest units up
- **Composition Pattern**: Components composed of smaller, reusable parts
- **Container/Presentational**: Separation of logic and presentation
- **Custom Hooks**: Reusable logic extraction (use-mobile, use-toast)

### Layout Patterns
- **Fixed Navigation**: Sticky header with backdrop blur
- **Section-Based Layout**: Each major section as a full-height component
- **Grid Systems**: Responsive grid layouts using Tailwind CSS
- **Card-Based Design**: Information presented in organized card layouts

### Navigation Patterns
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Mobile-First Navigation**: Hamburger menu for mobile devices
- **Call-to-Action Integration**: Strategic CTA placement throughout
- **Breadcrumb Navigation**: Clear user location and navigation path

## Component Relationships

### Core Component Hierarchy
```
App
├── QueryClientProvider
├── TooltipProvider
├── Toaster Components
└── Router
    ├── Index (Main Page)
    │   ├── Navigation
    │   ├── Hero
    │   ├── Services
    │   ├── Portfolio
    │   ├── About
    │   ├── Contact
    │   └── Footer
    ├── ProjectDetail
    └── NotFound
```

### Component Dependencies
- **Navigation**: Standalone, no dependencies
- **Hero**: Uses Button component, Lucide icons
- **Services**: Uses Card component, Lucide icons
- **Portfolio**: Uses Card, Button components, project data
- **About**: Uses Card, Badge components, Lucide icons
- **Contact**: Uses Card, Input, Textarea, Button components
- **Footer**: Standalone component

## Data Flow Patterns

### Static Data Management
- **Project Data**: Centralized in `src/data/projects.ts`
- **Interface Definitions**: TypeScript interfaces for type safety
- **Data Structure**: Consistent project object structure across components

### State Management
- **Local State**: useState for component-specific state (navigation menu)
- **Form State**: React Hook Form for contact form management
- **Global State**: Minimal, mostly component-local state
- **Server State**: React Query setup for future API integration

## Styling Patterns

### Design System Architecture
- **CSS Variables**: HSL color system with semantic naming
- **Tailwind Integration**: Custom utilities and component classes
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Animation System**: Custom keyframes and utility classes

### Color System
- **Primary**: Cyan (#00D4D4) - Brand identity and CTAs
- **Background**: Dark theme with subtle variations
- **Accent**: Gradient variations of primary color
- **Semantic Colors**: Success, warning, error states

### Animation Patterns
- **Entrance Animations**: Slide-up effects for content sections
- **Hover Effects**: Lift animations and glow effects
- **Micro-interactions**: Subtle transitions and transforms
- **Performance**: CSS-based animations for smooth performance

## Responsive Design Patterns

### Breakpoint Strategy
- **Mobile First**: Base styles for mobile devices
- **Tablet**: md: breakpoint (768px+)
- **Desktop**: lg: breakpoint (1024px+)
- **Large Desktop**: xl: breakpoint (1280px+)

### Layout Adaptations
- **Grid Systems**: Responsive grid columns (1 → 2 → 3)
- **Navigation**: Collapsible mobile menu
- **Typography**: Responsive font sizes and spacing
- **Spacing**: Adaptive padding and margins

## Performance Patterns

### Optimization Strategies
- **Code Splitting**: Route-based code splitting with React Router
- **Image Optimization**: Optimized images with proper sizing
- **CSS Optimization**: Tailwind CSS purging and optimization
- **Bundle Optimization**: Vite build optimization

### Loading Patterns
- **Lazy Loading**: Route-based lazy loading for pages
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance Monitoring**: Core Web Vitals optimization
- **Caching Strategy**: Static asset caching and optimization

## Accessibility Patterns

### Standards Compliance
- **WCAG 2.1**: AA compliance target
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions

### Inclusive Design
- **Color Contrast**: High contrast ratios for readability
- **Typography**: Readable font sizes and line heights
- **Touch Targets**: Adequate size for mobile interaction
- **Focus Management**: Clear focus indicators and management
