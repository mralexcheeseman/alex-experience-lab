# Specimen 001 — Pixel Stars

Status: user-approved reference; faithful implementation in progress.

## Why it was selected

The character comes from deliberate constraints rather than ornamental styling:

- reduced 16-bit-inspired colour palette
- grid-snapped 5px background stars
- intentionally low 16fps animation
- discrete two-state-feeling twinkle
- intermittent pixelated shooting stars
- broken-up trail rather than smooth particle blur
- dark tiled backdrop

## Source

User-provided component code in ChatGPT conversation on 2026-09-24.

Original provenance / author: not yet established.

Licence: unknown.

Policy:
- safe to evaluate inside this private project
- do not redistribute this implementation through `alex-ui` until provenance/licence is confirmed
- if we later need an Alex UI equivalent, either establish the licence or rebuild the interaction principle independently

## Implementation location

- reusable component: `components/ui/background-pixel-stars.tsx`
- specimen route: `/specimens/pixel-stars`

## Faithfulness

Preserved:
- palette
- density
- 5px star size
- 16fps target
- regeneration cadence
- shooting-star timing
- shooting-star pixel construction
- trail decay
- fixed full-screen canvas

Technical-only changes:
- recursive shooting-star timeout is cleaned up on unmount
- canvas is marked decorative for accessibility
- component displayName added for debugging

These changes are intentionally non-visual.

## Reusable principle

**Purposeful low fidelity can create stronger identity than technically smoother rendering.**

The low frame rate, grid snapping and discrete light states are the style. Do not "improve" them away.

## Combination notes

Do not combine yet.

Potential future relationships to test only after the specimen library is large enough:
- sharp contemporary typography over retro star field
- pixel field behind a high-resolution image reveal
- transition from pixel stars to dense high-resolution particles
- cursor interaction that preserves the low-fi rendering grammar
