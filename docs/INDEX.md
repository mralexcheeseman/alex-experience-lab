# Alex Experience Lab — Canonical Index

This file answers one question: **where is the truth for each part of the project?**

Read this before substantial work.

## 1. Objective and current scope

Canonical:
- `PROJECT.md`

Use it for:
- original objective
- active phase
- sequencing rules
- current branch / PR status
- next objective
- anti-drift constraints

## 2. Agent / implementation rules

Canonical:
- `AGENTS.md`

Use it for:
- implementation behaviour
- dependency discipline
- motion rules
- accessibility/performance expectations
- licensing/provenance expectations

## 3. Core project description

Canonical:
- `README.md`

Use it for:
- north star
- stack
- high-level design principles
- promotion rule into `alex-ui`

## 4. Current inspiration cohort

Canonical:
- `docs/references/cutting-edge-20.md`

Use it for:
- the fixed 20-site research cohort
- primary lesson per site
- what to inspect
- candidate rebuild idea
- deconstruction framework

Rule:
Do not silently replace the cohort. Changes must be recorded here and in `PROJECT.md`.

## 5. User deconstruction / taste research

Canonical working document:
- Google Doc: https://docs.google.com/document/d/1yVG2C4ZTFqdBiSPXeWU4zfObvF1hpHA3J2gN4zwibcE/edit

Use it for:
- Alex's explicit likes / dislikes
- pros / cons
- scores
- what works and why
- what feels generic or over-designed
- final KEEP / MAYBE / NO verdict
- candidate specimen rebuilds

Important:
The Google Doc contains working research. Once a site is meaningfully reviewed, the durable conclusion should be copied back into GitHub before it influences a build.

## 6. Component / resource sources

Canonical:
- `docs/source-registry.md`

Use it for:
- discovery libraries
- component sources
- implementation notes
- licence/provenance status
- restrictions before Alex UI promotion

## 7. Approved / active specimens

Current implementation branch:
- `specimens-user-references-001`

Current PR:
- https://github.com/mralexcheeseman/alex-experience-lab/pull/5

Currently contains:
- 001 Pixel Stars
- 002 Sparkles
- shadcn-compatible component structure
- specimen index

Specimen notes currently live on the active branch until the PR is reviewed/merged:
- `docs/specimens/001-pixel-stars.md`
- `docs/specimens/002-sparkles.md`

Rule:
Do not treat branch-only code as approved `main` behaviour.

## 8. Failed directions / learning

Canonical:
- `docs/postmortems/003-archive.md`

Failed:
- 003 The Archive
- Forge v1

Purpose:
Preserve why they failed so we do not reintroduce the same drift later.

## 9. Vercel

Role:
Preview and deployment only.

Not canonical for:
- objectives
- decisions
- research
- status
- design rationale

## 10. Decision hierarchy

When sources disagree, use this order:

1. latest explicit user instruction
2. `PROJECT.md`
3. current approved research captured in GitHub
4. `AGENTS.md`
5. `README.md`
6. active branch/PR implementation

Before changing direction:
- update GitHub first
- state what changed
- state why
- preserve the old direction in a postmortem or decision note when material

## 11. Current phase

**Research + specimen collection.**

Next milestone:
- complete first-pass deconstruction of all 20 sites
- capture durable conclusions in GitHub
- build 5–8 explicitly approved specimens
- only then use a design workflow to synthesise original directions

No premature combination work.


## 12. Current staged review branches

### Candidate specimens
- branch: `candidate-specimens-batch-01`
- PR #6: https://github.com/mralexcheeseman/alex-experience-lab/pull/6
- status: candidate mechanics only

### Synthesis directions
- branch: `synthesis-directions-v1`
- PR #7: https://github.com/mralexcheeseman/alex-experience-lab/pull/7
- status: provisional combinations only

### Provisional research
- `docs/deconstructions/batch-01-provisional.md`
- `docs/design-dna/provisional-v1.md`
- `docs/synthesis/provisional-directions-v1.md`

Next action:
Review and classify before adding more.
