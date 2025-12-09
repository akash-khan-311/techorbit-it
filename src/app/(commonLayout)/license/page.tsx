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

const LicensingPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.licensing.title}>
      <CompanyPolicyCard data={t.licensing} />
    </PageWrapper>
  );
};

export default LicensingPage;
