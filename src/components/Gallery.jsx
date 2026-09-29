// Photo imports
import beninorangelady from "../assets/beninorangelady.jpeg";
import community2 from "../assets/community2.jpeg";
import convkokoandfresh from "../assets/convkokoandfresh.jpeg";
import convdebbyandhubby from "../assets/convdebbyandhubby.jpeg";
import beningroup from "../assets/beningroup.jpeg";
import beninsandra from "../assets/beninsandra.jpeg";
import benindancing from "../assets/benindancing.jpeg";
import beninguysinging from "../assets/beninguysinging.jpeg";

const photos = {
  colA1: convdebbyandhubby, // leftmost, lowest, single photo
  colB1: beninguysinging, // second column, top of pair
  colB2: beningroup, // second column, bottom of pair
  colCTall: convkokoandfresh, // third column, single tall photo
  colD1: beninorangelady, // rightmost, top of pair
  colD2: community2, // rightmost, bottom of pair
  bridge: beninsandra, // wide photo bridging under columns C and D
  colD3: benindancing, // fourth column, top of pair
};

function Photo({ src, className = "" }) {
  return (
    <div
      className={`rounded-xl bg-gray-200 bg-cover bg-center w-full ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export default function Gallery() {
  return (
    <section className="bg-[#fdf3f1] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-6 items-start">
        {/* Text block */}
        <div className="max-w-xs shrink-0 mt-6 md:mt-20 lg:mt-24">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-accent">
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

        {/* Staircase photo wall */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          {/* Column A — leftmost, lowest start, single photo */}
          <div className="flex-1 flex flex-col gap-2 sm:mt-131">
            <Photo src={photos.colA1} className="h-36 sm:h-40" />
          </div>

          {/* Column B — pair, starts a bit lower than C and D */}
          <div className="flex-1 flex flex-col gap-2 sm:mt-88">
            <Photo src={photos.colB1} className="h-36 sm:h-40" />
            <Photo src={photos.colB2} className="h-36 sm:h-40" />
          </div>

          {/* Columns C + D share a bottom "bridge" photo spanning both */}
          <div className="flex-[3] flex flex-col gap-2">
            <div className="flex gap-4 items-start">
              {/* Column C — independent tall photo; pushed down slightly */}
              <div className="flex-1 mt-6 sm:mt-45">
                <Photo src={photos.colCTall} className="h-[19rem] sm:h-[21rem]" />
              </div>

              {/* Column D — stacked photos, unaffected by C's spacing */}
              <div className="flex-1 flex flex-col  gap-2">
                <Photo src={photos.colD1} className="h-36 sm:h-40" />
                <Photo src={photos.colD2} className="h-36 sm:h-40" />
                <Photo src={photos.colD3} className="h-36 sm:h-40" />
              </div>
            </div>

            {/* Bridge photo — spans under both C and D */}
            <Photo src={photos.bridge} className="h-36 sm:h-40 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}