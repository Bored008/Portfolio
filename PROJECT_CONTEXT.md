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
  - Added code-splitting with `next/dynamic` for below-the-fold sections (`Skills`, `Projects`, `Footer`).
  - Native image attributes: `loading="lazy"` + `decoding="async"` on all below-the-fold images.
- **Card Sizing & Aspect Ratios**:
  - **Projects Carousel**: Standardized all project images to `aspect-[16/9.5] object-cover object-top`, cropped `Docdesign.webp` to the hero section (`2450×1400`), and aligned all cards to equal height using `flex flex-col justify-between`.
  - **Web Designs Carousel**: Converted `Moviely` and `Watch` to full landscape mockups (`1440×823` and `1440×985`). Standardized cards to a 50/50 side-by-side desktop layout with `aspect-[16/10]` and `border-2 border-white rounded-[12px]`.

---

### 4. Working Rules & Token Efficiency
- **Token Efficiency** (`~/.gemini/config/rules/token_efficiency.md`): Conclude turns promptly once verified; avoid unsolicited browser/screenshot loops or extra subagents.
- **Frontend Standards** (`~/.gemini/config/rules/nextjs_frontend_workflow.md`): WebP/Sharp asset requirements, Draco 3D compression, no inline hex styles that break Tailwind hover states, responsive `md:` breakpoints over `sm:`.
