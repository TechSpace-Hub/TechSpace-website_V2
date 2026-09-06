const bubbles = [
  { left: 63.3, top: 8.7, size: 14.2, img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200" },
  { left: 27.8, top: 13.2, size: 9.5, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200" },
  { left: 67.7, top: 32.8, size: 9.5, img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200" },
  { left: 10.8, top: 36.3, size: 11, img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200" },
  { left: 42.7, top: 35.3, size: 11, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" },
  { left: 92, top: 55.5, size: 11, img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200" },
  { left: 27.8, top: 68.3, size: 9.5, img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200" },
  { left: 61.5, top: 65.3, size: 9.5, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200" },
  { left: 3.3, top: 78.2, size: 8, img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200" },
  { left: 92.7, top: 86.7, size: 8, img: "https://images.unsplash.com/photo-1521341957697-b93449760f30?q=80&w=200" },
  { left: 37.8, top: 92.5, size: 14.2, img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=200" },
];

const rings = [18, 32, 46, 60, 74];

export default function Community() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent text-sm font-medium">Community &amp; Events</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Serious Growth. Real Connections.
          </h2>
          <p className="text-ink-soft mt-4 max-w-md">
            Beyond learning and hiring, TechSpace hosts tech events, networking sessions that
            creates space for connection.
          </p>
          <a
            href="#community"
            className="inline-block mt-6 border border-accent text-accent text-sm font-medium rounded-full px-7 py-2.5 hover:bg-accent hover:text-white transition-colors"
          >
            Join Community
          </a>
        </div>

        <div className="relative aspect-square w-full max-w-[560px] mx-auto">
          {rings.map((r) => (
            <div
              key={r}
              className="absolute rounded-full border border-dashed border-gray-200"
              style={{
                width: `${r}%`,
                height: `${r}%`,
                left: `${50 - r / 2}%`,
                top: `${50 - r / 2}%`,
              }}
            />
          ))}

          <div
            className="absolute rounded-full bg-white border border-accent/30 flex items-center justify-center text-xl shadow-sm"
            style={{ width: "7.7%", height: "7.7%", left: "46.15%", top: "46.15%" }}
            aria-hidden="true"
          >
            🚀
          </div>

          {bubbles.map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cover bg-center border-2 border-white shadow-md"
              style={{
                width: `${b.size}%`,
                height: `${b.size}%`,
                left: `${b.left}%`,
                top: `${b.top}%`,
                backgroundImage: `url(${b.img})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
