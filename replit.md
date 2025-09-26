# Overview

Decrypt is a modern, secure decryption tool built with Next.js 14, TypeScript, and Mantine UI. The application follows a comprehensive mentorship platform architecture with authentication, payment processing, and user management capabilities. It demonstrates best practices for modular, maintainable code with a focus on security and user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development
- **UI Library**: Mantine v7 with comprehensive component ecosystem including forms, notifications, modals, and carousels
- **Styling**: CSS-in-JS with Mantine theming system, custom CSS variables, and enhanced component styles
- **State Management**: React Context API for global state (ContentContext) and custom hooks for business logic
- **TypeScript**: Full type safety with custom interfaces and utility types

## Component Structure
- **Modular Design**: Components organized by feature (auth, layout, ui, modals, error)
- **Barrel Exports**: Clean import structure through index files
- **Custom Hooks**: Separation of business logic (useAuth, useDecryption)
- **Error Boundaries**: Comprehensive error handling with fallback UI
- **Loading States**: Skeleton components and loading spinners for better UX

## Authentication System
- **Firebase Integration**: Google and Twitter OAuth providers (currently disabled for demo)
- **Mock Authentication**: Fallback authentication service for development
- **Protected Routes**: Authentication context with user state management
- **Form Validation**: Mantine forms with custom validation rules

## Data Management
- **Supabase Integration**: PostgreSQL database with real-time capabilities (partially disabled)
- **Local Storage**: User session persistence
- **Form Handling**: Mantine forms with validation and error handling
- **API Layer**: Axios for HTTP requests and data fetching

## Routing and Navigation
- **App Router**: Next.js 14 file-based routing system
- **Dynamic Routes**: Parameter-based routing for user profiles and content
- **Breadcrumb Navigation**: Hierarchical navigation structure
- **Responsive Design**: Mobile-first approach with Mantine breakpoints

## Security Features
- **Input Validation**: Client and server-side validation
- **CSRF Protection**: Next.js built-in security headers
- **Environment Variables**: Secure configuration management
- **Cache Control**: No-cache headers for sensitive content

# External Dependencies

## Core Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Component library with modern features
- **TypeScript**: Static type checking and development tooling

## UI and Styling
- **Mantine v7**: Complete UI component library with theming
- **Tabler Icons**: Comprehensive icon set
- **Embla Carousel**: Touch-friendly carousel component
- **React Helmet**: Document head management

## Authentication and Database
- **Firebase**: Authentication service with OAuth providers
- **Supabase**: PostgreSQL database with real-time subscriptions
- **React Context**: State management for user sessions

## Payment Processing
- **Stripe**: Payment processing with React Stripe.js integration
- **Stripe Elements**: Secure payment form components

## Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing with Tailwind integration
- **Autoprefixer**: CSS vendor prefixing

## Additional Libraries
- **Axios**: HTTP client for API requests
- **Clsx**: Conditional className utility
- **TipTap**: Rich text editor with React integration
- **Recharts**: Data visualization and charting