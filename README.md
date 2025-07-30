# Kraken Frontend Test



Thanks for taking the time to check out this project, and for the opportunity to work on a flexible and well-scoped assignment.

This README includes a quick overview of what I’ve built, the thinking behind my decisions, and a few notes that might help save time while reviewing the code. I hope it gives you a clear sense of how I approach frontend development in practice.

## 🚀 Live Demo

**[View Live Demo →](https://kraken-frontend-test.vercel.app/)**


<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

---

## Features

### Product Catalog
- Browse products in a responsive grid layout
- View detailed product information with specifications
- Responsive design from mobile to desktop

### Shopping Cart
- Add products to cart with quantity selection
- Persistent cart state across navigation
- Basket popover with item management
- Remove items from cart functionality

### UI & UX
- Built the custom mobile design provided, with attention to detail and extended it to a responsive layout for larger screens
- Loading states and error handling
- Real-time cart count updates

---

## Tech Stack

| Tool              | Purpose                    |
| ----------------- | -------------------------- |
| React 19          | UI library                 |
| TypeScript        | Type-safe development      |
| Material-UI (MUI) | Component library & theming |
| Apollo Client     | GraphQL data fetching      |
| React Context     | Cart state management      |
| Vite              | Build tool & dev server    |
| Jest + RTL        | Testing framework          |
| ESLint + Prettier | Code quality & formatting  |

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone <repository-url>
cd kraken-frontend-test

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> 💡 The app runs on **http://localhost:3000** with the GraphQL server on **http://localhost:3001**

---

## Available Scripts

```bash
# Development
npm run dev          # Start dev server + GraphQL server

# Testing
npm test             # Run all tests

# Code Quality
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
npm run check        # Run linting + formatting checks

# Build
npm run build        # Production build
npm run preview      # Preview production build
```

---

## Development Approach

### **Framework Choice: Vite + React**
Migrated from the original Next.js setup to Vite for faster development experience and simpler configuration since SSR wasn't needed.

### **UI Framework: Material-UI**
Initially started building a custom UI component library with styled-components, but it quickly grew out of scope and was taking too much development time. Switched to MUI for faster development velocity while maintaining high-quality components. MUI provided consistent design patterns, built-in accessibility, responsive utilities, and a comprehensive theming system that allowed focusing on other things rather than rebuilding basic UI components from scratch.

### **State Management: React Context**
Used Context API for cart management - built-in, lightweight, type-safe. For an enterprise-grade app, I'd go with something more robust like Redux Toolkit.

### **Testing Strategy**
Added more testing in addition to the original 2 required tests and also set up a reusable testing foundation to make writing and maintaining tests easier and more consistent across the project. I focused on covering component behavior, integration workflows and user interactions but there's definitely more testing that could be done with additional time.

### **GraphQL with Apollo Client**
I used Apollo Client to manage all GraphQL data fetching throughout the app. It allowed me to define clean, modular queries using fragments, and handled caching and error states out of the box.

### **Responsive Design**
- Flexible grid layout for both Product List and Product Details page
- Dynamic font sizes and spacing configured based on viewport size

### **Testing Philosophy**
- User-centric testing focusing on actual user workflows
- Reusable test utilities and mock data
- Both unit tests for components and integration tests for features

---

## Folder Structure

```
src/
├── features/
│   └── product/
│       ├── components/    # ProductCard, ProductDetails, QuantitySelector
│       ├── hooks/         # useProduct, useProducts
│       ├── models/        # TypeScript interfaces
│       ├── pages/         # ProductList, ProductDetails pages
│       └── queries/       # GraphQL queries & fragments
├── components/
│   └── layout/           # Header, Footer, BasketPopover
├── context/              # CartContext and useCart hook
├── theme/                # MUI theme configuration
└── styles/               # Global CSS

test/
├── components/           # Component-specific tests
├── features/             # Feature-based tests
├── integration/          # Cross-component workflow tests
├── mocks.ts             # Reusable mock data
├── setup.ts             # Global test configuration
└── test-utils.tsx       # Shared testing utilities
```

---

## What I Would Add With More Time

- End-to-end testing with Playwright
- Cart persistence with localStorage or backend sync
- Product search, pagination and filtering (would require backend support)
- Performance monitoring and analytics
- Add skeleton loaders to improve UX during loading states

---

