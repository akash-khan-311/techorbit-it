import Sidebar from "@/components/modules/Dashboard/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Sidebar />
      <div className="ml-0 md:ml-64 p-6 min-h-screen">{children}</div>
    </main>
  );
};

export default layout;
