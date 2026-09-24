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

## Correction

Replace 003 with **Forge**:
a live component-composition environment that directly tests the original question — which React / motion / WebGL primitives can be combined into something genuinely exceptional and reusable?
