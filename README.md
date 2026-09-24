# Alex Experience Lab

## Start here

Before substantial work, read:
- `PROJECT.md` — canonical objective, active phase and anti-drift rules
- `docs/INDEX.md` — canonical map of research, specimens, working documents and status
- `AGENTS.md` — implementation rules

GitHub is the project source of truth. Vercel is the preview/deployment layer.

A living laboratory for exquisite digital experiences — not a template library.

## North star

Build a reusable visual language for future Alex projects. Components are only promoted into the eventual `alex-ui` registry after they prove that they are beautiful, coherent, performant and reusable.

## Design rules

1. Restraint is part of the spectacle.
2. One dominant interaction per scene.
3. Typography does structural work before effects do decorative work.
4. Motion must explain hierarchy, space or causality.
5. No generic gradient blobs, gratuitous glass cards or animation for its own sake.
6. Mobile is a designed experience, not a compressed desktop.
7. Respect `prefers-reduced-motion`.

## Stack

- Next.js 16.3
- React 19.3
- Tailwind CSS 4.3
- Motion 13.4
- Vercel

Planned experimental layer: React Three Fiber / Drei, shaders and selected source-owned components from curated libraries.

## Source pool

- 21st.dev — discovery
- React Bits — experimental visual effects
- Aceternity — selected interaction patterns
- Motion — primary animation system
- shadcn/ui — future accessible primitives and registry structure
- React Three Fiber / Drei — only where actual 3D adds meaning

## Promotion rule

Every experiment starts here. If it survives visual review, mobile review, accessibility review and performance review, extract it into `alex-ui`.

## Run locally

```bash
npm install
npm run dev
```
