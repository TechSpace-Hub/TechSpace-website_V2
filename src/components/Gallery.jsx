// Replace each "REPLACE_WITH_..." string with your imported image.
// Row 2's "left" and "middle" images are the same height as the
// combined height of the two stacked images on the right.
const photos = {
  top: new URL("../assets/talent.png", import.meta.url).href,
  middleLeft: new URL("../assets/community-2.jpg", import.meta.url).href,
  middleCenter: new URL("../assets/community-3.jpg", import.meta.url).href,
  stackTop: new URL("../assets/community-4.jpg", import.meta.url).href,
  stackBottom: new URL("../assets/community-5.jpg", import.meta.url).href,
  bottomLeft: new URL("../assets/community-6.jpg", import.meta.url).href,
  bottomCenter: new URL("../assets/community-7.jpg", import.meta.url).href,
  bottomRight: new URL("../assets/hangout.jpg", import.meta.url).href, // wider than the other two in this row
};

function Photo({ src, className = "" }) {
  return (
    <div
      className={`rounded-xl bg-gray-200 bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fdf3f1] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        {/* Text block */}
        <div className="max-w-md shrink-0">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Moments from the TechSpace Events.
          </h2>
          <p className="text-ink-soft mt-4">
            A glimpse into our workshops, learning sessions, and community events.
          </p>

          <a
            href="#gallery"
            className="inline-block mt-6 border border-accent text-accent text-sm font-medium rounded-full px-6 py-2.5 hover:bg-accent hover:text-white transition-colors"
          >
            View Full Gallery ↗
          </a>
        </div>

        {/* Photo wall — 3 independent rows, matching the Figma layout */}
        <div className="w-full flex flex-col gap-4">
          {/* Row 1: one full-width photo */}
          <Photo src={photos.top} className="w-full h-48 sm:h-56" />

          {/* Row 2: left + middle (equal height) + stacked pair on the right
              (their combined height == the middle photo's height) */}
          <div className="flex gap-4 h-64 sm:h-72">
            <Photo src={photos.middleLeft} className="flex-1 h-full" />
            <Photo src={photos.middleCenter} className="flex-1 h-full" />
            <div className="flex-1 flex flex-col gap-4">
              <Photo src={photos.stackTop} className="flex-1" />
              <Photo src={photos.stackBottom} className="flex-1" />
            </div>
          </div>

          {/* Row 3: three photos, third one wider than the first two */}
          <div className="flex gap-4 h-40 sm:h-48">
            <Photo src={photos.bottomLeft} className="flex-1 h-full" />
            <Photo src={photos.bottomCenter} className="flex-1 h-full" />
            <Photo src={photos.bottomRight} className="flex-[1.6] h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}