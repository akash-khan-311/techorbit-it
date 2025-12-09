"use client";
import React, { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import { ITransactions } from "@/types/transaction.interface";
import TransactionTableRow from "@/components/ui/Table/TransactionTableRow";

const OrderLists = () => {
  const [transactions, setTransaction] = useState<ITransactions[] | null>(null);

  console.log(transactions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/orders`, {
          cache: "no-store",
        });
        const data = await res.json();
        // console.log(data);
        setTransaction(data.transactions);
      } catch (err) {
        console.error(err);
        setTransaction([]);
      }
    };

    fetchData();
  }, []);

  if (transactions === null) return <Loader />;

  return (
    <div>
      <div className="text-white">
        <h2 className="text-5xl font-semibold">Customer List</h2>
        <p className="text-xl my-2">TechOrbit IT Admin Panel</p>
      </div>

      <div>
        <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-10">
          <table className="w-full text-left table-auto min-w-max border border-[#1BCDD2] relative">
            <thead>
              <tr className="bg-slate-700">
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Order ID
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Transaction ID
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Customer
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Package
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Total Amount
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Date
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none ">
                    Status
                  </p>
                </th>
                <th className="p-4 border-b text-white sm:text-base font-bold whitespace-nowrap">
                  <p className="block text-sm font-normal leading-none "></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.length ? (
                transactions.map((transaction: ITransactions) => (
                  <TransactionTableRow
                    key={transaction._id}
                    transaction={transaction}
                  />
                ))
              ) : (
                <tr className="bg-slate-900">
                  <td
                    colSpan={8}
                    className="text-4xl text-center py-10 text-white"
                  >
                    No Order Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderLists;
