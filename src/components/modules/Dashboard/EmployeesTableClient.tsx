"use client";
import React, { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import { IEmployee } from "@/types/employee.interface";
import EmployeeTableRow from "@/components/ui/Table/EmployeeTableRow";

const EmployeesTableClient = () => {
  const [employees, setEmployees] = useState<IEmployee[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/employee`, {
          cache: "no-store",
        });
        const data = await res.json();
        setEmployees(data.employees);
      } catch (err) {
        console.error(err);
        setEmployees([]);
      }
    };

    fetchData();
  }, []);

  if (employees === null) return <Loader />;

  return (
    <div>
      <div className="text-white">
        <h2 className="text-5xl font-semibold">Employee List</h2>
        <p className="text-xl my-2">TechOrbit IT Admin Panel</p>
      </div>

      <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-10">
        <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border border-[#1BCDD2]">
          <thead className="rounded-lg text-base text-white font-semibold w-full">
            <tr className="bg-slate-700">
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                ID
              </th>
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                Name
              </th>
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                Contact No.
              </th>
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                Designation
              </th>
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                Email
              </th>
              <th className="py-3 px-3 sm:text-base font-bold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.length ? (
              employees.map((employee: IEmployee) => (
                <EmployeeTableRow key={employee._id} employee={employee} />
              ))
            ) : (
              <tr className="bg-slate-900">
                <td
                  colSpan={6}
                  className="text-4xl text-center py-10 text-white"
                >
                  Employee Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesTableClient;
