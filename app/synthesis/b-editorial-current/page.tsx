"use client";

import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const chapters = [
  ["01", "Signal", "A hero idea gets the most space."],
  ["02", "System", "Supporting features inherit the same grammar."],
  ["03", "Flow", "Motion guides scanning instead of interrupting it."],
];

export default function EditorialCurrent() {
  const [active, setActive] = useState(0);

  return (
    <main className="min-h-dvh bg-[#f0eee8] text-[#111]">
      <header className="sticky top-0 z-20 border-b border-black/15 bg-[#f0eee8]/95 backdrop-blur">
        <div className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between py-5 text-[9px] uppercase tracking-[.2em]">
          <span>Synthesis B</span>
          <span>Editorial Current</span>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 lg:grid-cols-[230px_1fr]">
        <aside className="border-b border-black/15 py-6 lg:border-b-0 lg:border-r lg:pr-5">
          <p className="mb-8 text-[9px] uppercase tracking-[.2em] text-black/45">
            Chapter grammar × Editorial hierarchy × Sparkle bloom
          </p>

          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {chapters.map((chapter, index) => (
              <button
                key={chapter[0]}
                onClick={() => setActive(index)}
                className={
                  index === active
                    ? "min-w-36 border border-black bg-black px-4 py-3 text-left text-white"
                    : "min-w-36 border border-black/20 px-4 py-3 text-left text-black/55"
                }
              >
                <div className="text-[9px] uppercase tracking-[.16em]">
                  {chapter[0]}
                </div>
                <div className="mt-5 text-2xl tracking-[-.04em]">
                  {chapter[1]}
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="py-8 lg:pl-6">
          <div className="relative min-h-[48svh] overflow-hidden border border-black/15 bg-[#dde4ff] p-7">
            <div className="absolute inset-x-0 bottom-0 h-32">
              <SparklesCore
                background="transparent"
                minSize={0.3}
                maxSize={0.9}
                particleDensity={460}
                speed={0.7}
                className="h-full w-full"
                particleColor="#111111"
              />
              <div className="absolute inset-0 bg-[#dde4ff] [mask-image:linear-gradient(to_top,transparent,white_85%)]" />
            </div>

            <div className="relative z-10 flex min-h-[42svh] flex-col justify-between">
              <div className="flex justify-between text-[9px] uppercase tracking-[.18em] text-black/48">
                <span>Hero layer</span>
                <span>{chapters[active][0]} / 03</span>
              </div>

              <div>
                <h1 className="m-0 max-w-[8ch] text-[clamp(64px,9vw,140px)] font-medium leading-[.8] tracking-[-.07em]">
                  {chapters[active][1]}
                </h1>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-black/58">
                  {chapters[active][2]}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="min-h-64 border border-black/15 bg-white p-6">
              <div className="text-[9px] uppercase tracking-[.18em] text-black/45">
                Feature
              </div>
              <h2 className="mt-20 max-w-[8ch] text-5xl font-medium leading-[.9] tracking-[-.05em]">
                Different weight, same system.
              </h2>
            </article>

            <article className="min-h-64 border border-black/15 bg-[#c8ff5a] p-6">
              <div className="text-[9px] uppercase tracking-[.18em] text-black/45">
                Update
              </div>
              <h2 className="mt-20 max-w-[8ch] text-5xl font-medium leading-[.9] tracking-[-.05em]">
                Motion only where hierarchy needs it.
              </h2>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
