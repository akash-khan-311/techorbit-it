import { IEmployee } from "@/types/employee.interface";
import Image from "next/image";
import React from "react";

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
              className="rounded-full"
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
      <td
        className={`py-2 px-3 text-base  font-normal min-w-[250px] text-white`}
      >
        {employee?.email}
      </td>
      <td
        className={`py-2 px-3 text-base  font-normal min-w-[250px] text-white`}
      >
        <div>
          <button
            type="button"
            className="mr-3 text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            type="button"
            className="text-sm cursor-pointer bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
