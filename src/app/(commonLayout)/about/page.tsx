import Loader from "@/components/Loader";
import About from "@/components/modules/About/About";
import { Suspense } from "react";

export const metadata = {
  title: "About — TechOrbit IT",
  description: "Learn more about TechOrbit IT, our mission, vision, and team.",
  alternates: {
    canonical: "https://techorbitit.com/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    </>
  );
};

export default AboutPage;
