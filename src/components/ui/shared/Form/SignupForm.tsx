/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import ButtonLoading from "../../ButtonLoading";
import FormField from "./FormField";

const SignupForm = ({
  submitForm,
  register,
  handleSubmit,
  errors,
  loading,
}: any) => {
  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4 text-white">
      <div>
        <FormField
          label="Employee ID"
          name="employeeId"
          type="text"
          placeholder="TO-12345"
          register={register}
          errors={errors}
          required
          errorMessage={"Employee ID is required"}
        />
      </div>
      <div className="">
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          register={register}
          errors={errors}
          required
          errorMessage={"Email Address is required"}
        />
      </div>
      <div>
        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          register={register}
          errors={errors}
          required
          errorMessage={"Password is required"}
        />
      </div>
      <div className="flex items-center justify-between">
        <Link href="#" className="text-sm text-[#1BCDD2] hover:text-indigo-500">
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`${
          loading && "cursor-wait"
        } w-full bg-[#1BCDD2] hover:bg-[#08a3a8] text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer`}
      >
        {loading ? (
          <>
            <ButtonLoading />
          </>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
};

export default SignupForm;
