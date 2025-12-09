import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const CareersWrapper = dynamic(
  () => import("@/components/modules/Careers/CareersWrapper"),
  { loading: () => <Loader /> }
);
export const metadata = {
  title: "Careers — TechOrbit IT",
  description: "Explore exciting career opportunities at TechOrbit IT.",
  alternates: {
    canonical: "https://techorbitit.com/careers",
  },
};

const CareersPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CareersWrapper />
    </Suspense>
  );
};

export default CareersPage;
