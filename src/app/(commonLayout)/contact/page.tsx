import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Contact = dynamic(() => import("@/components/modules/Contact/Contact"), {
  loading: () => <Loader />,
});

export const metadata = {
  title: "Contact — TechOrbit IT",
  description: "Get in touch with TechOrbit IT for inquiries and support.",
  alternates: {
    canonical: "https://techorbitit.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default ContactPage;
