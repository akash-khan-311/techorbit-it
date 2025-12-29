/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IEmployee } from "@/types/employee.interface";
import React, { useEffect, useState } from "react";

import Modal from "../modal";
import FormField from "./Form/FormField";
import { useForm } from "react-hook-form";
import { bloodGroups, designations } from "@/data";
import ButtonLoading from "../ButtonLoading";
import Image from "next/image";

export default function EmployeeEditButton({ employee }: any) {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({} as IEmployee);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      emergencyPhone: "",
      dateOfBirth: "",
      joiningDate: "",
      bloodGroup: "",
      country: "",
      gender: "",
      salary: "",
      designation: "",
      address: "",
    },
  });

  // Fetch All Country Name
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        "https://countries-api-abhishek.vercel.app/countries"
      );
      const data = await res.json();

      setCountries(data?.data);
    };

    fetchCountries();
  }, []);

  /* =============================
       Prefill employee data
    ============================== */
  useEffect(() => {
    if (employee) {
      reset({
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        emergencyPhone: employee.emergencyPhone,
        dateOfBirth: employee.dateOfBirth,
        joiningDate: employee.joiningDate,
        bloodGroup: employee.bloodGroup,
        country: employee.country,
        gender: employee.gender,
        salary: employee.salary,
        designation: employee.designation,
        address: employee.address,
      });
    }
  }, [employee, reset]);
  /* =============================
     Submit Handler
  ============================== */
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => {
          setSelectedEmployee(employee);
          setOpen(true);
        }}
        type="button"
        className="px-2 py-1 text-sm text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Edit
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Employee Details"
        size="xl"
      >
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] rounded-2xl p-6"
        >
          {/* Name Field and Email Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            <FormField
              required
              name="name"
              label="Your Full Name (As Per NID)"
              type="text"
              placeholder="Enter your full name"
              register={register}
              errors={errors}
              errorMessage="Name is Required"
            />

            {/* Email Address Field */}
            <FormField
              required
              name="email"
              label="Your Email Address"
              type="email"
              placeholder="Enter your email address"
              register={register}
              errors={errors}
              errorMessage="Email is Required"
            />
          </div>
          {/* Phone Number Field and Emergency Contact Number Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            <FormField
              required
              name="phone"
              label="Your Phone Number (Whatsapp)"
              type="number"
              placeholder="Ex: 01XXXXXXXXX"
              register={register}
              errors={errors}
              errorMessage="Phone Number is Required"
            />
            <FormField
              name="emergencyPhone"
              label="Emergency Contact Number"
              type="number"
              placeholder="Ex: 01XXXXXXXXX"
              register={register}
              errors={errors}
            />
          </div>
          {/* Joining Date and Date Of Birth Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            <FormField
              required
              name="dateOfBirth"
              label="Date Of Birth"
              type="date"
              register={register}
              control={control}
              errors={errors}
              errorMessage="Date Of Birth is Required"
            />
            <FormField
              required
              name="joiningDate"
              label="Joining Date"
              type="date"
              register={register}
              control={control}
              errors={errors}
              errorMessage="Joining Date is Required"
            />
          </div>
          {/* Blood Group and Country Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            <FormField
              required
              name="bloodGroup"
              label="Blood Group"
              type="combobox"
              options={bloodGroups}
              register={register}
              control={control}
              errors={errors}
              placeholder="Search Blood Group"
              errorMessage="Blood Group is Required"
            />
            <FormField
              required
              name="country"
              label="Country"
              type="combobox"
              options={countries.map((country: any) => country.name)}
              register={register}
              control={control}
              errors={errors}
              placeholder="Search country"
              errorMessage="Country is Required"
            />
          </div>

          {/* Profile Image Field */}

          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0">
            <FormField
              required
              name="profileImage"
              label="Upload Your Photo"
              type="file"
              register={register}
              control={control}
              errors={errors}
              errorMessage="Profile Image is Required"
            />
            <FormField
              required
              name="gender"
              label="Gender"
              type="radio"
              options={["Male", "Female"]}
              register={register}
              control={control}
              errors={errors}
              errorMessage="Gender is Required"
            />
          </div>
          {/* NID Front Side Image and NID Back Side Image Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            {/* <FormField
              required
              name="nidFrontImage"
              label="Upload NID Front Side Photo"
              type="file"
              register={register}
              control={control}
              errors={errors}
              errorMessage="Please Upload NID Front Side Photo"
            />
            <FormField
              required
              name="nidBackImage"
              label="Upload NID Back Side Photo"
              type="file"
              register={register}
              control={control}
              errors={errors}
              errorMessage="Please Upload NID Back Side Photo"
            /> */}
            <label id="nidFrontImage">
              <input name="nidFrontImage" type="file" className="hidden" />
              <Image
                className=""
                width={300}
                height={200}
                src={employee.nidFrontImage}
                alt="Nid Front Image"
              />
            </label>
            <label id="nidBackImage">
              <input name="nidBackImage" type="file" className="hidden" />
              <Image
                className=""
                width={300}
                height={200}
                src={employee.nidBackImage}
                alt="Nid Front Image"
              />
            </label>
          </div>

          {/* Salary and Designation Field */}
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:gap-x-5 md:space-y-0 ">
            <FormField
              required
              name="salary"
              label="Salary"
              type="text"
              register={register}
              control={control}
              errors={errors}
              placeholder="ex: 15000"
              errorMessage="Salary is Required"
            />
            <FormField
              required
              name="designation"
              label="Designation"
              type="combobox"
              register={register}
              options={designations}
              control={control}
              errors={errors}
              errorMessage="Designation is Required"
            />
          </div>
          {/* Address field */}
          <FormField
            required
            name="address"
            label="Address"
            type="textarea"
            register={register}
            options={designations}
            control={control}
            errors={errors}
            errorMessage="Address is Required"
            placeholder="Enter your full address ex: House 25, Road 10, Dhamrai, Dhaka"
          />
          <button
            className="flex items-center justify-center w-1/2 px-8 py-1 mx-auto mt-10 text-xl text-white transition-all duration-150 bg-green-700 rounded-md cursor-pointer hover:bg-green-600 "
            type="submit"
          >
            {loading ? <ButtonLoading /> : "Save"}
          </button>
        </form>
      </Modal>
    </>
  );
}
