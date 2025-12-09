"use client";
import dynamic from "next/dynamic";
const ServicesSection = dynamic(
  () => import("@/components/modules/Services/ServicesSection"),
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
import React from "react";
import ServiceCard from "@/components/modules/Services/ServiceCard";
import Loader from "@/components/Loader";

const Services = () => {
  const t = useTranslation();
  const pathname = usePathname();
  return (
    <>
      <PageWrapper pathname={pathname} title={t.services.title}>
        <div className="text-white md:w-3/4 mx-auto"></div>
        <ServicesSection />
        <div className="space-y-10">
          <ServiceCard
            id={"web"}
            service={t.services.info[0]}
            imagePath={"/images/web.jpg"}
            className="flex flex-col lg:flex-row justify-between items-center gap-x-10 lg:space-y-0 space-y-10 "
          />
          <ServiceCard
            id={"e_commerce"}
            service={t.services.info[1]}
            imagePath={"/images/e_commerce.webp"}
            className="flex flex-col lg:flex-row-reverse  justify-between items-center gap-x-10 lg:space-y-0 space-y-10"
          />
          <ServiceCard
            id={"consulting"}
            service={t.services.info[2]}
            imagePath={"/images/consulting.webp"}
            className="flex flex-col lg:flex-row  justify-between items-center gap-x-10 lg:space-y-0 space-y-10"
          />
        </div>

        <div
          id="support"
          className="flex flex-col lg:flex-row justify-between items-center gap-x-10 my-20 py-10"
        >
          {(Array.isArray(t.services.support)
            ? t.services.support
            : [t.services.support]
          ).map((s, index) => (
            <div
              key={index}
              className="text-white flex flex-col lg:w-1/2  mx-auto space-y-5"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-left pt-10 font-bold">
                {s.title}
              </h2>
              <p className="text-left">{s.des}</p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
};

export default Services;
