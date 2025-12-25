# Kasparro Frontend Assignment

Frontend for an AI-SEO platform built with Next.js, TypeScript, and Tailwind.

**Live**: http://localhost:3000  
**Deployment**: https://frontend-assignment-nine-vert.vercel.app/

## Getting Started

```bash
cd kasparro-assignment
npm install
npm run dev
```

## What's Here

Built two main parts:
1. **Marketing pages** - Home, Platform, About pages explaining what Kasparro does
2. **Dashboard** - Brand selector, audit modules with scores/insights/issues, system architecture view

Used Next.js App Router, TypeScript for type safety, Tailwind for styling, and shadcn/ui for UI components.

## Folder Structure

```
kasparro-assignment/
├── app/
│   ├── page.tsx                 # Home page
│   ├── platform/page.tsx        # Platform details
│   ├── about/page.tsx           # About page
│   └── app/                     # Dashboard (nested routes)
│       ├── layout.tsx           # Sidebar layout
│       ├── dashboard/page.tsx   # Brand metrics
│       ├── audit/page.tsx       # Audit modules
│       └── architecture/page.tsx
│
├── components/
│   ├── ui/                      # shadcn components (Button, Card, Select, Badge)
│   ├── layout/                  # Header, Footer
│   └── features/                # (kept empty for now)
│
├── data/                         # JSON files with mock data
│   ├── brands.json              # 3 brands
│   ├── dashboard-snapshots.json # High-level metrics
│   └── audit-data.json          # Full audit for brand-1
│
├── types/index.ts               # TypeScript interfaces
└── lib/utils.ts                 # Helper functions
```

Split things into UI components, layouts, and data files. Pretty straightforward structure.

## Key Decisions

### Components
Separated into `ui/` (basic components from shadcn), `layout/` (Header/Footer), and `features/` (would put feature-specific stuff here). Used shadcn/ui because the components are customizable and already accessible.

### Data
All data is in JSON files with TypeScript types in `types/index.ts`. Only `brand-1` has the complete audit data with all 7 modules - the other two brands just have dashboard snapshots. This kept the JSON files from getting too big.

### State
Using `useState` for brand selection and module switching. Didn't need Zustand or Context since the state is only used within each page, not shared across the app.

### Routing
Marketing pages (`/`, `/platform`, `/about`) are at root level. Dashboard is under `/app/*` with a shared sidebar layout for navigation.

## Bonus Features Considerations

- **Responsive design** - Works on mobile with responsive grids
- **Hover effects** - Module switching has smooth transitions
- **Dark mode ready** - Components have dark mode classes but no toggle
- **No loading skeletons** - Everything is static data so no loading states


## Tradeoffs

**What worked:**
- TypeScript caught mistakes early
- shadcn/ui saved time 
- Tailwind made responsive stuff easy

**What I'd improve:**
- Could extract more reusable components from pages
- Only one brand has full data (would add more in production)
- No error handling or empty states

**What I skipped:**
- Animations beyond CSS transitions
- Global state (didn't need it)
- Loading skeletons (no async data)

**Deployed at**: https://frontend-assignment-nine-vert.vercel.app/
