import Link from "next/link";

const specimens = [
  {
    index: "001",
    name: "Pixel Stars",
    status: "LIVE",
    href: "/specimens/pixel-stars",
    note: "16fps pixel field · discrete twinkle · shooting-star trails",
  },
  {
    index: "002",
    name: "Sparkles",
    status: "QUEUED",
    href: null,
    note: "Dense tsParticles field · subtle opacity motion · clean hero layer",
  },
];

export default function SpecimenLibrary() {
  return (
    <main className="min-h-dvh bg-[#ece9e1] text-[#11100f] px-6 md:px-10">
      <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-b border-black/20 py-6 text-[10px] uppercase tracking-[0.2em]">
        <Link href="/" className="no-underline text-inherit">
          Alex Experience Lab
        </Link>
        <span>Specimen Library</span>
      </header>

      <section className="mx-auto grid min-h-[58svh] w-full max-w-[1500px] content-center py-20">
        <p className="mb-6 text-[10px] uppercase tracking-[0.22em]">
          Approved reference components
        </p>
        <h1 className="max-w-[7ch] text-[clamp(72px,12vw,190px)] font-medium leading-[0.8] tracking-[-0.075em]">
          Recreate first.
          <span className="block font-serif italic font-normal">
            Combine later.
          </span>
        </h1>
      </section>

      <section className="mx-auto w-full max-w-[1500px] border-t border-black/20 pb-28">
        {specimens.map((specimen) => {
          const content = (
            <div className="grid min-h-36 grid-cols-[70px_1fr_auto] items-center gap-6 border-b border-black/20 py-8 md:grid-cols-[90px_.7fr_1fr_auto]">
              <span className="font-serif italic text-xl">
                {specimen.index}
              </span>
              <h2 className="m-0 text-[clamp(34px,5vw,74px)] font-medium leading-none tracking-[-0.055em]">
                {specimen.name}
              </h2>
              <p className="col-start-2 m-0 max-w-xl text-sm leading-relaxed text-black/60 md:col-start-auto">
                {specimen.note}
              </p>
              <span className="text-[9px] uppercase tracking-[0.18em]">
                {specimen.status} {specimen.href ? "↗" : ""}
              </span>
            </div>
          );

          return specimen.href ? (
            <Link
              key={specimen.index}
              href={specimen.href}
              className="block text-inherit no-underline"
            >
              {content}
            </Link>
          ) : (
            <div key={specimen.index}>{content}</div>
          );
        })}
      </section>
    </main>
  );
}
