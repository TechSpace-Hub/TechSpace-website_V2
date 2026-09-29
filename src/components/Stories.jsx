import { useState } from "react";

const stories = [
  "/src/assets/victor.jpeg",
  "/src/assets/babz.jpeg",
  "/src/assets/faith.jpeg",
  "/src/assets/maven.jpeg",
  "/src/assets/koko.jpeg",
  "/src/assets/sandra.jpeg",
];

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
        {/* Drop each finished graphic (photo + quote already designed) in as the image src below */}
        <img
          src={stories[index]}
          alt={`Story ${index + 1}`}
          className="w-full rounded-2xl bg-gray-100"
        />

        <button
          onClick={prev}
          aria-label="Previous story"
          className="hidden sm:flex items-center justify-center absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 text-2xl text-ink-soft hover:text-accent transition-colors"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next story"
          className="hidden sm:flex items-center justify-center absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 text-2xl text-ink-soft hover:text-accent transition-colors"
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