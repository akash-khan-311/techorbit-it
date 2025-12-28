/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ScaleLoader } from "react-spinners";
import React from "react";

const Loader = ({ smallHeight }: any) => {
  return (
    <div
      className={` ${smallHeight ? "h-62.5" : "min-h-[calc(105vh-100px)]"}
      flex 
      flex-col 
      justify-center 
      items-center w-full`}
    >
      <ScaleLoader color="#1BCDD2" />
    </div>
  );
};

export default Loader;
