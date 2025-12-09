"use client";

import dynamic from "next/dynamic";
const CompanyPolicyCard = dynamic(
  () => import("@/components/ui/shared/CompanyPolicyCard"),
  { ssr: false, loading: () => <Loader smallHeight /> }
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

const PrivacyPolicy = () => {
  const t = useTranslation();

  return (
    <PageWrapper pathname="/privacy" title={t.privacy.title}>
      <CompanyPolicyCard data={t.privacy} />
    </PageWrapper>
  );
};

export default PrivacyPolicy;
