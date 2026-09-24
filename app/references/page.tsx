"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./references.module.css";

type Reference = {
  name: string;
  maker: string;
  source: string;
  url: string;
  job: string;
  signals: string[];
  why: string;
  steal: string;
  tone: "light" | "dark" | "warm" | "electric";
};

const references: Reference[] = [
  {
    name: "Shopify Editions · Spring ’26",
    maker: "Shopify",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/shopify-editions-spring-26",
    job: "Product spectacle",
    signals: ["Particles", "Narrative scroll", "Product reveal"],
    why: "Turns a large feature release into a choreographed sequence rather than a catalogue.",
    steal: "Use motion to sequence information; never reveal everything at once.",
    tone: "electric",
  },
  {
    name: "Cyera AI Guardian",
    maker: "Active Theory",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/cyera-ai-guardian-secure-the-unknown",
    job: "World building",
    signals: ["Sci-fi", "3D metaphor", "Cinematic"],
    why: "Builds a coherent visual world around an abstract security proposition.",
    steal: "Give abstract ideas a physical metaphor with rules, light and scale.",
    tone: "dark",
  },
  {
    name: "The Symphony of Vines",
    maker: "Unseen Studio",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/the-symphony-of-vines",
    job: "Cinematic story",
    signals: ["Three.js", "Journey", "Education"],
    why: "Treats the browser as a cinematic journey through time and place.",
    steal: "Make scroll advance the story world, not merely the document.",
    tone: "warm",
  },
  {
    name: "ORYZO AI",
    maker: "Lusion",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/oryzo-ai",
    job: "Product spectacle",
    signals: ["Three.js", "Physical product", "Experimental"],
    why: "Makes a deliberately small physical object feel monumental through framing and motion.",
    steal: "Scale and framing can create status without adding more interface.",
    tone: "light",
  },
  {
    name: "HubTown",
    maker: "Unseen Studio",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/hubtown-hubtown-leading-real-estate-developer-in-india",
    job: "Architectural",
    signals: ["Particles", "Architecture", "GSAP"],
    why: "Uses movement and atmosphere to make a corporate property story feel spatial.",
    steal: "Let space, camera and texture communicate brand character before copy does.",
    tone: "warm",
  },
  {
    name: "Igloo Inc.",
    maker: "Bureaux + Abeto",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/igloo-inc",
    job: "Navigable world",
    signals: ["Three.js", "Experimental", "Nature"],
    why: "Feels like a place to explore rather than a stack of sections.",
    steal: "Give the user a spatial model and let navigation emerge from it.",
    tone: "electric",
  },
  {
    name: "Zero · Human Infrastructure",
    maker: "Sindhur Dutta + Zero University",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/zero-human-infrastructure-to-get-hired",
    job: "Learning experience",
    signals: ["Interactive", "AI", "Three.js"],
    why: "Uses immersion in service of a clear learning and career proposition.",
    steal: "Spectacle is stronger when it moves the user toward a real outcome.",
    tone: "dark",
  },
  {
    name: "Santioni Spirits",
    maker: "Active Theory",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/santioni-spirits-cocktails-to-indulge-now-atone-later",
    job: "Brand story",
    signals: ["3D narrative", "E-commerce", "Art direction"],
    why: "Uses a comic-like interactive world as the core brand story, not a decorative layer.",
    steal: "Choose a narrative format with a point of view and commit to it completely.",
    tone: "warm",
  },
  {
    name: "Superlist",
    maker: "Unseen Studio",
    source: "Unseen",
    url: "https://unseen.co/projects/superlist/",
    job: "Interaction system",
    signals: ["Scroll-tied 3D", "Microinteraction", "Sound"],
    why: "Turns product ideas into bespoke 3D metaphors and sweats tiny interactions.",
    steal: "Create one visual metaphor per idea; optimise geometry aggressively.",
    tone: "light",
  },
  {
    name: "Cult of the North",
    maker: "Unseen Studio",
    source: "Unseen",
    url: "https://unseen.co/projects/cult-of-the-north/",
    job: "Portfolio identity",
    signals: ["WebGL", "Game language", "Atmosphere"],
    why: "Makes a studio portfolio feel native to the world of the games it creates.",
    steal: "The interface language should belong to the subject matter.",
    tone: "dark",
  },
  {
    name: "Unseen · 2025 Wrapped",
    maker: "Unseen Studio",
    source: "Unseen",
    url: "https://2025.unseen.co/",
    job: "Editorial timeline",
    signals: ["Motion diary", "Varied scenes", "Editorial"],
    why: "A year review becomes a sequence of changing visual systems rather than one rigid template.",
    steal: "Allow controlled visual mutation while holding typography and pacing together.",
    tone: "light",
  },
  {
    name: "Shader Development Studio",
    maker: "Shader",
    source: "Shader",
    url: "https://www.shader.se/",
    job: "Material craft",
    signals: ["3D", "AI", "Retro future"],
    why: "Makes technical capability itself feel like the brand through playful interactive 3D.",
    steal: "Use the rendering language as identity, not just production technique.",
    tone: "dark",
  },
  {
    name: "Rogier de Boevé",
    maker: "Rogier de Boevé",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/rogier-de-boev-creative-developer",
    job: "Portfolio identity",
    signals: ["Three.js", "GSAP", "Motion"],
    why: "Lets motion-led case studies demonstrate capability before the résumé does.",
    steal: "Make the portfolio itself the strongest case study.",
    tone: "light",
  },
  {
    name: "Active Theory Experiments",
    maker: "Active Theory",
    source: "Active Theory",
    url: "https://xr.activetheory.net/",
    job: "R&D playground",
    signals: ["WebGL", "WebXR", "Interaction research"],
    why: "Separates experimentation from client work and uses prototypes to develop future capability.",
    steal: "Keep a visible R&D layer where techniques can fail safely and become primitives later.",
    tone: "dark",
  },
  {
    name: "Xbox Museum",
    maker: "Active Theory + Luis Bizarro",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?developer=active-theory",
    job: "Navigable world",
    signals: ["Museum", "3D space", "Exploration"],
    why: "Turns a history archive into a place the visitor explores rather than a timeline they skim.",
    steal: "When content has history, spatialise the chronology.",
    tone: "dark",
  },
  {
    name: "BUNQ LABS",
    maker: "Sindhur Dutta",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?tags=Gallery",
    job: "Gallery system",
    signals: ["3D gallery", "Experimental", "Interaction"],
    why: "Uses a gallery model that makes browsing itself part of the experience.",
    steal: "A collection deserves its own navigation physics.",
    tone: "electric",
  },
  {
    name: "A24 · Films",
    maker: "R—K",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?tags=Gallery",
    job: "Gallery system",
    signals: ["Film archive", "Gallery", "WebGL"],
    why: "Treats a catalogue of films as a visual field rather than rows of cards.",
    steal: "For image-rich archives, composition can replace conventional grids.",
    tone: "dark",
  },
  {
    name: "Below the Grassland",
    maker: "Ameen Abdullah",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?tags=Experimental",
    job: "Material craft",
    signals: ["WebGPU", "Grass simulation", "Environment"],
    why: "Pushes real-time rendering into atmospheric environment rather than object display.",
    steal: "Use shaders to create a living field, not another spinning object.",
    tone: "warm",
  },
  {
    name: "Pioneer · Corn. Revolutionized.",
    maker: "Resn",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?tags=Experimental",
    job: "Brand story",
    signals: ["Experimental", "Interactive", "3D"],
    why: "Elevates an ordinary category by finding an unexpected visual and interaction language.",
    steal: "Interesting execution can transform an unglamorous subject.",
    tone: "warm",
  },
  {
    name: "Interactive Dictionary of Free Speech",
    maker: "Adrián Gubrica",
    source: "mesh3d",
    url: "https://mesh3d.gallery/websites?tags=Experimental",
    job: "Learning experience",
    signals: ["Interactive data", "Experimental", "3D"],
    why: "Turns a conceptual subject into something explorable and tangible.",
    steal: "For complex ideas, interaction can become the explanation.",
    tone: "light",
  },
  {
    name: "Wayfinder",
    maker: "Enreal",
    source: "Godly",
    url: "https://godly.website/website/cowboy-398",
    job: "Interaction system",
    signals: ["Gaming", "Audio", "3D"],
    why: "Uses game-like interaction and audio to turn navigation into play.",
    steal: "Teach interaction through immediate feedback, not instructions.",
    tone: "electric",
  },
  {
    name: "Matthew Fisher",
    maker: "Matthew Fisher",
    source: "Godly",
    url: "https://godly.website/website/760-matthew-fisher",
    job: "Portfolio identity",
    signals: ["WebGL", "Custom cursor", "Horizontal"],
    why: "Combines minimal composition with directional navigation and deliberate cursor behaviour.",
    steal: "One navigation axis and one cursor behaviour can establish a whole interaction grammar.",
    tone: "light",
  },
  {
    name: "Bruno Simon",
    maker: "Bruno Simon",
    source: "Direct",
    url: "https://bruno-simon.com/",
    job: "Interaction system",
    signals: ["Playable", "3D", "Navigation mechanic"],
    why: "The interface is understood by doing; driving becomes the navigation model.",
    steal: "Give the user one memorable mechanic that replaces conventional navigation.",
    tone: "dark",
  },
  {
    name: "Storytelling · The power of digital",
    maker: "Noomo Agency",
    source: "mesh3d",
    url: "https://mesh3d.gallery/website/storytelling-the-power-of-digital",
    job: "Cinematic story",
    signals: ["Nuxt", "WebGL", "Narrative"],
    why: "Frames digital craft itself as a sequence of narrative moments.",
    steal: "Use scene changes to mark conceptual shifts, not just visual novelty.",
    tone: "electric",
  },
];

const jobs = ["All", ...Array.from(new Set(references.map((reference) => reference.job)))];

export default function ReferencesPage() {
  const [job, setJob] = useState("All");

  const visible = useMemo(
    () =>
      job === "All"
        ? references
        : references.filter((reference) => reference.job === job),
    [job],
  );

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.homeLink}>
          ALEX EXPERIENCE LAB
        </Link>
        <span>REFERENCE OBSERVATORY / 001</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLabel}>24 REFERENCES · FIRST COHORT</div>
        <h1>
          Study the
          <em>signal.</em>
        </h1>
        <div className={styles.heroFooter}>
          <p>
            Not a moodboard. A working research system for understanding what
            makes the best digital experiences feel authored, memorable and
            expensive.
          </p>
          <div className={styles.count}>
            <span>24</span>
            <small>DECONSTRUCTIONS</small>
          </div>
        </div>
      </section>

      <section className={styles.doctrine}>
        <p>THE METHOD</p>
        <div>
          <h2>Reference → principle → primitive → experiment.</h2>
          <p>
            We borrow no finished visual language. We isolate the underlying
            mechanism, test it, restyle it and only then allow it into Alex UI.
          </p>
        </div>
      </section>

      <section className={styles.filters}>
        {jobs.map((item) => (
          <button
            key={item}
            onClick={() => setJob(item)}
            className={item === job ? styles.activeFilter : ""}
          >
            {item}
            <span>
              {item === "All"
                ? references.length
                : references.filter((reference) => reference.job === item).length}
            </span>
          </button>
        ))}
      </section>

      <section className={styles.grid}>
        {visible.map((reference, index) => (
          <article
            key={reference.name}
            className={`${styles.card} ${styles[reference.tone]}`}
          >
            <div className={styles.cardTop}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{reference.job}</span>
            </div>

            <div className={styles.art} aria-hidden="true">
              <div className={styles.artRing} />
              <div className={styles.artRingTwo} />
              <span>{reference.name.slice(0, 1)}</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.maker}>{reference.maker}</p>
              <h2>{reference.name}</h2>

              <div className={styles.signals}>
                {reference.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>

              <div className={styles.analysis}>
                <p>
                  <strong>WHY IT WORKS</strong>
                  {reference.why}
                </p>
                <p>
                  <strong>WHAT WE TAKE</strong>
                  {reference.steal}
                </p>
              </div>

              <a href={reference.url} target="_blank" rel="noreferrer">
                OPEN SOURCE · {reference.source} ↗
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.synthesis}>
        <p>EMERGING SIGNALS</p>
        <div className={styles.synthesisGrid}>
          <article>
            <span>01</span>
            <h3>One mechanic beats ten effects.</h3>
            <p>
              The most memorable work gives the user a dominant behaviour:
              drive, explore, reveal, rotate, move through.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>3D needs a narrative job.</h3>
            <p>
              The strongest projects use depth to explain product, chronology,
              space or metaphor—not to prove WebGL exists.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Transitions are part of authorship.</h3>
            <p>
              Great experiences choreograph the space between states as
              carefully as the states themselves.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Restraint creates perceived quality.</h3>
            <p>
              Premium work often gives one object or typographic statement more
              room, time and attention than ordinary sites dare to.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.next}>
        <p>NEXT EXPERIMENT</p>
        <h2>
          003
          <em>The Archive</em>
        </h2>
        <p>
          A cinematic spatial archive built from the strongest recurring
          signals: one object, one navigation mechanic, scene-based scroll,
          depth-aware typography and aggressive visual restraint.
        </p>
      </section>
    </main>
  );
}
