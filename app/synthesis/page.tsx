import Link from "next/link";

const directions = [
  {
    id: "A",
    name: "Artifact Signal",
    mix: "Pixel Stars × Hero Object × Sparkle Bloom",
    href: "/synthesis/a-artifact-signal",
  },
  {
    id: "B",
    name: "Editorial Current",
    mix: "Chapter Grammar × Editorial Hierarchy × Sparkle Bloom",
    href: "/synthesis/b-editorial-current",
  },
  {
    id: "C",
    name: "Field Atlas",
    mix: "Data Geometry × Navigable Micro-World",
    href: "/synthesis/c-field-atlas",
  },
];

export default function SynthesisIndex() {
  return (
    <main className="min-h-dvh bg-[#ece9e1] px-6 text-[#111] md:px-10">
      <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-b border-black/20 py-6 text-[9px] uppercase tracking-[.2em]">
        <Link href="/specimens/candidates" className="text-inherit no-underline">
          Candidate Specimens
        </Link>
        <span>Synthesis v1</span>
      </header>

      <section className="mx-auto flex min-h-[55svh] w-full max-w-[1500px] flex-col justify-center py-16">
        <p className="mb-7 text-[9px] uppercase tracking-[.22em] text-black/48">
          Three provisional combinations
        </p>
        <h1 className="m-0 max-w-[8ch] text-[clamp(72px,12vw,190px)] font-medium leading-[.79] tracking-[-.075em]">
          Combine without
          <span className="block font-serif font-normal italic">declaring victory.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/58">
          These are design studies, not house style. Their job is to expose which
          interactions strengthen each other and which combinations create noise.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1500px] border-t border-black/20 pb-28">
        {directions.map((direction) => (
          <Link
            key={direction.id}
            href={direction.href}
            className="grid min-h-36 grid-cols-[64px_1fr_auto] items-center gap-6 border-b border-black/20 py-7 text-inherit no-underline transition hover:pl-3 md:grid-cols-[80px_1fr_1fr_auto]"
          >
            <span className="font-serif text-xl italic text-black/42">
              {direction.id}
            </span>
            <h2 className="m-0 text-[clamp(34px,5vw,72px)] font-medium leading-none tracking-[-.055em]">
              {direction.name}
            </h2>
            <span className="col-start-2 text-[10px] uppercase tracking-[.16em] text-black/45 md:col-start-auto">
              {direction.mix}
            </span>
            <span className="text-[10px] uppercase tracking-[.18em]">Open ↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
