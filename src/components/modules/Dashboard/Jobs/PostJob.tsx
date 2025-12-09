/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
"use client";
import { showAlert } from "@/lib/alert";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import JobForm from "@/components/ui/shared/Form/JobForm";

const PostJob = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      department: "",
      requirements: [{ value: "" }],
      whatYouDo: [{ value: "" }],
      whatWeOffer: [{ value: "" }],
      otherPerks: [{ value: "" }],
    },
  });

  const { fields: reqFields, append: appendReq } = useFieldArray({
    control,
    name: "requirements",
  });

  const { fields: doFields, append: appendDo } = useFieldArray({
    control,
    name: "whatYouDo",
  });

  const { fields: offerFields, append: appendOffer } = useFieldArray({
    control,
    name: "whatWeOffer",
  });

  const { fields: perksFields, append: appendPerks } = useFieldArray({
    control,
    name: "otherPerks",
  });

  const onSubmit = async (data: any) => {
    setLoading(true);

    const res = await fetch("/api/job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      showAlert({
        title: "Great ❤️ Job Posted!",
        text: "Job successfully created.",
        icon: "success",
      }).then(() => {
        reset();
        router.push("/dashboard/jobs");
      });
    } else {
      showAlert({
        title: "Error",
        text: "Unable to post the job.",
        icon: "error",
      });
    }

    setLoading(false);
  };

  return (
    <section className="mx-auto p-6 bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] text-white rounded-lg space-y-6 mt-14 md:mt-0">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-10 mt-2">
        Create Job Post
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <JobForm
          control={control}
          register={register}
          errors={errors}
          reqFields={reqFields}
          doFields={doFields}
          offerFields={offerFields}
          perksFields={perksFields}
          appendReq={appendReq}
          appendDo={appendDo}
          appendOffer={appendOffer}
          appendPerks={appendPerks}
          loading={loading}
        />
      </form>
    </section>
  );
};

export default PostJob;
