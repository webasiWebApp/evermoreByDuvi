# Graph Report - Project  (2026-10-21)

## Corpus Check
- Large corpus: 38 files · ~1,033,009 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 98 nodes · 111 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Config
- ESLint and Package Meta
- Next Config and Layout
- Page Section Specs
- Dev Dependencies
- Agent Rules and Workflow
- Animation and Interactions
- Editorial Layout Components
- NPM Scripts
- Runtime Dependencies
- Design Tokens
- README Boilerplate

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Animation System (Framer Motion, GSAP, Lenis)` - 6 edges
3. `scripts` - 5 edges
4. `next` - 4 edges
5. `Design Tokens` - 4 edges
6. `Page-wide Editorial Grid and Rules` - 4 edges
7. `V-shaped Image Overlays` - 4 edges
8. `Hero Carousel` - 3 edges
9. `Reusable Components (PageGrid, VLineOverlay, etc.)` - 3 edges
10. `eslint` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Completion Standard and Final Report` --semantically_similar_to--> `Definition of Done`  [INFERRED] [semantically similar]
  PROMPT.md → DESIGN.md
- `Reusable Components (PageGrid, VLineOverlay, etc.)` --implements--> `Page-wide Editorial Grid and Rules`  [INFERRED]
  PROMPT.md → DESIGN.md
- `Reusable Components (PageGrid, VLineOverlay, etc.)` --implements--> `V-shaped Image Overlays`  [INFERRED]
  PROMPT.md → DESIGN.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Home page section sequence** — design_navigation, design_hero_carousel, design_editorial_statement, design_portfolio, design_black_section, design_about_founder, design_fullscreen_images, design_services, design_gallery, design_process, design_reserved_section, design_faq, design_cta, design_lets_begin_footer [EXTRACTED 1.00]
- **Design foundations (tokens, typography, grid)** — design_design_tokens, design_typography, design_page_grid, design_v_overlays [INFERRED 0.85]

## Communities (12 total, 1 thin omitted)

### Community 0 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 1 - "ESLint and Package Meta"
Cohesion: 0.13
Nodes (14): eslintConfig, name, private, version, eslint, eslint-config-next, react, react-dom (+6 more)

### Community 2 - "Next Config and Layout"
Cohesion: 0.18
Nodes (6): nextConfig, next, src_app_globals, geistMono, geistSans, metadata

### Community 3 - "Page Section Specs"
Cohesion: 0.20
Nodes (9): About / Founder, Accessibility and Performance, CTA Section, Scrolling Image Gallery, Let's begin section and Footer, Navigation, Portfolio Carousel, Reserved Section (+1 more)

### Community 4 - "Dev Dependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/turbopack, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "Agent Rules and Workflow"
Cohesion: 0.29
Nodes (5): Next.js breaking changes notice, Definition of Done, Completion Standard and Final Report, Section Implementation Order (17 sections), Mandatory Workflow Phases 1-5

### Community 6 - "Animation and Interactions"
Cohesion: 0.33
Nodes (6): Animation System (Framer Motion, GSAP, Lenis), Large Editorial Statements, FAQ Accordion, Hero Carousel, Missing Assets and Assumptions, Services (pinned)

### Community 7 - "Editorial Layout Components"
Cohesion: 0.33
Nodes (6): Black Section, Full-screen Images 1 and 2, Page-wide Editorial Grid and Rules, Process Cards, V-shaped Image Overlays, Reusable Components (PageGrid, VLineOverlay, etc.)

### Community 8 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 9 - "Runtime Dependencies"
Cohesion: 0.50
Nodes (4): dependencies, next, react, react-dom

### Community 10 - "Design Tokens"
Cohesion: 0.67
Nodes (3): Design Tokens, Typography, Visual Direction

## Knowledge Gaps
- **59 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 64 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Next Config and Layout` to `ESLint and Package Meta`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `ESLint and Package Meta`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `scripts` connect `NPM Scripts` to `ESLint and Package Meta`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Animation System (Framer Motion, GSAP, Lenis)` (e.g. with `Large Editorial Statements` and `Hero Carousel`) actually correct?**
  _`Animation System (Framer Motion, GSAP, Lenis)` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `ESLint and Package Meta` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._