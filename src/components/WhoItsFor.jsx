const cards = [
  {
    eyebrow: "FOR PROFESSIONALS",
    title: "Build a career, not just a skillset.",
    description: "Ship work in public and plug into an ecosystem that opens doors.",
    cta: "Explore programs",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=800",
  },
  {
    eyebrow: "FOR FOUNDERS",
    title: "Enter the Tech Space Foundry.",
    description:
      "A vetted ecosystem where founders collaborate and grow alongside operators who have done it before.",
    cta: "Apply to the Foundry",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
  },
  {
    eyebrow: "FOR BRANDS & PARTNERS",
    title: "Hire verified talent, on demand.",
    description:
      "We build, manage and deploy tech and creative talent into your teams. Tell us the shape of the role, we handle the rest.",
    cta: "Hire Talent",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block border border-accent text-accent text-xs tracking-wide rounded-full px-4 py-1.5 mb-5">
          WHO IT'S FOR
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl">
          Different people, different doors.
        </h2>
        <p className="text-ink-soft mt-4">
          You shouldn't have to decode a homepage to find your path.
        </p>
        <p className="text-ink-soft italic">Pick the door that fits.</p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.eyebrow} className="bg-white rounded-2xl p-6 flex flex-col">
            <span className="text-accent text-xs tracking-wide font-medium">{card.eyebrow}</span>
            <h3 className="font-display font-semibold text-lg mt-3">{card.title}</h3>
            <p className="text-ink-soft text-sm mt-2">{card.description}</p>

            <div
              className="mt-5 rounded-xl h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            />

            <a
              href="#"
              className="mt-4 text-sm font-medium inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              {card.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
