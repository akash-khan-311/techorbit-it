import Link from "next/link";
import React from "react";

const JobApplyButton = ({ path, open }: { path: string; open: boolean }) => {
  return (
    <Link target="_blank" href={open ? path : "#"}>
      <button
        disabled={open === false}
        className={`${
          open &&
          "bg-gradient-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c]"
        } disabled:bg-gray-600  disabled:cursor-not-allowed hover:-translate-y-0.5 $ cursor-pointer transition duration-200  text-center w-full md:w-auto px-6 py-3 rounded-xl font-medium mt-4`}
      >
        Apply for this position
      </button>
    </Link>
  );
};

export default JobApplyButton;
