# Portfolio Project — Context & Architecture Guide

> **Note for AI Agents:** Read this file to instantly understand the codebase architecture, design choices, recent optimizations, and project conventions before making changes.

---

### 1. Project Overview & Deployment
- **Repository**: [https://github.com/Bored008/Portfolio](https://github.com/Bored008/Portfolio) (`main` branch)
- **Live URL**: [https://himanshudahiya.vercel.app/](https://himanshudahiya.vercel.app/)
- **Vercel Project ID**: `prj_VpBwxg6tQrq6WM9CyYtNlVDzP4kT`
- **Framework**: Next.js 16 (App Router, Turbopack) + TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Animations**: GSAP 3 (ScrollTrigger, ScrambleTextPlugin), Framer Motion, Lucide React
- **Image Pipeline**: Sharp (WebP at quality 80–85)

---

### 2. Architecture & Directory Structure
- `src/app/page.tsx`: Single-page layout assembling all primary sections.
- `src/sections/`:
  - `Hero.tsx`: Headline animations (`FeelingPassionate` + `MortendBold` fonts), GSAP scramble text, Hero portrait (`/myimage.webp`, eager/high-priority).
  - `About.tsx`: 3D card tilt effect, bio, CV download (`Himanshu_D_Resume.pdf`).
  - `Skills.tsx`: Responsive skill boards for desktop and mobile (`/bars.webp`, `/barsmobile.webp`).
  - `Projects.tsx`: Horizontal carousels for both "Projects" and "Web Designs" with prev/next scroll buttons.
  - `Education.tsx`: Education banner and credentials cards.
  - `FAQ.tsx`: Interactive accordion FAQs with sticky sidebar.
- `src/components/`:
  - `navbar/Navbar.tsx`: Floating pill navbar with active section indicators.
  - `footer/Footer.tsx`: Wave footer (`/footerdesign.webp`, `/footerdesignmobile.webp`), social links.
  - `effects/AnimatedButton.tsx`: Reusable hover-fill button effect.
- `src/data/`:
  - `projects.ts`: Array of developer projects (`Paw`, `DocDesign`, `Github Analyzer`, `AI Health`).
  - `webdesign.ts`: Array of 8 Figma UI/UX designs (`Yanegi`, `FireChem`, `Paw`, `Moviely`, `Docdesign`, `bmw`, `Jewellary`, `Watch`).
  - `skills.ts`: Skill icons and categories.
  - `faq.ts`: FAQ data.

---

### 3. Key Decisions & Recent Fixes
- **TypeScript Conversion**: Full codebase converted from JavaScript (`.jsx`/`.js`) to strict TypeScript (`.tsx`/`.ts`).
- **Asset Optimization**:
  - Replaced >28MB of uncompressed PNGs and Figma SVG wrappers (which embedded raw base64 rasters) with modern `.webp` via Sharp, dropping asset payload by >96%.
- **Smooth Scroll & Footer Fixes**:
  - Imported `lenis/dist/lenis.css`, removed `h-full` from `html` and `scroll-behavior: smooth` from `globals.css` to fix Lenis document height calculation and wheel scrolling freezing near the footer.
  - Connected `useLenis` with `ScrollTrigger.update` and refined footer ScrollTrigger scrub bounds so the footer remains completely visible and scrollable.
  - Converted section imports in `page.tsx` to direct imports to eliminate skeleton height mismatches.
- **Card Spacing & Spacing Optimizations**:
  - **Projects Carousel**: Tightened spacing between project description and tech tags.
  - **Web Designs Carousel**: Replaced `justify-between` with clean vertical grouping (`gap-2.5` / `gap-3`) to eliminate excessive empty space between paragraph text and the Figma tag box / Visit button.
  - Tightened vertical gaps between main sections.

---

### 4. Working Rules & Token Efficiency
- **Token Efficiency** (`~/.gemini/config/rules/token_efficiency.md`): Conclude turns promptly once verified; avoid unsolicited browser/screenshot loops or extra subagents.
- **Frontend Standards** (`~/.gemini/config/rules/nextjs_frontend_workflow.md`): WebP/Sharp asset requirements, Draco 3D compression, no inline hex styles that break Tailwind hover states, responsive `md:` breakpoints over `sm:`.
