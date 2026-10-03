import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useInView } from "../hooks/useInView";
import submitLead from "../utils/submitLead";
import heroVideo from "../assets/techspace-hero.mp4";
import heroPoster from "../assets/techspace-poster.webp";

const trustedBy = [
  { name: "Google Cloud" },
  { name: "AWS" },
  { name: "Discord" },
  { name: "GitHub" },
];

export default function Hero() {
  const [heroRef, heroInView] = useInView("0px");
  const videoRef = useRef(null);
  const [email, setEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState("idle"); // idle | loading | success | error
  const [leadMessage, setLeadMessage] = useState("");

  // Play the background loop only while the hero is visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (heroInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [heroInView]);

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    if (leadStatus === "loading") return;
    setLeadStatus("loading");
    setLeadMessage("");
    const result = await submitLead({ email });
    setLeadStatus(result.success ? "success" : "error");
    setLeadMessage(result.message);
    if (result.success) setEmail("");
  };

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero background: compressed 960x540 loop (no audio) with a WebP poster fallback */}
        <video
          ref={videoRef}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navbar />

      <div className="relative max-w-4xl mx-auto text-center px-6 pt-40 pb-16 md:pt-52 md:pb-24">
        <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
          Where <span className="text-accent">talents</span> and{" "}
          <span className="text-accent">organizations</span> building the future of{" "}
          <span className="text-accent">TECH</span> connect
        </h1>
        <p className="text-white/85 mt-5 text-base md:text-lg">
          TechSpace is where tech comes to life, connecting tech talents, hiring partners &amp;
          collaborators to build, collaborate, and discover opportunities.
        </p>

        <form className="mt-8 max-w-xl mx-auto" onSubmit={handleLeadSubmit}>
          <div className="relative flex items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              className="w-full bg-black/40 border border-white/30 text-white placeholder:text-white/60 rounded-full px-6 py-3.5 pr-40 outline-none focus:border-white/70"
            />
            <button
              type="submit"
              disabled={leadStatus === "loading"}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-ink font-medium rounded-lg px-7 py-2.5 hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {leadStatus === "loading" ? "Sending..." : "Get Started"}
            </button>
          </div>
          {leadMessage && (
            <p
              className={`mt-3 text-sm ${
                leadStatus === "success" ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {leadMessage}
            </p>
          )}
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