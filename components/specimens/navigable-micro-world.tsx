"use client";

import { useEffect, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function NavigableMicroWorld() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(78);
  const [message, setMessage] = useState("Use arrows or WASD");

  const move = (dx: number, dy: number) => {
    setX((value) => clamp(value + dx, 6, 94));
    setY((value) => clamp(value + dy, 8, 90));
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

  useEffect(() => {
    const near = (
      ax: number,
      ay: number,
      bx: number,
      by: number,
      distance = 11,
    ) => Math.hypot(ax - bx, ay - by) < distance;

    if (near(x, y, 22, 28)) {
      setMessage("WORK — destination reached");
    } else if (near(x, y, 77, 32)) {
      setMessage("ABOUT — destination reached");
    } else {
      setMessage("Use arrows or WASD");
    }
  }, [x, y]);

  const reset = () => {
    setX(50);
    setY(78);
  };

  return (
    <main className="min-h-dvh bg-[#d7e7d0] text-[#172116]">
      <header className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-black/20 py-5 text-[9px] uppercase tracking-[.2em]">
        <span>Candidate 006</span>
        <span>Navigable micro-world</span>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 gap-6 py-6 lg:grid-cols-[1fr_270px]">
        <div className="relative min-h-[72svh] overflow-hidden border border-black/20 bg-[#c7ddbb]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(0,0,0,.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.14)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="absolute left-[22%] top-[28%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-20 w-24 border border-black/20 bg-[#f4c869] shadow-[8px_8px_0_rgba(0,0,0,.12)]" />
            <div className="mt-2 text-center text-[9px] uppercase tracking-[.18em]">
              Work
            </div>
          </div>

          <div className="absolute left-[77%] top-[32%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-24 w-20 rounded-t-full border border-black/20 bg-[#7db6d4] shadow-[8px_8px_0_rgba(0,0,0,.12)]" />
            <div className="mt-2 text-center text-[9px] uppercase tracking-[.18em]">
              About
            </div>
          </div>

          <div
            className="absolute h-10 w-16 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-75"
            style={{ left: x + "%", top: y + "%" }}
          >
            <div className="absolute left-1/2 top-1/2 h-6 w-12 -translate-x-1/2 -translate-y-1/2 bg-[#e44c34]" />
            <div className="absolute bottom-0 left-1 h-3 w-3 rounded-full bg-[#172116]" />
            <div className="absolute bottom-0 right-1 h-3 w-3 rounded-full bg-[#172116]" />
          </div>

          <div className="absolute bottom-5 left-5 border border-black/20 bg-[#f4f0e4] px-4 py-3 text-[10px] uppercase tracking-[.16em]">
            {message}
          </div>
        </div>

        <aside className="flex flex-col justify-between border border-black/20 bg-[#f4f0e4] p-5">
          <div>
            <p className="mb-8 text-[9px] uppercase tracking-[.18em] text-black/45">
              Interaction study
            </p>
            <h1 className="m-0 text-5xl font-medium leading-[.88] tracking-[-.055em]">
              Move instead of clicking.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              The experiment is deliberately tiny: two destinations, one movement
              model and one recovery action.
            </p>
          </div>

          <div>
            <div className="mb-4 grid grid-cols-3 gap-2">
              <span />
              <button onClick={() => move(0, -5)} className="border border-black/20 p-3">
                ↑
              </button>
              <span />
              <button onClick={() => move(-5, 0)} className="border border-black/20 p-3">
                ←
              </button>
              <button onClick={() => move(0, 5)} className="border border-black/20 p-3">
                ↓
              </button>
              <button onClick={() => move(5, 0)} className="border border-black/20 p-3">
                →
              </button>
            </div>
            <button
              onClick={reset}
              className="w-full border border-black bg-black px-4 py-3 text-[9px] uppercase tracking-[.18em] text-white"
            >
              Reset position
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
