/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILead } from "@/types/lead.interface";
import React from "react";

const Table = ({ data }: any) => {
  const { customers, head } = data;
  return (
    <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-10">
      <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border ">
        <thead className="rounded-lg text-base text-white font-semibold w-full">
          <tr className="bg-gray-200">
            {/* <th className="py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap">
              Name
            </th>
            <th className="py-3 px-3  justify-center gap-1 text-black sm:text-base font-bold whitespace-nowrap">
              Contact No.
            </th>
            <th className="py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap">
              Designation
            </th>
            <th className="py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap">
              Email
            </th>
            <th className="flex items-center py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap gap-1">
              Actions
            </th> */}
            {head?.map((item: any) => (
              <th
                key={item?.id}
                className="py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap"
              >
                {item?.name}
              </th>
            ))}
            <th className="flex items-center py-3 px-3 text-black sm:text-base font-bold whitespace-nowrap gap-1">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer: ILead) => (
            <tr className={`bg-white hover:bg-pink-50`} key={customer?._id}>
              <td
                className={`py-2 px-3 font-normal text-base  whitespace-nowrap`}
              >
                <div>
                  <div className="flex items-center gap-x-5">
                    <div>
                      <h3>{customer?.name}</h3>
                      <p className="text-sm text-gray-600">
                        {customer?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td
                className={`py-2 px-3 font-normal text-base  whitespace-nowrap`}
              >
                {customer?.phone}
              </td>
              <td
                className={`py-2 px-3 text-base  font-normal whitespace-nowrap`}
              >
                Customer
              </td>
              <td className={`py-2 px-3 text-base  font-normal min-w-[250px]`}>
                {customer?.email}
              </td>
              <td className={`py-2 px-3 text-base  font-normal min-w-[250px]`}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
