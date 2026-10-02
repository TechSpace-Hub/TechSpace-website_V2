import { useState } from "react";
import victorImg from "../assets/victor.webp";
import babzImg from "../assets/babz.webp";
import faithImg from "../assets/faith.webp";
import mavenImg from "../assets/maven.webp";
import kokoImg from "../assets/koko.webp";
import sandraImg from "../assets/sandra.webp";

const stories = [victorImg, babzImg, faithImg, mavenImg, kokoImg, sandraImg];

export default function Stories() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === stories.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-accent">Stories From Within</h2>
        <p className="text-ink-soft mt-4">
          Real stories and experiences from people building, learning and growing within
          thetechspace.
        </p>
      </div>

      <div className="max-w-lg mx-auto mt-12 relative">
        <img
          src={stories[index]}
          alt={`Story ${index + 1}`}
          loading="lazy"
          decoding="async"
          className="w-full rounded-2xl bg-gray-100"
        />

        <button
          onClick={prev}
          aria-label="Previous story"
          className="flex items-center justify-center absolute -left-3 sm:-left-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 text-2xl leading-none rounded-full sm:rounded-none bg-white/85 sm:bg-transparent shadow-sm sm:shadow-none backdrop-blur-[2px] sm:backdrop-blur-none text-ink-soft hover:text-accent transition-colors z-10"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next story"
          className="flex items-center justify-center absolute -right-3 sm:-right-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 text-2xl leading-none rounded-full sm:rounded-none bg-white/85 sm:bg-transparent shadow-sm sm:shadow-none backdrop-blur-[2px] sm:backdrop-blur-none text-ink-soft hover:text-accent transition-colors z-10"
        >
          ›
        </button>

        <div className="flex items-center justify-center gap-2 mt-6">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show story ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-accent" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}