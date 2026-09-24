# Experience 003 — The Archive

## North star

Build a cinematic spatial archive that feels discovered rather than browsed.

The visitor should remember one thing: **they moved through an object and found a world inside it.**

This is not a portfolio page, a 3D gallery skin or a component demo. It is a scene-based interactive narrative that proves the strongest techniques identified in the Reference Observatory can form one coherent authored experience.

## Research signals to carry forward

The first Reference Observatory cohort produced four dominant principles:

1. **One mechanic beats ten effects.**
   Strong experiences teach one memorable behaviour and let it carry the interface.

2. **3D needs a narrative job.**
   Depth should explain chronology, space, metaphor, product or story—not demonstrate rendering capability.

3. **Transitions are part of authorship.**
   State changes and scene changes need deliberate choreography.

4. **Restraint creates perceived quality.**
   Give fewer objects more time, space, light and consequence.

## Core mechanic

**Approach / enter / pass through.**

The pointer subtly changes parallax and focus, but scroll is the primary control. Scroll moves the camera toward a single floating archive object. At the threshold, the visitor passes through the object's surface and enters an internal spatial sequence.

The experience never asks the user to learn multiple interaction models.

## Scene structure

### Scene 00 — Silence
Near-black field. Sparse typography. A single archive object is visible at distance.

Goal: establish tension and scale.

### Scene 01 — Approach
Scroll slowly advances the camera. Type occupies foreground and background planes. The object reacts minimally to pointer position.

Goal: make depth legible before adding complexity.

### Scene 02 — Surface
The object fills the viewport. Material detail becomes the interface: engraved marks, scratches, fields, seams or embedded fragments.

Goal: turn shader/material craft into narrative information.

### Scene 03 — Threshold
The camera crosses the surface. 3D object and DOM typography align for one matched transition.

Goal: create the signature moment.

### Scene 04 — Interior archive
A small set of fragments appears in space: image plane, text fragment, sound cue, timestamp or object.

Goal: demonstrate a spatial collection without becoming a generic gallery.

### Scene 05 — Memory sequence
Three fragments are revealed one at a time through the same interaction grammar. Each uses a different composition but shares camera physics, type system and transition logic.

Goal: prove controlled variation.

### Scene 06 — Return to flatness
The 3D world resolves into an extremely restrained editorial layout.

Goal: use contrast; prove the experience still works when motion pauses.

### Scene 07 — Exit
The archive collapses back into one object. End with a concise statement and return to the lab.

Goal: complete a loop rather than merely stop scrolling.

## Required primitives

Build these as reusable modules where sensible:

- `ScrollCamera` — deterministic camera path driven by normalized page progress.
- `PointerParallax` — low-amplitude pointer response with reduced-motion fallback.
- `ArchiveObject` — custom geometry/material; no stock torus or sphere as final art.
- `DepthType` — DOM/WebGL alignment system for foreground/background typography.
- `SceneGate` — progress ranges controlling scene entrance, hold and exit.
- `ImagePlane` — texture plane with controlled crop and depth behaviour.
- `ObjectPortal` — surface/threshold transition into the archive interior.
- `SoundCue` — opt-in sound layer only if audio materially improves the transition.
- `StaticFallback` — designed mobile and reduced-motion state, not a disabled desktop.

## Art direction

### Palette
Near-black, bone, oxidised metal, one restrained spectral accent.

### Type
Large grotesk + high-contrast serif. Typography must remain meaningful without animation.

### Object language
Archaeological technology: somewhere between a discovered artefact, precision instrument and impossible storage device.

Avoid:
- generic chrome blobs
- neon cyberpunk
- gratuitous glassmorphism
- particle fields with no narrative purpose
- multiple floating dashboard cards
- perpetual ambient animation

## Rendering direction

Phase 1:
- React Three Fiber / Three.js
- custom shader material or carefully controlled physical material
- scroll-driven camera path
- depth-aware DOM composition
- lightweight post effects only if they survive performance review

Phase 2 candidates:
- transmission / refraction
- custom displacement
- subtle film grain / chromatic treatment
- depth of field for selected scene transitions
- WebGPU experiment behind capability detection if it produces a real visual advantage

## Performance rules

- Desktop-first WebGL experience; mobile receives a separately designed composition.
- Lazy-load 3D.
- Cap device pixel ratio.
- No high-poly imported model without measured justification.
- Prefer baked detail and procedural material over geometry density.
- No autoplay video.
- Maintain useful static states.
- Respect `prefers-reduced-motion`.
- Avoid layout-coupled frame-by-frame React state updates; animation should live in render loops / motion values.

## Acceptance test

003 does not graduate if any of these are false:

- The experience has one clearly understandable interaction mechanic.
- The archive object has a narrative reason to exist.
- The threshold transition feels materially different from ordinary scrolling.
- Typography remains excellent with WebGL hidden.
- Mobile feels deliberately composed.
- Reduced-motion users receive the full information hierarchy.
- The experience can explain its technical spectacle in one sentence tied to user experience.
- The final result feels like one authored piece rather than a set of impressive components.

## Candidate Alex UI promotions

Only after visual and performance review:

- SceneGate
- ScrollCamera
- DepthType
- ObjectPortal
- SpatialArchive / ImagePlane
- transition timing tokens
- pointer parallax physics
