/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formattedBangladeshPhoneNumber } from "@/lib/formatedBangladeshPhone";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { bloodGroups, designations } from "@/data";
import { useRouter } from "next/navigation";
import { showAlert } from "@/lib/alert";
import ButtonLoading from "./ButtonLoading";
import FormField from "./shared/Form/FormField";
const EmployeeRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<{ code: string; name: string }[]>(
    []
  );

  const router = useRouter();

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

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const profileImgUrl = await uploadImageToCloudinary(data.profileImage[0]);
      const nidFrontImgUrl = await uploadImageToCloudinary(
        data.nidFrontImage[0]
      );
      const nidBackImgUrl = await uploadImageToCloudinary(data.nidBackImage[0]);

      const newEmployeeData = {
        name: data.name,
        email: data.email,
        phone: formattedBangladeshPhoneNumber(data.phone),
        emergencyPhone: formattedBangladeshPhoneNumber(data.emergencyPhone),
        address: data.address,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        joiningDate: data.joiningDate,
        bloodGroup: data.bloodGroup,
        profileImage: profileImgUrl,
        nidFrontImage: nidFrontImgUrl,
        nidBackImage: nidBackImgUrl,
        salary: data.salary,
        country: data.country,
        designation: data.designation,
        createdAt: new Date(),
      };
      console.log(newEmployeeData);
      const res = await fetch("/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployeeData),
      });
      if (res.ok) {
        reset();
        showAlert({
          title: "Registration Success",
          text: "You're Registered as a Employee",
          icon: "success",
        }).then(() => {
          router.push("/");
        });
      } else if (res.status === 409) {
        // Swal.fire("Already Registered!", "Use Another Email", "warning");
        showAlert({
          title: "Already Registered!",
          text: "Please Contact With Admin",
          icon: "warning",
        });
      } else {
        // Swal.fire("Something Went Wrong", "Please Try Again", "error");
        showAlert({
          title: "Something Went Wrong",
          text: "Please Try Again",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      // Swal.fire("Something Went Wrong", "Please Try Again", "error");
      showAlert({
        title: "Something Went Wrong",
        text: "Please Try Again",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field and Email Field */}
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
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
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
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
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
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
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
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

      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0">
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
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
        <FormField
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
        />
      </div>

      {/* Salary and Designation Field */}
      <div className="flex flex-col justify-between items-center md:flex-row md:gap-x-5 space-y-3 md:space-y-0 ">
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
        className="flex mt-10 justify-center items-center mx-auto w-1/2 px-8 py-1 text-xl rounded-md bg-green-700 text-white hover:bg-green-600 transition-all duration-150 cursor-pointer "
        type="submit"
      >
        {loading ? <ButtonLoading /> : "Submit"}
      </button>
    </form>
  );
};

export default EmployeeRegistrationForm;
