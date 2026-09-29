export default function Foundry() {
  return (
    <section
      id="foundry"
      className="py-20 px-6"
      style={{
        backgroundImage:
          "radial-gradient(#e0e0e0 1px, transparent 1px), radial-gradient(#e0e0e0 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0, 12px 12px",
        backgroundColor: "#fafafa",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-accent">TheTechSpace Foundry</h2>
        <p className="text-ink-soft mt-3">
          A space where founders connect, share ideas and grow together.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 relative">
        <div
          className="rounded-2xl aspect-video bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${new URL('../assets/foundry.jpeg', import.meta.url).href})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#foundry"
              className="bg-accent text-white text-sm md:text-base font-medium rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-accent-dark transition-colors"
            >
              <span aria-hidden="true">✨</span> Connect with Founders
            </a>
          </div>
          {/* <img
            src={new URL('../assets/ts-logo.png', import.meta.url).href}
            alt="TechSpace"
            className="absolute left-1/2 bottom-6 -translate-x-1/2 h-30 w-auto"
          /> */}
        </div>
      </div>
    </section>
  );
}
