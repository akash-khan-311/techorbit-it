"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const RegistrationButton = ({ icon: Icon, className }: any) => {
  const t = useTranslation();
  return (
    <div className="flex justify-center space-x-4">
      <Link href={"/registration"}>
        <Button
          className={`${className} hover:-translate-y-0.5 bg-gradient-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] cursor-pointer transition duration-200  text-center`}
        >
          {t.registrationButton.title}
          {Icon ? <Icon className="ml-2 h-5 w-5" /> : null}
        </Button>
      </Link>
    </div>
  );
};

export default RegistrationButton;
