"use client";
import dynamic from "next/dynamic";

const PageWrapper = dynamic(
  () => import("@/components/ui/shared/PageHeading"),
  {
    loading: () => <Loader />,
  }
);
const Accordion = dynamic(() => import("@/components/ui/Accordion"), {
  loading: () => <Loader smallHeight />,
});
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import React from "react";
import Loader from "@/components/Loader";

const FAQsPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.faqs.title}>
      <div className="">
        <div>
          <Accordion data={t.faqs} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQsPage;
