import { rangeMap, smoothSceneGate } from "./scene-gate";

export type ArchiveCameraPose = {
  x: number;
  y: number;
  z: number;
  targetZ: number;
  threshold: number;
  interior: number;
  returnToOrigin: number;
};

export function getArchiveCameraPose(progress: number): ArchiveCameraPose {
  const approach = smoothSceneGate(progress, 0.07, 0.34);
  const thresholdIn = smoothSceneGate(progress, 0.34, 0.48);
  const interior = smoothSceneGate(progress, 0.48, 0.76);
  const returnToOrigin = smoothSceneGate(progress, 0.82, 0.94);

  const approachZ = 8.4 + (3.05 - 8.4) * approach;
  const thresholdZ = approachZ + (-1.6 - 3.05) * thresholdIn;
  const interiorZ = thresholdZ + (-9.4 + 1.6) * interior;

  const z = interiorZ + (8.15 - interiorZ) * returnToOrigin;
  const interiorTarget = rangeMap(progress, 0.42, 0.72, -1.6, -11.5);
  const targetZ =
    progress < 0.42
      ? 0
      : interiorTarget + (0 - interiorTarget) * returnToOrigin;

  return {
    x: rangeMap(progress, 0.5, 0.76, 0, 0.7) * (1 - returnToOrigin),
    y:
      rangeMap(progress, 0.52, 0.72, 0.1, -0.45) *
      (1 - returnToOrigin),
    z,
    targetZ,
    threshold: thresholdIn * (1 - returnToOrigin),
    interior: interior * (1 - returnToOrigin),
    returnToOrigin,
  };
}
