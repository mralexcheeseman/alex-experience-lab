"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Sculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  const { camera, pointer } = useThree();

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    mesh.current.rotation.x += delta * 0.075;
    mesh.current.rotation.y += delta * 0.11;
    mesh.current.rotation.z = progress * 0.8;
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      pointer.x * 0.42,
      0.035,
    );
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      pointer.y * 0.28 - progress * 0.42,
      0.035,
    );

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.32,
      0.025,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.18,
      0.025,
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      5.6 - progress * 0.75,
      0.025,
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={mesh} scale={1.05}>
      <torusKnotGeometry args={[1.24, 0.34, 220, 28, 2, 3]} />
      <meshPhysicalMaterial
        color="#c9c4b9"
        metalness={0.78}
        roughness={0.19}
        clearcoat={1}
        clearcoatRoughness={0.12}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[4, 4, 5]} intensity={3.8} color="#fff9ee" />
      <pointLight position={[-4, -2, 2]} intensity={34} color="#8c9cff" />
      <pointLight position={[3, -3, -1]} intensity={28} color="#b46c4f" />
      <Sculpture />
    </>
  );
}

export default function DepthScene() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setCanRender(wide.matches && !reduced.matches);
    update();

    wide.addEventListener("change", update);
    reduced.addEventListener("change", update);

    return () => {
      wide.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!canRender) {
    return (
      <div className="depth-static" aria-hidden="true">
        <div className="depth-static-ring depth-static-ring-a" />
        <div className="depth-static-ring depth-static-ring-b" />
      </div>
    );
  }

  return (
    <Canvas
      aria-hidden="true"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  );
}
