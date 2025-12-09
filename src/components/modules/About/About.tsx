"use client";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
const AboutSection = dynamic(
  () => import("@/components/modules/About/AboutSection"),
  {
    ssr: false,
    loading: () => <Loader smallHeight />,
  }
);
const OurTeamSection = dynamic(
  () => import("@/components/modules/About/Team"),
  {
    ssr: false,
    loading: () => <Loader smallHeight />,
  }
);
const WhoWeAre = dynamic(() => import("@/components/modules/About/WhoWeAre"), {
  ssr: false,
  loading: () => <Loader smallHeight />,
});
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

const About = () => {
  const pathname = usePathname();
  const t = useTranslation();
  return (
    <div>
      <PageWrapper pathname={pathname} title={t.about.title}>
        <AboutSection />
        <OurTeamSection />
        <WhoWeAre />
      </PageWrapper>
    </div>
  );
};

export default About;
