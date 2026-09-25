# Symphony Blog — Fidelity Refinement Pass 02

Status: active refinement guidance for Luminary.

Reference:
https://symphonyofvines.unseen.co/

## Current principle

Do not add more pages or features yet.

The next quality gain should come from refining:
**Opening → Enter → Chapter One → interaction → transition**

until the sequence feels physically coherent, cinematic and deliberate.

## Priority 1 — Temporal choreography

Improve:
- anticipation before major transitions
- acceleration / deceleration curves
- pauses between text, scene and interaction
- exit timing
- reveal timing
- transition duration consistency

Avoid:
- instant state swaps
- default CSS ease
- every animation starting at once
- simple cross-fades where a scene transformation is expected

Target:
The experience should feel directed, not merely animated.

## Priority 2 — Physical pointer behaviour

The pointer should influence the scene as a force.

Use:
- velocity
- inertia
- spring / damping
- drag / resistance
- cursor history / trails where appropriate
- hold progress
- local deformation

Avoid:
- object follows pointer 1:1
- hover-only effects
- interactions that reset instantly

Target:
The user should feel they are manipulating a material/system.

## Priority 3 — Chapter-specific mechanic

Each chapter gets one dominant verb.

Examples:
- carve
- conduct
- bend
- alter

For Alex content the nouns can change, but the interaction should remain one strong action per chapter.

## Priority 4 — Scene continuity

Transitions should transform the existing environment into the next one.

Prefer:
- geometry morph
- camera move
- colour/material migration
- particles re-forming
- lighting transformation
- environment deformation

Avoid:
- fade to black
- route cut
- new DOM page appearing
- generic loading transition

## Priority 5 — Depth and material quality

Improve:
- foreground / midground / background separation
- fog / atmospheric depth
- light direction
- shadow
- material response
- subtle camera parallax
- procedural detail

Do not add more objects just to create richness.

## Priority 6 — Typography choreography

Typography is part of the scene.

Test:
- staggered title reveal
- line-by-line entry
- scale relationships
- off-centre composition
- text disappearing as interaction begins
- small instruction copy remaining readable but subordinate

Avoid normal website heading/subheading/button stacking.

## Priority 7 — Minimal interface

Visible UI during the experience should remain scarce.

Keep only what materially helps:
- chapter number / progress
- sound
- skip
- small orientation cue

Everything else competes with the scene.

## Priority 8 — Interaction instruction

The instruction should:
- appear at the correct moment
- be very short
- use a verb
- disappear or diminish once the user demonstrates understanding

The interface should teach by interaction rather than persistent explanation.

## Priority 9 — Sound

Optional, user-initiated.

Use sound for:
- entrance
- physical interaction feedback
- environmental ambience
- scene transition

Do not use continuous generic cinematic music as a substitute for interaction quality.

## Priority 10 — Mobile

Create a purpose-built touch version.

Do not merely map cursor X/Y to touch X/Y.

Test:
- thumb reach
- press-and-hold
- drag
- haptic-style visual response
- orientation
- performance scaling

## Priority 11 — Performance

Adaptive quality:
- cap DPR
- reduce particle counts on weaker devices
- lazy-load later scenes
- suspend offscreen simulation
- preserve input responsiveness above visual density

## Priority 12 — Blog handoff

Only after Chapter One quality is strong.

When an article is selected:
- scene contracts / transforms into article hero
- environment remains visually related for the opening beat
- then resolve into calm reading typography

Avoid a hard cut from WebGL world to normal blog page.

## Acceptance test

Do not continue to Chapters Two–Four until Opening + Chapter One pass these tests:

1. Entry feels like entering a world rather than opening a page.
2. Cursor/touch behaviour feels physical.
3. Chapter interaction has one clear verb.
4. Animation timing feels authored.
5. No conventional website UI dominates the viewport.
6. The transition is a transformation, not a page change.
7. The scene remains attractive with the cursor still.
8. Mobile behaviour has been designed separately.
9. Reduced-motion fallback exists.
10. Performance remains responsive.

## Review rule

At each iteration compare the same states side by side with the Symphony reference:
- opening
- pre-entry
- post-entry
- chapter title
- instruction visible
- interaction at 25%
- interaction at 100%
- transition start
- transition midpoint
- transition end

Do not judge only from a single screenshot.
