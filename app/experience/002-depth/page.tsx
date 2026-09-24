"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "./depth.module.css";

const DepthScene = dynamic(() => import("../../../components/depth-scene"), {
  ssr: false,
});

const chapters = [
  {
    n: "01",
    title: "Mass",
    body: "A digital object should feel like it occupies space, not merely pixels.",
  },
  {
    n: "02",
    title: "Parallax",
    body: "Pointer and scroll movement alter the relationship between object, camera and type.",
  },
  {
    n: "03",
    title: "Restraint",
    body: "The interface stays quiet enough for one spatial gesture to carry the experience.",
  },
];

export default function DepthExperience() {
  return (
    <main className={styles.page}>
      <div className={styles.scene}>
        <DepthScene />
      </div>

      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          ALEX EXPERIENCE LAB
        </Link>
        <span>EXPERIMENT 002 / DEPTH</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>WEBGL / R3F</span>
          <span>SCROLL + POINTER</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 0.75, 0.18, 1] }}
        >
          Depth
          <em>changes everything.</em>
        </motion.h1>

        <motion.p
          className={styles.heroCopy}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38, duration: 0.8 }}
        >
          A spatial study in weight, camera movement and the moment a flat
          interface begins to feel architectural.
        </motion.p>

        <div className={styles.scrollCue}>SCROLL THROUGH THE OBJECT</div>
      </section>

      <section className={styles.interlude}>
        <p>NOT DECORATION</p>
        <motion.h2
          initial={{ opacity: 0.22 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.55, once: true }}
          transition={{ duration: 1 }}
        >
          The object is not the content. It changes how the content is felt.
        </motion.h2>
      </section>

      <section className={styles.chapters}>
        {chapters.map((chapter, index) => (
          <motion.article
            key={chapter.n}
            className={styles.chapter}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: true }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
          >
            <span>{chapter.n}</span>
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </motion.article>
        ))}
      </section>

      <section className={styles.outro}>
        <p className={styles.outroLabel}>EXPERIMENT 002 COMPLETE</p>
        <h2>
          Build less.
          <em>Give it more presence.</em>
        </h2>
        <Link href="/" className={styles.returnLink}>
          RETURN TO LAB ↗
        </Link>
      </section>
    </main>
  );
}
