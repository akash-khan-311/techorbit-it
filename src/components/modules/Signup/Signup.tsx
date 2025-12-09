/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SignupForm from "@/components/ui/shared/Form/SignupForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        showToast.success("Great 😍, You're Admin Now", {
          duration: 4000,
          progress: true,
          position: "bottom-right",
          transition: "slideInUp",
          icon: "",
          sound: true,
        });
        router.push("/login");
      } else if (res.status) {
        showToast.error("Employee ID is invalid", {
          duration: 4000,
          progress: true,
          position: "bottom-right",
          transition: "slideInUp",
          icon: "",
          sound: true,
        });
      }
    } catch (error) {
      console.log(error);
      showToast.error("Something went wrong, Please try again later 😊", {
        duration: 4000,
        progress: true,
        position: "bottom-right",
        transition: "slideInUp",
        icon: "",
        sound: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-md shadow-[0px_0px_15px_0px_#1BCDD2] w-full bg-slate-900 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Only Admin SignUp
        </h2>
        <SignupForm
          submitForm={submitForm}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          loading={loading}
        />
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            href="/login"
            className="text-[#1BCDD2] hover:text-[#099196] font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
