"use client";

import { ILead } from "@/types/lead.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomerEditModal from "../Modal/CustomerEditModal";
import Swal from "sweetalert2";
import { showAlert } from "@/lib/alert";
const TableActionButton = ({ customer }: { customer: ILead }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/lead/${id}`, { method: "DELETE" });
        console.log(res);
        if (res.ok) {
          showAlert({
            title: "Deleted! ",
            text: "Your file has been deleted.",
            icon: "success",
          }).then(() => {
            router.refresh();
          });
        }
      }
    });
  };
  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="mr-3 text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          onClick={() => customer._id && handleDelete(customer._id)}
          type="button"
          className="text-sm cursor-pointer bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
      {open && (
        <CustomerEditModal customer={customer} open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default TableActionButton;
