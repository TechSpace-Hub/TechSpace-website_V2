import { Link } from "react-router-dom";
const Employers = () => {
  return (
    <section className="w-full mt-12">
      
      <div className="flex flex-col items-center justify-between gap-10 p-6 bg-[#F5F5F5] border border-gray-200 lg:flex-row sm:p-8 lg:p-10 rounded-2xl">

        <div className="flex-1 max-w-xl">

          <div className="flex items-center justify-center w-10 h-10 mb-4 bg-purple-100 rounded-md">
            <img src="/images/courses.png" alt="icon" />
          </div>

          <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1F1F1F]">
            For Employers & Founders
          </h3>
         <p className="mt-3 font-[Inter] font-normal text-[16px] leading-[25.6px] tracking-[-0.22px] text-[#6D6D6D] max-w-md">
          For brands, startups, and founders who need reliable early-career tech
           talent without sorting through noise.
           </p>
          <Link to="/">
           <button className="mt-6 text-lg font-medium cursor-pointer text-[#D1453B] underline hover:opacity-80 transition">
            Submit a Hiring Request
          </button>
          </Link>
        
        </div>
        <div className="flex-1 w-full max-w-93.5">
          <div className="relative w-full h-full">
            <img
              src="/images/marketing.png"
              alt="marketingflow"
              className="object-contain w-full h-auto"
            />

          </div>
        </div>

      </div>

    </section>
  );
};

export default Employers;