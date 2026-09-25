"use client";

import { useState } from "react";
import { BackgroundPixelStars } from "@/components/ui/background-pixel-stars";
import { SparklesCore } from "@/components/ui/sparkles";

export default function ArtifactSignal() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <main
      className="relative min-h-dvh overflow-hidden bg-black text-white"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * -8,
        });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <BackgroundPixelStars />

      <header className="relative z-20 mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-white/15 py-5 text-[9px] uppercase tracking-[.2em]">
        <span>Synthesis A</span>
        <span>Artifact Signal</span>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mb-8 text-[9px] uppercase tracking-[.22em] text-white/48">
            Pixel Stars × Hero Object × Sparkle Bloom
          </p>
          <h1 className="m-0 max-w-[7ch] text-[clamp(76px,10vw,158px)] font-medium leading-[.78] tracking-[-.075em]">
            Signal
            <span className="block font-serif font-normal italic">found.</span>
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/58">
            A low-fidelity digital field frames one tactile object. High-density
            sparkle appears only as a narrow transition layer, not the whole visual
            language.
          </p>
        </div>

        <div className="relative flex min-h-[66svh] items-center justify-center [perspective:1400px]">
          <div className="absolute bottom-[18%] left-1/2 h-28 w-[72%] -translate-x-1/2">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={650}
              speed={1.2}
              className="h-full w-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 bg-black [mask-image:radial-gradient(320px_100px_at_center,transparent_10%,white_75%)]" />
          </div>

          <div
            className="relative aspect-square w-[min(56vw,520px)] transition-transform duration-150 [transform-style:preserve-3d]"
            style={{
              transform:
                "rotateX(" +
                tilt.y +
                "deg) rotateY(" +
                tilt.x +
                "deg)",
            }}
          >
            <div className="absolute inset-[8%] rounded-[28%] border border-white/20 bg-[#d36d3e] shadow-[0_70px_110px_rgba(0,0,0,.5),inset_0_0_0_1px_rgba(255,255,255,.15)] [transform:translateZ(65px)]">
              <div className="absolute inset-[11%] rounded-[24%] border border-black/20" />
              <div className="absolute left-[14%] top-[13%] text-[9px] uppercase tracking-[.18em] text-black/55">
                Artifact / 01
              </div>
              <div className="absolute bottom-[12%] left-[14%] right-[14%] flex items-end justify-between gap-4">
                <span className="font-serif text-[clamp(62px,8vw,110px)] italic leading-none text-black/85">
                  01
                </span>
                <span className="max-w-32 text-right text-[9px] uppercase tracking-[.16em] text-black/55">
                  one object
                  <br />
                  one signal
                </span>
              </div>
            </div>

            <div className="absolute right-[2%] top-[16%] border border-white/20 bg-black/80 px-4 py-3 text-[9px] uppercase tracking-[.16em] text-white/70 backdrop-blur [transform:translateZ(110px)]">
              move pointer
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
