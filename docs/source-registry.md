# Design / Component Source Registry

Purpose:
Track where we discover interaction and visual primitives. Discovery value does not imply permission to redistribute code.

Before any third-party-derived primitive is promoted into `alex-ui`, verify the licence/provenance of the **specific component or source**, not just the website hosting it.

## Primary discovery sources

### 21st.dev
Role:
Broad discovery layer across React/component ecosystems.

Use for:
- finding patterns
- comparing variants
- tracing components back to original authors/libraries

Rule:
Follow the underlying source licence.

### React Bits
Role:
Experimental visual and interaction ideas.

Interesting categories:
- text effects
- backgrounds
- cursors
- image effects
- shaders
- particles

Rule:
Treat as inspiration / application-use candidate until exact licence conditions for the chosen item are recorded.

### Aceternity UI
Role:
High-impact landing page / interaction patterns.

Interesting categories:
- shaders
- pixel/canvas effects
- sparkles/shooting stars
- 3D cards
- parallax
- magnetic interactions
- lens/reveal effects

Rule:
Check the exact free/premium item terms before code reuse or redistribution.

### ThreeUI
Role:
Three.js / WebGL / shader-oriented component discovery.

Use for:
- procedural heroes
- 3D backgrounds
- shader ideas
- spatial UI

Rule:
Prefer rebuilding principles into our own small abstractions rather than accumulating opaque 3D components.

### Fancy Components
Role:
Award-site-inspired interaction patterns.

Use for:
- unusual motion
- image treatment
- cursor interactions
- transitions
- interaction mechanics worth isolating

### Magic UI
Role:
Animated React/Tailwind visual primitives.

Use for:
- particles
- light effects
- text motion
- image treatments
- backgrounds
- microinteractions

### Motion Primitives
Role:
Refined motion fundamentals.

Use for:
- text transitions
- in-view behaviour
- animation composition
- reusable motion patterns

Preferred when:
We need to make an effect feel controlled and product-quality rather than simply spectacular.

### Cult UI
Role:
Niche shadcn-adjacent interaction patterns.

### Kokonut UI
Role:
Cleaner motion-oriented React UI patterns.

### Hover.dev
Role:
Playful interaction / hover / section ideas.

## Foundation sources

### shadcn/ui
Role:
Accessible structural foundation and registry conventions.

Use for:
- component organisation
- accessible primitives
- baseline UI structure

Do not use it to define the Lab's visual identity.

### Motion
Role:
Default 2D motion runtime.

### React Three Fiber / Three.js
Role:
Bespoke 3D/WebGL foundation where 3D materially improves the experience.

## Current user-approved source material

### Pixel Stars
Source:
User-pasted React canvas component.

Status:
Rendered on branch `specimens-user-references-001`.

Provenance/licence:
Unknown.

Restriction:
Do not redistribute via `alex-ui` until provenance/licence is established or independently rebuilt.

### Sparkles
Source:
User-pasted Sparkles/particle composition.

Status:
Rendered on branch `specimens-user-references-001`.

Implementation:
Visible behaviour recreated with native canvas after the pasted tsParticles wrapper did not compile cleanly in the current stack.

Provenance/licence:
Original composition unknown.

Restriction:
Do not redistribute via `alex-ui` until provenance/licence is established or independently rebuilt.

## Rule for new sources

When adding a new source, record:
- name
- URL
- what it is good for
- exact component/pattern selected
- provenance/author where known
- licence status
- whether code was copied, adapted, or independently rebuilt
- whether it may be promoted into `alex-ui`
