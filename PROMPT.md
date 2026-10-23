Claude Code Implementation Prompt --- Wedding Photography Website
You are working inside an existing Next.js + Tailwind CSS project.
Your task is to recreate the supplied wedding-photography website
reference with high visual fidelity, implement the full page, and verify
the result.

Read Design.md completely before implementation. The reference
screenshot is already in the project's public/ directory. Locate it
(likely public/Home.png or a similarly named file), open/inspect it,
and use it as the source of truth. Do not render the screenshot itself
as the page.
Primary objective
Build the full responsive page described in Design.md, matching the
reference's composition, typography, spacing, photography, grid lines,
V-shaped overlays, "Let's begin" section, and footer as closely as
possible.

Use: - Existing Next.js setup and Tailwind CSS - Framer Motion for
component-level animation and interaction - GSAP + ScrollTrigger for
complex scroll choreography and pinned service content - Lenis for
smooth scrolling, integrated correctly with GSAP - Fonts: Montserrat,
Dancing Script, and local Orange Avenue Demo at
public/OrangeAvenueDEMO-Regular.otf

Do not replace working project configuration without a clear need.
Preserve existing routes and functionality. Do not introduce a new
framework or unnecessary dependencies.
Mandatory workflow
Phase 1 --- Inspect before editing
1. Inspect the repository structure, package.json, lockfile, Next.js
   version, Tailwind version/configuration, App Router or Pages Router
   setup, lint/type scripts, and existing design conventions.
2. Inspect public/ recursively. Make an asset inventory of every
   image and font relevant to the page. Verify exact filename
   capitalization, dimensions, and likely role. Locate the reference
   screenshot and inspect the full page, especially the bottom "Let's
   begin" and footer areas.
3. Identify the provided files:
   - heroMain.png
   - /Portfolio/p1.png, /Portfolio/p2.png, /Portfolio/p3.png
   - /me/m1.png, /me/m2.png, /me/m3.png
   - /full-1.png, /full-2.png
   - /Service/s1.png (verify folder capitalization/spelling)
   - /Process/ps.1.png, /Process/ps.2.png, /Process/ps.3.png,
     /Process/ps.4.png
   - cta.png
   - OrangeAvenueDEMO-Regular.otf
   - logo asset, seven gallery images, and any additional
     hero/thumbnail assets
4. If an asset name differs, locate the actual file and use the real
   path. If an asset is missing, keep the design intact, use an
   appropriate existing local placeholder if possible, and record the
   missing asset. Never leave broken image icons or invent asset paths.
5. Review the screenshot and this brief together. Note any genuine
   ambiguity; use reversible, documented assumptions rather than
   stopping for minor details.
Phase 2 --- Documentation
Create or update these two files in the project root: - Design.md:
complete reusable visual system, section-by-section design requirements,
typography, colors, grid geometry, animation, responsiveness,
accessibility, and acceptance criteria. Use the provided Design.md
brief as the baseline. - prompt.md: this implementation prompt and the
workflow/quality requirements.

Do not overwrite unrelated documentation. If either file already exists,
inspect it first and preserve useful project-specific details while
reconciling conflicts.
Phase 3 --- Establish foundations
1. Define centralized design tokens for colors, typography, spacing,
   grid lines, content widths, and motion durations.
2. Load Montserrat and Dancing Script using an appropriate
   project-compatible method. Load Orange Avenue Demo from
   public/OrangeAvenueDEMO-Regular.otf with next/font/local if
   compatible with the installed version; otherwise use a well-defined
   @font-face.
3. Implement a shared page-grid/frame component. Desktop target:
   continuous vertical rules 130px from each viewport edge and a top
   horizontal rule at 100px. Adapt gutters responsively. Horizontal
   section dividers must align consistently; dark sections use subtle
   dark-gray grid lines.
4. Create reusable components before composing sections. At minimum,
   consider:
   - PageGrid / PageFrame
   - HorizontalRule
   - SectionHeading / typography variants
   - Button / link-button
   - HeroCarousel
   - PortfolioCarousel
   - ImageWithHoverEffect
   - VLineOverlay
   - SectionReveal
   - ProcessCard
   - FAQAccordion
   - shared image wrapper if useful
5. Keep components focused and strongly typed. Use semantic HTML. Avoid
   a monolithic page component, duplicated styling, excessive prop
   complexity, and premature abstraction.
6. Store repeated content (navigation, slides, portfolio projects,
   services, process steps, FAQ entries, footer links) in typed data
   modules instead of embedding it repeatedly in JSX.
Phase 4 --- Implement the page in reference order
Implement every section in Design.md in this order: 1. Navigation 2.
Hero carousel 3. Large editorial statement 4. Portfolio 5. Full-width
black section 6. About / founder 7. Full-screen image 1 with static
white V overlay 8. Services with pinned left image and
scroll-synchronized right content 9. Seven-image scattered scrolling
gallery 10. Second large editorial statement 11. Full-screen image 2
with static white V overlay 12. Process cards with V separators 13.
Reserved blank section with horizontal rules before and after 14. FAQ
15. CTA using cta.png 16. "Let's begin" section 17. Footer

Do not omit a section because it is complex. For the "Let's begin"
section and footer, inspect the bottom of the actual reference
screenshot and recreate it, rather than using a generic footer template.
Exact visual requirements
- Treat the reference as the visual source of truth. Match layout,
  spacing, alignment, line positions, image crops, and visual
  hierarchy---not just the general theme.
- Use black, white, warm off-white, subtle gray borders, and subtle
  dark-gray rules on black.
- Navigation logo target: 165px wide × 70px high. Navigation labels:
  Montserrat Light 14px, 54px desktop gap.
- Hero heading: Orange Avenue Demo, 75px desktop, white; approximate
  target 547 × 197px. Subtitle: Montserrat Regular 16px, white,
  approximate target width 758px. Buttons: Montserrat Semibold 16px,
  white. Use heroMain.png for every hero slide until more images are
  provided; avoid fake visual changes when the image is identical.
  Fade between slides and provide working controls/thumbnails (55 ×
  82px target where assets allow).
- Large editorial statements: centered black Orange Avenue Demo, 96px
  desktop, subtle cinematic fade-up.
- Section eyebrow: Dancing Script 24px, centered. Section heading:
  Montserrat Regular 40px, line-height 111%. Subtitle/body: Montserrat
  Light 16px, line-height 146%.
- Portfolio: use /Portfolio/p1.png, p2.png, p3.png; infinite
  loop, larger center image, smaller visible side images, animated
  controls, keyboard/touch usability, editable sample
  names/locations/descriptions.
- About: /me/m1.png, m2.png, m3.png; elegant
  color-to-black-and-white hover transition. Founder name "Duvini
  Rupasinha" at Montserrat Regular 24px; role "Founder and creative
  director" at Montserrat Light 16px.
- Full-width images /full-1.png and /full-2.png: 100vh/100svh
  desktop sections with static, thin white V-shaped lines matching the
  screenshot.
- Services: /Service/s1.png; pin left image while right content
  scrolls. Update the left image as the active service changes. Reuse
  s1.png as a documented placeholder if other service images are
  absent. Use GSAP ScrollTrigger with proper cleanup; adapt or disable
  pinning on mobile if necessary.
- Scattered gallery: seven images, deliberately positioned,
  responsive, no collision, jitter, or layout shift.
- Process: /Process/ps.1.png through /Process/ps.4.png; Roman
  numerals Orange Avenue Demo 20px with strikethrough; titles Orange
  Avenue Demo 20px white; descriptions Montserrat 10px but do not
  compromise legibility; include V-shaped separators.
- Leave the requested blank reserved section between Process and FAQ
  with a configurable height and horizontal rules before and after. Do
  not invent content there.
- FAQ: realistic wedding-photography sample Q&A; only one answer open
  at a time.
- CTA: cta.png; eyebrow Montserrat 14px, heading Orange Avenue Demo
  64px, paragraph Montserrat 14px.
- Reproduce the "Let's begin" section and footer from the bottom of
  the screenshot as closely as possible. Preserve any readable text;
  do not invent contact details or social URLs.
- Use responsive clamp() and Tailwind breakpoints. Specified sizes
  are desktop baselines, not fixed values on every screen.
Animation and scrolling requirements
- Use Lenis for smooth scrolling and integrate it correctly with
  GSAP's ticker/ScrollTrigger based on the installed package versions
  and supported APIs.
- Use GSAP + ScrollTrigger for pinned services and complex
  scroll-linked timelines.
- Use Framer Motion for component transitions, hover effects, FAQ
  transitions, and simpler viewport reveals.
- Never let GSAP and Framer Motion control the same element/property
  at the same time.
- Keep animations cinematic, elegant, and restrained.
- Initial loading: brief cinematic intro, without blocking page access
  or causing a long blank screen.
- Navigation hides while scrolling down and reappears while scrolling
  up. Avoid jitter; keep keyboard focus and open mobile navigation
  usable.
- Respect prefers-reduced-motion. Simplify or disable intro,
  autoplay, parallax, smooth scrolling, and pinning as appropriate.
- Clean up event listeners, Lenis instances, GSAP timelines, and
  ScrollTriggers. Avoid hydration issues and browser-only APIs in
  server-rendered code.
Responsive, accessibility, and code-quality requirements
- Test at 375px, 390px, 768px, 1280px, and 1440px.
- No unintended horizontal overflow.
- Grid gutters reduce on mobile; desktop 130px margins must not be
  retained on narrow screens.
- Carousels work with keyboard and touch. Buttons/links have real
  destinations or configurable anchors.
- FAQ uses accessible buttons, keyboard support, ARIA state, and
  visible focus.
- Use semantic headings and landmarks, useful image alt text,
  appropriate contrast, and comfortable touch targets.
- Use Next.js image handling appropriately for local public assets;
  reserve dimensions and avoid layout shift.
- Keep server components by default where possible, with client
  components only where interactivity/browser APIs require them.
- Avoid any where practical, avoid duplicate code, avoid disabling
  lint/type checks, and don't suppress errors to make the build appear
  successful.
- Preserve the existing package manager and lockfile. Add only
  required dependencies, compatible with installed versions.
- Do not rewrite unrelated files or remove existing features.
Phase 5 --- Verify and refine
1. Run the existing lint command, TypeScript check if available, and
   production build. Fix issues caused by your changes.
2. Run the app and inspect the result in a browser if browser/visual
   tools are available. Compare screenshots against the reference at
   desktop and mobile sizes. If browser inspection is unavailable,
   state that honestly and complete all available checks.
3. Inspect the full page, especially grid continuity, hero proportions,
   image crops, portfolio center emphasis, pinned services transitions,
   scattered gallery, process cards, CTA, "Let's begin", and footer.
4. Test navigation hide/reveal, anchor links, hero autoplay and
   controls, portfolio looping, FAQ single-open behavior, service image
   switching, hover behavior, and reduced-motion fallback.
5. Fix overflow, hydration warnings, broken images, animation
   conflicts, missing alt text, and obvious visual mismatches.
6. Report:
   - files created/changed
   - implemented sections and interactions
   - assets that were missing or substituted
   - commands run and whether each passed
   - any visual checks that could not be performed
   - remaining deviations from the reference
Decision policy
Use sensible, reversible engineering judgment for small unspecified
details. Document assumptions in a short section in Design.md or the
final report. Do not ask repeated questions for minor choices. Ask only
if a true blocker prevents a correct implementation.
Completion standard
Do not stop after writing the documentation. Create Design.md and
prompt.md, implement the complete website inside the existing project,
verify it as thoroughly as the environment allows, and provide an honest
final report. Never claim a test, build, browser inspection, or
pixel-perfect match unless you actually performed it.