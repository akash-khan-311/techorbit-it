/* eslint-disable @typescript-eslint/no-explicit-any */
'use client";';
import ButtonLoading from "../../ButtonLoading";
import FormField from "./FormField";

const LoginForm = ({
  submitForm,
  register,
  handleSubmit,
  errors,
  loading,
}: any) => {
  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div>
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          register={register}
          errors={errors}
          required
          errorMessage={"Email is required"}
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

      <button
        type="submit"
        disabled={loading}
        className={`${
          loading && "cursor-wait"
        } w-full bg-[#1BCDD2] hover:bg-[#0abdc4] text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer`}
      >
        {loading ? <ButtonLoading /> : "Sign in"}
      </button>
    </form>
  );
};

export default LoginForm;
