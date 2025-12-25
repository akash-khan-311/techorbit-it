/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { formattedBangladeshPhoneNumber } from "@/lib/formatedBangladeshPhone";
import { useRouter } from "next/navigation";
import { showAlert } from "@/lib/alert";
import { Button } from "./button";
import ButtonLoading from "./ButtonLoading";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import FormField from "./shared/Form/FormField";
import { trackEvent } from "@/lib/FacebookPixel";
const RegistrationForm = ({ exit }: { exit?: boolean }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const t = useTranslation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { name, email, phone, address, facebookPage } = data;

    const formattedPhone = formattedBangladeshPhoneNumber(phone);

    const userData = {
      name,
      email,
      phone: formattedPhone,
      address,
      facebookPage: facebookPage,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        reset();

        showAlert({
          title: "Thanks For Registration",
          text: "An Expert Will Connection With You Soon",
          icon: "success",
        }).then(() => {
          trackEvent("CompleteRegistration");
          router.push("/");
        });
      } else if (res.status === 409) {
        showAlert({
          title: "Already Registered!",
          text: "Use Another Email",
          icon: "warning",
        });
      } else {
        showAlert({
          title: "Something went wrong",
          text: "Please try again",
          icon: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <FormField
        label={t.contact.form.name.label}
        name="name"
        type="text"
        placeholder={t?.contact?.form?.name?.placeholder}
        register={register}
        errors={errors}
        required
        errorMessage={t?.contact?.form?.name?.error}
      />
      <FormField
        label={t.contact.form.email.label}
        name="email"
        type="email"
        placeholder={t?.contact?.form?.email?.placeholder}
        register={register}
        errors={errors}
        required
        errorMessage={t?.contact?.form?.email?.error}
      />
      <FormField
        label={t.contact.form.phone.label}
        name="phone"
        type="number"
        placeholder={t?.contact?.form?.phone?.placeholder}
        register={register}
        errors={errors}
        required
        errorMessage={t?.contact?.form?.phone?.error}
      />
      <FormField
        label={t.contact.form.facebookPage.label}
        name="facebookPage"
        type="number"
        placeholder={t?.contact?.form?.facebookPage?.placeholder}
        register={register}
        errors={errors}
      />
      <FormField
        label={t.contact.form.address.label}
        name="address"
        type="textarea"
        placeholder={t?.contact?.form?.address?.placeholder}
        register={register}
        errors={errors}
        required
        errorMessage={t?.contact?.form?.address?.error}
      />

      <div className="flex items-center justify-between">
        <Button
          type="submit"
          className={`${
            loading && "cursor-wait"
          } flex justify-center items-center  px-8 py-1  bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] cursor-pointer transition duration-200  text-center text-base font-semibold`}
        >
          {loading ? <ButtonLoading /> : t.contact.form.button}
        </Button>

        {exit && (
          <Link href="/">
            <Button
              className={`flex justify-center items-center   px-8 py-1 bg-red-500 hover:bg-red-700 cursor-pointer transition-colors duration-150 text-white text-base font-semibold`}
            >
              {t.contact.form.exitButton}
            </Button>
          </Link>
        )}
      </div>
    </form>
  );
};

export default RegistrationForm;
