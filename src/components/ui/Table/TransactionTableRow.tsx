"use client";

import { ITransactions } from "@/types/transaction.interface";
import { formattedDate } from "@/utils/formattedDate";
import { showAlert } from "@/lib/alert";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  transaction: ITransactions;
}

const TransactionTableRow = ({ transaction: transaction }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeStatus = async (newStatus: "Paid" | "Unpaid") => {
    try {
      transaction.status = newStatus;
      const res = await fetch(`/api/transactions/${transaction._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const result = await res.json();
      console.log(result);
      if (result.success) {
        showAlert({
          title: "Success",
          text: "Status updated successfully",
          icon: "success",
        }).then(() => {
          router.refresh();
        });
      }
    } catch (error) {
      showAlert({
        title: "Oops!",
        text: "Something went wrong",
        icon: "error",
      });
      console.error(error);
    }
  };
  const handleComplete = async (newComplete: "Pending" | "Completed") => {
    try {
      transaction.complete = newComplete;
      const res = await fetch(`/api/orders/${transaction._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: newComplete }),
      });
      const result = await res.json();
      console.log(result);
      if (result.success) {
        showAlert({
          title: "Success",
          text: "Status updated successfully",
          icon: "success",
        }).then(() => {
          router.refresh();
        });
      }
    } catch (error) {
      showAlert({
        title: "Oops!",
        text: "Something went wrong",
        icon: "error",
      });
      console.error(error);
    }
  };
  const {
    orderId,
    name,
    phone,
    email,
    amount,
    createdAt,
    complete,
    packageName,
    status,
    transactionId,
  } = transaction;
  console.log(complete);
  const date = formattedDate(createdAt?.toString() || "");

  console.log(complete);

  return (
    <tr className={`bg-slate-900 hover:bg-[#4ee9ee1c] `}>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">
          <span className="font-semibold">{orderId}</span>
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">
          <span className="font-semibold">{transactionId}</span>
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="flex flex-col text-white ">
          <span className="">{name}</span>
          <span className="text-sm">{phone}</span>
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">
          {pathname === "/transactions" ? email : packageName}
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">{amount} (BDT)</p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">{date}</p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">
          {pathname === "/transactions" ? (
            status === "Paid" ? (
              <span className="px-4 py-1 bg-green-500 rounded-xl">Paid</span>
            ) : (
              <span className="px-4 py-1 bg-red-400 rounded-xl">Unpaid</span>
            )
          ) : (
            <div>
              {complete === "Pending" ? (
                <span className="px-4 py-1 bg-red-400 rounded-xl">
                  {complete}
                </span>
              ) : (
                <span className="px-4 py-1 bg-green-500 rounded-xl">
                  {complete}
                </span>
              )}
            </div>
          )}
        </p>
      </td>
      <td className="p-4 border-b border-slate-200">
        <p className="block text-sm text-white">
          {pathname === "/transactions" ? (
            <>
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const val = e.target.value;
                  if (["Paid", "Unpaid"].includes(val)) {
                    handleChangeStatus(val as "Paid" | "Unpaid");
                  }
                }}
                disabled={complete === "Completed"}
                className="text-lg bg-transparent cursor-pointer focus:outline-none"
              >
                <option className="text-black" value="">
                  Change Status
                </option>
                {status === "Paid" ? (
                  <option className="text-black" value="Unpaid">
                    Unpaid
                  </option>
                ) : (
                  <option className="text-black" value="Paid">
                    Paid
                  </option>
                )}
              </select>
            </>
          ) : (
            <>
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const val = e.target.value;
                  if (["Completed", "Pending"].includes(val)) {
                    handleComplete(val as "Completed" | "Pending");
                  }
                }}
                className="text-lg bg-transparent cursor-pointer focus:outline-none"
              >
                <option className="text-black" value="">
                  Change Status
                </option>
                {complete === "Pending" ? (
                  <option className="text-black" value="Completed">
                    Completed
                  </option>
                ) : (
                  <option className="text-black" value="Pending">
                    Pending
                  </option>
                )}
              </select>
            </>
          )}
        </p>
      </td>
    </tr>
  );
};

export default TransactionTableRow;
