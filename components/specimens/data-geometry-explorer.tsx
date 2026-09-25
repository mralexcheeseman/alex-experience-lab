"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Node = {
  id: number;
  group: 0 | 1 | 2;
  x: number;
  y: number;
  weight: number;
};

function pseudo(seed: number) {
  const value = Math.sin(seed * 999.91) * 43758.5453;
  return value - Math.floor(value);
}

export function DataGeometryExplorer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [step, setStep] = useState(0);
  const [explore, setExplore] = useState(false);
  const pointer = useRef({ x: 0.5, y: 0.5 });

  const nodes = useMemo<Node[]>(
    () =>
      Array.from({ length: 420 }, (_, index) => {
        const group = (index % 3) as 0 | 1 | 2;
        const cx = [0.28, 0.5, 0.72][group];
        const cy = [0.5, 0.34, 0.6][group];
        const radius = 0.04 + pseudo(index + 11) * 0.22;
        const angle = pseudo(index + 37) * Math.PI * 2;

        return {
          id: index,
          group,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          weight: 0.25 + pseudo(index + 73) * 0.75,
        };
      }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#0b0d10";
      ctx.fillRect(0, 0, rect.width, rect.height);

      const px = pointer.current.x * rect.width;
      const py = pointer.current.y * rect.height;

      for (const node of nodes) {
        const x = node.x * rect.width;
        const y = node.y * rect.height;
        const guidedActive = step === node.group;
        const distance = Math.hypot(x - px, y - py);
        const pointerBoost = explore ? Math.max(0, 1 - distance / 180) : 0;
        const alpha = explore
          ? 0.18 + node.weight * 0.32 + pointerBoost * 0.5
          : guidedActive
            ? 0.78
            : 0.08;
        const size = 0.7 + node.weight * 1.6 + pointerBoost * 2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          node.group === 0
            ? "rgba(133,197,255," + alpha + ")"
            : node.group === 1
              ? "rgba(210,168,255," + alpha + ")"
              : "rgba(154,255,190," + alpha + ")";
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, [nodes, step, explore]);

  const labels = [
    ["01", "Cluster", "Start with one meaningful group."],
    ["02", "Relationship", "Reveal the next structure only after orientation."],
    ["03", "Context", "Then show how groups coexist."],
  ];

  return (
    <main className="min-h-dvh bg-[#0b0d10] text-white">
      <header className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-white/15 py-5 text-[9px] uppercase tracking-[.2em]">
        <span>Candidate 007</span>
        <span>Data → geometry explorer</span>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 py-6 lg:grid-cols-[330px_1fr]">
        <aside className="flex flex-col justify-between border border-white/15 p-6 lg:border-r-0">
          <div>
            <p className="mb-8 text-[9px] uppercase tracking-[.2em] text-white/45">
              Synthetic data / mechanic study
            </p>
            <h1 className="m-0 text-6xl font-medium leading-[.82] tracking-[-.06em]">
              Explain,
              <span className="block font-serif italic font-normal">then explore.</span>
            </h1>
          </div>

          <div className="mt-10">
            {!explore ? (
              <>
                <div className="mb-8">
                  <div className="mb-3 font-serif text-2xl italic text-white/50">
                    {labels[step][0]}
                  </div>
                  <div className="text-2xl tracking-[-.04em]">
                    {labels[step][1]}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {labels[step][2]}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (step < 2) setStep((value) => value + 1);
                    else setExplore(true);
                  }}
                  className="w-full border border-white bg-white px-4 py-3 text-[9px] uppercase tracking-[.18em] text-black"
                >
                  {step < 2 ? "Next guided step" : "Enter explorer"}
                </button>
              </>
            ) : (
              <>
                <p className="mb-5 text-sm leading-relaxed text-white/58">
                  Explorer unlocked. Move the pointer across the field to reveal
                  local density.
                </p>
                <button
                  onClick={() => {
                    setExplore(false);
                    setStep(0);
                  }}
                  className="w-full border border-white/30 px-4 py-3 text-[9px] uppercase tracking-[.18em]"
                >
                  Restart story
                </button>
              </>
            )}
          </div>
        </aside>

        <div
          className="relative min-h-[72svh] overflow-hidden border border-white/15"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            pointer.current = {
              x: (event.clientX - rect.left) / rect.width,
              y: (event.clientY - rect.top) / rect.height,
            };
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute left-5 top-5 text-[9px] uppercase tracking-[.2em] text-white/42">
            {explore ? "Explorer mode" : "Guided mode"}
          </div>
          <div className="pointer-events-none absolute bottom-5 right-5 text-[9px] uppercase tracking-[.2em] text-white/42">
            420 structured points
          </div>
        </div>
      </section>
    </main>
  );
}
