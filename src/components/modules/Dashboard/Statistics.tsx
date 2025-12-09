import React from "react";
import { FaUsers } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import Stats from "@/components/ui/Stats";
const Statistics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 md:mt-0">
        {/* total Customers */}
        <Stats
          icon={FaUsers}
          title="Total Customers"
          count="100"
          className="bg-linear-to-r from-indigo-700 to-indigo-500 text-white flex justify-between items-center p-6 rounded-xl shadow-lg"
        />
        {/* total Employees */}

        <Stats
          className="bg-linear-to-r from-cyan-500 to-cyan-600 text-white flex justify-between items-center p-6 rounded-xl shadow-lg"
          title="Total Employees"
          count="100"
          icon={RiTeamFill}
        />
        {/* total Orders */}

        <Stats
          className="bg-linear-to-r from-teal-700 to-teal-500 text-white flex justify-between items-center p-6 rounded-xl shadow-lg"
          title="Total Orders"
          count="100"
          icon={FaBox}
        />
        {/* total earnings */}

        <Stats
          className="bg-linear-to-r from-green-700 to-green-500 text-white flex justify-between items-center p-6 rounded-xl shadow-lg"
          title="Total Earnings"
          count="$100"
          icon={MdOutlineAttachMoney}
        />
      </div>
    </div>
  );
};

export default Statistics;
