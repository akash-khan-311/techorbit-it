"use client";
import React from "react";
import { FaUsers } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import Stats from "@/components/ui/Stats";
import { useGetStatsQuery } from "@/redux/features/dashboard/statsApi";
import Loader from "@/components/Loader";
const Statistics = () => {
  const { data, isLoading } = useGetStatsQuery();
  const {
    totalEmployees = 0,
    totalCustomers = 0,
    totalOrders = 0,
    totalRevenue,
  } = data?.stats || {};
  if (isLoading) return <Loader />;
  console.log({ totalEmployees, totalCustomers, totalOrders, totalRevenue });
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-0">
        {/* total Customers */}
        <Stats
          icon={FaUsers}
          title="Total Customers"
          count={totalCustomers}
          className="flex items-center justify-between p-6 text-white shadow-lg bg-linear-to-r from-indigo-700 to-indigo-500 rounded-xl"
        />
        {/* total Employees */}

        <Stats
          className="flex items-center justify-between p-6 text-white shadow-lg bg-linear-to-r from-cyan-500 to-cyan-600 rounded-xl"
          title="Total Employees"
          count={totalEmployees}
          icon={RiTeamFill}
        />
        {/* total Orders */}

        <Stats
          className="flex items-center justify-between p-6 text-white shadow-lg bg-linear-to-r from-teal-700 to-teal-500 rounded-xl"
          title="Total Orders"
          count={totalOrders}
          icon={FaBox}
        />
        {/* total earnings */}

        <Stats
          className="flex items-center justify-between p-6 text-white shadow-lg bg-linear-to-r from-green-700 to-green-500 rounded-xl"
          title="Total Earnings"
          count={totalRevenue}
          icon={MdOutlineAttachMoney}
        />
      </div>
    </div>
  );
};

export default Statistics;
