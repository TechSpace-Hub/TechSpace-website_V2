import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface Photo {
  id: number;
  src: string;
  alt: string;
  width?: string;       
  height?: string;       
  borderRadius?: string; 
  objectPosition?: string;
}

const photos: Record<string, Photo> = {
  topRight1: {
    id: 1,
    src: "/images/gallery8.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
  topRight2: {
    id: 2,
    src: "/images/gallery1.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "0px",
  },
  midLeft: {
    id: 3,
    src: "/images/gallery6.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
  midCenter: {
    id: 4,
    src: "/images/gallery5.jpg",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
  midRight: {
    id: 5,
    src: "/images/gallery3.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
  botLeft: {
    id: 6,
    src: "/images/gallery4.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
  botCenter: {
    id: 7,
    src: "/images/gallery7.jpg",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "0px",
  },
  botWide: {
    id: 8,
    src: "/images/gallery2.png",
    alt: "Event",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
};

function Tile({ photo, className = "" }: { photo: Photo; className?: string }) {
  const [hover, setHover] = useState(false);

  return (
    <div className={`${className}`}>
      <div
        className="overflow-hidden"
        style={{
          width: photo.width ?? "100%",
          height: photo.height ?? "100%",
          borderRadius: photo.borderRadius ?? "16px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="object-cover w-full h-full transition duration-500"
          style={{
            objectPosition: photo.objectPosition ?? "center",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
    </div>
  );
}

export default function EventsGallery() {
  return (
    <section className="w-full bg-[#FFF7F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 rounded-b-[80px]">
      <div className="flex flex-col gap-10 mx-auto max-w-300 lg:flex-row lg:gap-12">
        
        <div className="text-center max-w-105 lg:text-left">
            <h2 className="font-[Poppins] font-medium text-[36px] leading-[100%] text-[#2C2C2C]">
            Moments from the TechSpace Events.
          </h2>
            <p className="mt-4 font-[Inter] text-[20px] leading-[100%] text-[#6D6D6D]">
            A glimpse into our workshops, learning sessions, and community events.
          </p>
            <Link to="/">
            <button className="mt-6 px-6 py-3 border border-[#D1453B] text-[#D1453B] rounded-full flex items-center gap-2 hover:bg-[#D1453B] hover:text-white transition">
              View Full Gallery
              <ArrowRight className="rotate-[-50deg]" />
            </button>
          </Link>
        </div>
        
        <div className="flex-1">

          {/* Mobile layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden auto-rows-[120px] sm:auto-rows-[140px]">
            <Tile photo={photos.midCenter} className="col-span-2 row-span-2" />
            <Tile photo={photos.topRight1} />
            <Tile photo={photos.topRight2} />
            <Tile photo={photos.midLeft} />
            <Tile photo={photos.midRight} />
            <Tile photo={photos.botLeft} />
            <Tile photo={photos.botCenter} />
            <Tile photo={photos.botWide} className="col-span-2" />
          </div>

          {/* DESKTOP */}
          <div
            className="hidden gap-2 lg:grid"
            style={{
              gridTemplateColumns: "140px 180px 260px 180px",
              gridTemplateRows: "100px 140px 140px 120px",
            }}
          >
            <Tile photo={photos.topRight1} className="col-4 row-1" />
            <Tile photo={photos.topRight2} className="col-4 row-2" />
            <Tile photo={photos.midRight}  className="col-4 row-3" />
            <Tile photo={photos.midCenter} className="col-3 row-[2/4]"/>
            <Tile photo={photos.midLeft}   className="col-2 row-3" />
            <Tile photo={photos.botLeft}   className="col-1 row-4" />
            <Tile photo={photos.botCenter} className="col-2 row-4" />
            <Tile photo={photos.botWide}   className="col-[3/5] row-4" />
          </div>

        </div>
      </div>
    </section>
  );
}