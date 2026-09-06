import Navbar from "./Navbar";

const trustedBy = ["Google Cloud", "AWS", "Loom", "Discord"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* REPLACE_WITH_HERO_TABLE_IMAGE — the "video-like" motion comes from the
            .hero-orbit CSS animation in index.css, not an actual video file */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600')] bg-cover bg-center hero-orbit" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Navbar />

      <div className="relative max-w-4xl mx-auto text-center px-6 pt-40 pb-16 md:pt-52 md:pb-24">
        <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
          Where talent is <span className="text-accent">built</span> and
          <br />
          <em className="font-display italic">deployed into opportunities.</em>
        </h1>
        <p className="text-white/85 mt-5 text-base md:text-lg">
          TechSpace connects learners, hiring partners &amp; collaborators in one platform.
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

        <div className="mt-14">
          <p className="text-white/70 text-sm mb-4">Trusted by:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="bg-white text-ink text-sm font-medium rounded-full px-5 py-2"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}