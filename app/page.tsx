"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

const studies = [
  { index: "01", title: "Origin", copy: "A study in scale, restraint and responsive light." },
  { index: "02", title: "Depth", copy: "Spatial composition without sacrificing clarity." },
  { index: "03", title: "Rhythm", copy: "Motion that explains hierarchy instead of decorating it." },
];

export default function Home() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.5 });
  const orbX = useTransform(sx, [0, 1], [-24, 24]);
  const orbY = useTransform(sy, [0, 1], [-18, 18]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow-row">
          <span>ALEX EXPERIENCE LAB</span>
          <span>EXPERIMENT 001 / ORIGIN</span>
        </div>

        <div className="hero-grid">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}>
              Make the digital
              <span>feel physical.</span>
            </motion.h1>
            <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }}>
              A living laboratory for interfaces with weight, rhythm and atmosphere — built to become a reusable visual language.
            </motion.p>
          </div>

          <div className="orb-wrap" aria-hidden="true">
            <motion.div className="orb" style={{ x: orbX, y: orbY }} />
            <div className="orb-ring ring-one" />
            <div className="orb-ring ring-two" />
          </div>
        </div>

        <div className="scroll-note">SCROLL TO ENTER</div>
      </section>

      <section className="statement shell">
        <p className="kicker">THE RULE</p>
        <motion.p
          className="manifesto"
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.45, once: true }}
          transition={{ duration: 1.1 }}
        >
          Spectacle is strongest when it has something to contrast with.
        </motion.p>
      </section>

      <section className="studies shell">
        <div className="section-head">
          <span>SELECTED STUDIES</span>
          <span>001—003</span>
        </div>
        <div className="study-list">
          {studies.map((study) => (
            <motion.article
              key={study.index}
              className="study"
              whileHover={{ x: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <span className="study-index">{study.index}</span>
              <h2>{study.title}</h2>
              <p>{study.copy}</p>
              <span className="arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="closing shell">
        <div className="closing-copy">
          <p className="kicker">NEXT</p>
          <h2>Turn experiments into a system.</h2>
          <p>Only components that survive visual, mobile, accessibility and performance review graduate into Alex UI.</p>
        </div>
        <div className="monogram" aria-hidden="true">AC</div>
      </section>
    </main>
  );
}
