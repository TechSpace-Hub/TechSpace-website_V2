const convImg = new URL("../assets/conversation.jpeg", import.meta.url).href;
const foundryImg = new URL("../assets/foundry.jpeg", import.meta.url).href;
const talentImg = new URL("../assets/talent.jpeg", import.meta.url).href;
const drfreshImg = new URL("../assets/drfreshconv.jpeg", import.meta.url).href;

const cards = [
  {
    eyebrow: "FOR PROFESSIONALS",
    title: "Build a career, not just a skillset.",
    description: "Ship work in public and plug into an ecosystem that opens doors.",
    cta: "Explore programs",
    image: convImg,
  },
  {
    eyebrow: "FOR FOUNDERS",
    title: "Enter the Tech Space Foundry.",
    description:
      "A vetted ecosystem where founders collaborate and grow alongside operators who have done it before.",
    cta: "Apply to the Foundry",
    image: foundryImg,
  },
  {
    eyebrow: "FOR BRANDS & PARTNERS",
    title: "Hire verified talent, on demand.",
    description:
      "We build, manage and deploy tech and creative talent into your teams. Tell us the shape of the role, we handle the rest.",
    cta: "Hire Talent",
    image: talentImg,
  },
];

export default function WhoItsFor() {
  return (
    <section id="about" className="bg-surface py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block border border-accent text-accent text-xs tracking-wide rounded-full px-4 py-1.5 mb-5">
          WHO IT'S FOR
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl">
          Different <span className="text-accent">people</span>, different <span className="text-accent">doors</span>.
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
            <div className="flex-1">
              <h3 className="font-display font-semibold text-lg mt-3">{card.title}</h3>
              <p className="text-ink-soft text-sm mt-2">{card.description}</p>

              <div
                className="mt-5 mb-6 md:mb-8 rounded-xl h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
            </div>

            <a
              href="#"
              className="mt-auto text-sm font-medium inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              {card.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
