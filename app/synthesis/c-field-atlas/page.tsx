"use client";

import { useEffect, useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function FieldAtlas() {
  const [x, setX] = useState(48);
  const [y, setY] = useState(70);

  const points = useMemo(
    () =>
      Array.from({ length: 96 }, (_, index) => {
        const group = index % 3;
        const centers = [
          [24, 28],
          [70, 34],
          [52, 70],
        ];
        const cx = centers[group][0];
        const cy = centers[group][1];
        const angle = index * 2.399;
        const radius = 5 + ((index * 17) % 18);

        return {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          group,
        };
      }),
    [],
  );

  const move = (dx: number, dy: number) => {
    setX((value) => clamp(value + dx, 5, 95));
    setY((value) => clamp(value + dy, 6, 92));
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["arrowup", "w"].includes(key)) move(0, -3);
      if (["arrowdown", "s"].includes(key)) move(0, 3);
      if (["arrowleft", "a"].includes(key)) move(-3, 0);
      if (["arrowright", "d"].includes(key)) move(3, 0);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nearest = points.reduce(
    (best, point, index) => {
      const distance = Math.hypot(point.x - x, point.y - y);
      return distance < best.distance ? { index, distance, point } : best;
    },
    { index: -1, distance: Infinity, point: points[0] },
  );

  return (
    <main className="min-h-dvh bg-[#0a0d0d] text-[#f1efe8]">
      <header className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-white/15 py-5 text-[9px] uppercase tracking-[.2em]">
        <span>Synthesis C</span>
        <span>Field Atlas</span>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 gap-6 py-6 lg:grid-cols-[300px_1fr]">
        <aside className="flex flex-col justify-between border border-white/15 p-6">
          <div>
            <p className="mb-8 text-[9px] uppercase tracking-[.2em] text-white/42">
              Data Geometry × Navigable Micro-World
            </p>
            <h1 className="m-0 text-6xl font-medium leading-[.82] tracking-[-.06em]">
              Move through
              <span className="block font-serif font-normal italic">the data.</span>
            </h1>
            <p className="mt-7 text-sm leading-relaxed text-white/55">
              Here navigation is not separate from information. Moving through the
              field changes what becomes legible.
            </p>
          </div>

          <div className="mt-10">
            <div className="mb-4 border border-white/15 p-4">
              <div className="text-[9px] uppercase tracking-[.18em] text-white/38">
                nearest point
              </div>
              <div className="mt-4 text-3xl tracking-[-.045em]">
                Node {String(nearest.index + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-sm text-white/48">
                Cluster {nearest.point.group + 1}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <span />
              <button onClick={() => move(0, -5)} className="border border-white/20 p-3">
                ↑
              </button>
              <span />
              <button onClick={() => move(-5, 0)} className="border border-white/20 p-3">
                ←
              </button>
              <button onClick={() => move(0, 5)} className="border border-white/20 p-3">
                ↓
              </button>
              <button onClick={() => move(5, 0)} className="border border-white/20 p-3">
                →
              </button>
            </div>
          </div>
        </aside>

        <div className="relative min-h-[76svh] overflow-hidden border border-white/15 bg-[#101515]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />

          {points.map((point, index) => {
            const distance = Math.hypot(point.x - x, point.y - y);
            const near = Math.max(0, 1 - distance / 20);
            const colors = ["#84c8ff", "#d4a7ff", "#9cffba"];

            return (
              <span
                key={index}
                className="absolute block rounded-full transition-all duration-150"
                style={{
                  left: point.x + "%",
                  top: point.y + "%",
                  width: 4 + near * 9,
                  height: 4 + near * 9,
                  opacity: 0.24 + near * 0.76,
                  background: colors[point.group],
                  transform: "translate(-50%,-50%)",
                  boxShadow:
                    near > 0.55
                      ? "0 0 24px " + colors[point.group]
                      : "none",
                }}
              />
            );
          })}

          <div
            className="absolute h-8 w-8 rounded-full border border-white bg-black transition-[left,top] duration-75"
            style={{
              left: x + "%",
              top: y + "%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-white/60" />
            <div className="absolute left-1/2 top-1/2 h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-white/60" />
          </div>

          <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[.2em] text-white/38">
            WASD / arrows
          </div>

          <div className="absolute bottom-5 right-5 text-right text-[9px] uppercase tracking-[.18em] text-white/38">
            movement changes
            <br />
            information priority
          </div>
        </div>
      </section>
    </main>
  );
}
