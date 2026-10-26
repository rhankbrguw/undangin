# AGENTS.md

> Read this file before every task. The global `engineering-standards` and `ui-ux-pro-max` skills apply
> to all code. This file provides project-specific context that overrides or extends them.

---

## Project

```
name    : [undangin]
stack   : [react, vite, tailwindcss, shadcn-ui, framer-motion, gsap, lenis, pwa]
arch    : [component-based, offline-first]
```

## Active Stack Rules

- **javascript**
- **react**
- **vite**
- **tailwindcss**
- **shadcn-ui**
- **framer-motion**
- **gsap**
- **lenis**

### React & Vite Rules

- **Component Architecture:**
  - Build functional components using React Hooks.
  - Follow Offline-First principles (PWA) to ensure check-in works in blank spots.
  - All pages and features must support fast rendering (< 5 seconds check-in requirement).
- **State Management:**
  - Use React Context or lightweight state management (e.g., Zustand) for global state if necessary, keeping it lean.
- **Styling (Tailwind CSS, Shadcn UI) & God-Tier Animation (GSAP, Lenis, Framer Motion):**
  - Use **Tailwind CSS** combined with **Shadcn UI** components to maintain a minimalist, modern, and industry-standard design.
  - Implement **GSAP (GreenSock)** for complex, god-tier animations (e.g., scroll-triggered elements, timeline sequencing, parallax) paired with **Lenis** for buttery smooth scrolling.
  - Implement **Framer Motion** for React state-based micro-interactions (e.g., page transitions, tab switching, interactive hover states).
  - Apply a dominant **pink color palette** tailored for wedding aesthetics (configured via Tailwind themes).
  - Implement Glassmorphism where appropriate (e.g., `bg-white/80 backdrop-blur-md` in light mode).
  - Ensure high accessibility (inclusive for elderly guests/lansia), including large touch targets (min 48x48dp) and clear contrast (min 4.5:1).
  - No emoji icons for UI elements; strictly use SVG icons (Lucide or Heroicons).
- **Offline-First & PWA:**
  - Implement service workers for offline caching and data sync.
  - The core check-in feature and RSVP data must function perfectly without internet, synchronizing automatically when the connection is restored.
- **Modularity Constraints (Engineering Standards):**
  - Ensure all components are under **150 lines**. Extract complex elements to smaller sub-components in `src/components/`.
  - Limit helper/utility functions to **30 lines**. Maximum **3 levels** of nesting.
  - Zero hardcode policy: all strings, colors, config values must be in `src/constants/`.

## Folder Structure

```text
undangin/
├── public/                 # Static assets (images, icons, manifest for PWA)
├── src/
│   ├── assets/             # Global CSS and images
│   ├── components/         
│   │   ├── ui/             # Shadcn UI components (button, card, input, etc.)
│   │   └── ...             # Feature components
│   ├── constants/          # Colors, strings, routes
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions (e.g., cn for Tailwind)
│   ├── pages/              # Route components/Pages
│   ├── services/           # API, local storage, and offline sync logic
│   ├── App.jsx             # Main application component
│   └── main.jsx            # React DOM entry point
├── components.json         # Shadcn configuration
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Node dependencies
```

## Error Code Registry

| Code               | Status | Meaning                           |
| ------------------ | ------ | --------------------------------- |
| `VALIDATION_ERROR` | 422    | Input validation failed           |
| `OFFLINE_SYNC_ERR` | 503    | Failed to sync data to server     |
| `NOT_FOUND`        | 404    | Resource does not exist           |
| `INTERNAL_ERROR`   | 500    | Unexpected failure                |

## Agent Constraints

Must:

- Propose approach before touching more than one file.
- Add new strings/colors to constants files (`src/constants/`) before referencing them.
- Ask before installing a new dependency.
- Apply premium, elegant, wedding-themed UI (dominantly pink) using Tailwind & Shadcn.
- Use Framer Motion for transitions (<=300ms entry, <=200ms exit).
- Prioritize offline-first logic for RSVP and Check-in operations.
- Comply with `ui-ux-pro-max` rules: `cursor-pointer` on interactives, stable hover states, visible focus states.

Must not:

- Create or rename folders without approval.
- Leave any TODO, placeholder, or debug output in final code.
- Write inline color values, string literals, or magic numbers.
- Exceed 150 lines per file or 30 lines per function.
- Use emojis as UI icons.
