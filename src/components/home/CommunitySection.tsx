type Avatar = {
  id: number;
  image: string;
  size: number;
  angle: number;
  radius: number;
};

const avatars: Avatar[] = [
  { id: 1, image: "/images/heroBg.png", size: 48, angle: 20, radius: 70 },
  { id: 2, image: "/images/f.png", size: 50, angle: 140, radius: 70 },

  { id: 3, image: "/images/i.png", size: 55, angle: 60, radius: 130 },
  { id: 4, image: "/images/j.png", size: 58, angle: 220, radius: 130 },

  { id: 5, image: "/images/frame.png", size: 60, angle: 10, radius: 190 },
  { id: 6, image: "/images/o.png", size: 65, angle: 120, radius: 190 },
  { id: 7, image: "/images/n.png", size: 60, angle: 260, radius: 190 },

  { id: 8, image: "/images/m.png", size: 70, angle: 80, radius: 240 },
  { id: 9, image: "/images/k.png", size: 72, angle: 200, radius: 240 },

  { id: 10, image: "/images/g.png", size: 60, angle: 320, radius: 280 },
  { id: 11, image: "/images/l.png", size: 58, angle: 150, radius: 280 },
];

const CommunitySection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-8">

        <div className="w-full text-center max-w-105 lg:text-left">

          <span className="text-[#D1453B] text-[14px] font-medium">
            Community & Events
          </span>

          <h2 className="mt-4 font-[Poppins] font-extralight text-[28px] sm:text-[34px] lg:text-[44px] leading-[120%] text-[#2C2C2C]">
            Serious Growth. Real Connections.
          </h2>

          <p className="mt-4 font-[Inter] text-[15px] sm:text-[16px] leading-[25.6px] text-[#6D6D6D]">
           Beyond learning and hiring, TechSpace hosts tech events, networking sessions that creates space for connection.
          </p>

          <button className="mt-6 px-6 py-3 border border-[#D1453B] text-[#D1453B] rounded-full text-sm hover:bg-[#D1453B] hover:text-white transition">
            Join Community
          </button>
        </div>
        <div className="flex justify-center w-full max-w-150">

          <div className="relative w-150 h-150 origin-center scale-[0.5] xs:scale-[0.6] sm:scale-[0.75] md:scale-[0.9] 
            lg:scale-100">
         {[120, 240, 360, 480, 600].map((d, i) => (
         <div
        key={i}
        className="absolute rounded-full"
        style={{
        width: d,
        height: d,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid #E5E7EB",
        opacity: 1,
        maskImage:
        "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 75%, transparent 100%)",
        WebkitMaskImage:
        "radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2) 75%, transparent 100%)",
        }}
        />
         ))}
            <div className="absolute top-1/2 left-1/2 w-17.5 h-17.5 bg-white rounded-full flex items-center justify-center  -translate-x-1/2 -translate-y-1/2">
              <img src="/images/logo.png" alt="logo" className="w-25" />
            </div>
            {avatars.map((a) => (
              <div
                key={a.id}
                className="absolute top-1/2 left-1/2 rounded-full border-[3px] border-white shadow-md overflow-hidden"
                style={{
                  width: a.size,
                  height: a.size,
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${a.angle}deg) 
                    translate(${a.radius}px) 
                    rotate(-${a.angle}deg)
                  `,
                }}
              >
                <img
                  src={a.image}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;