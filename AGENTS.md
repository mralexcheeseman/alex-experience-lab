# Agent instructions — Alex Experience Lab

## Source of truth
Before substantial work, read `PROJECT.md`, `README.md`, this file, and the active experiment brief under `docs/`. If instructions conflict, preserve the original objective in `PROJECT.md` and update GitHub before changing direction.


## Objective
Create authored, editorial, high-end interactive web experiences. The goal is not maximum animation; the goal is memorable art direction with disciplined interaction.

## Before adding a component
- Explain the user-facing purpose in one sentence.
- Prefer composition over adding another dependency.
- Check visual consistency with the existing typography, spacing, neutral palette and motion language.
- Avoid component-library defaults that expose their origin.

## Motion rules
- Use Motion as the default animation layer.
- Use transforms and opacity first.
- Avoid competing perpetual animations.
- Keep a meaningful static state for reduced-motion users.

## Third-party experiments
Components from 21st.dev, React Bits, Aceternity or similar sources must be restyled heavily enough to feel native to this system and must retain any required attribution/licensing notices.

## Performance budget
- Prioritise LCP and interaction smoothness over visual novelty.
- Lazy-load WebGL/3D.
- Do not ship 3D to small screens unless it materially improves the experience.
- Avoid autoplay video unless it is the hero concept.

## Review standard
Ask: would this still feel premium with every animation paused? If not, redesign the composition.
