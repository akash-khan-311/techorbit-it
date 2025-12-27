"use client";
import { ILead } from "@/types/lead.interface";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Field from "../shared/Field";
import { SlClose } from "react-icons/sl";
import { showToast } from "nextjs-toast-notify";
type Props = {
  customer: ILead;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomerEditModal = ({ customer, open, setOpen }: Props) => {
  const [form, setForm] = useState(customer);
  const router = useRouter();

  const handleSubmit = async () => {
    const updatedCustomer = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      facebookPage: form.facebookPage,
      updatedAt: Date.now(),
    };
    const res = await fetch(`/api/lead/${customer._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCustomer),
    });
    console.log(res);

    if (res.ok) {
      showToast.success("Customer Updated Successfully", {
        duration: 4000,
        progress: true,
        position: "bottom-right",
        transition: "slideInUp",
        icon: "",
        sound: true,
      });
      router.refresh();
      setOpen(false);
    }

    router.refresh();
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-999 flex items-center justify-center 
      transition-opacity duration-300
      ${
        open ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-0"
      }`}
    >
      {/* Background Overlay Fade */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Modal Box Animation */}
      <div
        className={`relative backdrop-blur-3xl bg-white/10 w-full md:w-[60%] lg:w-[40%] rounded-lg shadow-xl px-8 py-12 transform 
        transition-all duration-300 
        ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <div className="flex items-start justify-between pb-3 mb-4 text-white border-b">
          <h3 className="text-3xl font-semibold">Edit Customer</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-3xl leading-none text-red-400 rounded-full cursor-pointer "
          >
            <SlClose />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <div>
            <Field className="text-white" htmlFor="name" label="Name" required>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 text-white border rounded focus:outline-green-700"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
          </div>
          <div>
            <Field
              className="text-white"
              htmlFor="email"
              label="Email"
              required
            >
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 text-white border rounded focus:outline-green-700"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Field>
          </div>
          <div>
            <Field
              className="text-white"
              htmlFor="phone"
              label="Phone"
              required
            >
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-2 text-white border rounded focus:outline-green-700"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </Field>
          </div>
          <div>
            <Field className="text-white" htmlFor="" label="Facebook Page URL">
              <input
                type="text"
                id="facebookPage"
                name="facebookPage"
                className="w-full p-2 text-white border rounded focus:outline-green-700"
                value={form.facebookPage}
                onChange={(e) =>
                  setForm({ ...form, facebookPage: e.target.value })
                }
              />
            </Field>
          </div>
          <div>
            <Field
              className="text-white"
              htmlFor="address"
              label="Address"
              required
            >
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 text-white border rounded focus:outline-green-700"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </Field>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-4 mt-10 border-t">
          <button
            className="px-6 py-2 text-red-500 transition-colors duration-150 border border-red-500 rounded cursor-pointer hover:bg-red-500 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <button
            className="px-6 py-2 text-white transition-colors duration-150 bg-green-500 rounded cursor-pointer hover:bg-green-600"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerEditModal;
