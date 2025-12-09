"use client";
import dynamic from "next/dynamic";
const CompanyPolicyCard = dynamic(
  () => import("@/components/ui/shared/CompanyPolicyCard"),
  {
    loading: () => <Loader smallHeight />,
  }
);
const PageWrapper = dynamic(
  () => import("@/components/ui/shared/PageHeading"),
  {
    loading: () => <Loader />,
  }
);
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

const DocsPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.documentation.title}>
      <CompanyPolicyCard data={t.documentation} />
    </PageWrapper>
  );
};

export default DocsPage;
