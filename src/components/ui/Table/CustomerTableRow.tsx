import { ILead } from "@/types/lead.interface";
import React from "react";
import TableActionButton from "./TableActionButton";

interface Props {
  customer: ILead;
}

const CustomerTableRow = ({ customer }: Props) => {
  return (
    <tr className={`bg-slate-900 hover:bg-[#4ee9ee1c]`} key={customer?._id}>
      <td className={`py-2 px-3 font-normal text-base whitespace-nowrap`}>
        <div>
          <div className="flex items-center gap-x-5">
            <div>
              <h3 className="font-semibold text-white">{customer?.name}</h3>
              <p className="text-sm text-gray-300">{customer?.address}</p>
            </div>
          </div>
        </div>
      </td>
      <td
        className={`py-2 px-3 font-normal text-base text-white  whitespace-nowrap`}
      >
        {customer?.phone}
      </td>
      <td
        className={`py-2 px-3 text-base text-white  font-normal whitespace-nowrap`}
      >
        Customer
      </td>
      <td
        className={`py-2 px-3 text-base text-white  font-normal min-w-[250px]`}
      >
        {customer?.email}
      </td>
      <td
        className={`py-2 px-3 text-base text-white  font-normal min-w-[250px]`}
      >
        <TableActionButton customer={customer} />
      </td>
    </tr>
  );
};

export default CustomerTableRow;
