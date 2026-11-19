# AI Agent Instructions for Bored-Portfolio

> **MANDATORY FIRST STEP:**
> Always read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) immediately when starting a new session.
> Do **NOT** explore or analyze individual files in `src/` or `public/`—`PROJECT_CONTEXT.md` contains the complete architectural map, data schemas, design rules, and critical gotchas.

## Quick Reference
- **Stack**: Next.js 16 (App Router, Turbopack) + React 19 + TypeScript 6 + Tailwind CSS v4
- **Scroll Engine**: Lenis (`SmoothScroll.tsx`) + GSAP ScrollTrigger
- **Key Rules**:
  - Never add `scroll-behavior: smooth` or `h-full` to `html`/`body` (it breaks Lenis scrolling).
  - No `tailwind.config.js`—Tailwind v4 is configured via `src/app/globals.css`.
  - GSAP animations must use `gsap.context()` inside `useEffect` with `ctx.revert()` cleanup.
  - Verification: Always run `npm run build` after changes to confirm TypeScript and build integrity.
