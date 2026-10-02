import Navbar from "./Navbar";
import foundryImg from "../assets/foundry.jpeg";

const trustedBy = [
  { name: "Google Cloud" },
  { name: "AWS" },
  { name: "Discord" },
  { name: "GitHub" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero background uses the foundry image from assets */}
        <div
          className="w-full h-full bg-cover bg-center hero-orbit"
          style={{ backgroundImage: `url(${foundryImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navbar />

      <div className="relative max-w-4xl mx-auto text-center px-6 pt-40 pb-16 md:pt-52 md:pb-24">
        <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
          We're <span className="text-accent">talents</span> and{" "}
          <span className="text-accent">organizations</span> building the future of{" "}
          <span className="text-accent">TECH</span> connect
        </h1>
        <p className="text-white/85 mt-5 text-base md:text-lg">
          TechSpace is where tech comes to life, connecting tech talents, hiring partners &amp;
          collaborators to build, collaborate, and discover opportunities.
        </p>

        <form className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full bg-black/40 border border-white/30 text-white placeholder:text-white/60 rounded-full px-6 py-3.5 pr-40 outline-none focus:border-white/70"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-ink font-medium rounded-full px-7 py-2.5 hover:bg-white/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </form>

        <div className="mt-14 hidden sm:block">
  <p className="text-white/70 text-sm mb-4">Trusted by:</p>
  <div className="flex flex-wrap items-center justify-center gap-3">
            {trustedBy.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-full px-5 py-2.5 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-ink">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}