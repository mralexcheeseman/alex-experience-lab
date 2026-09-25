# Symphony Blog Clone — Fidelity Contract

Status: active reference direction.

## User intent

Alex wants a **high-fidelity recreation of the interaction architecture, pacing and choreography of The Symphony of Vines**, repurposed as a personal blog/editorial experience.

This is not a loose inspiration brief.

The goal is to preserve the experience model closely while replacing:
- wine-specific copy
- wine-specific imagery
- Chateau branding
- proprietary assets
- exact artwork / shaders
- exact typography where proprietary

with original Alex editorial content and original visual assets.

## Reference

Target:
https://symphonyofvines.unseen.co/

## Fidelity requirements

The blog version should closely reproduce these structural behaviours:

1. **Entry gate**
   - full-screen opening scene
   - minimal title / framing copy
   - explicit “Enter experience” action
   - no conventional homepage visible before entry

2. **Chapter sequence**
   - four primary chapters / editorial worlds
   - each introduced full-screen
   - chapter number and title
   - one clear instruction per chapter
   - immersive scene occupies the viewport

3. **One interaction per chapter**
   - pointer/cursor mechanic on desktop
   - press-and-hold / touch equivalent
   - interaction must visibly alter the scene
   - mechanic should be semantically tied to the chapter

4. **Cinematic transitions**
   - chapter-to-chapter transition is a designed moment
   - no ordinary route/page cut between chapters
   - visual continuity across chapters
   - preserve pacing and suspense

5. **Chapter navigation**
   - numbered chapter navigation
   - clear current chapter state
   - ability to jump between chapters where appropriate

6. **Escape / recovery**
   - “Skip Chapter” equivalent
   - interaction cannot trap the reader
   - reduced-motion fallback

7. **End state**
   - explicit ending
   - brief closing statement
   - restart / return option

## Blog translation

Map the four chapter structure to editorial worlds.

Working labels:
- Intelligence
- Influence
- Culture
- Work

These labels are provisional; the interaction architecture is the important part.

Each world contains:
- an immersive opening interaction
- selected article entry points embedded into the environment
- a transition from immersive scene into readable editorial content

## Article experience

Article reading must remain usable:
- cinematic intro
- long-form editorial typography
- optional interactive visual moments
- related ideas / next chapter
- archive fallback for direct browsing

Do not turn article bodies into continuous WebGL spectacle.

## What NOT to do

Do not:
- reinterpret the reference as a normal landing page
- replace chapters with card grids
- use generic SaaS navigation
- add generic gradients / glass cards
- simplify the interaction into scroll-only sections
- create four static hero sections
- make “inspired by” visual approximations
- change the fundamental Enter → Chapter → Interaction → Transition → End grammar

## Acceptance test

The build is only considered faithful if a side-by-side observer can say:

> “This clearly behaves like the Symphony of Vines experience, but it contains completely original Alex content and original visuals.”

The interaction architecture should be immediately recognisable even though the creative assets are different.
