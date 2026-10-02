# Quote Lab — scoped experiment brief

**Requested by Alex:** 2 October 2026  
**Route:** `/quotes`  
**Status:** candidate under review  
**Asset ID:** `ALE-C008`

## User-facing purpose

Give Alex a quiet, editorial place to browse his own short thoughts and compare how the same line feels under six distinct motion treatments. He can paste a new thought, which is stored in his current browser, and preview it in web, Instagram and TikTok proportions.

The two starter lines come from Alex's referenced conversation. The interface does not attribute assistant-proposed rewrites to him.

## Reusable primitive under test

A configurable, typography-led quote stage with a single active treatment at a time. The treatments are original implementations using the project's existing Motion dependency:

1. **Kinetic emphasis:** sequential word entrance with one accented word.
2. **Word by word:** paced word entrance with restrained blur.
3. **Mask reveal:** a line lifts through a clipping window.
4. **Editorial scroll:** an indexed composition rises on entry, then shifts subtly with page scroll.
5. **Subtle depth:** pointer movement shifts text within a shallow spatial echo.
6. **Accent stroke:** a drawn line closes the composition.

All six retain a composed static state and respect reduced motion. No third-party component code, imagery or generated effects are used. This study does not use or promote the existing candidate specimens.

## Review questions

- Which treatments add meaning to Alex's writing and which feel ornamental?
- Do the words remain readable in 16:9, 4:5 and 9:16?
- Which mechanics deserve isolation as future Lab primitives?

## Scope limits

Browser storage is intentionally local to this prototype. There is no account or cross-device sync. The stage is a live preview, not a video export tool.
