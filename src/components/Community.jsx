import communityImg1 from "../assets/community-1.jpg";
import communityImg2 from "../assets/community-2.jpg";
import communityImg3 from "../assets/community-3.jpg";
import communityImg4 from "../assets/community-4.jpg";
import communityImg5 from "../assets/community-5.jpg";
import communityImg6 from "../assets/community-6.jpg";
import communityImg7 from "../assets/community-7.jpg";
import communityImg8 from "../assets/community-8.jpg";
import communityImg9 from "../assets/community-9.jpg";
import communityImg10 from "../assets/community-10.jpg";
import communityImg11 from "../assets/community-11.jpg";

const bubbles = [
  { left: 35.2, top: 25.3, size: 9.5, img: communityImg1 },
  { left: 58.9, top: 22.5, size: 14.2, img: communityImg2 },
  { left: 23.9, top: 41.1, size: 9.5, img: communityImg3 },
  { left: 43.6, top: 40.0, size: 11, img: communityImg4 },
  { left: 61.5, top: 38.6, size: 9.5, img: communityImg5 },
  { left: 78.1, top: 53.6, size: 11, img: communityImg6 },
  { left: 35.2, top: 62.2, size: 9.5, img: communityImg7 },
  { left: 57.6, top: 60.3, size: 9.5, img: communityImg8 },
  { left: 18.9, top: 68.9, size: 8, img: communityImg9 },
  { left: 41.8, top: 78.5, size: 14.2, img: communityImg10 },
  { left: 78.6, top: 74.4, size: 8, img: communityImg11 },
];

const rings = [18, 32, 46, 60, 74];

export default function Community() {
  return (
    <section id="community" className="bg-white py-20 px-6">
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

          <a href="#community" className="inline-block mt-6 border border-accent text-accent text-sm font-medium rounded-full px-7 py-2.5 hover:bg-accent hover:text-white transition-colors">Join Community</a>        </div>

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
              className="absolute rounded-full bg-cover bg-center bg-gray-200 border-2 border-white shadow-md"
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
