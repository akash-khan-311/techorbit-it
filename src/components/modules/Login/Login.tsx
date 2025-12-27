"use client";

import LoginForm from "@/components/ui/shared/Form/LoginForm";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [login, { isLoading: loading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const submitForm = async (userData: FormData) => {
    try {
      const res = await login(userData).unwrap();
      const user = verifyToken(res.data.accessToken);
      console.log(res);
      dispatch(setUser({ user, token: res.data.accessToken }));
      if (res.success) {
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
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full shadow-[0px_0px_15px_0px_#1BCDD2] bg-slate-900 text-white rounded-xl p-8">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Only Admin Login
        </h2>
        <LoginForm
          submitForm={submitForm}
          register={register}
          errors={errors}
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <div className="mt-6 text-sm text-center text-gray-600">
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
