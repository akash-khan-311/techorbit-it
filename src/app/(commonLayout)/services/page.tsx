import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Services = dynamic(
  () => import("@/components/modules/Services/Services")
);

export const metadata = {
  title: "Services — TechOrbit IT",
  description:
    "Explore the range of services offered by TechOrbit IT to empower your business.",
  alternates: {
    canonical: "https://techorbitit.com/services",
  },
};

const ServicesPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>
    </>
  );
};

export default ServicesPage;
