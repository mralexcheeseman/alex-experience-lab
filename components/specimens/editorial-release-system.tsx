"use client";

import { useState } from "react";

const categories = ["Agentic", "Online", "Retail", "Platform"];

const data = {
  Agentic: {
    hero: "Sell everywhere agents can shop",
    feature: ["Structured product data", "Checkout inside conversations"],
    updates: ["Catalog search", "Sign in", "Product lookup", "Rich media", "Offers"],
  },
  Online: {
    hero: "Make the storefront adapt faster",
    feature: ["AI-assisted merchandising", "Scheduled experiments"],
    updates: ["Search", "Markets", "Accounts", "Discounts", "Themes"],
  },
  Retail: {
    hero: "Make the counter disappear",
    feature: ["Faster checkout", "Connected pickup"],
    updates: ["Returns", "Discounts", "Search", "Devices", "Payments"],
  },
  Platform: {
    hero: "Give builders more leverage",
    feature: ["Agent-ready tooling", "Composable APIs"],
    updates: ["CLI", "Webhooks", "Extensions", "Analytics", "MCP"],
  },
} as const;

export function EditorialReleaseSystem() {
  const [category, setCategory] =
    useState<keyof typeof data>("Agentic");
  const active = data[category];

  return (
    <main className="min-h-dvh bg-[#f4f2ed] text-[#111]">
      <header className="sticky top-0 z-20 border-b border-black/15 bg-[#f4f2ed]/95 backdrop-blur">
        <div className="mx-auto flex w-[min(1500px,calc(100%-48px))] items-center justify-between py-4 text-[9px] uppercase tracking-[.2em]">
          <span>Candidate 005</span>
          <span>Editorial release system</span>
        </div>
      </header>

      <section className="mx-auto w-[min(1500px,calc(100%-48px))] py-16">
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item as keyof typeof data)}
              className={
                item === category
                  ? "border border-black bg-black px-4 py-2 text-[9px] uppercase tracking-[.16em] text-white"
                  : "border border-black/20 px-4 py-2 text-[9px] uppercase tracking-[.16em] text-black/60"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="relative min-h-[58svh] overflow-hidden border border-black/15 bg-[#c8ff5a] p-8 lg:col-span-8">
            <div className="flex justify-between text-[9px] uppercase tracking-[.18em]">
              <span>Hero release</span>
              <span>01</span>
            </div>
            <h1 className="absolute bottom-8 left-8 right-8 m-0 text-[clamp(64px,9vw,144px)] font-medium leading-[.82] tracking-[-.065em]">
              {active.hero}
            </h1>
          </article>

          <div className="grid gap-4 lg:col-span-4">
            {active.feature.map((item, index) => (
              <article
                key={item}
                className="min-h-[calc(29svh-8px)] border border-black/15 bg-white p-6"
              >
                <div className="mb-16 text-[9px] uppercase tracking-[.18em] text-black/50">
                  Feature 0{index + 2}
                </div>
                <h2 className="m-0 max-w-[8ch] text-[clamp(36px,4vw,62px)] font-medium leading-[.9] tracking-[-.05em]">
                  {item}
                </h2>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-5">
          {active.updates.map((item, index) => (
            <article
              key={item}
              className="min-h-44 border-b border-r border-black/15 p-5"
            >
              <div className="mb-16 font-serif text-lg italic text-black/45">
                0{index + 4}
              </div>
              <h3 className="m-0 text-2xl font-medium tracking-[-.04em]">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
