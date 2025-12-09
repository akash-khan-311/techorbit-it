"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

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

const CommunityPage = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <PageWrapper pathname={pathname} title={t.community.title}>
      <CompanyPolicyCard data={t.community} />
    </PageWrapper>
  );
};

export default CommunityPage;
