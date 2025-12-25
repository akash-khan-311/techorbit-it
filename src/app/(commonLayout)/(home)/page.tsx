import Loader from "@/components/Loader";
import AboutSection from "@/components/modules/About/AboutSection";
import BlogsSection from "@/components/modules/Blogs/BlogsSection";
import CareerSection from "@/components/modules/Careers/CareerSection";
import ContactSection from "@/components/modules/Contact/ContactSection";
import CustomerAttraction from "@/components/modules/CustomerAttraction/CustomerAttraction";
import HeroSection from "@/components/modules/Home/Hero";
import PricingPage from "@/components/modules/Pricing/Pricing";
import ServicesSection from "@/components/modules/Services/ServicesSection";
import { Testimonials } from "@/components/ui/Testimonials";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "TechOrbit IT | Software Company in Bangladesh",
    template: "%s | TechOrbit IT",
  },

  description:
    "TechOrbit IT is a Bangladesh-based software company providing web development, eCommerce solutions, custom software, and IT services for startups and businesses.",

  keywords: [
    "TechOrbit IT",
    "TechOrbit",
    "software company in Bangladesh",
    "IT company in Bangladesh",
    "web development company in Bangladesh",
    "custom software development Bangladesh",
    "ecommerce website development Bangladesh",
    "Bangladesh software firm",
    "Dhaka software company",
    "IT services Bangladesh",
  ],

  authors: [{ name: "TechOrbit IT" }],
  creator: "TechOrbit IT",
  publisher: "TechOrbit IT",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.techorbitit.com",
  },

  openGraph: {
    title: "TechOrbit IT | Software Company in Bangladesh",
    description:
      "TechOrbit IT provides professional web development, eCommerce solutions, and custom software services for businesses in Bangladesh.",
    url: "https://www.techorbitit.com",
    siteName: "TechOrbit IT",
    images: [
      {
        url: "https://www.techorbitit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechOrbit IT - Software Company in Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TechOrbit IT | Software Company in Bangladesh",
    description:
      "Bangladesh-based software company offering web development, eCommerce solutions, and custom IT services.",
    images: ["https://www.techorbitit.com/og-image.jpg"],
  },

  category: "technology",
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
      <PricingPage />
      <CareerSection />
      <BlogsSection />
      <ContactSection />
    </Suspense>
  );
}
