# Technical Context: LUXA Digital Solutions

## Technology Stack

### Frontend Framework
- **React 18.3.1**: Latest stable version with concurrent features
- **TypeScript 5.8.3**: Strong typing and developer experience
- **Vite 5.4.19**: Fast build tool and development server

### UI and Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful, customizable icons
- **Tailwind CSS Animate**: Animation utilities

### State Management and Data
- **React Query 5.83.0**: Server state management
- **React Hook Form 7.61.1**: Form state management
- **Zod 3.25.76**: Schema validation

### Routing and Navigation
- **React Router DOM 6.30.1**: Client-side routing
- **React Hook Form**: Form handling and validation

### Development Tools
- **ESLint 9.32.0**: Code linting and quality
- **TypeScript ESLint**: TypeScript-specific linting rules
- **SWC**: Fast JavaScript/TypeScript compiler
- **PostCSS**: CSS processing and optimization

## Development Environment

### Prerequisites
- **Node.js**: Version 18+ required
- **Package Manager**: npm or bun (bun.lockb present)
- **Git**: Version control system

### Setup Commands
```bash
# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev

# Build for production
npm run build
# or
bun build
```

### Available Scripts
- `dev`: Start development server with hot reload
- `build`: Build for production
- `build:dev`: Build in development mode
- `lint`: Run ESLint for code quality
- `preview`: Preview production build locally

## Project Structure

### Directory Organization
```
src/
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   ├── Navigation.tsx # Main navigation
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services showcase
│   ├── Portfolio.tsx  # Portfolio section
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer component
├── pages/              # Route components
│   ├── Index.tsx      # Main page
│   ├── ProjectDetail.tsx # Project detail page
│   └── NotFound.tsx   # 404 page
├── data/               # Static data
│   └── projects.ts    # Portfolio projects
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

### Key Configuration Files
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Vite build configuration
- `components.json`: shadcn/ui configuration
- `package.json`: Dependencies and scripts

## Technical Constraints

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **No IE Support**: Requires modern browser features

### Performance Requirements
- **Lighthouse Score**: 90+ for all metrics
- **Core Web Vitals**: Meet Google's performance standards
- **Load Time**: Under 3 seconds on 3G connection
- **Bundle Size**: Optimized for fast loading

### Accessibility Requirements
- **WCAG 2.1 AA**: Accessibility compliance
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio

## Dependencies and Versions

### Core Dependencies
- **React**: 18.3.1 (Latest stable)
- **TypeScript**: 5.8.3 (Latest stable)
- **Vite**: 5.4.19 (Latest stable)
- **Tailwind CSS**: 3.4.17 (Latest stable)

### UI Component Libraries
- **shadcn/ui**: Latest components with Radix UI primitives
- **Radix UI**: Accessible, unstyled components
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Dependencies
- **ESLint**: 9.32.0 (Latest stable)
- **TypeScript ESLint**: Latest rules for TypeScript
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Build and Deployment

### Build Process
1. **TypeScript Compilation**: Type checking and compilation
2. **CSS Processing**: Tailwind CSS compilation and optimization
3. **Bundle Optimization**: Vite optimization and tree shaking
4. **Asset Optimization**: Image and font optimization

### Output Structure
```
dist/
├── index.html          # Main HTML file
├── assets/             # Compiled assets
│   ├── js/            # JavaScript bundles
│   ├── css/           # Compiled CSS
│   └── images/        # Optimized images
└── favicon.ico        # Site favicon
```

### Deployment Considerations
- **Static Hosting**: Can be deployed to any static hosting service
- **CDN**: Recommended for global performance
- **HTTPS**: Required for modern web features
- **Caching**: Static asset caching for performance

## Development Workflow

### Code Quality
- **ESLint**: Automated code quality checks
- **TypeScript**: Compile-time error checking
- **Prettier**: Code formatting (if configured)
- **Git Hooks**: Pre-commit quality checks

### Testing Strategy
- **Unit Testing**: Component testing (to be implemented)
- **Integration Testing**: User flow testing (to be implemented)
- **E2E Testing**: Full user journey testing (to be implemented)

### Performance Monitoring
- **Lighthouse**: Performance auditing
- **Core Web Vitals**: Real user performance metrics
- **Bundle Analysis**: Bundle size monitoring
- **Image Optimization**: Automated image optimization

## Future Technical Considerations

### Scalability
- **Component Library**: Expandable shadcn/ui component system
- **State Management**: React Query ready for API integration
- **Performance**: Optimized for future feature additions
- **SEO**: Ready for search engine optimization

### Integration Points
- **CMS Integration**: Headless CMS ready
- **API Integration**: React Query setup for backend APIs
- **Analytics**: Google Analytics integration ready
- **Forms**: Contact form backend integration needed
