# BreakPatch — Development Checklist

**Objective:** Establish the frontend foundation, implement the four-theme system, build reusable components, finish the responsive navbar and footer, and develop the first hero section.

**Workflow:** Check tasks using `- [x]` as they are completed. Each phase ends with a Git commit. Use the PureRef prototypes as your visual reference.

## Phase 1 — Repository & project setup

- [x] Create a GitHub repository named `breakpatch`.
- [x] Initialise Next.js with App Router, TypeScript, ESLint and `src/` directory.
- [x] Configure the `@/*` import alias.
- [x] Install Sass, next-themes, next-intl, Motion, Lucide, Locomotive Scroll, Three.js, R3F and Drei.
- [x] Add `.env.local` and `.env.example`; never commit secrets.
- [x] Configure ESLint, Prettier and TypeScript strict mode.
- [x] Write an initial README with project purpose and tech stack.
- [x] Commit: `chore: initialise BreakPatch application`.

```bash
npx create-next-app@latest breakpatch --ts --eslint --app --src-dir --import-alias "@/*"
cd breakpatch
npm i sass next-themes next-intl motion lucide-react locomotive-scroll three @react-three/fiber @react-three/drei
npm i -D prettier @types/three
git add .
git commit -m "chore: initialise BreakPatch application"
```

## Phase 2 — Folder architecture

- [x] Create the directory structure below.
- [x] Separate shared UI components from layout components.
- [x] Keep animation utilities independent from components.
- [x] Reserve `three/` for procedural geometry, shaders and GLTF assets.
- [x] Create `data/` for temporary case-study data before adding Supabase.

```text
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── cases/
│       ├── methodology/
│       ├── lab/
│       ├── contributions/
│       └── about/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Text/
│   │   ├── Heading/
│   │   └── Section/
│   ├── layout/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Container/
│   ├── home/
│   │   └── Hero/
│   └── three/
│       ├── Terrain/
│       ├── Atmosphere/
│       └── Lock/
├── animations/
│   ├── variants.ts
│   ├── transitions.ts
│   └── presets.ts
├── providers/
│   ├── AppProviders.tsx
│   ├── ScrollProvider.tsx
│   └── RouteThemeSync.tsx
├── theme/
│   ├── palette.ts
│   └── theme.types.ts
├── styles/
│   ├── globals.scss
│   ├── _tokens.scss
│   ├── _typography.scss
│   ├── _mixins.scss
│   └── _animations.scss
├── i18n/
├── messages/
│   ├── en.json
│   └── de.json
├── lib/
└── data/

public/
├── models/
├── images/
└── textures/
```

## Phase 3 — Design system: colours, typography & spacing

- [ ] Create `_tokens.scss` with global CSS custom properties.
- [ ] Define Green, Red, Blue and Purple theme selectors.
- [ ] Define semantic colours for success, warning, danger and muted states.
- [ ] Define spacing scale, container widths, radii and shadows.
- [ ] Configure fonts with `next/font`.
- [ ] Set up responsive heading and body typography.
- [ ] Ensure accessible contrast for text and controls.
- [ ] Commit: `style: establish BreakPatch design system`.

**Core palette**

| Token              | Hex       |
| ------------------ | --------- |
| `--primary`        | `#39FF71` |
| `--red`            | `#FF416C` |
| `--blue`           | `#20C8FF` |
| `--purple`         | `#BA75FF` |
| `--background`     | `#050A0D` |
| `--surface`        | `#0A1418` |
| `--surface-raised` | `#102026` |
| `--heading`        | `#F3F7FA` |
| `--foreground`     | `#E2EDF1` |
| `--paragraph`      | `#B5C3CB` |
| `--border`         | `#234149` |

**Font proposal:** Space Grotesk (headings), Inter (body), JetBrains Mono (code/terminal).

## Phase 4 — Providers, themes & smooth scrolling

- [ ] Create `AppProviders.tsx` for provider composition.
- [ ] Configure `next-themes` with `data-team` and values `green`, `red`, `blue`, `purple`.
- [ ] Set Green as the default theme.
- [ ] Create `RouteThemeSync.tsx` to select themes from case-study routes.
- [ ] Map `/cases/[id]/red`, `/blue`, `/purple` to their corresponding modes.
- [ ] Configure Locomotive Scroll in `ScrollProvider.tsx`.
- [ ] Test scroll behaviour on mobile, route changes and back/forward navigation.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Configure `next-intl` routes for `/en` and `/de`.
- [ ] Verify refreshes preserve the intended locale and case-study mode.
- [ ] Prevent theme flashes or hydration mismatches on initial load.
- [ ] Commit: `feat: implement providers and theme architecture`.

**Theme policy:** General pages use Green. Individual case-study phase routes use Red, Blue or Purple; the route is the source of truth, not an unrelated previously selected theme.

## Phase 5 — Typography & animation primitives

- [ ] Create `Heading.tsx` supporting semantic heading levels and accent text.
- [ ] Create `Text.tsx` for paragraphs, labels, captions and metadata.
- [ ] Create `Container.tsx` for standard widths.
- [ ] Create `Section.tsx` for shared vertical rhythm.
- [ ] Add shared reveal, fade and stagger variants to `animations/variants.ts`.
- [ ] Add timings and easing in `animations/transitions.ts`.
- [ ] Add reusable entrance/hover presets in `animations/presets.ts`.
- [ ] Test animations on mobile and with reduced motion.
- [ ] Commit: `feat: add typography and motion primitives`.

**Guideline:** Motion for entrance/interaction choreography; CSS for lightweight colour and hover transitions.

## Phase 6 — Buttons, cards & reusable components

- [ ] Build `Button` variants: primary, secondary, outline and ghost.
- [ ] Support internal Next.js links and external links.
- [ ] Support icons, loading, disabled and focus states.
- [ ] Create `Card` with theme-aware border and restrained glow.
- [ ] Create `Badge` and `SeverityBadge`.
- [ ] Create reusable `SectionHeading`.
- [ ] Create `IconLabel` and `StatCard`.
- [ ] Test all components under Green, Red, Blue and Purple.
- [ ] Test hover, keyboard focus, contrast and mobile tap targets.
- [ ] Commit: `feat: build reusable UI component library`.

**Guideline:** Severity colours retain their own meaning regardless of the active team theme.

## Phase 7 — Responsive navbar

- [ ] Build desktop navbar with BreakPatch identity and subtitle.
- [ ] Add Home, Case Studies, Methodology, Lab, Contributions and About.
- [ ] Add EN/DE language switcher.
- [ ] Add animated active-route indicator and accent glow.
- [ ] Build responsive mobile navbar and expandable menu.
- [ ] Support Escape, focus management and accessible keyboard navigation.
- [ ] Synchronise navbar colours with the active team theme.
- [ ] Test compatibility with Locomotive Scroll.
- [ ] Commit: `feat: implement responsive navigation`.

## Phase 8 — Responsive footer

- [ ] Build desktop footer matching the PureRef mockup.
- [ ] Add navigation, featured case studies and GitHub links.
- [ ] Add BreakPatch tagline and mission statement.
- [ ] Add locale-aware text and dynamic copyright year.
- [ ] Build stacked mobile footer.
- [ ] Reserve a scene/background region for future procedural terrain.
- [ ] Use a temporary CSS gradient until terrain is built.
- [ ] Add theme-driven accent glows.
- [ ] Commit: `feat: implement responsive footer`.

## Phase 9 — Four-theme validation

- [ ] Confirm Green updates primary actions, accents, borders and glow.
- [ ] Confirm Red updates the same tokens coherently.
- [ ] Confirm Blue updates the same tokens coherently.
- [ ] Confirm Purple updates the same tokens coherently.
- [ ] Verify navbar, footer and UI components transition together.
- [ ] Confirm `/en` and `/de` behave correctly across modes.
- [ ] Verify case-study phase URLs select the correct mode.
- [ ] Verify back/forward navigation, refresh, reduced motion and mobile rendering.
- [ ] Resolve hydration mismatches or initial colour flashes.
- [ ] Commit: `test: validate responsive four-theme system`.

## Phase 10 — Homepage hero

- [ ] Create `Hero.tsx` with semantic `h1` and explanatory copy.
- [ ] Add Explore Case Studies and View GitHub actions.
- [ ] Add four proof-of-work feature labels.
- [ ] Implement desktop two-column composition.
- [ ] Implement mobile stacked composition.
- [ ] Add restrained staggered text reveals.
- [ ] Use a static placeholder for the security shield/padlock initially.
- [ ] Add a dynamically loaded R3F Canvas boundary.
- [ ] Create procedural mountain geometry with GLSL displacement.
- [ ] Create terrain grid lines and spatial colour gradients.
- [ ] Add very subtle wave motion.
- [ ] Add restrained atmospheric haze and light effects.
- [ ] Synchronise shaders with all four themes.
- [ ] Optimise GPU load and provide a static/reduced-motion fallback.
- [ ] Commit: `feat: implement BreakPatch homepage hero`.

## First development cycle — Definition of done

- [ ] Repository is committed and builds cleanly.
- [ ] EN/DE routing works.
- [ ] Four themes transition correctly and follow routes.
- [ ] Reusable UI and typography components are complete.
- [ ] Desktop/mobile navbar and footer work.
- [ ] Smooth scrolling is stable and accessible.
- [ ] Homepage hero is responsive and visually close to the prototype.
- [ ] R3F is decorative and does not block reading, controls or navigation.
- [ ] Project is ready for Case Study 001 — IDOR/BOLA.

---

**Next milestone:** Build a complete, isolated IDOR/BOLA investigation — vulnerable implementation, patched implementation, attack evidence, regression tests and professional report. Keep the portfolio's proof of security engineering ahead of further visual polish.
