import Statistics from "@/components/modules/Dashboard/Statistics";
import React from "react";

export const metadata = {
  title: "Dashboard — TechOrbit IT",
  description: "Admin dashboard for TechOrbit IT",
  alternates: {
    canonical: "https://techorbitit.com/dashboard",
  },
};

const Dashboard = () => {
  return (
    <div className="">
      <Statistics />
    </div>
  );
};

export default Dashboard;
