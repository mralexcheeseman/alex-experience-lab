# Postmortem — 003 The Archive

Status: failed direction, intentionally closed.

## What went wrong

The build drifted from the literal project objective.

Instead of using the Experience Lab to curate, combine and evaluate exceptional React / interaction primitives, the work became a fictional cinematic story.

The resulting aesthetic was generic:
- near-black background
- large serif display type
- floating WebGL object
- dramatic section labels
- scroll-led scene changes

That combination can look polished, but it did not create a distinctive or useful R&D system.

## Why this matters

The Lab is meant to reduce future design risk and improve future builds.

A one-off art piece that does not help us understand reusable interaction patterns is not enough, even if technically competent.

## Technical learnings worth keeping

- React Three Fiber integration works in the current stack.
- deterministic camera paths are useful.
- normalized scene timing utilities are useful.
- mobile and reduced-motion fallbacks should be designed from the start.

## Rejected lessons

Do not conclude that:
- WebGL itself creates premium design
- a dark palette creates sophistication
- oversized typography creates authorship
- scroll choreography equals interaction design

## First correction — Forge v1

Archive was initially replaced with **Forge**, a live component-composition environment.

That also failed as the immediate next step because it still invented primitives before enough user-approved reference material existed.

## Current correction — specimen-first

The current source-of-truth workflow is:

1. collect user-approved references and cutting-edge benchmark sites
2. deconstruct them systematically
3. rebuild the smallest valuable mechanics as isolated specimens
4. accumulate at least 5–8 explicitly approved specimens
5. only then use a design workflow to combine them into original directions

Do not return to either Archive or Forge v1 as a visual direction. Any future Forge should be only a synthesis environment powered by already-approved specimens.
