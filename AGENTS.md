# Agent instructions — Alex Experience Lab

## Source of truth
Before substantial work, read `PROJECT.md`, `docs/INDEX.md`, `README.md`, this file, and the active experiment/specimen brief. If third-party components or patterns are involved, also read `docs/source-registry.md`.

`PROJECT.md` contains the literal original objective and current scope. Do not reinterpret that objective into a new narrative direction without updating GitHub first.

## Objective
Curate, deconstruct, faithfully rebuild, and only later combine exceptional React / motion / WebGL primitives to create exquisite interactive experiences and a reusable `alex-ui` system.

The goal is not maximum animation. The goal is a repeatable, high-quality design system learned through real experimentation.

## Before adding a component
- Explain the user-facing purpose in one sentence.
- State what reusable primitive is being tested.
- Record source and licensing status if third-party code is used.
- Prefer composition over adding another dependency.
- Check visual consistency with the current Lab language.
- Avoid component-library defaults that expose their origin.

## Motion rules
- Use Motion as the default animation layer.
- Use transforms and opacity first.
- Avoid competing perpetual animations.
- Keep a meaningful static state for reduced-motion users.

## Third-party experiments
Components from 21st.dev, React Bits, Aceternity or similar sources must be restyled heavily enough to feel native to this system and must retain any required attribution/licensing notices.

Do not assume copy/paste permission means redistribution permission. Record the licence before promoting third-party-derived code into `alex-ui`.

## Performance budget
- Prioritise LCP and interaction smoothness over visual novelty.
- Lazy-load WebGL/3D.
- Do not ship 3D to small screens unless it materially improves the experience.
- Avoid autoplay video unless it is the hero concept.

## Review standard
Ask:
- would this still feel premium with every animation paused?
- does this teach us something reusable?
- is this better than the reference standard, or just busier?

If not, redesign the composition.
