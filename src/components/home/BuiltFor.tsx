import { Link } from "react-router-dom";
import TrackCard from "../TrackCard";
import Employers from "./Employers";
const BuiltFor = () => {
  type Track = {
  learners: number;
  color: string;
  gradient: string;
  avatar: string;
};

const tracks: Track[] = [
  {
    learners: 465,
    color: "bg-[#E9D5FF]",
    gradient:
      "bg-[linear-gradient(90deg,#EEB303_2.31%,rgba(255,193,7,0.54)_100%)]",
    avatar: "/images/d.jpg",
  },
  {
    learners: 556,
    color: "bg-[#E5E7EB]",
    gradient:
      "bg-[linear-gradient(90deg,#0BB8DB_2.31%,#84E4F7_100%)]",
    avatar: "/images/b.jpg",
  },
  {
    learners: 300,
    color: "bg-[#E5E7EB]",
    gradient:
      "bg-[linear-gradient(90deg,#A70DDC_2.31%,#EA9DFD_100%)]",
    avatar: "/images/c.jpg",
  },
];
  return (
     <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-8 lg:px-16 rounded-tl-[80px] rounded-tr-[80px]">
      
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-[Poppins] font-semibold text-[16px] leading-[22.4px] tracking-[1.4px] text-[#D1453B] uppercase text-center block">
           BUILT FOR...
         </span>

        <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[30px] font-semibold text-[#1F1F1F]">
          Professionals Who Want More Than Tutorials.
        </h2>

        <p className="mt-3 font-[Inter] font-normal text-[16px] sm:text-[18px] lg:text-[15px] leading-6 sm:leading-7 lg:leading tracking-[-0.22px] text-[#6D6D6D] text-center">
        Everything you need to grow in tech... all in one place
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-2">
        <div className="flex flex-col justify-between p-6 border border-gray-200 bg-[#F5F5F5] rounded-xl">

  <div>
    <div className="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-md">
      <img src="images/member.png" alt="" />
    </div>

    <h3 className="text-[25px] font-semibold text-[#1F1F1F]">
      For Learners
    </h3>

    <p className="mt-2 text-[16px] text-[#6D6D6D] max-w-sm font-[inter]">
      Follow structured learning tracks and gain access to internships and job opportunities.
    </p>
     <Link to="/"> <span className="mt-4 inline-block text-[#D1453B] text-lg font-medium cursor-pointer underline">
      Explore Courses
    </span></Link>
  </div>
  
  <div className="pl-4 mt-8 space-y-4 sm:pl-6 lg:pl-25">
    {tracks.map((track, index) => (
      <TrackCard key={index} {...track} />
    ))}
  </div>

</div>
        <div className="flex flex-col justify-between p-6 border border-gray-200 bg-[#F5F5F5] rounded-xl">
          
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 bg-green-100 rounded-md">
              <img src="images/email.png" alt="" />
            </div>

            <h3 className="text-[25px] font-semibold text-[#1F1F1F]">
              For Mentors & Volunteers
            </h3>

            <p className="mt-2 text-[16px] text-[#6D6D6D] max-w-sm font-[inter]">
              Guide aspiring talents and help shape the next generation of tech professionals.
            </p>
                 <Link to="/"> <span className="mt-4 inline-block text-[#D1453B] text-lg font-medium cursor-pointer underline">
              Get Involved
              </span></Link>
          </div>

        
          <div className="w-full mt-8 border border-gray-200 rounded-lg h-75">
            
          </div>
        </div>

      </div>
      <Employers/>
    </section>
  );
};

export default BuiltFor;