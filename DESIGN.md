Design System --- Wedding Photography Website
1. Purpose and source of truth
Recreate the supplied full-page wedding-photography website reference as
closely as possible in the existing Next.js project. Treat the reference
image in public/ as the visual source of truth for layout,
proportions, image crops, line placement, section rhythm, the "Let's
begin" section, and footer.

The written measurements below are explicit requirements. Where the
screenshot and a written measurement conflict, inspect both carefully
and prioritize the stated measurements for that element while preserving
the overall reference composition. Do not render the reference
screenshot as the website itself.
2. Visual direction
- Style: cinematic, elegant, editorial wedding photography.
- Overall palette: black, white, warm off-white, and subtle gray.
- Use generous negative space, restrained transitions, carefully
  aligned content, and thin hairline rules.
- Avoid generic wedding-template styling, unnecessary cards,
  gradients, drop shadows, rounded UI, decorative icons, or extra
  colors unless visible in the reference or needed for accessible
  interaction states.
- Photography is the primary visual content. Preserve each provided
  image and use intentional object-fit / object-position cropping
  rather than stretching.
- Match the reference's section order and visual density.
3. Design tokens
Create centralized CSS variables and/or Tailwind theme tokens. Do not
scatter repeated raw values throughout components.

Suggested initial tokens (refine by inspecting the reference and
existing assets):
:root {
  --color-black: #080808;
  --color-white: #ffffff;
  --color-off-white: #f7f5f2;
  --color-gray-line: #d9d6d2;
  --color-gray-muted: #8b8782;
  --color-dark-line: #30302e;

  --page-gutter-desktop: 130px;
  --page-top-rule: 100px;
  --content-max-width: 1440px;

  --font-body: var(--font-montserrat);
  --font-display: var(--font-orange-avenue);
  --font-script: var(--font-dancing-script);

  --text-nav: 14px;
  --text-body: 16px;
  --text-eyebrow: 24px;
  --text-section-heading: 40px;
  --text-editorial-statement: 96px;
  --text-hero-heading: 75px;

  --line-width: 1px;
  --motion-fast: 220ms;
  --motion-standard: 500ms;
  --motion-cinematic: 900ms;
}
These are starting tokens, not permission to ignore the reference.
Adjust palette values after visually inspecting the screenshot. Use
responsive clamp() for typography and fluid spacing while retaining
specified desktop measurements as the desktop baseline.
4. Typography
Load and configure the supplied fonts once, globally: - Montserrat:
navigation, paragraphs, headings, buttons, and interface text. Use the
closest available weights to the requested regular, light, and semibold
styles. Prefer local assets if provided; otherwise use a reliable
project-compatible font loading method. - Orange Avenue Demo:
public/OrangeAvenueDEMO-Regular.otf. Register through
next/font/local if compatible with the installed Next.js version;
otherwise use a well-defined @font-face. Use for expressive display
text. - Dancing Script: section eyebrow text. Use an existing local
font if present; otherwise load it through a supported font-loading
approach.

Create semantic typography components or shared class utilities for
display, heading, eyebrow, body, navigation, and button text. Do not use
heading tags purely for styling.
Desktop type specifications
  Element          Font                              Size Additional
                                                          specification
  Navigation       Montserrat Light                  14px Keep alignment
                                                          and 54px gap
                                                          where layout
                                                          allows

  Hero heading     Orange Avenue                     75px White; target
                   Demo                                   reference
                                                          dimensions
                                                          approx. 547 ×
                                                          197px

  Hero subtitle    Montserrat                        16px White; target
                   Regular                                width approx.
                                                          758px

  Buttons          Montserrat                        16px White text
                   Semibold                               

  Large editorial  Orange Avenue                     96px Black, centered,
  statements       Demo                                   vertically
                                                          centered in
                                                          section

  Section eyebrow  Dancing Script                    24px Centered
                   Regular                                

  Section heading  Montserrat                        40px Line-height 111%
                   Regular                                

  Section          Montserrat Light                  16px Line-height 146%
  subtitle/body                                           

  Founder name     Montserrat                        24px Black
                   Regular                                

  Founder role     Montserrat Light                  16px 

  Process Roman    Orange Avenue                     20px Regular,
  numerals         Demo                                   strikethrough

  Process title    Orange Avenue                     20px White
                   Demo                                   

  Process          Montserrat                        10px Maintain
  description                                             legibility;
                                                          increase if
                                                          necessary on
                                                          small screens

  CTA eyebrow      Montserrat                        14px
                   Regular                                

  CTA heading      Orange Avenue                     64px
                   Demo                                   
  CTA paragraph    Montserrat                        14px 
On small screens, scale sizes responsively with clamp(), sensible
maximum line widths, and deliberate wrapping. Never cause horizontal
overflow just to preserve a desktop text width.
5. Page-wide editorial grid and rules
The grid is a defining part of the design.
- Build one shared, page-level grid/frame component that keeps the
  primary vertical rules aligned from top to bottom.
- Desktop reference: vertical lines are positioned 130px from the left
  and right viewport edges; the top horizontal rule is 100px from the
  top.
- Add thin horizontal rules at the boundaries indicated by the
  reference and specified section sequence.
- Use 1px hairline borders and low-contrast gray on light sections.
- In the full-width black section, continue the grid with subtle
  dark-gray rules rather than light gray.
- Do not draw each line independently with unrelated offsets.
  Centralize the grid geometry.
- Use CSS borders, pseudo-elements, or an SVG only where appropriate.
  Decorative lines must have pointer-events: none and be hidden from
  assistive technology.
- Lines should not create accidental stacking contexts, cover
  interactive controls, or trigger horizontal scroll.
- On tablet and mobile, adapt the side offsets using responsive CSS
  variables or clamp(). Preserve the visual idea while allowing
  narrower gutters; do not retain 130px gutters on narrow screens.
- The top horizontal rule begins at the 100px desktop position.
  Reconcile its relationship to the navigation with the reference
  screenshot.
- Horizontal rules should align with the global grid and section
  transitions.
6. V-shaped image overlays
For full-1.png and full-2.png: - Each section is full viewport
height on desktop (100vh / 100svh with a sensible fallback) and full
width. - Use the supplied image as a cover background or an accessible
<Image> with deliberate cropping. - Recreate the thin white V-shaped
line visible in the reference using a responsive SVG or CSS geometry. -
Keep the V static, white, thin, and positioned to match the screenshot.
Do not animate it. - The overlay must scale with the section and remain
crisp at all viewport widths. - Avoid pointer interception and provide a
sensible mobile crop.
7. Page sections and specifications
Keep this exact order. Implement each section as a separate component
and compose them on the home page.
7.1 Navigation
- Logo: target 165px wide × 70px high on desktop; use the correct
  supplied asset if present.
- Navigation labels: Montserrat Light, 14px.
- Desktop navigation gap: 54px.
- Hide navigation while scrolling down and reveal it while scrolling
  up; make the behavior smooth and avoid jitter.
- Ensure the menu remains usable by keyboard and on mobile. Do not let
  scroll behavior hide a focused or open mobile menu.
- Keep destinations configurable and use anchor links for page
  sections.
7.2 Hero carousel
- Use heroMain.png for all slides until alternative images are
  supplied.
- Automatically change slides with an elegant fade transition. Reusing
  the same image is acceptable as a temporary asset constraint, but
  vary slide state only if there is meaningful copy or overlay
  variation; do not create fake visual changes.
- Hero heading: Orange Avenue Demo, 75px desktop, white, approximate
  target box 547 × 197px.
- Subtitle: Montserrat Regular, 16px, white, approximate target width
  758px.
- Buttons: Montserrat Semibold, 16px, white.
- Include thumbnail navigation images around 55 × 82px if suitable
  thumbnail assets exist. Use intentional crops; if the hero is the
  only asset, use the same image as a temporary thumbnail and document
  it.
- Maintain 100px vertical spacing between the hero and the next
  horizontal rule/image relationship as specified, matching the
  screenshot's actual composition.
- Use accessible controls, pause/stop behavior where appropriate, and
  avoid overly rapid autoplay.
7.3 Large editorial statement
- Centered black Orange Avenue Demo text, 96px desktop.
- Place the text centrally with generous vertical space.
- Animate with a subtle cinematic fade-up, triggered once on entering
  the viewport.
- Honor prefers-reduced-motion.
7.4 Portfolio
- Eyebrow: Dancing Script, 24px, centered.
- Heading: Montserrat Regular, 40px, line-height 111%.
- Subtitle: Montserrat Light, 16px, line-height 146%.
- Use /Portfolio/p1.png, /Portfolio/p2.png, /Portfolio/p3.png.
- Infinite looping carousel with animated controls.
- Center image must be visibly larger than the left and right images.
  Side images remain visible when space permits.
- Support keyboard, touch, and pointer interactions. Dragging may be
  included if stable.
- Keep image aspect ratios and crop positions deliberate; never
  stretch.
- Provide editable sample wedding names, locations, and descriptions
  in data, not hardcoded inside layout markup.
- On mobile, prioritize a readable active image and accessible
  controls rather than squeezing all three images.
7.5 Black section
- Full-bleed black section.
- Continue the page's grid lines using subtle dark-gray rules.
- Preserve the reference's height, spacing, and content. Do not invent
  content if the reference does not show any.
7.6 About / founder
- Eyebrow: Dancing Script, 24px, centered.
- Heading: Montserrat Regular, 40px, line-height 111%.
- Paragraph: Montserrat Light, 16px, line-height 146%.
- Three images: /me/m1.png, /me/m2.png, /me/m3.png.
- On hover, transition from color to black-and-white (or the inverse
  only if the reference shows that direction). Use a smooth,
  restrained filter transition.
- Touch devices should retain a sensible visual state without relying
  on hover.
- Founder name: "Duvini Rupasinha", Montserrat Regular, 24px, black.
- Role: "Founder and creative director", Montserrat Light, 16px.
- Include a button consistent with the reference and make its
  destination configurable.
7.7 Full-screen image 1
- Asset: /full-1.png.
- Full-width, full viewport height.
- Static white V-shaped overlay, matching the reference.
- Preserve image focal point with responsive object-position.
7.8 Services
- Eyebrow: Dancing Script, 24px, centered.
- Heading: Montserrat Regular, 40px.
- Subtitle: Montserrat Light, 16px, line-height 146%.
- Left column contains the service image /Service/s1.png (confirm
  actual folder spelling/capitalization by inspecting public/).
- Pin the left-side image while the right-side service text panels
  scroll through their content, then release it at the end of the
  section.
- When the active right-side service changes, update the left image to
  its corresponding service image. Until additional images exist,
  reuse s1.png as the placeholder and document this.
- Use GSAP ScrollTrigger for pinning/active-panel synchronization;
  ensure correct cleanup and avoid nested scroll containers.
- Disable or simplify pinning on small screens if it harms usability
  or performance.
- Create service content as editable data.
7.9 Scrolling image gallery
- Seven images arranged with an intentionally varied, scattered
  editorial composition.
- Inspect public/ to identify suitable existing images; do not
  invent paths.
- Use restrained parallax or scroll movement only if it matches the
  reference and remains stable.
- Prevent layout shifts by defining image dimensions/aspect ratios
  before loading.
- Avoid overlapping interactive content, clipped images, jitter, and
  collisions at responsive breakpoints.
- Respect reduced-motion settings.
7.10 Second large editorial statement
- Centered black Orange Avenue Demo, 96px desktop.
- Generous vertical spacing.
- Cinematic fade-up triggered on entry; respect reduced-motion.
7.11 Full-screen image 2
- Asset: /full-2.png.
- Full-width, full viewport height.
- Static white V-shaped overlay matching the reference.
7.12 Process
- Eyebrow: Dancing Script, 24px, centered.
- Heading: Montserrat Regular, 40px.
- Subtitle: Montserrat Light, 16px, line-height 146%.
- Four cards use /Process/ps.1.png, /Process/ps.2.png,
  /Process/ps.3.png, /Process/ps.4.png.
- Roman numeral: Orange Avenue Demo, 20px, strikethrough.
- Card title: Orange Avenue Demo, 20px, white.
- Card description: Montserrat, 10px, but keep accessible legibility
  on mobile.
- Include a white V-shaped line between cards as shown in the
  reference.
- Match card layout, overlays, and image crops to the screenshot. Keep
  content in data.
7.13 Reserved section
- After Process, retain an intentional empty space for a future
  section.
- Include the horizontal rule before and after it as specified.
- Do not fill this area with invented copy, cards, or imagery.
- Make its height configurable with a named token or prop.
7.14 FAQ
- Eyebrow: Dancing Script, 24px, centered.
- Heading: Montserrat Regular, 40px.
- Subtitle: Montserrat Light, 16px.
- Build an accessible single-open accordion: opening one question
  closes the previously open question.
- Write realistic sample wedding-photography questions and answers
  covering booking, packages, availability, delivery, and preparation.
- Store questions and answers in data.
- Use semantic buttons, keyboard operation, visible focus states, and
  appropriate ARIA attributes.
7.15 CTA
- Asset: cta.png (verify exact location and capitalization).
- Eyebrow: Montserrat Regular, 14px.
- Heading: Orange Avenue Demo, 64px.
- Paragraph: Montserrat, 14px.
- Match the screenshot's layout, image crop, spacing, and text
  contrast.
- Keep CTA links functional and configurable.
7.16 "Let's begin" section and footer
- Reproduce these areas as closely as possible to the uploaded
  full-page reference, including layout, image placement, text,
  spacing, rules, and alignment.
- Inspect the bottom of the reference carefully; do not substitute a
  generic footer.
- Preserve readable reference copy exactly where practical.
- If text is illegible, use a restrained editable placeholder and
  document the assumption.
- All links should work or be clearly configurable; do not invent
  social URLs, email addresses, or phone numbers.
8. Animation system
Use the libraries for distinct responsibilities to avoid conflicts: -
Framer Motion: component transitions, carousel state transitions
where appropriate, hover states, FAQ accordion transitions, and simple
viewport reveals. - GSAP + ScrollTrigger: pinned services section,
coordinated scroll-linked sequences, and complex timeline
choreography. - Lenis: smooth scrolling, integrated correctly with
GSAP's ticker/ScrollTrigger according to the installed versions and
official APIs.

Rules: - Inspect installed versions before choosing APIs or changing
dependencies. - Do not animate the same element/property simultaneously
with Framer Motion and GSAP. - Initialize browser-only animation code in
client components/effects and clean up all listeners, timelines,
ScrollTriggers, and Lenis instances. - Avoid hydration errors, layout
shifts, long main-thread work, and animation on every element. - Respect
prefers-reduced-motion; provide a reduced-motion path and
disable/simplify autoplay, parallax, pinning, and long transitions where
appropriate. - Keep motion elegant and restrained; never sacrifice
readability or navigation usability.
9. Responsive behavior
Test at representative mobile, tablet, laptop, and wide-desktop widths.
At minimum: - Mobile: 375px and 390px - Tablet: 768px - Laptop: 1280px -
Desktop: 1440px

Requirements: - Use responsive Tailwind utilities and clamp() where
appropriate. - No unintended horizontal overflow. - Grid side margins
shrink on mobile. - Navigation transforms into an accessible mobile
pattern if the reference cannot fit. - Typography wraps naturally and
remains legible. - Carousels remain usable with touch. - Pinned service
layout degrades gracefully on mobile. - Full-screen image focal points
are reviewed at each breakpoint. - Decorative grid lines never obscure
text or controls.
10. Accessibility and performance
- Use semantic landmarks and heading hierarchy.
- Provide meaningful alt text for informative images and empty alt for
  purely decorative imagery.
- All controls must be keyboard accessible with visible focus states.
- Ensure readable contrast and touch target sizes.
- Avoid unnecessary client components; use server components where
  possible and isolate browser-only animation in client components.
- Use next/image when appropriate and configure sizing/sizes
  correctly; do not force remote image config for local public assets.
- Reserve image dimensions to avoid cumulative layout shift.
- Keep dependencies minimal and compatible with the existing project.
- Do not disable TypeScript, linting, or build checks to hide
  problems.
11. Missing assets and assumptions
All specified assets are expected to exist, but verify them. If an asset
is missing: 1. Keep the section and layout intact. 2. Search for a
suitable existing local asset in public/. 3. If no suitable image
exists, use a neutral, non-broken placeholder that respects the palette.
4. Report the missing path and any substitution in a final asset audit.
5. Do not invent external image URLs or claim that an asset was found
when it was not.

Check filename case exactly because deployment may run on a
case-sensitive filesystem.
12. Definition of done
- The full page follows the reference's section order and overall
  composition.
- Page-wide vertical grid lines remain aligned, and horizontal rules
  occur at the correct boundaries.
- Typography uses the specified fonts and responsive sizes.
- All provided images are correctly located, cropped, and loaded.
- Navigation, carousels, FAQ, buttons, and section anchors work.
- Services pinning and image switching work without ScrollTrigger
  conflicts.
- The "Let's begin" section and footer are not generic replacements.
- Mobile, tablet, and desktop have been checked for overflow and
  layout defects.
- Reduced-motion behavior is respected.
- Lint, TypeScript checks (if configured), and production build have
  been run and their results reported honestly.
13. Implementation notes (added after build)
Stack: Next.js 16.4.2 (App Router, `cacheComponents` on), React 19.3,
Tailwind 4, framer-motion 14, gsap 3.15 (+ScrollTrigger), lenis 1.3.
Added dependencies: `gsap`, `lenis`, `framer-motion` only.

Structure
- `src/app/globals.css`: design tokens (`--grid-gutter`, `--nav-h`,
  `--reserved-height`, colours, motion durations) and `t-*` type utilities.
- `src/app/layout.tsx`: Montserrat / Dancing Script / Jost via next/font/google,
  Orange Avenue via next/font/local (`public/font/OrangeAvenueDEMO-Regular.otf`).
- `src/data/*`: all copy, image paths and links (nav, hero, portfolio, about,
  services, gallery, process, faq, cta, inquiry/footer).
- `src/components/layout`: `PageGrid` (single source of vertical/top rules),
  `HorizontalRule`, `VLineOverlay`.
- `src/components/sections`: one component per section; `src/components/motion`:
  Lenis+GSAP `SmoothScroll`, `Intro`, `Reveal`.
- Library split: Framer Motion = hero crossfade, reveals, FAQ height, intro;
  GSAP ScrollTrigger = services pin + active-panel sync; the portfolio carousel
  uses CSS transitions. No element is animated by two libraries.

Asset audit (actual paths differ from the brief)
- Images live under `public/images/...`; font under `public/font/`.
- Process files are `ps1.png`–`ps4.png` (not `ps.1.png`); `Service/s1.png`,
  `Me/m1-3.png` and `Portfolio/p1-3.png` are capitalised as shown.
- Hero: only `heroMain.png` exists, so all five slides reuse it; thumbnails use
  the supplied `Hero/h1-h5.png` (55x82).
- Services: only `s1.png` exists, so all four services reuse it.
- Gallery: the brief says seven images but only `Scroll-full/sf1-sf6.png` exist
  and Home.png shows six tiles; six are rendered.
- No WhatsApp floating button is rendered (reference shows one, but no URL was supplied).

Assumptions and deviations from the reference
- The reference has no black section between Portfolio and About; none was
  invented. The black area at the page foot is the "Let's begin" section.
- The "V-shaped" overlays and process separators in the reference are thin
  vertical hairlines on the grid; they are implemented as such.
- Full-1/full-2 use `100svh` as specified; the source images are 1440x630, so on
  tall viewports they are cropped and upscaled (softer than the reference).
- Dark sections reuse the shared grid gutter (reference lines sit ~14px further out).
- Services 2-4, portfolio captions, FAQ answers, the process subtitle ending and
  the form select options are sample copy, easy to replace in `src/data`.
- The inquiry form is a non-sending demo until `inquiry.formAction` is set.
  Contact details in the footer are the reference placeholders and are not linked.
- Footer/form typeface (Jost) was chosen by eye from the reference.
- Hero slide order of thumbnails follows filename order h1-h5.

Verification performed
- `npx tsc --noEmit`, `npx eslint`, `npx next build`: all pass.
- Headless Chrome (CDP) at 375/390/768/1280/1440: no horizontal overflow, no
  console errors or hydration warnings; FAQ single-open, portfolio next/keyboard,
  hero thumbnails, nav hide/reveal, mobile menu, and services image switching
  checked programmatically; desktop sections compared visually to Home.png.
- Not performed: real touch/swipe devices, Safari/Firefox, screen-reader pass,
  pixel-diff against Home.png, hover colour-to-greyscale visual check.
