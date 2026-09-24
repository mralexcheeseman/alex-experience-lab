"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getArchiveCameraPose } from "../../lib/experience/archive-camera";
import { smoothSceneGate } from "../../lib/experience/scene-gate";

function pageProgress() {
  if (typeof window === "undefined") return 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
}

function createArchiveMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uThreshold: { value: 0 },
      uAccent: { value: new THREE.Color("#7d8176") },
      uBone: { value: new THREE.Color("#d8d1c2") },
      uDark: { value: new THREE.Color("#171714") },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform float uThreshold;
      uniform vec3 uAccent;
      uniform vec3 uBone;
      uniform vec3 uDark;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - abs(dot(viewDirection, normalize(vNormal))), 2.2);
        float engraving = step(0.93, fract(vUv.y * 22.0 + vUv.x * 3.0));
        float edge = smoothstep(0.58, 1.0, fresnel);
        float thresholdGlow = uThreshold * smoothstep(0.18, 0.92, fresnel);

        vec3 base = mix(uDark, uBone, 0.18 + edge * 0.5);
        base = mix(base, uAccent, thresholdGlow * 0.8);
        base += engraving * 0.045;

        gl_FragColor = vec4(base, 0.96);
      }
    `,
  });
}

function ArchiveObject() {
  const root = useRef<THREE.Group>(null);
  const shutters = useRef<THREE.Group>(null);
  const material = useMemo(() => createArchiveMaterial(), []);

  useEffect(() => () => material.dispose(), [material]);

  useFrame(({ pointer }) => {
    const p = pageProgress();
    const thresholdIn = smoothSceneGate(p, 0.34, 0.49);
    const returnToOrigin = smoothSceneGate(p, 0.82, 0.94);
    const threshold = thresholdIn * (1 - returnToOrigin);
    const approach = smoothSceneGate(p, 0.08, 0.33);

    material.uniforms.uThreshold.value = threshold;

    if (root.current) {
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        pointer.y * -0.055 * (1 - threshold),
        0.045,
      );
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        pointer.x * 0.075 * (1 - threshold) + approach * 0.05,
        0.045,
      );
      root.current.scale.setScalar(1 + threshold * 0.17);
    }

    if (shutters.current) {
      shutters.current.scale.x = 1 - threshold * 0.985;
      shutters.current.position.z = threshold * -0.8;
    }
  });

  return (
    <group ref={root}>
      <mesh position={[0, 2.15, 0]}>
        <boxGeometry args={[5.6, 0.72, 0.72, 10, 2, 2]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -2.15, 0]}>
        <boxGeometry args={[5.6, 0.72, 0.72, 10, 2, 2]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[-2.44, 0, 0]}>
        <boxGeometry args={[0.72, 3.65, 0.72, 2, 10, 2]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[2.44, 0, 0]}>
        <boxGeometry args={[0.72, 3.65, 0.72, 2, 10, 2]} />
        <primitive object={material} attach="material" />
      </mesh>

      <group ref={shutters}>
        <mesh position={[-0.86, 0, 0.14]}>
          <boxGeometry args={[1.62, 3.26, 0.22]} />
          <meshPhysicalMaterial
            color="#272722"
            roughness={0.3}
            metalness={0.72}
            clearcoat={0.65}
          />
        </mesh>
        <mesh position={[0.86, 0, 0.14]}>
          <boxGeometry args={[1.62, 3.26, 0.22]} />
          <meshPhysicalMaterial
            color="#272722"
            roughness={0.3}
            metalness={0.72}
            clearcoat={0.65}
          />
        </mesh>
      </group>

      {[-1.56, -0.78, 0, 0.78, 1.56].map((x, index) => (
        <mesh key={x} position={[x, 1.93, 0.39]}>
          <boxGeometry args={[index === 2 ? 0.34 : 0.18, 0.08, 0.08]} />
          <meshBasicMaterial color={index === 2 ? "#d9d2c1" : "#73786f"} />
        </mesh>
      ))}

      <mesh position={[0, -1.92, 0.39]}>
        <boxGeometry args={[2.7, 0.05, 0.04]} />
        <meshBasicMaterial color="#5e635b" />
      </mesh>
    </group>
  );
}

function MemoryFragment({
  position,
  rotation,
  index,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = pageProgress();
    const start = 0.5 + index * 0.085;
    const reveal = smoothSceneGate(p, start, start + 0.08);
    const returnToOrigin = smoothSceneGate(p, 0.82, 0.94);
    const presence = reveal * (1 - returnToOrigin);

    if (group.current) {
      group.current.visible = presence > 0.001;
      group.current.scale.setScalar(0.78 + presence * 0.22);
      group.current.position.y =
        position[1] + (1 - presence) * (index % 2 === 0 ? 0.7 : -0.7);
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[3.2, 1.95, 0.06]} />
        <meshPhysicalMaterial
          color={index === 1 ? "#beb8aa" : "#1a1a18"}
          roughness={0.45}
          metalness={0.18}
          clearcoat={0.35}
        />
      </mesh>
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[2.8, 1.55]} />
        <meshBasicMaterial
          color={index === 1 ? "#22221e" : "#c8c1b2"}
          transparent
          opacity={0.11}
        />
      </mesh>
      <mesh position={[-1.12, 0.67, 0.09]}>
        <boxGeometry args={[0.28, 0.035, 0.02]} />
        <meshBasicMaterial color="#747c6f" />
      </mesh>
    </group>
  );
}

function ArchiveWorld() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const pose = getArchiveCameraPose(pageProgress());

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pose.x + pointer.x * 0.16 * (1 - pose.interior),
      0.045,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pose.y + pointer.y * 0.1 * (1 - pose.interior),
      0.045,
    );
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, pose.z, 0.055);
    camera.lookAt(0, 0, pose.targetZ);
  });

  return (
    <>
      <fog attach="fog" args={["#050504", 5.5, 19]} />
      <ambientLight intensity={0.34} />
      <directionalLight position={[3.5, 5.5, 6]} intensity={4.2} color="#efe7d7" />
      <pointLight position={[-3, -2, 3]} intensity={20} color="#737d70" />
      <pointLight position={[2.5, 1, -5]} intensity={16} color="#8f7e69" />

      <ArchiveObject />

      <MemoryFragment
        index={0}
        position={[-1.35, 0.55, -4.4]}
        rotation={[0.03, 0.16, -0.025]}
      />
      <MemoryFragment
        index={1}
        position={[1.1, -0.35, -7.15]}
        rotation={[-0.04, -0.13, 0.018]}
      />
      <MemoryFragment
        index={2}
        position={[-0.5, 0.45, -10.1]}
        rotation={[0.02, 0.09, -0.012]}
      />
    </>
  );
}

function StaticArchive() {
  return (
    <div className="archive-static" aria-hidden="true">
      <div className="archive-static-frame">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span>003</span>
    </div>
  );
}

export default function ArchiveScene() {
  const [renderWebGL, setRenderWebGL] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setRenderWebGL(desktop.matches && !reduced.matches);
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);

    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!renderWebGL) return <StaticArchive />;

  return (
    <Canvas
      aria-hidden="true"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8.4], fov: 42, near: 0.05, far: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ArchiveWorld />
    </Canvas>
  );
}
