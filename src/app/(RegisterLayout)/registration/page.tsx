import Loader from "@/components/Loader";
import RegistrationForm from "@/components/ui/RegistrationForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Registration — TechOrbit IT",
  description:
    "Register to purchase products from TechOrbit IT. Fill out the form and we will contact you shortly.",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen  flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] rounded-2xl p-6">
          <div className="mb-8 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white">
              Registration
            </h1>
            <p className="text-sm md:text-base text-gray-300 ">
              If you would like to purchase a product, fill out the form below —
              we will contact you shortly.
            </p>
          </div>
          <RegistrationForm exit />
        </div>
      </main>
    </Suspense>
  );
}
