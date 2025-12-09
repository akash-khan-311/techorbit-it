/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoginForm from "@/components/ui/shared/Form/LoginForm";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();

      if (resData.success) {
        reset();
        showToast.success("Great 😍, You're Admin Now", {
          duration: 4000,
          progress: true,
          position: "bottom-right",
          transition: "slideInUp",
          icon: "",
          sound: true,
        });
        router.push("/dashboard");
      } else if (res.status === 401) {
        showToast.error("Invalid email or password", {
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
      <div className="max-w-md w-full shadow-[0px_0px_15px_0px_#1BCDD2] bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold  mb-6 text-center">
          Only Admin Login
        </h2>
        <LoginForm
          submitForm={submitForm}
          register={register}
          errors={errors}
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <Link
            href="/signup"
            className="text-[#1BCDD2] hover:text-[#0a9ea3] font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
