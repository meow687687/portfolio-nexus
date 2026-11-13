# Cinematic Digital Surrealism — Experience Redesign Proposal

**Status:** Proposal for review; no website implementation changes are included in this phase.

## 1. Intent and scope

- Reframe the portfolio as a cinematic, typography-driven environment without compromising its readable, evidence-led portfolio content.
- Put the only immersive WebGL/3D scene on `/`, centered on procedural “SUMEET BASFORE” letterforms and an SB monogram.
- Keep `/projects`, `/about`, `/stack`, and `/contact` within the same visual world using strong type, route-specific vector motifs, and restrained motion—not separate 3D scenes.
- Preserve exactly five routes, the existing royal palette and fonts, server-rendered content, project evidence and limitations, semantic markup, keyboard navigation, responsive behavior, and reduced-motion support.
- Keep all useful information available if JavaScript or WebGL is unavailable. A visual effect must never be required to understand or navigate the portfolio.

## 2. Art direction: “The Royal Glyph Chamber”

Treat the homepage as a quiet, monumental type installation: part editorial cover, part carved-letter gallery, with the restraint of a small museum room. The visitor should feel as if they are approaching a name cut into a dark architectural plane—not entering a game, dashboard, or generic sci-fi interface.

Use Imperial Aubergine (`#211626`) as the room and shadow color; Royal Plum (`#44304B`) as the recessed depth; Porcelain (`#F2EDE5`) for the main letter faces and content; and Champagne (`#C5A77B`) for narrow bevels, edge light, and editorial rules. Keep Cormorant Garamond for expressive display typography, Manrope for readable body copy, and IBM Plex Mono for small labels and evidence metadata.

Compose in layers: close foreground letterforms, a dark middle plane, and a fine contour/horizon line receding into space. Use broad, soft key light and a controlled warm rim; the champagne accent should appear as a reflection, not a neon glow. Preserve generous negative space around the real HTML headline, calls to action, and section content.

**Visual references, described in words:** the scale and quiet of an engraved architectural inscription; the hierarchy of a well-composed editorial book jacket; the warm edge glint of a bronze object seen in a dim gallery. Avoid chrome cyberpunk, HUD markings, random particle fields, glitch effects, stock imagery, and ornamental effects without a typographic or architectural purpose.

## 3. Direction and trade-offs

**Recommended:** one custom, procedural Three.js scene, isolated to the homepage and layered behind accessible HTML. Reuse the current GSAP dependency for scroll choreography; use Three.js directly for the scene rather than adding React Three Fiber or an external scene runtime. This gives the single hero scene control over typography geometry, camera, materials, and rendering without turning the rest of the App Router tree into client code.

Alternatives considered:

- **Spline-hosted scene:** quick to art-direct, but adds an external runtime/asset workflow and gives less ownership of the requested procedural geometry and shader details. Not selected.
- **CSS/SVG depth only:** lightest and easiest to support, but cannot deliver the requested true spatial typography and camera movement. Keep it as the essential fallback, not the primary desktop experience.
- **React Three Fiber:** a sound choice for a larger React-managed 3D product, but no separate scene graph or multiple 3D routes are needed here. Avoid the additional dependency and abstraction for one scene; revisit only if the scene becomes substantially more complex.

This is a high-impact visual feature with real GPU, battery, bundle, and accessibility risks. The proposal keeps that complexity bounded to the homepage and makes the non-WebGL experience a first-class design, not an afterthought.

## 4. Homepage storyboard

The homepage keeps its current semantic headline, focus statement, featured projects, and contact links. The scene is decorative; the existing HTML content remains the source of truth.

1. **Threshold — immediate first frame.** The header and hero content render normally. A close, cropped SB form sits within the hero’s visual area, with the contour line establishing a horizon. “Agentic Developer” and the name are readable immediately; there is no full-screen loader or wait-to-enter gate.
2. **Name — camera pullback.** Over the opening moment, the camera withdraws from the monogram and reveals the complete extruded “SUMEET BASFORE” title. The lettering turns only enough to expose its physical sides; a warm edge-light tracks across the bevel. This is spatial staging, not a text fade standing in for 3D.
3. **Orientation — scroll through the hero.** Native vertical scroll drives a short, precomposed camera move: the title settles into a legible plane, the monogram shifts to the margin, and contour lines converge toward the focus section. The movement is limited to the hero’s exit; there is no pinned page, horizontal scroll, or scroll hijack.
4. **Focus — handoff to the portfolio.** As the focus statement enters, the 3D camera comes to rest and the final contour resolves into a static editorial rule. The text remains in normal document flow with a solid, high-contrast backing where needed.
5. **Selected work — evidence remains primary.** The existing four featured project entries stay as readable HTML with their evidence and scope notes. Their numbered rail and fine borders carry the spatial language through restrained 2D line movement; no fake project renders, metrics, or invented product scenes are added.
6. **Exit — contact stays obvious.** Existing “Get in touch” and “Explore projects” links remain keyboard-visible and available without waiting for animation. The scene is stopped when it leaves view; the page ends in the existing editorial footer.

## 5. Typography and material specification

- **Semantic layer:** keep the existing HTML `h1`, name, role, descriptions, and links. The 3D title duplicates the name visually and must be hidden from assistive technology (`aria-hidden`) so it is not read twice.
- **Display:** use Cormorant Garamond for the recognizable high-contrast serif forms. The 3D wordmark is uppercase and custom-spaced; do not stretch glyphs to fit. CSS HTML fallback uses the existing font and appropriate responsive line breaks.
- **Body:** retain Manrope at comfortable mobile and desktop sizes, with a readable line length and unoccluded copy.
- **Labels:** retain IBM Plex Mono for route/section numbers, small evidence labels, and technical metadata. Do not use mono for long-form copy.
- **Letter faces:** porcelain satin enamel, softly lit and low-gloss. **Sides/bevels:** dark plum or muted champagne bronze, with shallow bevels to catch the rim light. **Back plate:** matte aubergine with a small gap behind the letterforms to create real parallax and occlusion.
- Keep the existing colors as CSS design tokens. Champagne is a restrained detail, not a full-screen glow or gradient-filled headline.

## 6. Ambient animation and interaction

The scene should feel alive at rest through intentional, slow movement: a very small camera breathing motion; a broad highlight traveling along the title bevel; and the contour horizon moving subtly in depth. Avoid perpetual particle emission, noisy geometry, rapid rotations, and generic “float everything” motion. The key light and camera should communicate the same gallery-like atmosphere.

Use GSAP ScrollTrigger only as a progress source for the fixed camera beats and existing DOM reveal system. Scrolling remains native; the scene never captures wheel/touch input. Pointer parallax is optional, limited to fine pointers and very small camera offsets. The canvas does not need pointer interaction, orbit controls, or a custom cursor. Pause rendering when the canvas is outside the viewport or the document is hidden, and dispose resources on route change/unmount.

For the four secondary routes, retain the shared header, footer, page header, and content components. Give each page a distinct, lightweight vector accent: a numbered evidence rail on Projects, an oversized typographic margin mark on About, connecting taxonomy rules on Stack, and a converging contact rule on Contact. Reuse `SiteScrollMotion` for low-amplitude, transform/opacity or SVG-stroke movement; keep all details subordinate to content. Do not mount Three.js on these routes.

## 7. Procedural asset and shader plan

Create the hero assets from typography and geometry rather than downloaded models:

1. Verify a local, license-documented Cormorant Garamond font source before creating font geometry. Convert only the glyphs needed for `SUMEET BASFORE` and `SB` into local Three.js typeface data during asset preparation; do not fetch a font or model from a third-party host at runtime.
2. Use Three.js `TextGeometry`/`ExtrudeGeometry` to make one optimized title mesh and a separate overlapping SB monogram. Generate geometry once, center and scale it predictably, and keep the number of materials/draw calls low. The existing 2D/SVG monogram artwork informs the silhouette.
3. Use standard Three.js materials for the main faces and sides. Add one small custom shader/material treatment for a restrained champagne rim or slow specular sweep. Keep it deterministic and driven by a single time/progress value.
4. Build contour planes and architectural frames from a few authored curves/lines. Use no texture maps initially; no volumetric fog, expensive bloom, depth-of-field, or full-screen post-processing is required for the intended look.
5. Create a matching static SVG/CSS composition for fallback, with no dependency on a WebGL screenshot or externally hosted image.

If the converted typeface is too large or the bevel creates excessive geometry, first reduce the glyph subset, bevel segments, and mesh detail. Use Blender only if the desired monogram surface cannot be expressed cleanly as procedural geometry; it is not part of the initial asset path.

## 8. Technical component architecture

Preserve Next.js 16 App Router and the existing server/client boundaries:

- `src/app/page.tsx` remains a Server Component and continues to own the homepage content and project data.
- `HomeHero` remains the semantic HTML owner. It renders the text and fallback immediately, then includes a narrowly scoped client scene host in the existing hero visual region.
- A new client-only scene host checks browser preferences and WebGL capability, then conditionally imports the homepage scene module. Keep the import inside a Client Component: the installed Next.js 16 lazy-loading guide notes that `ssr: false` is supported only in Client Components and that dynamic imports from Server Components do not currently provide the same automatic client code splitting.
- A `HomeHeroScene` module owns the Three.js renderer, scene, camera, geometry/material setup, resize handling, scroll timeline, frame loop, and cleanup. It must not cause the route or shared layout to become a Client Component.
- Reuse `SiteScrollMotion`, `PageHeader`, `Section`, `ProjectCard`, `SiteNavLinks`, typography components, and the current CSS tokens for secondary routes and HTML fallback. Do not duplicate project content in the scene.
- Handle import, renderer, and WebGL context failures by keeping the fallback visible. On context loss, stop the loop, release resources, and leave the document usable.

## 9. Performance strategy and proposed budgets

The targets are **to measure and validate**, not guarantees: 60 FPS on capable desktop hardware and at least 30 FPS on supported mobile devices. Establish a baseline before implementation and profile the production build, not only the development server.

Initial budget hypotheses for the implementation spike (revise only with measured evidence):

- Homepage-only 3D JavaScript chunk: at most 250 KiB gzip.
- Local generated typeface/scene data: at most 100 KiB compressed.
- Visible scene geometry: at most 100,000 triangles; no texture atlas or post-processing in the initial scene.
- Cap device pixel ratio at 1.5 for desktop and 1.0 for the mobile tier; do not render at native high-density DPR by default.

Keep the headline and fallback in server-rendered HTML so text display, first paint, and layout do not wait on Three.js. Reserve the scene’s dimensions before hydration to avoid layout shift. Load Three.js only on `/` and only after the preference/capability gate passes. Use one renderer and a small number of meshes/materials. Pause while hidden/out of view; measure frame time and lower DPR or switch to the static fallback if the device cannot sustain its tier. Validate the budgets against actual bundle output and on real devices before describing them as met.

## 10. Accessibility and graceful degradation

- `prefers-reduced-motion: reduce`: do not initialize the Three.js renderer or scroll choreography; show the static composition and all semantic content. If the preference changes while the page is open, stop and dispose the scene.
- Save-Data: when `navigator.connection.saveData` is available and true, skip 3D and use the static composition. Treat the API as an optional hint, not a universal browser feature.
- Unsupported WebGL, failed context creation, context loss, and sustained under-target frame rates: retain the HTML/SVG fallback without an error overlay that blocks content.
- Supported mobile devices may use the reduced geometry/DPR tier and target 30 FPS. Weak devices, reduced-motion, and data-saving preferences get the static/simplified treatment; do not classify solely by user-agent string.
- Keep all copy, project evidence, links, and route navigation in semantic DOM. Mark the decorative canvas `aria-hidden`, `pointer-events: none`, and non-focusable. Preserve keyboard focus, visible focus, color contrast, skip link, and normal browser scroll.
- Do not add sound, autoplay video, custom cursors, or interaction that requires precise pointer movement.

## 11. Mobile fallback

At narrow widths, the hero becomes a clear single-column editorial composition: HTML title and CTAs first, then a compact SB/title visual region. Supported phones can render the simplified 3D composition with a DPR cap of 1, fewer bevel segments, no post-processing, and a 30 FPS target. Keep the full name recognizable and the visual’s reserved aspect ratio stable.

If WebGL is unavailable or the device fails the runtime budget, show a static 2D poster made from the same wordmark, overlapping monogram, and contour line. It should preserve the same palette, hierarchy, and visual balance—not become a blank box or a generic placeholder. Secondary routes remain ordinary responsive HTML with lightweight vector motion; no route requires 3D, hover, or horizontal scrolling.

## 12. Phased implementation plan and acceptance criteria

### Phase 0 — Baseline and asset validation

- Record current production route bundle sizes, LCP/CLS, and browser/device test setup.
- Verify the font source/license and produce a small glyph-subset geometry proof.
- Acceptance: the proof uses only local, license-documented font data; the proposed bundle/geometry budgets are confirmed or revised with measurements; existing content remains server-rendered.

### Phase 1 — Procedural typography prototype

- Build the title mesh, SB monogram, simple room planes, bevel material, and one restrained custom light treatment in an isolated client scene module.
- Acceptance: spatial depth reads clearly at desktop and phone proportions; geometry is within the revised budget; no stock assets, remote runtime assets, WebGL-wide glow, or unnecessary post-processing.

### Phase 2 — Progressive homepage integration

- Add the client-only preference/capability gate and scene host to `HomeHero`; keep the DOM headline and static fallback present before scene initialization.
- Acceptance: the homepage remains legible with JavaScript disabled, reduced motion enabled, Save-Data enabled, WebGL unavailable, import failure, and context loss; other routes do not load the Three.js chunk; mount/unmount leaves no renderer or listener behind.

### Phase 3 — Camera choreography and 2D route identity

- Add the camera pullback, restrained scroll-linked hero exit, idle light/camera movement, and cohesive vector/typographic accents to the four secondary routes.
- Acceptance: native scroll is unchanged, no section is pinned, content is never obscured, idle motion is subtle, and every route remains consistent with the current palette/fonts and project evidence.

### Phase 4 — Profiling, accessibility, and release review

- Run lint, TypeScript, production build, responsive browser checks, keyboard/screen-reader review, reduced-motion/data-saving checks, WebGL failure/context-loss checks, and real-device FPS profiling.
- Acceptance: all five routes render without layout overflow or content loss; 60 FPS desktop and 30 FPS supported-mobile targets are measured on named test devices during representative idle/scroll scenes; weaker devices downgrade cleanly; no new claims about performance are published before profiling supports them.

## 13. Decision log and unresolved risks

| Decision | Alternatives considered | Reason |
|---|---|---|
| One procedural Three.js scene on `/` only | 3D scenes on every route; CSS/SVG-only primary design | Concentrates the requested depth in the hero and protects route performance while keeping the other pages cohesive. |
| Vanilla Three.js in an isolated client leaf | React Three Fiber; hosted Spline scene | One scene needs direct control and no larger React-managed scene graph; procedural ownership and local delivery matter. |
| Scroll-synced camera, normal page scroll | Scroll hijack, pinned full-screen narrative | Gives deliberate camera choreography without trapping users or changing the document’s navigation model. |
| Server-rendered semantic text plus static fallback | Canvas-only heading or blocking loader | Preserves SEO, screen-reader access, first paint, and behavior when WebGL fails. |
| Generated local typeface subset; no downloaded model | Remote font/model dependency; Blender-first asset production | Keeps the visual tied to the existing identity and avoids unnecessary external assets. Font licensing must be verified before implementation. |
| Performance budgets are gates to profile, not claims | Assume the FPS target will be met | Device/GPU variation is material; implementation must measure and degrade gracefully. |

**Risks to validate:** Three.js and font geometry may exceed the proposed transfer budget; Cormorant outline conversion may require a small offline asset-preparation tool; continuous idle motion can consume battery; mobile GPU behavior varies by browser/device; and canvas composition can reduce contrast if text backing is not carefully designed. None blocks the proposal. No domain or deployment decision is needed for this design phase.
