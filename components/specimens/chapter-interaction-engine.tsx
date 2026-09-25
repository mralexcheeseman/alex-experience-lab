"use client";

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    label: "Carve",
    title: "Pressure",
    detail: "Hold to compress the field.",
    bg: "radial-gradient(circle at 50% 45%, #d9e7ff 0, #809bd0 22%, #172036 72%)",
  },
  {
    label: "Conduct",
    title: "Current",
    detail: "Hold to widen the rhythm.",
    bg: "radial-gradient(circle at 50% 45%, #e6ffe9 0, #5f8f6e 25%, #132019 72%)",
  },
  {
    label: "Wield",
    title: "Tide",
    detail: "Hold to bend the horizon.",
    bg: "radial-gradient(circle at 50% 45%, #dff8ff 0, #4f8396 24%, #0e1a20 72%)",
  },
  {
    label: "Alter",
    title: "Soil",
    detail: "Hold to fracture the surface.",
    bg: "radial-gradient(circle at 50% 45%, #ffe4c7 0, #966548 24%, #211813 72%)",
  },
];

export function ChapterInteractionEngine() {
  const [chapter, setChapter] = useState(0);
  const [held, setHeld] = useState(false);
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);
  const last = useRef<number>(0);

  useEffect(() => {
    last.current = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(34, now - last.current);
      last.current = now;

      setProgress((value) => {
        const target = held ? 1 : 0;
        const speed = held ? 0.0012 : 0.002;
        const next = value + (target - value) * Math.min(1, dt * speed);
        return Math.abs(next - target) < 0.003 ? target : next;
      });

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [held]);

  const active = chapters[chapter];

  return (
    <main className="min-h-dvh bg-[#0d0f14] text-white">
      <header className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-white/15 py-5 text-[9px] uppercase tracking-[0.22em]">
        <span>Candidate 004</span>
        <span>Chapter interaction engine</span>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 items-stretch gap-0 lg:grid-cols-[240px_1fr]">
        <nav className="flex gap-2 overflow-x-auto border-b border-white/15 py-4 lg:flex-col lg:border-b-0 lg:border-r lg:py-10 lg:pr-5">
          {chapters.map((item, index) => (
            <button
              key={item.title}
              onClick={() => {
                setChapter(index);
                setProgress(0);
              }}
              className={
                index === chapter
                  ? "flex min-w-32 items-center justify-between gap-4 border border-white bg-white px-4 py-3 text-left text-[10px] uppercase tracking-[.16em] text-black"
                  : "flex min-w-32 items-center justify-between gap-4 border border-white/15 px-4 py-3 text-left text-[10px] uppercase tracking-[.16em] text-white/60 transition hover:border-white/45 hover:text-white"
              }
            >
              <span>0{index + 1}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div
          className="relative min-h-[76svh] overflow-hidden"
          onPointerDown={() => setHeld(true)}
          onPointerUp={() => setHeld(false)}
          onPointerCancel={() => setHeld(false)}
          onPointerLeave={() => setHeld(false)}
        >
          <div
            className="absolute inset-0 transition-[background] duration-700"
            style={{ background: active.bg }}
          />

          <div
            className="absolute left-1/2 top-1/2 aspect-square w-[min(70vw,720px)] rounded-full border border-white/20"
            style={{
              transform:
                "translate(-50%,-50%) scale(" +
                (0.62 + progress * 0.48) +
                ") rotate(" +
                progress * 24 +
                "deg)",
              boxShadow:
                "0 0 " +
                (30 + progress * 180) +
                "px rgba(255,255,255," +
                (0.08 + progress * 0.15) +
                ")",
            }}
          >
            <div
              className="absolute inset-[12%] rounded-full border border-white/18"
              style={{
                transform:
                  "rotate(" +
                  -progress * 58 +
                  "deg) scale(" +
                  (1 - progress * 0.16) +
                  ")",
              }}
            />
            <div
              className="absolute inset-[28%] rounded-full border border-white/16"
              style={{
                transform:
                  "rotate(" +
                  progress * 110 +
                  "deg) scale(" +
                  (1 + progress * 0.25) +
                  ")",
              }}
            />
          </div>

          <div className="relative z-10 flex min-h-[76svh] flex-col justify-between p-6 md:p-10">
            <div className="flex justify-between gap-6 text-[9px] uppercase tracking-[.2em] text-white/60">
              <span>0{chapter + 1} / 04</span>
              <span>{held ? "HOLDING" : "PRESS + HOLD"}</span>
            </div>

            <div className="max-w-4xl">
              <p className="mb-5 text-[10px] uppercase tracking-[.22em] text-white/55">
                {active.label}
              </p>
              <h1 className="m-0 text-[clamp(78px,14vw,210px)] font-medium leading-[.75] tracking-[-.08em]">
                {active.title}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/64">
                {active.detail}
              </p>
            </div>

            <div className="h-px w-full bg-white/15">
              <div
                className="h-px bg-white"
                style={{ width: Math.round(progress * 100) + "%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
