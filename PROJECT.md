# Alex Experience Lab — Project Source of Truth

This file is the canonical project memory. Before changing direction, adding a major dependency, starting a new experiment or promoting a primitive, read this file together with `README.md`, `AGENTS.md` and the active experiment brief.

## Original objective

Build a reusable visual language for future Alex projects by creating genuinely high-end interactive web experiences, studying what works, and converting proven techniques into reusable primitives.

The end state is not a gallery of demos. It is a small, disciplined system:

1. **References** — study exceptional work and extract principles.
2. **Experiments** — test those principles in authored experiences.
3. **Primitives** — extract reusable technical/interaction patterns.
4. **Alex UI** — promote only primitives that prove beautiful, coherent, performant and reusable.
5. **Future products** — use Alex UI to reduce time, cost and design inconsistency across future builds.

## Non-negotiables

- Do not optimise for number of effects.
- Do not let third-party component libraries define the visual language.
- Do not add a dependency without a clear user-facing purpose.
- Do not ship 3D simply because it is technically possible.
- Do not promote anything to Alex UI before visual, mobile, accessibility and performance review.
- GitHub is the source of truth for objectives, decisions, experiment briefs, acceptance tests and status.
- Vercel is the execution/preview layer, not the source of truth.

## Current state

### 001 — Origin
Status: retained as first art-direction experiment.

Purpose:
- typography
- restraint
- responsive light
- foundational visual language

### 002 — Depth
Status: merged to `main`; retained as technical proof of WebGL/R3F plumbing.

Purpose:
- validate React Three Fiber integration
- validate pointer and scroll response
- validate desktop WebGL + mobile/reduced-motion fallback

Decision:
- do not polish 002 into the final aesthetic
- use its technical lessons, not its visual language, for later work

### Reference Observatory
Status: merged to `main`.

Purpose:
- deconstruct exceptional interactive work
- separate references by the job they perform
- convert inspiration into explicit principles
- prevent visual copying and design drift

Current first-cohort signals:
1. one mechanic beats ten effects
2. 3D needs a narrative job
3. transitions are part of authorship
4. restraint creates perceived quality

### 003 — The Archive
Status: active on `experience-003-archive`.

Current implementation:
- canonical source-of-truth guardrail added
- reusable scene timing primitive added
- deterministic scroll camera path added
- bespoke multi-part archive object with authored shader added
- approach → surface → threshold → three-fragment interior → editorial resolution → return loop implemented
- desktop WebGL and designed mobile/reduced-motion fallback implemented
- pending visual review before merge

Canonical brief:
- `docs/experience-003-the-archive.md`

Core mechanic:
**Approach → enter → pass through.**

Success condition:
The visitor should remember that they moved through an object and discovered a world inside it.

## Active 003 build order

### Phase A — structure
- SceneGate
- normalized scroll progress
- sticky WebGL stage
- deterministic camera path
- designed 2D/mobile fallback

### Phase B — archive object
- bespoke multi-part geometry
- authored material
- surface markings / seams / embedded data
- no stock torus/sphere as final focal object

### Phase C — threshold
- camera/object choreography
- DOM/WebGL type alignment
- one unmistakable pass-through moment

### Phase D — interior archive
- three memory fragments
- one interaction grammar
- varied composition without changing navigation mechanics

### Phase E — return to flatness
- editorial 2D resolution
- full information hierarchy without WebGL

### Phase F — review
- visual
- mobile
- reduced motion
- accessibility
- performance
- decide what, if anything, graduates into Alex UI

## Decision log

### 2026-09-24
- Established Experience Lab.
- Adopted Next.js / React / Tailwind / Motion / Vercel.
- Added R3F / Three.js in 002.
- Merged Reference Observatory.
- Defined 003 from research rather than from component browsing.
- Confirmed GitHub as canonical source of truth for future work.

## Drift test

Before any substantial change, ask:

1. Does this help us understand or build a reusable high-end interaction/design primitive?
2. Does it serve the current experiment's single core mechanic?
3. Can we explain its user-facing purpose in one sentence?
4. Does it make the experience more authored rather than merely more complex?
5. Is the decision recorded in GitHub?

If two or more answers are "no", do not add it.


## Active review checkpoint — 003 first build

Do not merge 003 to `main` until:
- Vercel preview is build-clean
- the threshold moment is visually reviewed on desktop
- the mobile fallback is reviewed
- the final return-to-object loop is confirmed
- obvious performance regressions are ruled out

This checkpoint exists to prevent technical completion being mistaken for aesthetic completion.
