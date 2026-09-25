"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function HeroObjectFraming() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 18 });
  const sy = useSpring(my, { stiffness: 110, damping: 18 });
  const rotateX = useTransform(sy, [-1, 1], [7, -7]);
  const rotateY = useTransform(sx, [-1, 1], [-10, 10]);
  const translateX = useTransform(sx, [-1, 1], [-12, 12]);
  const translateY = useTransform(sy, [-1, 1], [-8, 8]);

  return (
    <main
      className="min-h-dvh overflow-hidden bg-[#f1eee6] text-[#11110f]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
        my.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <header className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between border-b border-black/20 py-5 text-[9px] uppercase tracking-[0.22em]">
        <span>Candidate 003</span>
        <span>Hero object framing</span>
      </header>

      <section className="mx-auto grid min-h-[calc(100dvh-62px)] w-[min(1500px,calc(100%-48px))] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative z-10 max-w-xl self-end pb-8 lg:self-center lg:pb-0">
          <p className="mb-8 text-[9px] uppercase tracking-[0.22em] text-black/55">
            Study / ordinary object, extraordinary framing
          </p>
          <h1 className="m-0 text-[clamp(72px,10vw,154px)] font-medium leading-[.78] tracking-[-0.075em]">
            Nothing
            <span className="block font-serif font-normal italic">special.</span>
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-black/58">
            The experiment: can scale, restraint and one controlled response make
            a completely ordinary object feel important?
          </p>
        </div>

        <div className="relative flex min-h-[62svh] items-center justify-center [perspective:1200px]">
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,.07),transparent_62%)] blur-2xl" />

          <motion.div
            className="relative aspect-square w-[min(58vw,540px)] [transform-style:preserve-3d]"
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
            }}
          >
            <div className="absolute inset-[9%] rounded-full bg-[#bd875a] shadow-[0_60px_90px_rgba(54,35,20,.25),inset_0_0_0_1px_rgba(55,30,10,.18),inset_0_0_0_18px_rgba(255,255,255,.06)] [transform:translateZ(55px)]">
              <div className="absolute inset-[12%] rounded-full border border-black/15" />
              <div className="absolute inset-[26%] grid place-items-center rounded-full border border-black/10">
                <span className="font-serif text-[clamp(42px,7vw,96px)] italic tracking-[-0.06em]">
                  003
                </span>
              </div>
            </div>

            <div className="absolute left-[10%] top-[13%] rounded-full border border-black/20 bg-[#efebe1] px-4 py-2 text-[9px] uppercase tracking-[.16em] [transform:translateZ(95px)]">
              100% cork-ish
            </div>

            <div className="absolute bottom-[12%] right-[7%] max-w-40 rotate-3 border border-black/20 bg-[#11110f] p-4 text-white [transform:translateZ(100px)]">
              <div className="mb-10 text-[8px] uppercase tracking-[.18em] text-white/55">
                Specimen note
              </div>
              <div className="text-xl leading-tight tracking-[-0.04em]">
                Perceived value is often framing.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
