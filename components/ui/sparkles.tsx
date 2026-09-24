"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaVelocity: number;
};

function parseHex(color: string) {
  const clean = color.replace("#", "");
  const value =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  const number = Number.parseInt(value, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let disposed = false;
    const rgb = parseHex(particleColor);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(
        20,
        Math.round((rect.width * rect.height * particleDensity) / 160000),
      );

      particlesRef.current = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 0.015 + Math.random() * 0.055;

        return {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          radius: minSize + Math.random() * (maxSize - minSize),
          alpha: 0.1 + Math.random() * 0.9,
          alphaVelocity:
            (0.0015 + Math.random() * 0.0045) * (Math.random() > 0.5 ? 1 : -1),
        };
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      for (let i = 0; i < 4; i++) {
        const angle = Math.random() * Math.PI * 2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * (0.08 + Math.random() * 0.12),
          vy: Math.sin(angle) * (0.08 + Math.random() * 0.12),
          radius: minSize + Math.random() * (maxSize - minSize),
          alpha: 1,
          alphaVelocity: -0.003,
        });
      }
    };

    let last = performance.now();

    const draw = (now: number) => {
      if (disposed) return;

      const rect = canvas.getBoundingClientRect();
      const delta = Math.min(32, now - last);
      last = now;

      ctx.clearRect(0, 0, rect.width, rect.height);

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      const movementScale = Math.max(0.15, speed / 4);

      for (const particle of particlesRef.current) {
        particle.x += particle.vx * delta * movementScale;
        particle.y += particle.vy * delta * movementScale;
        particle.alpha += particle.alphaVelocity * delta * movementScale;

        if (particle.alpha <= 0.1 || particle.alpha >= 1) {
          particle.alphaVelocity *= -1;
          particle.alpha = Math.min(1, Math.max(0.1, particle.alpha));
        }

        if (particle.x < -4) particle.x = rect.width + 4;
        if (particle.x > rect.width + 4) particle.x = -4;
        if (particle.y < -4) particle.y = rect.height + 4;
        if (particle.y > rect.height + 4) particle.y = -4;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          Math.max(0.25, particle.radius),
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${particle.alpha})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", onPointerDown);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [
    background,
    maxSize,
    minSize,
    particleColor,
    particleDensity,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      aria-hidden="true"
      className={cn("h-full w-full opacity-100", className)}
    />
  );
};
