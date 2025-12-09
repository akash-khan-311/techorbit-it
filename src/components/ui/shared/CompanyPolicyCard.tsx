/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

const CompanyPolicyCard = ({ data }: any) => {
  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          {data?.title}
        </h1>

        <p className="text-gray-600 mb-6 text-center">{data.date}</p>

        <div className="space-y-8">
          {data.data &&
            data?.data?.map((item: any, index: number) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {index + 1}. {item.title}
                </h2>
                <p className="text-gray-600 leading-7 font-semibold">
                  {item.des}
                </p>

                <ul className="list-disc list-inside text-gray-600 leading-7 space-y-2">
                  {item.info && (
                    <ul className="list-disc list-inside text-gray-600 leading-7 space-y-2">
                      {item.info.map((info: any, i: number) => (
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  )}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicyCard;
