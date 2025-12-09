"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
const CompanyPolicyCard = dynamic(
  () => import("@/components/ui/shared/CompanyPolicyCard"),
  {
    loading: () => <Loader />,
  }
);
const PageWrapper = dynamic(
  () => import("@/components/ui/shared/PageHeading"),
  {
    loading: () => <Loader />,
  }
);
const CookiesPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.cookie.title}>
      <CompanyPolicyCard data={t.cookie} />
    </PageWrapper>
  );
};

export default CookiesPage;
