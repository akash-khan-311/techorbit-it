import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AboutSection = dynamic(
  () => import("@/components/modules/About/AboutSection"),
  {
    loading: () => <Loader smallHeight={true} />,
  }
);
const ContactSection = dynamic(
  () => import("@/components/modules/Contact/ContactSection"),
  {
    loading: () => <Loader smallHeight={true} />,
  }
);
const CustomerAttraction = dynamic(
  () => import("@/components/modules/CustomerAttraction/CustomerAttraction"),
  {
    loading: () => <Loader smallHeight={true} />,
  }
);
const ServicesSection = dynamic(
  () => import("@/components/modules/Services/ServicesSection"),
  {
    loading: () => <Loader smallHeight={true} />,
  }
);
const Testimonials = dynamic(
  () => import("@/components/ui/Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <Loader smallHeight={true} />,
  }
);
const HeroSection = dynamic(() => import("@/components/modules/Home/Hero"), {
  loading: () => <Loader smallHeight={true} />,
});

export const metadata = {
  title: "Home — TechOrbit IT",
  description:
    "We provide e-commerce, corporate website, software solutions and more.",
};
export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="my-10">
        <Testimonials />
      </div>
      <CustomerAttraction />
      <ContactSection />
    </Suspense>
  );
}
