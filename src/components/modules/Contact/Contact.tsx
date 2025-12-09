"use client";

import dynamic from "next/dynamic";
const RegistrationForm = dynamic(
  () => import("@/components/ui/RegistrationForm"),
  {
    ssr: false,
    loading: () => <Loader smallHeight />,
  }
);
const PageWrapper = dynamic(
  () => import("@/components/ui/shared/PageHeading"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

import { useTranslation } from "@/hooks/useTranslation";
import React from "react";
import Loader from "@/components/Loader";

const Contact = () => {
  const t = useTranslation();
  return (
    <PageWrapper pathname={"/contact"} title={t.contact.title}>
      <div className="flex bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] flex-col md:flex-row  mt-20 ">
        <div className=" p-10 md:w-1/2">
          <h1 className="text-4xl font-bold text-center pb-10 text-white">
            {t.contact.form.title}
          </h1>
          <RegistrationForm />
        </div>
        <div className="md:w-1/2 flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.0296323640445!2d90.46501410368651!3d23.697934049768254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7000037977d%3A0x47a0ed33b5ed5c98!2sDiamond%20Tower!5e0!3m2!1sen!2sbd!4v1763376663428!5m2!1sen!2sbd"
            width={800}
            height={700}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
