"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesSpecimen() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <section className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black">
        <h1 className="relative z-20 text-center text-5xl font-bold tracking-[-0.06em] md:text-8xl lg:text-9xl">
          Sparkles
        </h1>

        <div className="relative h-40 w-[min(40rem,88vw)]">
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </section>

      <section className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>

        <h2 className="relative z-20 text-center text-4xl font-bold tracking-[-0.05em] md:text-8xl lg:text-9xl">
          Build faster
        </h2>
      </section>

      <section className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlescolorful"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#00ff00"
            speed={0.5}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center gap-4">
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold tracking-[-0.05em] text-transparent md:text-8xl lg:text-9xl">
            The Future
          </h2>
          <p className="cursor-default text-center text-neutral-300">
            is brighter than you think
          </p>
        </div>
      </section>
    </main>
  );
}
