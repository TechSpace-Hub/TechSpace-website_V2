import { useState } from "react";

const slides = [
  {
    number: "01",
    eyebrow: "TALENT DEVELOPMENT",
    tag: "Build",
    description:
      "Structured programs and cohorts that turn capable people into deployable professionals across engineering, design and product.",
  },
  {
    number: "02",
    eyebrow: "ECOSYSTEM OPERATIONS",
    tag: "Manage",
    description:
      "Ongoing support and community infrastructure that keeps talent sharp, connected, and accountable as they grow.",
  },
  {
    number: "03",
    eyebrow: "TALENT PLACEMENT",
    tag: "Deploy",
    description:
      "We match vetted talent with hiring partners and brands who need skilled people ready to contribute from day one.",
  },
];

export default function BuildManageDeploy() {
  const [active, setActive] = useState(0);

  const slideStyles = [
    {
      panel: "bg-panel text-white",
      eyebrow: "text-white/70",
      tag: "text-white",
      description: "text-white/85",
    },
    {
      panel: "bg-[#111111] text-white",
      eyebrow: "text-white/70",
      tag: "text-white",
      description: "text-white/85",
    },
    {
      panel: "bg-[#b9b6b3] text-ink",
      eyebrow: "text-ink/80",
      tag: "text-ink",
      description: "text-ink/80",
    },
  ];

  const tone = slideStyles[active];

  return (
    <section id="services" className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-block border border-accent text-accent text-xs tracking-wide rounded-full px-4 py-1.5 mb-5">
          WHAT WE DO
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl">Build. Manage. Deploy.</h2>
        <p className="text-ink-soft mt-4 max-w-xl mx-auto">
          The business utility of the ecosystem, our three pillars that take talent from raw
          potential to real teams.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 relative">
        <div className={`${tone.panel} rounded-[2rem] px-8 py-10 md:px-12 md:py-14 min-h-[420px] flex flex-col`}>
          <div className="flex items-start justify-between">
            <div className="flex items-baseline gap-3">
              <span className="font-display font-bold text-3xl">{slides[active].number}</span>
              <span className={`text-xs tracking-wide ${tone.eyebrow}`}>{slides[active].eyebrow}</span>
            </div>
            <span className={`font-display font-semibold text-2xl ${tone.tag}`}>{slides[active].tag}</span>
          </div>

          <div className="flex-1 flex items-center justify-center text-center px-4">
            <p className={`max-w-md ${tone.description}`}>{slides[active].description}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((slide, i) => (
            <button
              key={slide.number}
              onClick={() => setActive(i)}
              aria-label={`Show ${slide.tag} slide`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-accent" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
