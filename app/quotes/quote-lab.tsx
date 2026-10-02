"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./quotes.module.css";

type Quote = { id: string; text: string; emphasis: string; source: "note" | "mine" };
type Treatment = "kinetic" | "words" | "mask" | "editorial" | "depth" | "stroke";
type Format = "web" | "instagram" | "tiktok";
type Theme = "light" | "dark";

const starterQuotes: Quote[] = [
  {
    id: "belief",
    text: "Belief is measured when we’re down, not when we’re up.",
    emphasis: "down",
    source: "note",
  },
  {
    id: "dawn",
    text: "The darkest moment of night before dawn.",
    emphasis: "dawn",
    source: "note",
  },
];

const treatments: { id: Treatment; name: string; idea: string; glyph: string }[] = [
  { id: "kinetic", name: "Kinetic emphasis", idea: "A thought lands on one word.", glyph: "Aa" },
  { id: "words", name: "Word by word", idea: "Meaning gathers in sequence.", glyph: "•••" },
  { id: "mask", name: "Mask reveal", idea: "Language rises into view.", glyph: "▰" },
  { id: "editorial", name: "Editorial scroll", idea: "A composition that follows the page.", glyph: "↟" },
  { id: "depth", name: "Subtle depth", idea: "A little space follows your hand.", glyph: "◌" },
  { id: "stroke", name: "Accent stroke", idea: "A human mark finishes the line.", glyph: "〰" },
];

const formats: { id: Format; label: string; ratio: string }[] = [
  { id: "web", label: "Web", ratio: "16:9" },
  { id: "instagram", label: "Instagram", ratio: "4:5" },
  { id: "tiktok", label: "TikTok", ratio: "9:16" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function quoteWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

function cleanWord(word: string) {
  return word.toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

function TreatmentText({
  quote,
  treatment,
  speed,
  intensity,
  reduced,
  depthX,
  depthY,
  editorialY,
}: {
  quote: Quote;
  treatment: Treatment;
  speed: number;
  intensity: number;
  reduced: boolean;
  depthX: ReturnType<typeof useSpring>;
  depthY: ReturnType<typeof useSpring>;
  editorialY: MotionValue<number>;
}) {
  const words = quoteWords(quote.text);
  const duration = 0.85 / speed;
  const distance = 12 + intensity * 32;
  const emphasis = cleanWord(quote.emphasis);

  if (treatment === "kinetic") {
    return (
      <h2 className={`${styles.quoteText} ${styles.kinetic}`} aria-label={quote.text}>
        {words.map((word, index) => {
          const active = cleanWord(word) === emphasis;
          return (
            <motion.span
              aria-hidden="true"
              className={active ? styles.emphasis : undefined}
              key={`${word}-${index}`}
              initial={reduced ? false : { opacity: 0, y: distance, scale: active ? 0.86 : 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration, delay: reduced ? 0 : index * 0.075 / speed, ease }}
            >
              {word}{index < words.length - 1 ? "\u00a0" : ""}
            </motion.span>
          );
        })}
      </h2>
    );
  }

  if (treatment === "words") {
    return (
      <h2 className={`${styles.quoteText} ${styles.words}`} aria-label={quote.text}>
        {words.map((word, index) => (
          <motion.span
            aria-hidden="true"
            key={`${word}-${index}`}
            initial={reduced ? false : { opacity: 0, filter: `blur(${intensity * 7}px)`, y: distance * 0.45 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.55 / speed, delay: reduced ? 0 : index * 0.13 / speed, ease }}
          >
            {word}{index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        ))}
      </h2>
    );
  }

  if (treatment === "mask") {
    return (
      <div className={styles.maskWindow}>
        <motion.h2
          className={`${styles.quoteText} ${styles.maskText}`}
          initial={reduced ? false : { y: `${82 + intensity * 18}%`, opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.15 / speed, ease }}
        >
          {quote.text}
        </motion.h2>
      </div>
    );
  }

  if (treatment === "editorial") {
    return (
      <motion.div className={styles.editorialComposition} style={reduced ? undefined : { y: editorialY }}>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: distance * 1.4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05 / speed, ease }}
        >
          <motion.div className={styles.editorialRule} initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9 / speed, ease }} />
          <p className={styles.editorialIndex}>ALEX CHEESEMAN / THOUGHTS</p>
          <h2 className={`${styles.quoteText} ${styles.editorialText}`}>{quote.text}</h2>
          <p className={styles.editorialEnd}>A NOTE TO KEEP <span>↗</span></p>
        </motion.div>
      </motion.div>
    );
  }

  if (treatment === "depth") {
    return (
      <div className={styles.depthComposition}>
        <motion.div aria-hidden="true" className={styles.depthEcho} style={reduced ? undefined : { x: depthX, y: depthY }}>
          {quote.text}
        </motion.div>
        <motion.h2
          className={`${styles.quoteText} ${styles.depthText}`}
          style={reduced ? undefined : { x: depthX, y: depthY }}
          initial={reduced ? false : { opacity: 0, scale: 1 + intensity * 0.045 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 / speed, ease }}
        >
          {quote.text}
        </motion.h2>
      </div>
    );
  }

  return (
    <div className={styles.strokeComposition}>
      <motion.h2
        className={`${styles.quoteText} ${styles.strokeText}`}
        initial={reduced ? false : { opacity: 0, y: distance * 0.35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration * 1.2, ease }}
      >
        {quote.text}
      </motion.h2>
      <svg className={styles.accentStroke} viewBox="0 0 310 35" fill="none" aria-hidden="true">
        <motion.path
          d="M4 23C57 14 112 15 159 18C209 21 255 13 306 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1 / speed, delay: reduced ? 0 : 0.65 / speed, ease }}
        />
      </svg>
      <span className={styles.handwrittenNote}>Keep going.</span>
    </div>
  );
}

function Preview({ quote, treatment, theme, format, speed, intensity, playhead }: {
  quote: Quote;
  treatment: Treatment;
  theme: Theme;
  format: Format;
  speed: number;
  intensity: number;
  playhead: number;
}) {
  const reduced = Boolean(useReducedMotion());
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const depthX = useSpring(rawX, { stiffness: 75, damping: 20 });
  const depthY = useSpring(rawY, { stiffness: 75, damping: 20 });
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "end start"] });
  const scrollRange = (format === "web" ? 8 : 20) * intensity;
  const editorialY = useTransform(scrollYProgress, [0, 1], [scrollRange, -scrollRange]);

  return (
    <div className={styles.previewSpace}>
      <div
        ref={stageRef}
        className={styles.stageFrame}
        data-theme={theme}
        data-format={format}
        data-long={quote.text.length > 105}
        onPointerMove={(event) => {
          if (treatment !== "depth" || reduced) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * intensity * 26);
          rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * intensity * 22);
        }}
        onPointerLeave={() => { rawX.set(0); rawY.set(0); }}
      >
        <div className={styles.stageTop}><span>AC / QUOTE STUDIES</span><span>NO. 0{treatments.findIndex((item) => item.id === treatment) + 1}</span></div>
        <div className={styles.stageCenter}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${quote.id}-${treatment}-${speed}-${intensity}-${playhead}`}
              className={styles.motionLayer}
              initial={false}
              exit={reduced ? undefined : { opacity: 0, transition: { duration: 0.18 } }}
            >
              <TreatmentText quote={quote} treatment={treatment} speed={speed} intensity={intensity} reduced={reduced} depthX={depthX} depthY={depthY} editorialY={editorialY} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.stageBottom}><span>WORDS / IN MOTION</span><span>© AC</span></div>
      </div>
    </div>
  );
}

export default function QuoteLab() {
  const [quotes, setQuotes] = useState<Quote[]>(starterQuotes);
  const [selectedId, setSelectedId] = useState(starterQuotes[0].id);
  const [draft, setDraft] = useState("");
  const [treatment, setTreatment] = useState<Treatment>("kinetic");
  const [theme, setTheme] = useState<Theme>("light");
  const [format, setFormat] = useState<Format>("web");
  const [speed, setSpeed] = useState(1);
  const [intensity, setIntensity] = useState(0.65);
  const [playhead, setPlayhead] = useState(0);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("alex-quote-lab-quotes") ?? "[]") as Quote[];
      if (Array.isArray(saved)) {
        setQuotes([...starterQuotes, ...saved.filter((item) => typeof item?.text === "string" && item.source === "mine")]);
      }
    } catch { /* Ignore invalid local storage. */ }
  }, []);

  const selected = useMemo(() => quotes.find((quote) => quote.id === selectedId) ?? quotes[0], [quotes, selectedId]);
  const currentTreatment = treatments.find((item) => item.id === treatment)!;

  function addQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim().replace(/\s+/g, " ");
    if (!text) return;
    const lastWord = quoteWords(text).at(-1) ?? "";
    const quote: Quote = { id: crypto.randomUUID(), text, emphasis: cleanWord(lastWord), source: "mine" };
    const next = [...quotes, quote];
    localStorage.setItem("alex-quote-lab-quotes", JSON.stringify(next.filter((item) => item.source === "mine")));
    setQuotes(next);
    setSelectedId(quote.id);
    setDraft("");
    setPlayhead((value) => value + 1);
  }

  function removeQuote(id: string) {
    const next = quotes.filter((quote) => quote.id !== id);
    localStorage.setItem("alex-quote-lab-quotes", JSON.stringify(next.filter((item) => item.source === "mine")));
    setQuotes(next);
    if (selectedId === id) setSelectedId(starterQuotes[0].id);
  }

  return (
    <main className={styles.lab}>
      <header className={styles.masthead}>
        <Link href="/" className={styles.brand}>AC <span>/</span> EXPERIENCE LAB</Link>
        <span className={styles.mastCenter}>STUDY 004 — THE WRITTEN WORD</span>
        <span className={styles.mastRight}>ALEX CHEESEMAN <span>↗</span></span>
      </header>

      <section className={styles.intro}>
        <div><p className={styles.kicker}>AN EDITORIAL MOTION STUDY</p><h1>Words in <em>motion.</em></h1></div>
        <p className={styles.introCopy}>A small studio for thoughts worth holding onto. Choose a line, then find the way it wants to move.</p>
      </section>

      <div className={styles.workspace}>
        <aside className={styles.library} aria-label="Quote library">
          <div className={styles.panelHeading}><span>01 / YOUR WORDS</span><span>{String(quotes.length).padStart(2, "0")}</span></div>
          <div className={styles.quoteList}>
            {quotes.map((quote, index) => (
              <div className={`${styles.quoteItem} ${selectedId === quote.id ? styles.quoteItemActive : ""}`} key={quote.id}>
                <button type="button" onClick={() => setSelectedId(quote.id)} aria-pressed={selectedId === quote.id}>
                  <span className={styles.quoteNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.quoteSnippet}>{quote.text}</span>
                  <span className={styles.quoteArrow}>↗</span>
                </button>
                {quote.source === "mine" && <button type="button" className={styles.removeQuote} onClick={() => removeQuote(quote.id)} aria-label={`Remove quote: ${quote.text}`}>×</button>}
              </div>
            ))}
          </div>
          <form className={styles.newQuote} onSubmit={addQuote}>
            <label htmlFor="new-quote">ADD A THOUGHT</label>
            <textarea id="new-quote" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={120} placeholder="Paste a short quote or thought…" rows={4} />
            <div className={styles.newQuoteFooter}><span>{draft.length}/120</span><button type="submit" disabled={!draft.trim()}>Add to library <span>↗</span></button></div>
            <p>Saved in this browser.</p>
          </form>
        </aside>

        <section className={styles.previewColumn} aria-label="Animation preview">
          <div className={styles.panelHeading}><span>02 / LIVE PREVIEW</span><span>{currentTreatment.name.toUpperCase()}</span></div>
          <Preview quote={selected} treatment={treatment} theme={theme} format={format} speed={speed} intensity={intensity} playhead={playhead} />
          <div className={styles.previewFooter}>
            <div><strong>{currentTreatment.name}</strong><span>{currentTreatment.idea}</span></div>
            <button type="button" onClick={() => setPlayhead((value) => value + 1)} className={styles.replay}>↻ <span>Replay motion</span></button>
          </div>
        </section>

        <aside className={styles.controls} aria-label="Preview controls">
          <div className={styles.panelHeading}><span>03 / ART DIRECTION</span><span>LIVE</span></div>
          <fieldset><legend>CANVAS</legend><div className={styles.segmented}>{(["light", "dark"] as Theme[]).map((option) => <button type="button" key={option} className={theme === option ? styles.selected : ""} aria-pressed={theme === option} onClick={() => setTheme(option)}>{option === "light" ? "○" : "●"} {option[0].toUpperCase() + option.slice(1)}</button>)}</div></fieldset>
          <fieldset><legend>FORMAT</legend><div className={styles.formatOptions}>{formats.map((option) => <button type="button" key={option.id} className={format === option.id ? styles.selected : ""} aria-pressed={format === option.id} onClick={() => setFormat(option.id)}><span className={styles.ratioIcon} data-format={option.id} /><span>{option.label}<small>{option.ratio}</small></span></button>)}</div></fieldset>
          <div className={styles.sliderGroup}><label htmlFor="speed">SPEED <output>{speed.toFixed(1)}×</output></label><input id="speed" type="range" min="0.5" max="1.6" step="0.1" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} /></div>
          <div className={styles.sliderGroup}><label htmlFor="intensity">INTENSITY <output>{Math.round(intensity * 100)}%</output></label><input id="intensity" type="range" min="0.2" max="1" step="0.05" value={intensity} onChange={(event) => setIntensity(Number(event.target.value))} /></div>
          <p className={styles.controlNote}>Built to feel deliberate at every size. Motion respects your device’s reduced motion setting.</p>
        </aside>
      </div>

      <section className={styles.treatments} aria-labelledby="treatment-title">
        <div className={styles.treatmentHeading}><div><p className={styles.kicker}>SIX WAYS TO SAY IT</p><h2 id="treatment-title">Choose the <em>rhythm.</em></h2></div><p>Each treatment uses the same words. Only the pacing and emphasis change.</p></div>
        <div className={styles.treatmentGrid}>{treatments.map((item, index) => <button type="button" key={item.id} className={`${styles.treatmentCard} ${treatment === item.id ? styles.treatmentActive : ""}`} aria-pressed={treatment === item.id} onClick={() => { setTreatment(item.id); setPlayhead((value) => value + 1); }}><span className={styles.treatmentTop}><span>{String(index + 1).padStart(2, "0")}</span><span>{treatment === item.id ? "SELECTED" : "PREVIEW ↗"}</span></span><span className={styles.treatmentGlyph} aria-hidden="true">{item.glyph}</span><span className={styles.treatmentName}>{item.name}</span><span className={styles.treatmentIdea}>{item.idea}</span></button>)}</div>
      </section>

      <footer className={styles.footer}><span>AC / QUOTE LAB</span><span>WORDS DESERVE ROOM TO BREATHE.</span><Link href="/">BACK TO THE LAB ↗</Link></footer>
    </main>
  );
}
