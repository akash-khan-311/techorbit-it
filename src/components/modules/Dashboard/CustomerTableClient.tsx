"use client";
import React, { useEffect, useState } from "react";
import CustomerTableRow from "@/components/ui/Table/CustomerTableRow";
import { ILead } from "@/types/lead.interface";

import Loader from "@/components/Loader";

const CustomerTableClient = () => {
  const [customers, setCustomers] = useState<ILead[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/lead`, {
          cache: "no-store",
        });
        const data = await res.json();
        setCustomers(data.customers);
      } catch (err) {
        console.error(err);
        setCustomers([]); // fetch failed
      }
    };

    fetchData();
  }, []);

  if (customers === null) return <Loader />;

  return (
    <div>
      <div className="text-white">
        <h2 className="text-5xl font-semibold">Customer List</h2>
        <p className="text-xl my-2">TechOrbit IT Admin Panel</p>
      </div>

      <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-10">
        <table className="table-auto  overflow-scroll md:overflow-auto w-full text-left font-inter border border-[#1BCDD2]  ">
          <thead className="rounded-lg text-base  font-semibold w-full">
            <tr className="bg-slate-700">
              <th className="py-3 px-3 text-white sm:text-base font-bold whitespace-nowrap">
                Name
              </th>
              <th className="py-3 px-3 text-white sm:text-base font-bold whitespace-nowrap">
                Contact No.
              </th>
              <th className="py-3 px-3 text-white sm:text-base font-bold whitespace-nowrap">
                Designation
              </th>
              <th className="py-3 px-3 text-white sm:text-base font-bold whitespace-nowrap">
                Email
              </th>
              <th className="py-3 px-3 text-white sm:text-base font-bold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {customers.length ? (
              customers.map((customer: ILead) => (
                <CustomerTableRow key={customer._id} customer={customer} />
              ))
            ) : (
              <tr className="bg-slate-900">
                <td
                  colSpan={6}
                  className="text-4xl text-center py-10 text-white"
                >
                  No Customer Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTableClient;
