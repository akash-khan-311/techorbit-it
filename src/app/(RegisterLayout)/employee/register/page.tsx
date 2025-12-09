import Loader from "@/components/Loader";
import EmployeeRegistrationForm from "@/components/ui/EmployeeRegistrationForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Employee Registration — TechOrbit IT",
  description: "Register as an employee at TechOrbit IT.",
};

const EmployeeRegisterPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className="min-h-screen  flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2]   rounded-2xl p-6">
          <div className="mb-8 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white">
              Employee Registration
            </h1>
            <p className="text-sm md:text-base text-slate-300 text-center">
              Assalamu Alaikum , Welcome to The Team , Please Fill The Form
              Below To Get Started.
            </p>
          </div>
          <EmployeeRegistrationForm />
        </div>
      </section>
    </Suspense>
  );
};

export default EmployeeRegisterPage;
