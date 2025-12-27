"use client";

import { useState } from "react";
import Modal from "../modal";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IEmployee } from "@/types/employee.interface";
import Image from "next/image";
import { formatDateDMY } from "@/lib/formatDateDMY";
import ImagePreview from "@/utils/ImagePreview";

export default function EmployeeViewModal({
  employee,
}: {
  employee: IEmployee;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          className="p-2 transition-all duration-300 bg-gray-500 rounded-sm cursor-pointer hover:bg-slate-900"
          onClick={() => setIsOpen(true)}
        >
          <FaEye />
        </button>
      </div>
      {/* Extra Large Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Employee Details"
        size="xl"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-stretch mx-auto lg:bg-white lg:my-0">
            {/*Main Col*/}
            <div className="w-full mx-6 bg-white rounded-lg shadow-2xl lg:bg-transparent lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0">
              <div className="p-4 text-center md:p-10 lg:text-left">
                {/* Image for mobile view*/}
                <Image
                  src={`${employee?.profileImage}`}
                  className="z-40 block w-48 h-48 mx-auto -mt-16 rounded-full shadow-xl lg:hidden"
                  width={300}
                  height={300}
                  alt={employee?.name || "TechOrbit IT"}
                />
                <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                  {employee?.name}
                </h1>
                <div className="w-4/5 pt-3 mx-auto border-b-2 border-green-500 opacity-25 lg:mx-0" />
                <div className="flex flex-col items-start justify-start">
                  <p className="flex items-center justify-center pt-4 text-base font-semibold lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Employee ID: {employee?.employeeId}
                  </p>
                  <p className="flex items-center justify-center text-base font-bold lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    <span className="text-left">
                      {" "}
                      Designation: {employee?.designation}
                    </span>
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Salary : {employee?.salary} (BDT)
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Address : {employee?.address}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Phone : {employee?.phone}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Gender : {employee?.gender}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Blood : {employee?.bloodGroup}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Country : {employee?.country}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Date Of Birth : {formatDateDMY(employee?.dateOfBirth)}
                  </p>
                  <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                    <FaArrowRight className="text-[#1BCDD2]" />
                    Joining Date : {formatDateDMY(employee?.joiningDate)}
                  </p>
                </div>
                <ImagePreview
                  images={
                    [employee?.nidFrontImage, employee?.nidBackImage].filter(
                      Boolean
                    ) as string[]
                  }
                />
              </div>
            </div>
            {/*Img Col*/}
            <div className="relative w-full lg:w-2/5">
              {/* Big profile image for side bar (desktop) */}
              <Image
                width={500}
                height={500}
                priority
                alt={employee?.name || "Tech Orbit IT"}
                src={employee?.profileImage || "Profile Image"}
                className="hidden object-cover h-full rounded-none shadow-2xl lg:block"
              />
            </div>
          </div>
          <div className="flex justify-end pt-10">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#1BCDD2] text-white active:bg-[#1BCDD2] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
