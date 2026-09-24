import { rangeMap, smoothSceneGate } from "./scene-gate";

export type ArchiveCameraPose = {
  x: number;
  y: number;
  z: number;
  targetZ: number;
  threshold: number;
  interior: number;
};

export function getArchiveCameraPose(progress: number): ArchiveCameraPose {
  const approach = smoothSceneGate(progress, 0.07, 0.34);
  const threshold = smoothSceneGate(progress, 0.34, 0.48);
  const interior = smoothSceneGate(progress, 0.48, 0.78);
  const exit = smoothSceneGate(progress, 0.78, 0.94);

  const approachZ = 8.4 + (3.05 - 8.4) * approach;
  const thresholdZ = approachZ + (-1.6 - 3.05) * threshold;
  const interiorZ = thresholdZ + (-9.4 + 1.6) * interior;
  const exitZ = interiorZ + (-11.4 + 9.4) * exit;

  return {
    x: rangeMap(progress, 0.5, 0.76, 0, 0.7),
    y: rangeMap(progress, 0.52, 0.72, 0.1, -0.45),
    z: exitZ,
    targetZ:
      progress < 0.42
        ? 0
        : rangeMap(progress, 0.42, 0.72, -1.6, -11.5),
    threshold,
    interior,
  };
}
