import { Link } from "react-router-dom";

export default function Testimonial() {
  return (
    <section className="w-full px-4 py-16 bg-white sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-[Poppins] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-tight text-[#2C2C2C]">
          Trusted by industry leaders
        </h2>

        <p className="mt-3 font-[Inter] font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#6D6D6D]">
          Lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="flex flex-col items-center justify-between max-w-6xl gap-10 mx-auto mt-12 sm:mt-16 lg:mt-20 lg:flex-row">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row lg:items-start sm:gap-8 lg:text-left">
          <img
            src="/images/gallery9.png"
            alt="testimonial"
            className="object-cover"
          />
          <div className="max-w-xl">
            <p className="font-[Inter] font-medium  text-[18px] sm:text-[20px] lg:text-[22px] leading-relaxed text-black">
              TechSpace gave me a clear path and real projects. I landed my first internship in 6 months.
            </p>

            <p className="mt-5 font-[Inter] font-medium text-[15px] sm:text-[16px] text-[#111]">
              Lara Babs
            </p>

            <span className="font-[Inter] text-[14px] sm:text-[15px] text-gray-500">
              Frontend Learner
            </span>
          </div>
        </div>
        <div className="flex justify-center w-full lg:justify-end lg:w-auto">
          <Link to="#">
            <button className="flex items-center justify-center h-12 transition rounded-full sm:w-14 sm:h-14 hover:bg-gray-100">
              <img
                src="/images/next.png"
                alt="next"
                className=""
              />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}