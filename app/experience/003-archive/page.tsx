"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import DepthType from "../../../components/primitives/depth-type";
import styles from "./archive.module.css";

const ArchiveScene = dynamic(
  () => import("../../../components/archive/archive-scene"),
  { ssr: false },
);

const fragments = [
  {
    id: "TRACE / 01",
    year: "1968",
    title: "What remains",
    body: "Memory survives as fragments: marks, coordinates, omissions and the pressure of what once surrounded them.",
  },
  {
    id: "SIGNAL / 02",
    year: "1984",
    title: "What travels",
    body: "Information becomes an object the moment we decide it should outlive its original context.",
  },
  {
    id: "AFTERIMAGE / 03",
    year: "2026",
    title: "What returns",
    body: "An archive is not storage. It is a machine for making the absent present again.",
  },
];

export default function ArchiveExperience() {
  return (
    <main className={styles.page}>
      <div className={styles.stage}>
        <ArchiveScene />
      </div>

      <header className={styles.header}>
        <Link href="/" className={styles.home}>
          ALEX EXPERIENCE LAB
        </Link>
        <span>EXPERIMENT 003 / THE ARCHIVE</span>
        <span>SCROLL TO MOVE</span>
      </header>

      <section className={styles.scene} data-scene="00">
        <div className={styles.sceneIndex}>00 / SILENCE</div>
        <div className={styles.opening}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            SOME THINGS ARE STORED.
            <br />
            SOME THINGS WAIT.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 54 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
          >
            The
            <em>Archive</em>
          </motion.h1>
        </div>
        <div className={styles.scrollCue}>APPROACH ↓</div>
      </section>

      <section className={styles.scene} data-scene="01">
        <div className={styles.sceneIndex}>01 / APPROACH</div>
        <div className={styles.leftStatement}>
          <p>
            A memory is not a file.
          </p>
          <h2>
            It has
            <em>distance.</em>
          </h2>
        </div>
      </section>

      <section className={styles.scene} data-scene="02">
        <div className={styles.sceneIndex}>02 / SURFACE</div>
        <DepthType
          className={styles.surfaceType}
          range={[0.2, 0.38]}
          y={[80, -40]}
          opacity={[0.02, 0.14]}
        >
          <span aria-hidden="true">SURFACE</span>
        </DepthType>
        <p className={styles.surfaceCopy}>
          Marks become metadata. Seams become chronology. Material becomes
          interface.
        </p>
      </section>

      <section className={`${styles.scene} ${styles.threshold}`} data-scene="03">
        <div className={styles.sceneIndex}>03 / THRESHOLD</div>
        <p className={styles.thresholdPre}>DO NOT OPEN</p>
        <DepthType
          className={styles.thresholdWord}
          range={[0.31, 0.48]}
          y={[64, -28]}
          opacity={[0.2, 1]}
        >
          <h2>ENTER</h2>
        </DepthType>
        <p className={styles.thresholdPost}>PASS THROUGH THE OBJECT</p>
      </section>

      {fragments.map((fragment, index) => (
        <section
          key={fragment.id}
          className={`${styles.scene} ${styles.fragment} ${styles[`fragment${index + 1}`]}`}
          data-scene={String(index + 4).padStart(2, "0")}
        >
          <div className={styles.sceneIndex}>
            {String(index + 4).padStart(2, "0")} / MEMORY
          </div>
          <div className={styles.fragmentCard}>
            <div className={styles.fragmentMeta}>
              <span>{fragment.id}</span>
              <span>{fragment.year}</span>
            </div>
            <h2>{fragment.title}</h2>
            <p>{fragment.body}</p>
          </div>
        </section>
      ))}

      <section className={styles.resolution} data-scene="07">
        <div className={styles.resolutionTop}>
          <span>07 / RETURN TO FLATNESS</span>
          <span>ARCHIVE INDEX · 003</span>
        </div>
        <div className={styles.resolutionGrid}>
          <h2>
            The interface
            <em>disappears.</em>
          </h2>
          <div className={styles.resolutionText}>
            <p>
              The spectacle was only useful because it changed the relationship
              between the visitor and the information.
            </p>
            <p>
              Strip away the camera, material and depth and the hierarchy must
              still hold.
            </p>
          </div>
        </div>
        <div className={styles.indexRows}>
          {fragments.map((fragment, index) => (
            <div key={fragment.id}>
              <span>0{index + 1}</span>
              <b>{fragment.title}</b>
              <span>{fragment.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.exit} data-scene="08">
        <div>
          <p>EXPERIMENT 003 / FIRST BUILD</p>
          <h2>
            One object.
            <em>One way through.</em>
          </h2>
        </div>
        <div className={styles.exitActions}>
          <Link href="/references">REFERENCE OBSERVATORY ↗</Link>
          <Link href="/">RETURN TO LAB ↗</Link>
        </div>
      </section>
    </main>
  );
}
