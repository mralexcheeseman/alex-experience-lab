# Specimen 002 — Sparkles

Status: user-provided reference; standalone implementation added for review.

## Why it is interesting

Unlike Pixel Stars, this component aims for smooth, dense, atmospheric motion.

Distinctive behaviours:
- high-density particle field
- small particle scale
- animated opacity rather than dramatic trajectory
- subtle slow movement
- radial masking so the field appears to bloom out of darkness
- optional colour and density variants
- particles can be pushed on click

## Source

User-provided code in ChatGPT conversation on 2026-09-24.

Original provenance / author: not established.

The runtime dependencies used by the specimen are official tsParticles packages:
- `@tsparticles/react`
- `@tsparticles/engine`
- `@tsparticles/slim`

Those packages are MIT-licensed. That does **not** establish the licence of the user-provided composition itself.

## Implementation location

- reusable component: `components/ui/sparkles.tsx`
- specimen route: `/specimens/sparkles`

## Faithfulness

Preserved:
- original particle density behaviour
- original particle sizing
- opacity animation
- click-to-push behaviour
- three supplied demo treatments
- gradient-line + radial-mask hero treatment

Technical-only adaptation:
- imports Motion from the already-installed `motion/react` package rather than adding a duplicate `framer-motion` runtime
- guards the async init callback against unmount

## Reusable principle

**Atmosphere can come from many tiny low-importance movements rather than one dominant animated object.**

The field works because no individual particle matters; the aggregate becomes texture.

## Review questions

- Does the 1200-particle hero still feel sophisticated, or already too "component-library demo"?
- Is the narrow sparkle bloom more useful than the full-screen field?
- Does click-to-push add value or break the atmosphere?
- Which density/speed combination feels premium rather than gimmicky?

## Combination notes

Do not combine yet.

Potential future contrast with Pixel Stars:
- Pixel Stars is discrete / retro / low-FPS / graphic.
- Sparkles is smooth / atmospheric / high-density / ambient.

That contrast may become useful later, but should first be judged independently.
