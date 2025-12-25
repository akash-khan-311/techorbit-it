/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FormField from "./FormField";

const jobTitles = [
  "Software Engineer",
  "Frontend Developer",
  "Full-Stack Software Engineer (MERN)",
  "Full-Stack Software Engineer (Laravel)",
  "Junior Developer",
  "WordPress Developer",
  "Frontend Developer (React.js)",
  "Graphic Designer",
  "React Native Developer",
  "Backend Developer (Node.js)",
  "HR Manager",
  "Financial Analyst",
  "Digital Marketer",
  "Customer Support Agent",
  "Data Analyst",
  "UI/UX Designer",
  "Product Manager",
  "DevOps Engineer",
  "Business Analyst",
  "Sales Representative",
  "Marketing Specialist",
];

const jobTypes = ["Full-time", "Part-time", "Internship", "Remote"];

const jobLocations = ["Dhaka, Bangladesh", "Remote"];

const jobExperiences = ["0-2 years", "2-5 years", "5-10 years", "10+ years"];

const jobDepartments = [
  "IT",
  "Design",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
  "Customer Support",
];

export default function JobForm({
  register,
  errors,
  reqFields,
  doFields,
  offerFields,
  perksFields,
  appendReq,
  appendDo,
  appendOffer,
  appendPerks,
  loading,
  control,
}: any) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Title */}
        <FormField
          control={control}
          name="title"
          label="Select Job Title"
          type="combobox"
          options={jobTitles.map((item) => item)}
          register={register}
          errors={errors}
          required
          errorMessage={"Job Title is required"}
        />

        {/* Department */}
        <FormField
          control={control}
          name="department"
          label="Select Department"
          type="combobox"
          options={jobDepartments.map((item) => item)}
          register={register}
          errors={errors}
          required
          errorMessage={"Department is required"}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Location */}
        <FormField
          control={control}
          name="location"
          label="Select Location"
          type="combobox"
          options={jobLocations.map((item) => item)}
          register={register}
          errors={errors}
          required
          errorMessage={"Location is required"}
        />

        {/* Job Type */}
        <FormField
          control={control}
          name="type"
          label="Select Job Type"
          type="combobox"
          options={jobTypes.map((item) => item)}
          register={register}
          errors={errors}
          required
          errorMessage={"Job Type is required"}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Experience */}
        <FormField
          control={control}
          name="experience"
          label="Select Experience"
          type="combobox"
          options={jobExperiences.map((item) => item)}
          register={register}
          errors={errors}
          required
          errorMessage={"Experience is required"}
        />

        {/* Salary Range */}
        <FormField
          control={control}
          name="salaryRange"
          label="Select Salary Range"
          type="text"
          register={register}
          placeholder="Enter Salary Range"
          errors={errors}
          required
          errorMessage={"Salary Range is required"}
        />
      </div>
      {/* Job Description */}
      <div>
        <FormField
          control={control}
          name="description"
          label="Job Description"
          type="textarea"
          register={register}
          placeholder="Enter Job Description"
          errors={errors}
          required
          errorMessage={"Job Description is required"}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Requirements */}
        <FormField
          control={control}
          label="Requirements"
          name="requirements"
          register={register}
          errors={errors}
          required={true}
          isArray={true}
          fields={reqFields}
          errorMessage="Requirements are required"
          append={() => appendReq({ value: "" })}
          placeholder="Requirements"
        />

        {/* What You'll Do */}
        <FormField
          control={control}
          label="What You&lsquo;ll Do"
          name="whatYouDo"
          register={register}
          errors={errors}
          isArray={true}
          fields={doFields}
          errorMessage="What You&lsquo;ll Do is required"
          append={() => appendDo({ value: "" })}
          placeholder="What You&lsquo;ll Do"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* What We Offer */}
        <FormField
          control={control}
          label="What We Offer"
          name="whatWeOffer"
          register={register}
          errors={errors}
          isArray={true}
          fields={offerFields}
          errorMessage="What We Offer is required"
          append={() => appendOffer({ value: "" })}
          placeholder="What We Offer"
        />

        {/* Other Perks */}
        <FormField
          control={control}
          label="Other Perks"
          name="otherPerks"
          register={register}
          errors={errors}
          isArray={true}
          fields={perksFields}
          errorMessage="Other Perks is required"
          append={() => appendPerks({ value: "" })}
          placeholder="Other Perks"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Working Hours */}
        <div className="w-full">
          <FormField
            control={control}
            type="text"
            label="Working Hours"
            name="workingHours"
            register={register}
            errors={errors}
            required
            errorMessage="Working Hours is required"
            placeholder="Working Hours"
          />
        </div>

        {/* Working Days */}

        <div className="w-full">
          <FormField
            control={control}
            type="text"
            label="Working Days"
            name="workingDays"
            register={register}
            errors={errors}
            required
            errorMessage="Working Days is required"
            placeholder="Working Days"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10">
        {/* Deadline */}
        <FormField
          control={control}
          type="date"
          label="Deadline"
          name="deadline"
          register={register}
          errors={errors}
          required
          errorMessage="Deadline is required"
          placeholder="Deadline"
        />
        {/*  {/* Vacancies */}
        <FormField
          control={control}
          type="number"
          label="Vacancies"
          name="vacancies"
          register={register}
          errors={errors}
          required
          errorMessage="Vacancies is required"
          placeholder="Vacancies"
        />
      </div>

      <div>
        {/* Apply Link */}
        <FormField
          control={control}
          type="text"
          label="Apply Link"
          name="applyLink"
          register={register}
          errors={errors}
          required
          errorMessage="Apply Link is required"
          placeholder="Apply Link"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <FormField
          control={control}
          type="textarea"
          label="Additional Notes"
          name="additionalNotes"
          register={register}
          errors={errors}
          required
          errorMessage="Additional Notes is required"
          placeholder="Additional Notes"
        />
      </div>

      <button
        type="submit"
        className="hover:-translate-y-0.5 bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] cursor-pointer transition duration-200  text-center w-full md:w-1/2 lg:w-1/3 py-2 rounded text-white font-semibold text-lg mx-auto block"
      >
        {loading ? "Posting Job..." : "Post Job"}
      </button>
    </div>
  );
}
