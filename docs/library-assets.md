# Alex Experience Lab — Build Asset Library

Canonical machine-readable registry:
- `data/library-assets.json`

This is the inventory future builds should consult **before creating a new visual or interaction primitive**.

## Asset tiers

### Source
Raw material has been preserved, but not yet rendered.

### Specimen
A source/reference has been rendered sufficiently to review.

### Candidate
A mechanic has been derived from research but is not yet Alex-approved.

### Approved
Alex has explicitly approved the asset for routine Lab reuse.

### Alex UI
The asset has passed design, mobile, accessibility, performance and licensing checks and has been packaged for maintained reuse.

## Build eligibility

Every asset also has a `build_eligibility` field.

- `reference_only` — study it; do not directly use it.
- `internal_experiments_only` — may be used in private Lab compositions, but is not approved/distributable.
- `approved_internal` — may be reused in normal Lab builds, subject to recorded restrictions.
- `distributable` — approved/licensed for `alex-ui`.

## Current library

### ALE-001 — Pixel Stars
Status: Specimen  
Build eligibility: Internal experiments only  
Implementation: `components/ui/background-pixel-stars.tsx` on `specimens-user-references-001`  
Raw source: `docs/intake/raw/2026-09-24-pixel-stars-source.txt`

Use for:
- distinctive low-fi digital atmosphere
- pixel/retro visual grammar
- shooting-star ambient backgrounds

Preserve:
- 16fps character
- grid snapping
- restricted palette
- discrete twinkle
- pixel trails

Do not:
- smooth away the deliberate low fidelity
- redistribute until provenance/licence is resolved

### ALE-002 — Sparkles
Status: Specimen  
Build eligibility: Internal experiments only  
Implementation: `components/ui/sparkles.tsx` on `specimens-user-references-001`  
Raw source: `docs/intake/raw/2026-09-24-sparkles-source.txt`

Use for:
- narrow masked particle bloom
- atmospheric reveals
- transition boundaries
- restrained ambient texture

Preferred treatment:
The narrow sparkle bloom.

Use cautiously:
Full-screen particle fields, because they can become generic quickly.

### ALE-C003 → ALE-C007
Status: Candidate  
Build eligibility: Internal experiments only

These are derived mechanic studies from the first website deconstruction batch. They are available to experiments but must not be described as Alex-approved design language until reviewed.

## Build protocol

Before starting a new visual build:

1. Read `PROJECT.md`.
2. Read `docs/INDEX.md`.
3. Search `data/library-assets.json` for relevant existing assets.
4. Prefer reusing, parameterising or combining a suitable existing asset over rebuilding the same idea.
5. Record the asset IDs used in the experiment/PR.
6. If a new asset is needed, add it to the registry at intake time.
7. Never silently promote a candidate/specimen to approved.
8. Record Alex's KEEP / MAYBE / KILL decision after review.

## Why this exists

The library is not merely an archive.

It is intended to become a **working vocabulary for building**:
- reusable visual behaviours
- interaction mechanics
- motion grammars
- backgrounds
- transitions
- spatial systems
- typography treatments
- shader/WebGL primitives

The long-term goal is that future sites can be assembled from known, reviewed ingredients rather than reinventing everything each time.
