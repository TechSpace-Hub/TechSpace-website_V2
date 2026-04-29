import { ArrowRight, Check} from "lucide-react";
const LearningSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-12 mx-auto max-w-300 lg:flex-row">
        <div className="flex-1 max-w-125">
          <h2 className="font-[Inter] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[100%] tracking-normal text-[#1F1F1F]">
            More Than a Learning Platform.
          </h2>
          <p className="mt-4 font-[Inter] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-5 sm:leading-6 lg:leading-[27.2px] text-gray-500">
            Techspace is an organized growth platform
          </p>

            <div className="mt-6 flex flex-col gap-4 text-[14px] sm:text-[15px] text-gray-600">
            {[
              "Train future-ready tech talent",
              "Connect verified talent with hiring partners",
              "Support meaningful collaboration",
              "Host engaging tech events",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 text-xs text-gray-500 border border-gray-300 rounded-full">
                  <Check size={10} color="black"/>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 px-6 py-3 border border-[#D1453B] text-[#D1453B] rounded-full text-sm hover:bg-[#D1453B] hover:text-white transition">
            Join Community <ArrowRight/>
          </button>
        </div>

        <div className="relative flex-1 w-full max-w-150">
          <div className="relative w-full h-87.5 sm:h-112.5 lg:h-150 rounded-xl overflow-hidden">
            <img
              src="/images/learning.jpg"
              alt="Learning"
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-[linear-gradient(183.91deg,rgba(0,0,0,0.2)_3.2%,rgba(102,102,102,0.2)_58.01%)]"></div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:w-99.5 lg:left-6 lg:right-auto bg-white rounded-lg p-6 flex flex-col gap-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center justify-center text-[12px] text-gray-500 border border-[#929292] rounded-full px-3.5 py-px h-6.75">
                Upcoming Event
              </span>

              <div className="flex flex-col items-center justify-center gap-0.75 w-8 h-8 cursor-pointer">
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              </div>
            </div>

            <h4 className="text-[14px] font-medium text-gray-800">
              How to get International Offers
            </h4>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                
                  <div className="flex items-center -space-x-3">
                    <img
                      src="/images/e.png"
                      alt=""
                      className="w-7.5 h-7.5 rounded-full border-[0.7px] border-white object-cover"
                    />

                    <img
                      src="/images/a.png"
                      alt=""
                      className="w-8 h-8 rounded-full border-[0.7px] border-white object-cover"
                    />

                    <div className="w-8.25 h-8.25 rounded-full border-[0.7px] border-white bg-[#B4E0EC] flex items-center justify-center text-[10px] text-black">
                      <div className="flex items-center justify-center w-8 h-8 gap-1 cursor-pointer">
                        <span className="w-1 h-1 bg-[#2C2C2C] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#2C2C2C] rounded-full"></span>
                      </div>
                    </div>
                  </div>
                  
                  <span className="ml-2 text-[12px] text-gray-500">
                    1501 going
                  </span>
                </div>
              </div>
              <span className="flex items-center justify-center w-8 h-8 cursor-pointer">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
