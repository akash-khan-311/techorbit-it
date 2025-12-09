"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default layout;
