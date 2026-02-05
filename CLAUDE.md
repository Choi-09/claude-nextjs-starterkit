# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Run production build locally
- `npm run lint` - Run ESLint

### Adding UI Components
To add new shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

## Architecture Overview

### Layout System
The application uses a hierarchical layout structure:

**RootLayout** (`app/layout.tsx`):
- Uses `ThemeProvider` (next-themes) for dark mode support
- Wraps entire app with `Toaster` component for notifications
- Body uses flex layout: `flex flex-col min-h-screen` (ensures footer sticks to bottom)
- Font variables (Geist Sans/Mono) injected via CSS custom properties

**DashboardLayout** (`app/dashboard/layout.tsx`):
- Uses flex layout: `flex flex-col min-h-screen`
- Contains Header (sticky), main content area (flex-1), and Footer
- The `min-h-screen` ensures layout always occupies at least viewport height

**Key Pattern**: All layout containers should use `flex flex-col min-h-screen` to ensure:
1. Header stays at top
2. Main content expands to fill available space
3. Footer is pushed to bottom

### Page Structure
- `/` - Home page (no special layout, standalone Header/Footer)
- `/dashboard` - Dashboard page (uses DashboardLayout)
- `/api/example` - Sample API route

### Theme System
- **Provider**: `ThemeProvider` (`components/providers/theme-provider.tsx`) wraps next-themes
- **Mode**: Uses CSS class approach (`.dark` class on `<html>` element)
- **Toggle**: `ThemeToggle` component in Header allows light/dark switching
- **Variables**: All colors defined in `app/globals.css` using OKLch color space (CSS custom properties)
- **Default**: System preference detection enabled (`enableSystem: true`)

### Component Organization
- `components/ui/` - shadcn/ui components (don't edit these, regenerate with `npx shadcn@latest add`)
- `components/layout/` - Header, Footer, ThemeToggle (application-specific layout)
- `components/providers/` - Context providers (ThemeProvider wrapper)

### Styling Approach
- **TailwindCSS v4**: Uses CSS-first approach (no config file needed)
- **Theme Customization**: Edit CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark mode)
- **Color Space**: OKLch color format for better perceptual uniformity
- **Custom Variant**: `@custom-variant dark` defined for dark mode utilities

### Utilities & Constants
- `lib/utils.ts` - Helper functions like `cn()` (clsx + tailwind-merge for className merging)
- `lib/constants.ts` - Site configuration (name, links) and navigation items
- `lib/types.ts` - Shared TypeScript types

### Hooks
- `hooks/use-mounted.ts` - Prevents hydration mismatch (use for client-only features)
- `hooks/use-media-query.ts` - Responsive design queries

## Important Implementation Details

### Hydration
- `suppressHydrationWarning` on `<html>` element is necessary for theme hydration (next-themes)
- Use `use-mounted` hook for components that access localStorage or window object
- Always wrap theme-dependent logic with hydration guards

### Responsive Design
- Use TailwindCSS responsive prefixes: `md:` (768px), `lg:` (1024px), etc.
- Use `use-media-query` hook for JavaScript-based responsive logic
- Container queries: Not explicitly used, use media queries with `mx-auto max-w-7xl` pattern

### State Management
- No global state library (Redux, Zustand, etc.)
- Use React Server Components when possible
- Use local component state for UI-only state

### TypeScript
- Strict mode enabled
- Use `as const` for immutable objects (see `lib/constants.ts`)
- Use `Readonly<>` for readonly props in Server Components

## API Routes
- Located in `app/api/` directory
- Use Next.js Route Handlers pattern
- Sample: `app/api/example/route.ts` (demonstrates GET/POST)

## Environment Variables
- Client-side: Prefix with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_API_URL`)
- Server-side: Use without prefix
- File: `.env.local` (gitignored)

## Common Tasks

### Adding a New Page
1. Create file in `app/[path]/page.tsx`
2. If needs layout, create `app/[path]/layout.tsx`
3. Always import Header/Footer if layout is custom

### Adding a New Component
1. Place in `components/` directory
2. Use `"use client"` if it needs interactivity
3. Prefer Server Components when possible

### Updating Theme Colors
1. Edit CSS variables in `app/globals.css`
2. Update both `:root` (light mode) and `.dark` (dark mode)
3. Use OKLch color space for consistency

### Testing UI Changes
1. Run `npm run dev`
2. Toggle dark mode with Sun/Moon button in header
3. Test responsive design with DevTools

## Known Patterns & Constraints

### Fragment Warning
- DashboardLayout previously used Fragment `<>` which broke flex layout
- Changed to explicit `<div className="flex flex-col min-h-screen">`
- Never use Fragment as layout wrapper - use explicit div with flex properties

### Dark Mode Detection
- Detects system preference automatically
- Falls back to saved preference in localStorage
- Light/dark toggle in header overrides system preference

### Import Paths
- Use `@/` alias (configured in `tsconfig.json`) for absolute imports
- Never use relative paths like `../../../components/...`

## Recent Changes
- **Hydration Fix**: Added ThemeProvider to resolve server/client render mismatch
- **Dark Mode**: Implemented via next-themes with custom Provider wrapper
- **Footer Fix**: Changed DashboardLayout from Fragment to flex container with `min-h-screen`
- **Notification System**: Added Sonner Toaster component for toast notifications
