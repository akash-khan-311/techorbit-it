"use client";
import dynamic from "next/dynamic";
const Career = dynamic(() => import("@/components/modules/Careers/Career"), {
  ssr: false,
});
const CareerSection = dynamic(
  () => import("@/components/modules/Careers/Careers"),
  {
    ssr: false,
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
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

const CareersWrapper = () => {
  const pathname = usePathname();
  const t = useTranslation();
  return (
    <PageWrapper pathname={pathname} title={t.careers.title}>
      <div className="text-white md:w-3/4 mx-auto">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-bold">
          {t.careers.text}
        </h2>
        <p className="text-center mt-4">{t.careers.des}</p>
      </div>

      <Career items={t.careers.benefits} />
      <Career items={t.careers.join} />
      <CareerSection />
    </PageWrapper>
  );
};

export default CareersWrapper;
