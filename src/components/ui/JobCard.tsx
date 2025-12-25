import { ICareer } from "@/types/careers.interface";
import Link from "next/link";
import React from "react";
import {
  FaBriefcase,
  FaWallet,
  FaUserCheck,
  FaLocationDot,
} from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

type Props = {
  job: ICareer;
};

const JobCard = ({ job }: Props) => {
  const splittedSalary = job.salaryRange.split("-");

  return (
    <div className="w-full bg-linear-to-r from-[#0F1C3F] to-[#070B2E] text-white p-6 md:p-10 lg:p-16 rounded-2xl shadow-lg border border-white/10 relative overflow-hidden">
      {/* Status Badge */}
      <span
        className={`${
          job.open ? "bg-[#30DBDC]" : "bg-gray-700"
        } text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded-full font-semibold inline-block`}
      >
        {job.open ? "Open" : "Closed"}
      </span>

      {/* Title & Description */}
      <div className="mt-8 md:w-1/2">
        <h2 className="text-2xl font-bold md:text-3xl">{job.title}</h2>
        <p className="mt-2 text-sm text-gray-300 md:text-base">
          {job.description.length > 100
            ? job.description.slice(0, 200) + "..."
            : job.description}
        </p>
      </div>

      {/* Icons Row – fully responsive */}
      <div className="flex flex-col items-start justify-between gap-6 mt-6 md:flex-row md:items-center">
        {/* Left Side – Info Icons */}
        <div className="grid grid-cols-1 gap-5 text-sm text-gray-300 sm:grid-cols-2 lg:flex lg:flex-wrap md:text-base ">
          <div className="flex items-center gap-2">
            <FaBriefcase size={22} className="text-[#30DBDC]" />
            <span className="font-semibold">{job.department}</span>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineAccessTime size={22} className="text-[#30DBDC]" />
            <span className="font-semibold">{job.type}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaWallet size={22} className="text-[#30DBDC]" />
            <span className="font-semibold">
              {splittedSalary[0]}K - {splittedSalary[1]}K
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaUserCheck size={22} className="text-[#30DBDC]" />
            <span className="font-semibold">{job.vacancies} Vacancies</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot size={22} className="text-[#30DBDC]" />
            <span className="font-semibold">{job.location}</span>
          </div>
        </div>

        {/* Right – Job Details Button */}
        <div className="w-full mt-2 md:w-auto md:mt-0 ">
          <Link href={`/careers/${job._id}`}>
            <button className="w-full md:w-auto bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] transition duration-200 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer">
              Job Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
