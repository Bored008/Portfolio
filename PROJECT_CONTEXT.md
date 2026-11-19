# 🧭 Portfolio Project — AI Agent Fast-Start Context

> **CRITICAL DIRECTIVE FOR AI AGENTS:**
> Read this file **first** at the beginning of any new conversation or session.
> Do **NOT** crawl, inspect, or analyze every individual file in `src/` or `public/`.
> Everything you need to know about the architecture, tech stack, data models, layout rules, and gotchas is documented right here to save your time and context tokens.

---

## 1. Quick Identity & Project Facts

| Property | Value |
|---|---|
| **Developer / Owner** | **Himanshu Dahiya** (GitHub: [`Bored008`](https://github.com/Bored008), alias: `bored`) |
| **Role** | Full-Stack Web Developer & UI/UX Product Designer |
| **Repository** | [https://github.com/Bored008/Portfolio](https://github.com/Bored008/Portfolio) (`main` branch) |
| **Live Production** | [https://himanshudahiya.vercel.app/](https://himanshudahiya.vercel.app/) |
| **Vercel Project ID** | `prj_VpBwxg6tQrq6WM9CyYtNlVDzP4kT` |
| **Framework** | Next.js 16.2.6 (App Router, Turbopack, React 19.2.4) |
| **Language** | TypeScript 6 (Strict mode enabled, no `.js`/`.jsx` files in `src/`) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`, inline theme in `globals.css`) |
| **Animations** | GSAP 3 (ScrollTrigger, ScrambleTextPlugin) + Framer Motion / Motion |
| **Smooth Scroll** | Lenis (`@studio-freight/lenis` / `lenis/react`) via `<SmoothScroll />` wrapper |
| **Telemetry** | `@vercel/analytics` |

---

## 2. Directory Structure & File Map

```text
Portfolio/
├── public/                       # Static assets: WebP mockups, SVGs, Resumes (PDFs)
│   ├── Himanshu_Resume_Developer.pdf     # Developer CV (downloaded via ResumeModal)
│   ├── Himanshu_Resume_UIUXDesigner.pdf  # UI/UX Designer CV (downloaded via ResumeModal)
│   ├── myimage.webp              # High-priority hero portrait (WebP)
│   ├── curveline.svg             # Desktop ambient curve background
│   ├── curvelinemobile.svg       # Mobile ambient curve background
│   └── [project mockups].webp/png # Optimized WebP & PNG cards
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with Poppins/Geist fonts, Lenis SmoothScroll, Vercel Analytics
│   │   ├── page.tsx              # Single-page home assembling all landing sections
│   │   ├── globals.css           # Tailwind v4 imports, Lenis CSS, text-stroke, custom utilities
│   │   ├── projects/page.tsx     # Full standalone gallery page: "/projects"
│   │   └── designs/page.tsx      # Full standalone gallery page: "/designs"
│   ├── components/
│   │   ├── ResumeModal.tsx       # Dual-tab CV download dialog (Developer vs Designer)
│   │   ├── navbar/Navbar.tsx     # Floating glass pill navbar with IntersectionObserver section indicators
│   │   ├── footer/Footer.tsx     # Wave footer with GSAP scroll reveal & social links
│   │   ├── ui/                   # Modular UI: Button.tsx, FAQItem.tsx, ProjectCard.tsx, SectionTitle.tsx, SkillBadge.tsx
│   │   └── effects/              # SmoothScroll.tsx, AnimatedButton.tsx, CustomCursor.tsx, ShinyText.tsx, TextPressure.tsx
│   ├── sections/                 # Main landing page sections (rendered in order in app/page.tsx):
│   │   ├── Hero.tsx              # Hero portrait, GSAP ScrambleText "HIMANSHU", custom fonts
│   │   ├── About.tsx             # Interactive 3D drag/tilt card, bio, "Download CV" trigger
│   │   ├── Skills.tsx            # Dual desktop/mobile skill boards with GSAP staggered entrance
│   │   ├── Projects.tsx          # Dual horizontal carousels: "Developer Projects" & "Web Designs"
│   │   ├── WebDesigns.tsx        # Standalone WebDesigns section component
│   │   ├── Education.tsx         # Academic timeline banner with hover transforms
│   │   ├── FAQ.tsx               # Interactive accordion FAQs with sticky sidebar
│   │   └── CTA.tsx               # Call-to-action banner
│   ├── data/                     # Single source of truth for all content:
│   │   ├── projects.ts           # 9 Developer projects (`projectsData`, `ProjectItem` interface)
│   │   ├── webdesign.ts          # 13 Figma/UI/UX designs (`designsData`, `DesignItem` interface)
│   │   ├── skills.ts             # Skill categories & icons (`skillsData`, `SkillItem` interface)
│   │   └── faq.ts                # FAQ questions & answers
│   └── fonts/                    # Custom local fonts:
│       ├── MortendBold.otf       # Hero uppercase display font ("I AM HIMANSHU")
│       ├── FeelingPassionate.ttf # Hero script accent ("Hey,")
│       ├── Gilroy-Black.ttf      # Bold section titles, card headers
│       └── Rockybilly.ttf        # About section decorative script
├── scripts/                      # Project automation scripts
│   ├── sync-github-projects.mjs  # Automated sync script: fetches public GitHub repos into `src/data/projects.ts`
│   └── sync-config.json          # Ignored repositories & sync preferences
├── .github/workflows/
│   └── sync-portfolio.yml        # Weekly automated GitHub Actions cron to run sync script and push updates
├── next.config.ts                # Turbopack, image optimization rules (avif/webp), CV redirect
├── tsconfig.json                 # Path aliases `@/*` -> `./src/*`, strict checking
├── package.json                  # Scripts & dependencies
├── AGENTS.md                     # Agent discovery pointer
└── PROJECT_CONTEXT.md            # This fast-start context file
```

---

## 3. Application Routes & Architecture

### `GET /` — Home Page (`src/app/page.tsx`)
- Renders background curves (`/curveline.svg` desktop, `/curvelinemobile.svg` mobile).
- Sequential section stack wrapped in `max-w-[420px] md:max-w-[1440px]`:
  1. `<Hero />` (`#home`)
  2. `<About />` (`#about`)
  3. `<Skills />` (`#skills`)
  4. `<Projects />` (`#projects`) — includes carousels for both Dev projects and Figma designs + "View All" links
  5. `<Education />` (`#education`)
  6. `<FAQ />` (`#faq`)
  7. `<Footer />`

### `GET /projects` — Standalone Projects Page (`src/app/projects/page.tsx`)
- Displays all 9 developer projects in a responsive multi-column grid (`100%` mobile, `50%` tablet, `33.3%` desktop).
- Each card includes: live website button (if available), GitHub repo link button, technology tags, and description.

### `GET /designs` — Standalone Designs Page (`src/app/designs/page.tsx`)
- Displays all 13 Figma UI/UX designs in a 50/50 split layout cards.
- Each card includes: direct Figma file preview button, tags, and design rationale.

---

## 4. Data Models & Schemas

### Developer Projects (`src/data/projects.ts`)
```typescript
export interface ProjectItem {
  title: string;
  img: string;          // Path in /public, e.g. "/TraceX.png"
  link: string;         // Primary link (fallback)
  githubLink?: string;  // GitHub repository URL
  liveLink?: string;    // Deployed production URL
  imgClass?: string;    // Tailwind overrides (e.g. rounded-[12px] border-2 border-white)
  desc: string;         // Descriptive overview
  tags: string[];       // Tech badges (Next.js, TypeScript, etc.)
  icon?: string;
}
```
**Current Projects (9 total):**
1. **TraceX**: Distributed root-cause analyzer & SRE topology visualization tool.
2. **EBAT**: Military-grade tactical UAV drone surveillance landing page.
3. **Yanegi**: Real-time community activity map & social platform.
4. **PaperBuddy**: All-in-one educational management & school logistics platform.
5. **Paw**: Modern pet adoption & animal shelter matching web app.
6. **SadakSaathi**: Road safety, hazard reporting & navigation assistant.
7. **DocDesign**: Static document image transformer into editable documents.
8. **GitHub Analyzer**: GitHub profile analytics with chart visualizations.
9. **AI Health**: AI nutrition breakdown tool leveraging Google Gemini 2.0 Flash via user OAuth.

### UI/UX Designs (`src/data/webdesign.ts`)
```typescript
export interface DesignItem {
  title: string;
  img: string;
  imgWrapperClass?: string;
  imgClass?: string;
  link: string;         // Figma design URL
  desc: string;
  tags: string[];
}
```
**Current Designs (13 total):**
TraceX, EBAT, Yanegi, PaperBuddy, ECHO (Music), FireChem (Industrial fire safety), SadakSaathi App, Paw (Pet adoption UI), Moviely (Streaming platform), DocDesign (Document editor UI), Premium Car Design (BMW luxury concept), Jewellary Web Design, Luxury Watch Design.

### Skills (`src/data/skills.ts`)
```typescript
export interface SkillItem {
  name: string;
  icon: string;         // Path in /public, e.g. "/React.svg"
  desktopHeight: string;
  mobileHeight: string;
}
```

---

## 5. Critical Engineering Rules & Gotchas (DO NOT VIOLATE)

### ⚠️ 1. Lenis Smooth Scroll Safety
- **NEVER** add `scroll-behavior: smooth;` to `globals.css` or `html`/`body`.
- **NEVER** add `h-full` or `overflow: hidden` to `html`/`body`.
- *Why:* Lenis manages smooth scrolling via direct transform interpolation. Native `scroll-behavior: smooth` or fixed heights conflict with Lenis document height metrics, freezing scroll near the footer.
- Lenis is wrapped in `src/components/effects/SmoothScroll.tsx` and automatically notifies GSAP via `ScrollTrigger.update()`.

### ⚠️ 2. GSAP Animation Contexts
- Always wrap GSAP timelines/scrollTriggers inside a `gsap.context()` within `useEffect`:
  ```typescript
  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP timelines here
    });
    return () => ctx.revert(); // Essential cleanup to avoid duplicate triggers on re-render
  }, []);
  ```

### ⚠️ 3. Tailwind CSS v4 Configuration
- Tailwind v4 does **NOT** use `tailwind.config.js` or `tailwind.config.ts`.
- All theming is configured inline inside `src/app/globals.css` via:
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @import "lenis/dist/lenis.css";
  @theme inline { ... }
  ```
- Do not attempt to generate or import a legacy `tailwind.config.js`.

### ⚠️ 4. Image Aspect Ratios & Card Standardizations
- Developer project cards standard: `aspect-[16/9.5]` with `object-cover object-top`.
- Web design cards standard: `aspect-[16/10]` with `object-cover object-top`.
- All newly added assets in `public/` should be converted to `.webp` (or lightweight `.svg`) to prevent multi-megabyte bundle bloat.

### ⚠️ 5. Action Button Labels
- Keep action button labels concise ("Live", "GitHub", "Figma", "Know More") to prevent button text wrapping and horizontal overflow on 320px–420px mobile screens.

### ⚠️ 6. Local Custom Fonts
- Local fonts are loaded via `next/font/local` in components that need them:
  - `MortendBold.otf` (`src/fonts/MortendBold.otf`)
  - `FeelingPassionate.ttf` (`src/fonts/FeelingPassionate.ttf`)
  - `Gilroy-Black.ttf` (`src/fonts/Gilroy-Black.ttf`)
  - `Rockybilly.ttf` (`src/fonts/Rockybilly.ttf`)
- Do not convert these to raw web `@font-face` rules to avoid SSR hydration mismatches.

---

## 6. Developer Workflows & How-To Recipes

### How to Run Locally
```bash
npm run dev            # Starts Next.js with Turbopack at http://localhost:3000
npm run build          # Production build verification (always run to check TypeScript/lint)
npm run lint           # Runs ESLint 9 checks
npm run sync:projects  # Fetches latest public repos from GitHub (Bored008) and updates src/data/projects.ts
```

### How to Add a New Developer Project
1. Put the mockup image into `public/` (e.g. `public/MyProject.webp`).
2. Open `src/data/projects.ts` and append an entry to `projectsData`:
   ```typescript
   {
     title: "Project Name",
     img: "/MyProject.webp",
     link: "https://deployed-url.vercel.app/",
     githubLink: "https://github.com/Bored008/repo",
     liveLink: "https://deployed-url.vercel.app/",
     imgClass: "rounded-[12px] border-2 border-t-1 border-white",
     desc: "2-3 sentences explaining the problem solved and core features.",
     tags: ["Next.js", "TypeScript", "TailwindCSS"]
   }
   ```
3. The project automatically appears in both the Home page carousel (`src/sections/Projects.tsx`) and the `/projects` gallery page!

### How to Add a New UI/UX Design
1. Put the mockup image into `public/` (e.g. `public/DesignName.webp`).
2. Open `src/data/webdesign.ts` and append an entry to `designsData`:
   ```typescript
   {
     title: "Design Name",
     img: "/DesignName.webp",
     link: "https://www.figma.com/design/...",
     desc: "Overview of visual hierarchy, UX problem, and design decisions.",
     tags: ["Figma", "UI/UX"]
   }
   ```
3. The design automatically appears in both the Home page carousel and the `/designs` gallery page!

### How to Update Resumes
- The dual resumes reside directly in `public/`:
  - Developer: `public/Himanshu_Resume_Developer.pdf`
  - Designer: `public/Himanshu_Resume_UIUXDesigner.pdf`
- Configuration and download paths are in `src/components/ResumeModal.tsx`.
- Next.js redirect from legacy `/Himanshu_D_Resume.pdf` is maintained in `next.config.ts`.

---

## 7. Fast Verification Checklist for Any Agent Making Changes
Whenever you make changes to this codebase:
1. Run `npm run build` to confirm zero TypeScript compilation errors and static page generation success.
2. Check that no unintentional files were created in root or `src/`.
3. Verify responsive layout classes support both mobile (`max-w-[420px]`, px-[20px]–[30px]) and desktop (`max-w-[1440px]`, `md:px-[90px]` or `md:px-[126px]`).
4. Avoid verbose explanations or unnecessary file scans.
