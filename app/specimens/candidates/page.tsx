import Link from "next/link";

const candidates = [
  ["003", "Hero Object Framing", "ORYZO", "/specimens/candidates/003-hero-object"],
  ["004", "Chapter Interaction Engine", "Symphony of Vines", "/specimens/candidates/004-chapter-engine"],
  ["005", "Editorial Release System", "Shopify Editions", "/specimens/candidates/005-editorial-release"],
  ["006", "Navigable Micro-World", "Bruno Simon", "/specimens/candidates/006-micro-world"],
  ["007", "Data → Geometry Explorer", "Every Neuron", "/specimens/candidates/007-data-geometry"],
];

export default function CandidateIndex() {
  return (
    <main className="min-h-dvh bg-[#efede6] px-6 text-[#111] md:px-10">
      <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-b border-black/20 py-6 text-[9px] uppercase tracking-[.2em]">
        <Link href="/specimens" className="text-inherit no-underline">
          Specimen Library
        </Link>
        <span>Candidate Batch 01</span>
      </header>

      <section className="mx-auto flex min-h-[52svh] w-full max-w-[1500px] flex-col justify-center py-16">
        <p className="mb-7 text-[9px] uppercase tracking-[.22em] text-black/50">
          Five mechanics / zero approvals
        </p>
        <h1 className="m-0 max-w-[8ch] text-[clamp(72px,12vw,190px)] font-medium leading-[.79] tracking-[-.075em]">
          Test the
          <span className="block font-serif font-normal italic">principle.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/58">
          These are deliberately isolated studies. Judge whether the underlying
          mechanic is worth keeping — not whether this is a finished visual style.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1500px] border-t border-black/20 pb-28">
        {candidates.map(([index, name, source, href]) => (
          <Link
            key={index}
            href={href}
            className="grid min-h-32 grid-cols-[68px_1fr_auto] items-center gap-5 border-b border-black/20 py-6 text-inherit no-underline transition hover:pl-3 md:grid-cols-[90px_1fr_1fr_auto]"
          >
            <span className="font-serif text-xl italic text-black/45">{index}</span>
            <h2 className="m-0 text-[clamp(30px,4vw,60px)] font-medium leading-none tracking-[-.05em]">
              {name}
            </h2>
            <span className="col-start-2 text-[10px] uppercase tracking-[.16em] text-black/45 md:col-start-auto">
              Derived from {source}
            </span>
            <span className="text-[10px] uppercase tracking-[.18em]">Open ↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
