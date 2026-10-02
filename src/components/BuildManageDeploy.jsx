import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";
import communityImg from "../assets/community8.webp";
import manageImg from "../assets/community6.webp";
import deployImg from "../assets/deploy.webp";

const slides = [
  {
    number: "01",
    eyebrow: "TALENT DEVELOPMENT",
    tag: "Build",
    // icon: "🛠️",
    description:
      "Structured programs and cohorts that turn capable people into deployable professionals across engineering, design and product.",
    image: communityImg,
  },
  {
    number: "02",
    eyebrow: "ECOSYSTEM OPERATIONS",
    tag: "Manage",
    // icon: "🧭",
    description:
      "Ongoing support and community infrastructure that keeps talent sharp, connected, and accountable as they grow.",
    image: manageImg,
  },
  {
    number: "03",
    eyebrow: "TALENT PLACEMENT",
    tag: "Deploy",
    // icon: "🚀",
    description:
      "We match vetted talent with hiring partners and brands who need skilled people ready to contribute from day one.",
    image: deployImg,
  },
];

const AUTO_ADVANCE_MS = 1000;

function SlideCard({ slide }) {
  return (
    <div className="relative flex flex-col h-full overflow-hidden z-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative flex items-center justify-between animate-rise-1">
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-accent text-lg">
            {slide.number}
          </span>
          <span className="text-[11px] tracking-[0.15em] text-white/60 font-medium">
            {slide.eyebrow}
          </span>
        </div>
        <span className="text-2xl">{slide.icon}</span>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 gap-4">
        <span className={`animate-rise-2 font-display font-bold text-4xl md:text-5xl tracking-tight ${slide.tag === 'Manage' ? 'text-accent' : 'text-white'}`}>
          {slide.tag}
        </span>
        <div className="animate-rise-2 w-10 h-[3px] rounded-full bg-accent" />
        <p className="animate-rise-3 text-white/80 max-w-md leading-relaxed">
          {slide.description}
        </p>
      </div>
    </div>
  );
}

export default function BuildManageDeploy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const [sectionRef, inView] = useInView();

  const prevIndex = active === 0 ? slides.length - 1 : active - 1;

  const goTo = (index) => setActive(((index % slides.length) + slides.length) % slides.length);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    // Skip auto-advance while hovered or while the section is offscreen.
    if (paused || !inView) return undefined;
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, active, inView]);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-block border border-accent text-accent text-xs tracking-wide rounded-full px-4 py-1.5 mb-5">
          WHAT WE DO
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl">Build. <span className="text-accent">Manage</span>. Deploy.</h2>
        <p className="text-ink-soft mt-4 max-w-xl mx-auto">
          The business utility of the ecosystem, our three pillars that take talent from raw
          potential to real teams.
        </p>
      </div>

      <div
        className="max-w-4xl mx-auto mt-16 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-[480px] flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-[-70px] md:left-[-110px] top-1/2 -translate-y-1/2 text-[130px] md:text-[190px] leading-none text-accent/[0.16] rotate-[-25deg] z-0"
          >
            🚀
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-[-70px] md:right-[-110px] top-1/2 -translate-y-1/2 text-[130px] md:text-[190px] leading-none text-accent/[0.16] rotate-[25deg] z-0"
            style={{ transform: "translateY(-50%) scaleX(-1)" }}
          >
            🚀
          </div>

          <div
            aria-hidden="true"
            className="absolute w-full max-w-3xl h-[420px] rounded-[2.5rem] scale-95 translate-y-4 z-[5] overflow-hidden"
          >
            <img
              aria-hidden="true"
              src={slides[prevIndex].image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
            <div className="p-8 md:p-10 h-full relative z-10">
              <SlideCard slide={slides[prevIndex]} />
            </div>
          </div>

          <div key={active} className="relative w-full max-w-3xl z-10 animate-card-up">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[2.75rem] shadow-2xl">
              <div className="relative rounded-[2.25rem] px-8 py-10 md:px-12 md:py-14 h-[400px] ring-1 ring-white/10 overflow-hidden shadow-xl">
                <img
                  aria-hidden="true"
                  src={slides[active].image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full">
                  <SlideCard slide={slides[active]} />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-lg hover:bg-gray-50 hover:scale-105 transition-all"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-lg hover:bg-gray-50 hover:scale-105 transition-all animate-nudge-right"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((slide, i) => (
            <button
              key={slide.number}
              onClick={() => goTo(i)}
              aria-label={`Show ${slide.tag} slide`}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-accent w-7" : "bg-gray-300 w-2.5"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}