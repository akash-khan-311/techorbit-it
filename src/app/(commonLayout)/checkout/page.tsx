"use client";

import ButtonLoading from "@/components/ui/ButtonLoading";
import FormField from "@/components/ui/shared/Form/FormField";
import { useTranslation } from "@/hooks/useTranslation";
import { showAlert } from "@/lib/alert";
import { ITransactions } from "@/types/transaction.interface";
import { toEnglishDigits } from "@/utils/toEnglishDigits";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const CheckoutPage = () => {
  const router = useRouter();
  const t = useTranslation();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const packageName = searchParams.get("plan");
  const priceWithText = searchParams.get("amount")?.split(" ");
  const price = priceWithText?.[0] ?? "";
  const amountWithBangla = price.includes("৳")
    ? price.split("৳")[1] ?? ""
    : price;
  const amount = toEnglishDigits(amountWithBangla);
  console.log(amount);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITransactions>();

  const onSubmit = async (data: ITransactions) => {
    const paymentInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      transactionId: data.transactionId,
      packageName,
      amount,
    };

    console.log(paymentInfo);

    try {
      setLoading(true);
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      });
      const result = await res.json();
      console.log(result);
      if (result.success) {
        showAlert({
          title: `${t.checkout.form.success.title}`,
          text: `${t.checkout.form.success.text}`,
          icon: "success",
        }).then(() => {
          reset();
          router.push("/pricing");
        });
      }
      if (result.error) {
        showAlert({
          title: "Already Submitted",
          text: result.error,
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      showAlert({
        title: `${t.checkout.form.error.title}`,
        text: `${t.checkout.form.error.text}`,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl my-20 mx-auto p-8 border rounded-lg  bg-slate-900">
      <IoArrowBackCircleOutline
        onClick={() => router.back()}
        className="text-3xl cursor-pointer text-white mb-10"
      />
      <h1 className="text-2xl font-bold mb-5  text-white">
        {t.checkout.title}
      </h1>

      <div className="mb-5 p-4 border  bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20 text-white rounded-2xl">
        <div className="border-b border-b-[#1BCDD2] pb-2">
          <h2 className="text-lg">
            {t.checkout.instructions.plan.title}
            <span className="text-lg font-semibold"> {packageName}</span>
          </h2>
          <h2 className="text-lg">
            {t.checkout.instructions.plan.payment}
            <span className="text-lg font-semibold"> {price}</span>
          </h2>
        </div>
        <div className="mt-2">
          <h2 className="text-lg">{t.checkout.instructions.title}</h2>
          <p className="text-sm">
            {t.checkout.instructions.description}
            <br />
            <span className="font-bold text-lg">
              📱 {t.checkout.instructions.number}
            </span>
          </p>
          <p className="text-sm mt-2">
            {t.checkout.instructions.text}
            <br />
          </p>
          <p className="text-xs mt-1">Note: {t.checkout.instructions.note}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center justify-between gap-x-5">
          <FormField
            type="text"
            label={t.checkout.form.name.label}
            name="name"
            register={register}
            errors={errors}
            required
            errorMessage={t.checkout.form.name.error}
            placeholder={t.checkout.form.name.placeholder}
          />
          <FormField
            type="number"
            label={t.checkout.form.phone.label}
            name="phone"
            register={register}
            errors={errors}
            required
            errorMessage={t.checkout.form.phone.error}
            placeholder={t.checkout.form.phone.placeholder}
          />
        </div>
        <div className="flex items-center justify-between gap-x-5">
          <FormField
            type="email"
            label={t.checkout.form.email.label}
            name="email"
            register={register}
            errors={errors}
            required
            errorMessage={t.checkout.form.email.error}
            placeholder={t.checkout.form.email.placeholder}
          />
          <FormField
            type="text"
            label={t.checkout.form.tranId.label}
            name="transactionId"
            register={register}
            errors={errors}
            required
            errorMessage={t.checkout.form.tranId.error}
            placeholder={t.checkout.form.tranId.placeholder}
          />
        </div>
        <div>
          <FormField
            type="textarea"
            label={t.checkout.form.address.label}
            name="address"
            register={register}
            errors={errors}
            required
            errorMessage={t.checkout.form.address.error}
            placeholder={t.checkout.form.address.placeholder}
          />
        </div>

        <button className="bg-[#1BCDD2] cursor-pointer text-white w-full py-2 rounded">
          {loading ? <ButtonLoading /> : t.checkout.form.button}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
