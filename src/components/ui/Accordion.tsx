/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
type arrayData = {
  question: string;
  answer: string;
};
type IData = {
  title: string;
  subtitle: string;
  data: arrayData[];
};
type Props = {
  data: IData;
};
const Accordion = ({ data }: Props) => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i: any) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };

  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 my-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className=" text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ">
            {data.title}
          </h2>
          <p className="text-lg text-center text-gray-500 md:text-xl">
            {data.subtitle}
          </p>
        </div>
        <div className="mx-auto  divide-y space-y-5 divide-gray-200 mt-10">
          {data.data?.map((accordion, i) => (
            <div
              key={i}
              className="transition-all duration-200 cursor-pointer "
            >
              <button
                onClick={() => handleToogle(i)}
                className="w-full flex items-center justify-between px-6 text-left py-4 md:text-xl font-semibold"
              >
                <span>{accordion.question}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-black transition-all ease-in-out ${
                    accordionOpen === i
                      ? "rotate-180 duration-200"
                      : "rotate-0 duration-200"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6  grid transition-all ease-in-out duration-300 text-gray-500 ${
                  accordionOpen === i
                    ? "grid-rows-[1fr] opacity-100 md:py-6"
                    : "grid-rows-[0fr] opacity-0 p-0"
                }`}
              >
                <p className="overflow-hidden">{accordion.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
