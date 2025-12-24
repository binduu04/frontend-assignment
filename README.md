# Kasparro - AI-Native SEO Platform

A comprehensive frontend application for Kasparro, an AI-native SEO & Brand Intelligence platform designed for the AI-first search era (ChatGPT, Perplexity, Gemini).

## 🚀 Live Demo

- **Local Development**: http://localhost:3000
- **Vercel Deployment**: [To be deployed]

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Architecture Decisions](#architecture-decisions)
- [Getting Started](#getting-started)
- [Available Routes](#available-routes)
- [Data Models](#data-models)
- [Component Architecture](#component-architecture)
- [Tradeoffs & Decisions](#tradeoffs--decisions)

## 🎯 Project Overview

This project demonstrates a production-grade frontend implementation for an AI-SEO platform, featuring:

1. **Public Marketing Website** - Clear product narrative and value proposition
2. **Product Dashboard** - Authenticated experience with mocked data
3. **Comprehensive Audit System** - Multi-module AI-SEO analysis interface

The application showcases system thinking, component modularity, structured data handling, and clear UX for a data-dense AI product.

## ✨ Features

### Public Website

- **Home Page** (`/`): Hero section, value proposition, core modules overview, product pipeline
- **Platform Page** (`/platform`): Detailed audit pipeline flow, data consumption/output explanation
- **About Page** (`/about`): Mission, product philosophy, and vision for AI-first search

### Product Dashboard

- **Dashboard** (`/app/dashboard`): Brand selector, high-level snapshot cards (AI Visibility, Trust, Keyword Coverage)
- **Audit Page** (`/app/audit`): Module sidebar with 7 audit modules, detailed insights/issues/recommendations
- **Architecture Page** (`/app/architecture`): Visual system representation

## 🛠 Tech Stack

### Core (Required)

- **Next.js 16** - App Router with TypeScript
- **TypeScript** - Strict type safety throughout
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Customizable component library

### Additional Libraries

- **Lucide React** - Icon system
- **Class Variance Authority** - Component variant handling
- **clsx & tailwind-merge** - Conditional class management

## 📁 Folder Structure

```
kasparro-assignment/
├── app/
│   ├── page.tsx                 # Home page
│   ├── platform/
│   │   └── page.tsx            # Platform overview
│   ├── about/
│   │   └── page.tsx            # About page
│   └── app/
│       ├── layout.tsx          # Dashboard layout with sidebar
│       ├── dashboard/
│       │   └── page.tsx        # Main dashboard
│       ├── audit/
│       │   └── page.tsx        # Audit module view
│       └── architecture/
│           └── page.tsx        # System architecture
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── select.tsx
│   │   └── badge.tsx
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/               # Feature-specific components
├── data/
│   ├── brands.json             # Brand mock data
│   ├── dashboard-snapshots.json # Dashboard metrics
│   └── audit-data.json         # Full audit module data
├── types/
│   └── index.ts                # TypeScript type definitions
└── lib/
    └── utils.ts                # Utility functions
```

## 🏗 Architecture Decisions

### 1. Component Organization

**Decision**: Three-tier component architecture

- **UI Primitives** (`components/ui/`): Pure, reusable components from shadcn/ui
- **Layout Components** (`components/layout/`): Header, Footer, page structure
- **Feature Components** (`components/features/`): Domain-specific components (future expansion)

**Rationale**: Clear separation ensures components are reusable, testable, and maintainable. UI primitives are framework-agnostic, while feature components encapsulate business logic.

### 2. Data Modeling

**Decision**: Strongly typed JSON with TypeScript interfaces

All data follows strict type contracts defined in `types/index.ts`:

- `Brand`: Core brand information
- `DashboardSnapshot`: High-level metrics
- `AuditModule`: Complete module structure with scores, insights, issues, recommendations
- `Score`, `Insight`, `Issue`, `Recommendation`: Granular typed objects

**Rationale**: Type safety prevents runtime errors and serves as living documentation. JSON files enable easy mocking without backend complexity.

### 3. State Management

**Decision**: React Server Components + Client Components with local state

- Server Components for static content (Home, Platform, About, Architecture)
- Client Components (`'use client'`) for interactive features (Dashboard, Audit)
- Local state with `useState` for brand/module selection

**Rationale**: Leverages Next.js 16 App Router strengths. No global state needed for this scope—brand/module selection is component-local. Zustand would be overkill for current requirements.

### 4. Routing Strategy

**Decision**: File-based routing with route groups

- Public routes: `/`, `/platform`, `/about`
- App routes under `/app` namespace with shared layout
- Dedicated layout (`app/app/layout.tsx`) for dashboard navigation

**Rationale**: Clear separation between public and authenticated surfaces. Route groups enable layout sharing without polluting URLs.

### 5. Styling Approach

**Decision**: Tailwind CSS with component-scoped styles

- Utility classes for layout and spacing
- shadcn/ui components for consistent design system
- No global CSS beyond Tailwind base

**Rationale**: Rapid iteration, no CSS naming conflicts, excellent developer experience. shadcn/ui provides customizable components without lock-in.

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd kasparro-assignment

# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🗺 Available Routes

| Route               | Description                       | Type      |
| ------------------- | --------------------------------- | --------- |
| `/`                 | Home page with value proposition  | Public    |
| `/platform`         | Platform overview and pipeline    | Public    |
| `/about`            | Mission and vision                | Public    |
| `/app/dashboard`    | Brand snapshot and metrics        | Dashboard |
| `/app/audit`        | Detailed module analysis          | Dashboard |
| `/app/architecture` | System architecture visualization | Dashboard |

## 📊 Data Models

### Brand

```typescript
{
  id: string;
  name: string;
  domain: string;
  industry: string;
}
```

### Score

```typescript
{
  value: number;
  maxValue: number;
  label: string;
  trend?: 'up' | 'down' | 'stable';
}
```

### Audit Module

```typescript
{
  id: string;
  name: string;
  description: string;
  score: Score;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}
```

Full type definitions in `types/index.ts`.

## 🧩 Component Architecture

### Reusable Components

- **Button**: Primary, secondary, outline variants
- **Card**: Container for content sections
- **Select**: Dropdown for brand selection
- **Badge**: Status and severity indicators

### Feature Components

- **Header**: Public website navigation
- **Footer**: Site-wide footer
- **ModuleSidebar**: Audit module navigation
- **ScoreCard**: Dashboard metric display
- **IssueCard**: Issue presentation with severity
- **RecommendationCard**: Actionable insights

## ⚖️ Tradeoffs & Decisions

### Scope Decisions

**What's Included:**

- ✅ Comprehensive public website (3 pages)
- ✅ Full dashboard with brand switching
- ✅ Complete audit system with 7 modules
- ✅ Rich mocked data (1 full brand audit, 3 brands with snapshots)
- ✅ Responsive design (mobile-friendly)
- ✅ TypeScript strict mode
- ✅ Component modularity

**What's Deferred:**

- ⏸ Dark/light mode (bonus feature, would add theme provider)
- ⏸ Framer Motion animations (bonus, would use for module transitions)
- ⏸ Loading skeletons (bonus, would implement with Suspense)
- ⏸ Multi-brand audit data (only brand-1 has full audit data to reduce JSON size)

### Performance Tradeoffs

**Decision**: Server Components by default, client components only when needed

- **Pro**: Faster initial page loads, reduced JavaScript bundle
- **Con**: More verbose with `'use client'` directives
- **Justification**: Performance > convenience for production apps

### Data Structure

**Decision**: Nested JSON over normalized structures

- **Pro**: Easier to understand, matches API response shapes
- **Con**: Potential data duplication if scaled
- **Justification**: For mocked data, clarity > normalization. Real app would use React Query + normalized cache.

### Component Granularity

**Decision**: Medium granularity (ScoreCard, IssueCard, etc.)

- **Pro**: Balance between reusability and complexity
- **Con**: Could extract smaller atoms (SeverityBadge, TrendIcon)
- **Justification**: YAGNI principle—extract when needed by 3rd use case

## 🎨 Design Philosophy

1. **Clarity Over Cleverness**: Straightforward code beats clever abstractions
2. **Progressive Disclosure**: Show high-level first, details on demand
3. **Data-Driven UI**: No hardcoded content in JSX—all data from JSON/types
4. **Accessible by Default**: Semantic HTML, proper heading hierarchy
5. **Mobile-First**: Responsive grid layouts, collapsible navigation

## 📝 Future Enhancements

If time permitted or for V2:

- **Search/Filter**: Filter audit issues by severity, search modules
- **Comparison Mode**: Compare multiple brands side-by-side
- **Export**: Download audit reports as PDF/CSV
- **Trends**: Historical data visualization with charts
- **Collaboration**: Comments, tasks, team sharing
- **Real AI Integration**: Connect to actual ChatGPT/Perplexity APIs

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent App Router
- **shadcn**: For the customizable component library
- **Lucide**: For the beautiful icon set

---

**Built with care for the Kasparro Frontend Engineering Assignment**

_For questions or feedback, please reach out via the submission form._
