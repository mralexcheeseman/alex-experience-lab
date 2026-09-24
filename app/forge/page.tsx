"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useMemo, useState } from "react";
import styles from "./forge.module.css";

type PrimitiveId = "type" | "depth" | "field" | "lens";

type Primitive = {
  id: PrimitiveId;
  index: string;
  name: string;
  purpose: string;
  source: string;
  licence: string;
};

const primitives: Primitive[] = [
  {
    id: "type",
    index: "01",
    name: "Kinetic Type",
    purpose: "Give typography physical response without turning it into decoration.",
    source: "Internal / Motion",
    licence: "Internal",
  },
  {
    id: "depth",
    index: "02",
    name: "Depth Planes",
    purpose: "Create spatial hierarchy from a flat composition.",
    source: "Internal / R3F principle",
    licence: "Internal",
  },
  {
    id: "field",
    index: "03",
    name: "Magnetic Field",
    purpose: "Make pointer movement alter the composition rather than just the cursor.",
    source: "Internal / Motion",
    licence: "Internal",
  },
  {
    id: "lens",
    index: "04",
    name: "Cursor Lens",
    purpose: "Create a focused reveal mechanic with one clear interaction.",
    source: "Pattern study",
    licence: "Internal",
  },
];

function KineticLetter({
  letter,
  index,
  active,
  sx,
  sy,
}: {
  letter: string;
  index: number;
  active: boolean;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
}) {
  const factor = (index - 2) * 0.7;
  const x = useTransform(sx, [-1, 1], [-14 * factor, 14 * factor]);
  const y = useTransform(sy, [-1, 1], [8 * factor, -8 * factor]);
  const rotate = useTransform(
    sx,
    [-1, 1],
    [-1.8 * factor, 1.8 * factor],
  );

  return (
    <motion.span style={active ? { x, y, rotate } : undefined}>
      {letter}
    </motion.span>
  );
}

const recipes = [
  {
    name: "Editorial Depth",
    combo: ["type", "depth"] as PrimitiveId[],
    note: "Large type plus spatial planes. Good for premium editorial/product stories.",
  },
  {
    name: "Tactile Field",
    combo: ["field", "lens"] as PrimitiveId[],
    note: "The cursor becomes the composition mechanic rather than a pointer ornament.",
  },
  {
    name: "Full Tension",
    combo: ["type", "depth", "field"] as PrimitiveId[],
    note: "Maximum allowed complexity for v1. Tests whether three primitives remain coherent.",
  },
];

export default function ForgePage() {
  const [active, setActive] = useState<PrimitiveId[]>(["type", "depth"]);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 22, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 90, damping: 22, mass: 0.5 });

  const stageX = useTransform(sx, [-1, 1], [-18, 18]);
  const stageY = useTransform(sy, [-1, 1], [-12, 12]);
  const stageRotateX = useTransform(sy, [-1, 1], [2.4, -2.4]);
  const stageRotateY = useTransform(sx, [-1, 1], [-3.2, 3.2]);
  const lensX = useTransform(sx, [-1, 1], ["18%", "82%"]);
  const lensY = useTransform(sy, [-1, 1], ["18%", "82%"]);
  const planeBX = useTransform(sx, [-1, 1], [28, -28]);
  const planeBY = useTransform(sy, [-1, 1], [18, -18]);

  const activeSet = useMemo(() => new Set(active), [active]);

  function toggle(id: PrimitiveId) {
    setActive((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 3) return [...current.slice(1), id];
      return [...current, id];
    });
  }

  function applyRecipe(combo: PrimitiveId[]) {
    setActive(combo);
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          ALEX EXPERIENCE LAB
        </Link>
        <span>003 / FORGE</span>
        <Link href="/references">REFERENCE OBSERVATORY ↗</Link>
      </header>

      <section className={styles.intro}>
        <p className={styles.kicker}>LIVE COMPOSITION LAB</p>
        <div className={styles.introGrid}>
          <h1>
            Combine
            <em>the feeling.</em>
          </h1>
          <div className={styles.introText}>
            <p>
              Select up to three primitives. The point is not to collect effects.
              It is to discover which interactions strengthen each other.
            </p>
            <div className={styles.activeReadout}>
              <span>{String(active.length).padStart(2, "0")}</span>
              <small>ACTIVE PRIMITIVES<br />MAXIMUM 03</small>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.workbench}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
          py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
        }}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
      >
        <div className={styles.stageLabel}>
          <span>LIVE STAGE</span>
          <span>
            {active.length ? active.join(" + ").toUpperCase() : "BASE COMPOSITION"}
          </span>
        </div>

        <motion.div
          className={styles.stage}
          style={
            activeSet.has("depth")
              ? {
                  x: stageX,
                  y: stageY,
                  rotateX: stageRotateX,
                  rotateY: stageRotateY,
                }
              : undefined
          }
        >
          <div className={styles.stageGrid} aria-hidden="true" />

          {activeSet.has("field") && (
            <motion.div
              className={styles.field}
              style={{ x: stageX, y: stageY }}
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
              <i />
              <i />
            </motion.div>
          )}

          <div className={styles.typeLockup}>
            <div className={styles.typeMeta}>
              <span>SPECIMEN / 003</span>
              <span>COMPOSED IN REAL TIME</span>
            </div>

            <div className={styles.word}>
              {"FORGE".split("").map((letter, index) => (
                <KineticLetter
                  key={letter + index}
                  letter={letter}
                  index={index}
                  active={activeSet.has("type")}
                  sx={sx}
                  sy={sy}
                />
              ))}
            </div>

            <p className={styles.stageCopy}>
              A reusable visual language should feel coherent before it feels
              clever.
            </p>
          </div>

          {activeSet.has("depth") && (
            <>
              <motion.div
                className={`${styles.plane} ${styles.planeA}`}
                style={{ x: stageX, y: stageY }}
              >
                <span>DEPTH / A</span>
                <b>01</b>
              </motion.div>
              <motion.div
                className={`${styles.plane} ${styles.planeB}`}
                style={{ x: planeBX, y: planeBY }}
              >
                <span>DEPTH / B</span>
                <b>02</b>
              </motion.div>
            </>
          )}

          {activeSet.has("lens") && (
            <motion.div
              className={styles.lens}
              style={{ left: lensX, top: lensY }}
              aria-hidden="true"
            >
              <span>FOCUS</span>
            </motion.div>
          )}

          <div className={styles.cornerNote}>MOVE THE POINTER</div>
        </motion.div>
      </section>

      <section className={styles.specimens}>
        <div className={styles.sectionHead}>
          <span>SPECIMEN RAIL</span>
          <span>SELECT / COMBINE / COMPARE</span>
        </div>

        <div className={styles.specimenGrid}>
          {primitives.map((primitive) => {
            const isActive = activeSet.has(primitive.id);

            return (
              <button
                key={primitive.id}
                className={`${styles.specimen} ${isActive ? styles.specimenActive : ""}`}
                onClick={() => toggle(primitive.id)}
                aria-pressed={isActive}
              >
                <div className={styles.specimenTop}>
                  <span>{primitive.index}</span>
                  <span>{isActive ? "ACTIVE" : "ADD"}</span>
                </div>
                <h2>{primitive.name}</h2>
                <p>{primitive.purpose}</p>
                <div className={styles.specimenMeta}>
                  <span>{primitive.source}</span>
                  <span>{primitive.licence}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.recipes}>
        <div className={styles.sectionHead}>
          <span>RECIPES</span>
          <span>REPEATABLE COMBINATIONS</span>
        </div>

        <div className={styles.recipeList}>
          {recipes.map((recipe, index) => (
            <button key={recipe.name} onClick={() => applyRecipe(recipe.combo)}>
              <span>0{index + 1}</span>
              <h3>{recipe.name}</h3>
              <p>{recipe.note}</p>
              <b>{recipe.combo.map((item) => item.toUpperCase()).join(" + ")}</b>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.principle}>
        <p>THE RULE</p>
        <h2>
          If the combination does not feel better than the parts,
          <em>delete something.</em>
        </h2>
        <div className={styles.principleFooter}>
          <Link href="/references">Study references ↗</Link>
          <a
            href="https://github.com/mralexcheeseman/alex-experience-lab/blob/main/PROJECT.md"
            target="_blank"
            rel="noreferrer"
          >
            Read source of truth ↗
          </a>
        </div>
      </section>
    </main>
  );
}
