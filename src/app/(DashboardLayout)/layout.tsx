"use client";
import Sidebar from "@/components/modules/Dashboard/Sidebar";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={store}>
        <Sidebar />
        <div className="min-h-screen p-6 ml-0 md:ml-64">{children}</div>
      </Provider>
    </main>
  );
};

export default layout;
