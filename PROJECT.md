# Alex Experience Lab — Source of Truth

## Original objective

Build something exquisite in Vercel by curating, combining and learning from exceptional React, motion and WebGL elements.

The Lab exists to answer five practical questions:

1. Which interaction / visual primitives are genuinely excellent?
2. Which sources are worth repeatedly using?
3. Which combinations create something stronger than the parts?
4. Which patterns remain coherent, performant and usable on real products?
5. Which proven primitives should graduate into our own reusable `alex-ui` system?

This is the core objective. Do not replace it with an unrelated narrative concept.

## Operating model

### 1. References
Study popular and award-winning sites. Record:
- what the interaction actually does
- why it feels premium
- what technical pattern is underneath it
- what is reusable
- what should not be copied

### 2. Source registry
Track component / primitive sources such as:
- Motion Primitives
- React Bits
- Aceternity UI
- 21st.dev discoveries
- shadcn/ui
- bespoke R3F / shader work

For every source, record licensing constraints before code is adopted.

### 3. Forge
The main R&D environment.

Purpose:
- audition primitives
- combine a small number of them on a live stage
- compare variants
- learn which combinations feel coherent
- create repeatable recipes

The Forge should itself feel exquisite. It is not a dashboard.

### 4. Experiments
Focused compositions produced from Forge primitives.

An experiment should answer a specific design question and create reusable learning.

### 5. Alex UI
Only proven primitives graduate here.

Promotion requires:
- strong visual result
- coherent interaction language
- mobile behaviour
- reduced-motion behaviour
- accessibility where relevant
- acceptable performance
- clear licensing status
- enough reuse value to justify maintenance

## Design standard

Reference level:
- Lusion
- Unseen Studio
- Active Theory
- Resn
- other work documented in the Reference Observatory

Key principle from Lusion's documented process:
the pipeline follows the idea, not the other way around.

Do not confuse:
- more effects with better art direction
- WebGL with originality
- dark + serif with premium
- scroll choreography with meaningful interaction
- a component showcase with a designed experience

## Visual direction for the Lab

Aim for:
- editorial clarity
- industrial / studio-tool precision
- strong typographic hierarchy
- tactile interaction
- generous negative space
- one bold accent colour at a time
- elements that feel like physical specimens or instruments

Avoid:
- generic AI gradients
- glass dashboards
- unexplained floating 3D blobs
- gratuitous particles
- fake cinematic copy
- invented narrative filler
- cloning one reference site's visual identity

## Current state

### 001 — Origin
Status: retained as early art-direction test.

### 002 — Depth
Status: merged.
Use: technical proof of R3F plumbing only.

### Reference Observatory
Status: merged.
Use: benchmark and pattern research.

### 003 — The Archive
Status: failed / closed.
Reason: drifted from original objective into generic cinematic WebGL narrative.
Keep technical learnings only. Do not reuse its visual language.

### 003 replacement — Forge
Status: active next direction.

Core interaction:
**select / combine / feel the result**

The visitor should be able to audition a small set of primitives and see them interact on one authored stage.

## Forge v1 scope

Build only these systems first:

1. **Specimen rail**
   A restrained set of selectable primitives.

2. **Live stage**
   One central composition, not a component grid.

3. **Combination rules**
   Maximum three active primitives at a time.
   The system should prevent visual soup.

4. **Source metadata**
   Each primitive records source, licence, purpose and notes.

5. **Recipes**
   A combination can be named and saved in code as a reusable composition recipe.

6. **Benchmark notes**
   Every primitive should link back to the interaction principle that justified it.

## First primitive set

- kinetic typography
- cursor / magnetic field
- image trail or image displacement
- depth / parallax plane
- shader / procedural field
- scene / page transition

Do not add all at once. Build the Forge shell first, then add primitives one by one.

## Drift test

Before substantial work, answer:

1. Does this help us evaluate, combine or reuse a high-quality design primitive?
2. Does it improve the Forge, an experiment, or Alex UI?
3. Is the user-facing purpose obvious?
4. Are we learning something reusable?
5. Is the decision recorded in GitHub?

If two or more answers are "no", do not build it.

## GitHub rule

GitHub is canonical for:
- objectives
- decisions
- active scope
- source / licence notes
- experiment status
- reusable recipes
- promotion decisions

Vercel is the preview/deployment layer, not project memory.
