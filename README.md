# Decrypt

A modern, secure decryption tool built with Next.js, TypeScript, and Mantine UI following best practices for modular, maintainable code.

## ✨ Features

- 🔒 Secure decryption interface with validation
- 🎨 Modern UI with Mantine components
- ⚡ Built with Next.js 14 and TypeScript
- 📱 Fully responsive design
- 🛡️ Privacy-first approach
- 🧩 Modular, reusable components
- 🎯 Custom hooks for business logic
- 🚨 Error boundaries and loading states
- 📦 Barrel exports for clean imports

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3002](http://localhost:3002) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Mantine v7
- **Icons**: Tabler Icons
- **Styling**: CSS-in-JS with Mantine
- **State Management**: Custom hooks
- **Error Handling**: Error boundaries

## 📁 Project Architecture

```
decrypt/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── theme.ts                 # Mantine theme configuration
├── components/                   # Reusable UI components
│   ├── error/
│   │   └── ErrorBoundary.tsx    # Error boundary component
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── FeaturesSection.tsx
│   ├── modals/                  # Modal components
│   │   └── DecryptModal.tsx
│   ├── ui/                      # UI components
│   │   ├── DecryptForm.tsx
│   │   ├── FeatureCard.tsx
│   │   └── LoadingSpinner.tsx
│   └── index.ts                 # Barrel exports
├── hooks/                       # Custom React hooks
│   ├── useDecryption.ts
│   └── index.ts
├── lib/                         # Utilities and constants
│   ├── constants/
│   │   └── index.ts             # App constants and configuration
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── utils/
│   │   └── decryption.ts        # Decryption service
│   └── index.ts                 # Barrel exports
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🏗️ Architecture Principles

### **Modular Design**
- Components are organized by purpose (layout, ui, modals, error)
- Each component has a single responsibility
- Reusable components with clear interfaces

### **Separation of Concerns**
- **UI Components**: Pure presentation components
- **Custom Hooks**: Business logic and state management
- **Services**: Data processing and external API calls
- **Types**: Centralized type definitions
- **Constants**: Configuration and static data

### **Type Safety**
- Comprehensive TypeScript interfaces
- Proper typing for all props and state
- Type-safe API calls and data handling

### **Error Handling**
- Error boundaries for graceful error recovery
- Proper error states in components
- User-friendly error messages

### **Performance**
- Barrel exports for optimized imports
- Lazy loading where appropriate
- Efficient re-renders with proper state management

## 🎯 Key Components

### **Custom Hooks**
- `useDecryption`: Handles decryption logic and state
- Encapsulates loading states and error handling
- Reusable across different components

### **Services**
- `DecryptionService`: Centralized decryption logic
- Input validation and error handling
- Easy to test and maintain

### **Error Boundaries**
- Graceful error recovery
- User-friendly error messages
- Development error logging

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Development Guidelines

1. **Component Structure**: Use functional components with TypeScript
2. **Props Interface**: Define clear interfaces for all component props
3. **Custom Hooks**: Extract business logic into custom hooks
4. **Error Handling**: Always handle errors gracefully
5. **Type Safety**: Use TypeScript interfaces for all data structures
6. **Modularity**: Keep components small and focused
7. **Reusability**: Create reusable components with clear APIs

## 📄 License

MIT
