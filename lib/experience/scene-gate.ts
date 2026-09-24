export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function sceneGate(progress: number, start: number, end: number) {
  if (end <= start) return progress >= end ? 1 : 0;
  return clamp01((progress - start) / (end - start));
}

export function smoothSceneGate(
  progress: number,
  start: number,
  end: number,
) {
  const t = sceneGate(progress, start, end);
  return t * t * (3 - 2 * t);
}

export function rangeMap(
  progress: number,
  start: number,
  end: number,
  from: number,
  to: number,
) {
  const t = smoothSceneGate(progress, start, end);
  return from + (to - from) * t;
}
