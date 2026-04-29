const Ecosystem = () => {
  return (
    <section className="relative bg-[#F8F8FA] min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[80px]">

      <div className="absolute inset-1.5 bg-[#FFFFFF] rounded-tl-[74px] rounded-tr-[74px] rounded-bl-[74px] rounded-br-[74px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,#F8F8FA_4px,transparent_4px)] bg-size-[40px_40px]" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl text-center">
         <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[28px] leading-tight tracking-[1px] text-[#2C2C2C] font-semibold font-[Poppins] mb-4 text-center">
            <span className="inline bg-[#FFFFFF] px-2 py-1 rounded-md">
             Wanna Be Part of a Structured Ecosystem?</span>
               </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 text-[#6D6D6D] font-normal font-[Inter] bg-[#FFFFFF] px-2 py-1 rounded-md mb-10 max-w-[90%] sm:max-w-[80%] md:max-w-130">
          Tech Space gives you everything in one place to grow your skills or hire emerging talent.
        </p>
        <div className="relative w-full max-w-xl overflow-hidden shadow-lg rounded-2xl">

          <img
            src="images/techspace.jpg"
            alt="Payment terminal"
            className="object-cover object-center w-full h-55 sm:h-75 md:h-105 rounded-2xl"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 flex items-center justify-center">

            <button className="flex items-center justify-center w-37.5 sm:w-40 md:w-43 h-10 sm:h-10.5 md:h-11 gap-2.5 px-4 py-3 bg-[#D1453B] text-white text-sm font-semibold rounded-[10px] border border-[#D1453B33] transition-all duration-150 hover:bg-[#c13d34] active:scale-95">

              <span className="text-xs">✦</span>
              Join Tech Space

            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;