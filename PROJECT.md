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
Study user-selected and cutting-edge sites. Record:
- what the interaction actually does
- what Alex explicitly likes and dislikes
- why it feels premium or generic
- what technical pattern is underneath it
- what is reusable
- what should not be copied

### 2. Specimen Library
Recreate approved elements faithfully and in isolation.

Purpose:
- preserve the interaction/visual behaviour that made the reference interesting
- learn the technical pattern
- review it independently
- document provenance/licensing
- avoid premature combinations

Current rule:
Do not combine specimens until the first 20-site deconstruction pass is complete and we have at least 5–8 explicitly approved specimens.

### 3. Design synthesis / Forge
Only after the evidence-gathering phase.

Purpose:
- combine approved specimens/principles
- use a design workflow/skill to create original compositions
- compare variants
- prevent component soup
- create named, repeatable recipes

The Forge is not an active design direction yet. It is a later synthesis environment.

### 4. Experiments
Focused compositions produced from approved principles/specimens.

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
- clear licensing/provenance status
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

### 003 — Forge v1
Status: failed / closed.

Reason:
It still invented primitives before we had enough user-approved references. The shell may be useful later, but the order was wrong.

### Active direction — Specimen Library
Status: active.

Core method:
**recreate first → understand → classify → combine later**

The user supplies examples they genuinely like. We implement each faithfully as a standalone specimen, preserve the behaviour that creates its character, and document source/licence/technical notes.

Only after we have a meaningful set of approved specimens should we use a design workflow to combine them into original compositions.

## Specimen workflow

For each approved reference:

1. preserve the defining interaction / visual behaviour
2. build it standalone under `/specimens`
3. put reusable implementation in `/components/ui` or the appropriate primitive folder
4. record source and licensing status
5. record what makes it distinctive
6. record what is reusable vs what is reference-specific
7. do not combine it with other specimens yet

## Current approved specimens

### 001 — Pixel Stars
Status: rendered on branch `specimens-user-references-001`; under review in PR #5; not yet merged.

Defining behaviour:
- deliberately low 16fps rendering
- reduced 16-bit colour palette
- large grid-snapped pixel stars
- discrete twinkle states
- intermittent pixelated shooting stars and trails

Source:
user-provided component code.

Licence:
not yet established; treat as usable inside this private project but do not redistribute through Alex UI until provenance/licensing is known.

### 002 — Sparkles
Status: rendered on branch `specimens-user-references-001`; under review in PR #5; not yet merged.

Implementation note:
The supplied tsParticles-based composition was recreated with a native canvas implementation after the pasted wrapper proved incompatible with the current build. Preserve the visible behaviour, not the brittle dependency.

Defining behaviour:
- dense tsParticles star/spark field
- subtle opacity animation
- clean hero treatment

Source:
user-provided component code.

Licence:
not yet established; verify provenance before redistribution.

## Combination rule

Do not combine specimens until at least 5–8 user-approved examples exist and we have classified the underlying patterns.

At that point use a design workflow to compose a new direction from the approved ingredients rather than inventing one from scratch.

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


## Cutting-edge website cohort

Canonical research cohort:
- `docs/references/cutting-edge-20.md`

Purpose:
- deconstruct 20 current / benchmark interactive websites
- identify explicit user likes and dislikes
- rebuild only the smallest valuable mechanics as specimens
- do not combine directions until the first deconstruction pass is complete


## Website deconstruction workbook

Google Doc:
https://docs.google.com/document/d/1yVG2C4ZTFqdBiSPXeWU4zfObvF1hpHA3J2gN4zwibcE/edit

Purpose:
- capture Alex's explicit likes and dislikes across the 20-site cohort
- score originality, visual system, typography, motion, interaction, usability, 3D/shader value, mobile, performance and rebuild value
- record pros, cons, what works, why it works, what fails, and what should be learned rather than copied
- identify the smallest rebuild candidate from each site
- leave combination decisions until the first deconstruction pass is complete


## Current working artifacts

### Canonical project index
- `docs/INDEX.md`

### 20-site inspiration cohort
- `docs/references/cutting-edge-20.md`

### Website deconstruction workbook
- Google Doc: https://docs.google.com/document/d/1yVG2C4ZTFqdBiSPXeWU4zfObvF1hpHA3J2gN4zwibcE/edit
- Purpose: capture Alex's likes/dislikes, scores, pros/cons, what works and why, rebuild candidates, and final KEEP / MAYBE / NO verdicts.

### Active specimen implementation
- Branch: `specimens-user-references-001`
- PR: https://github.com/mralexcheeseman/alex-experience-lab/pull/5
- Contains Pixel Stars + Sparkles plus shadcn-compatible specimen infrastructure.
- Do not merge until visual/mobile/provenance review is complete.

## Immediate next objective

Complete the 20-site deconstruction and build the user-approved specimen library.

Do **not**:
- invent a new overarching visual style yet
- combine specimens prematurely
- return to Archive/Forge v1 aesthetics
- treat technical novelty as design quality

Only after the first deconstruction pass should we use a design workflow to synthesise approved ingredients into original directions.
