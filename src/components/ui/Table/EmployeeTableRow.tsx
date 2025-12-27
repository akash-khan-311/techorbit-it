import { IEmployee } from "@/types/employee.interface";
import Image from "next/image";
import React from "react";
import EmployeeViewModal from "../Modal/EmployeeViewModal";

const EmployeeTableRow = ({ employee }: { employee: IEmployee }) => {
  return (
    <tr className={`bg-slate-900 hover:bg-[#4ee9ee1c]`} key={employee?._id}>
      <td
        className={`py-2 px-3 font-normal text-base text-white whitespace-nowrap`}
      >
        {employee?.employeeId}
      </td>
      <td className={`py-2 px-3 font-normal text-base  whitespace-nowrap`}>
        <div>
          <div className="flex items-center gap-x-5">
            <Image
              className="object-cover rounded-full w-14 h-14"
              src={employee?.profileImage}
              width={50}
              height={50}
              alt={employee?.name}
            />
            <div>
              <h3 className="font-semibold text-white">{employee?.name}</h3>
              <p className="text-sm text-gray-300">{employee?.address}</p>
            </div>
          </div>
        </div>
      </td>
      <td
        className={`py-2 px-3 font-normal text-base  whitespace-nowrap text-white`}
      >
        {employee?.phone}
      </td>
      <td
        className={`py-2 px-3 text-base  font-normal whitespace-nowrap text-white`}
      >
        {employee?.designation}
      </td>
      <td className={`py-2 px-3 text-base  font-normal min-w-62.5 text-white`}>
        {employee?.email}
      </td>
      <td className={`py-2 px-3 text-base  font-normal min-w-62.5 text-white`}>
        <div className="flex gap-5">
          <button
            type="button"
            className="px-2 py-1 text-sm text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            type="button"
            className="px-2 py-1 text-sm text-white bg-red-500 rounded cursor-pointer hover:bg-red-700 focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>

          <EmployeeViewModal employee={employee} />
        </div>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
