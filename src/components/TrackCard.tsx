import React from "react";

type TrackCardProps = {
  learners: number;
  color: string;
  gradient: string;
  avatar: string;
};

const TrackCard: React.FC<TrackCardProps> = ({
  learners,
  color,
  gradient,
  avatar,
}) => {
  return (
    <div className="w-full max-w-111 min-h-20 sm:h-22.5 bg-[#FFFFFF] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 flex items-center justify-between shadow-sm">

      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex flex-col items-center justify-center ${color}`}>
          <span className="text-[10px] sm:text-[12px] font-semibold text-gray-700">
            {learners}
          </span>
          <span className="text-[8px] sm:text-[9px] text-gray-400">
            Enrollments
          </span>
        </div>
        <div className="flex flex-col gap-1.5">

          <p className="text-[12px] sm:text-[14px] font-medium text-[#2C2C2C]">
            Frontend Development Track
          </p>

          <div className="flex flex-col gap-1">
            <div className="w-27.5 sm:w-35 h-1.25 sm:h-1.5 rounded-full overflow-hidden">
              <div className={`h-full ${gradient}`}></div>
            </div>

            <div className="w-35 sm:w-45 h-1.25 sm:h-1.5 bg-gray-200 rounded-full"></div>

          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={avatar}
          className="object-cover rounded-full w-7 h-7 sm:w-8 sm:h-8"
          alt="user"
        />
        <div className="hidden sm:flex flex-col gap-1.5">
          <div className="w-20 h-1.5 sm:w-25 sm:h-1.5 bg-gray-200 rounded-full"></div>
          <div className="w-12.5 h-1.25 sm:w-17.5 sm:h-1.5 bg-gray-200 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default TrackCard;