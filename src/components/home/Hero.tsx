
const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="relative flex items-center justify-center w-full min-h-screen px-4">
          <div className="relative z-10 text-center text-white max-w-223.75 mx-auto px-2 bottom-25">
            <h1 className="font-[Poppins] font-normal text-[32px] leading-10.5 sm:text-[48px] sm:leading-15 lg:text-[75px] lg:leading-[94.5px] tracking-tight">
              A{" "}
              <span className="bg-linear-to-b from-[#D1453B] to-[#D1453B] px-4 py-1 rounded-full inline-block">
                Community
              </span>{" "}
              for Developers, Designers, Creators, Writers...
            </h1>
            <p className="mt-6 font-[Inter] text-[15px] leading-5.5 sm:text-[18px] sm:leading-6.5 lg:text-[20px] lg:leading-6.75 text-white max-w-175 mx-auto">
              TechSpace connects learners, hiring partners & collaborators in
              one structured platform... built to eliminate chaos.
            </p>
          </div>
          <div className="absolute bottom-20 left-4 sm:left-8 lg:left-14 max-w-88.75 flex flex-col gap-3 text-white">
            <span className="text-sm text-gray-300">Trusted by:</span>

            <div className="flex flex-wrap items-center gap-3">
              <div className="trusted-by">
                <img src="images/brands.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
