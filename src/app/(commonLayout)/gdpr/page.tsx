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
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

const GDPRPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.gdpr.title}>
      <CompanyPolicyCard data={t.gdpr} />
    </PageWrapper>
  );
};

export default GDPRPage;
