import { ICareer } from "@/types/careers.interface";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FaBriefcase,
  FaWallet,
  FaUserCheck,
  FaLocationDot,
} from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

type Props = {
  job: ICareer;
  onUpdate: (id: string, open: boolean) => void; // Parent থেকে update function
};

const DashboardJobCard = ({ job, onUpdate }: Props) => {
  const splittedSalary = job.salaryRange.split("-");

  const { control, watch } = useForm<{ open: string }>({
    defaultValues: {
      open: job.open ? "open" : "closed",
    },
  });

  const selectedOpen = watch("open");

  // Whenever select changes, call onUpdate to save in DB
  React.useEffect(() => {
    const isOpen = selectedOpen === "open";
    if (isOpen !== job.open) {
      onUpdate(job._id!, isOpen);
    }
  }, [selectedOpen, job._id, job.open, onUpdate]);

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
      <div className="mt-8 lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold">{job.title}</h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          {job.description}
        </p>
      </div>

      {/* Icons Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-6 mt-6">
        {/* Left Side – Info Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-5 text-gray-300 text-sm md:text-base">
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
        <div className="w-full flex justify-between items-center gap-x-10 md:w-auto mt-2 md:mt-0">
          <button className="w-full md:w-auto bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] transition duration-200 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer">
            Edit Job
          </button>
          <button className="w-full md:w-auto bg-linear-to-r from-[#c25454] to-[#6b1d06] hover:from-[#663434] hover:to-[#da3e3e] transition duration-200 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer">
            Delete Job
          </button>

          {/* Open/Closed Select */}
          <Controller
            name="open"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="bg-[#0F1C3F] border border-white/10 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardJobCard;
