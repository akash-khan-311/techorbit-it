import type { Metadata } from "next";
import { Noto_Serif_Bengali, Baloo_Da_2 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import FacebookPixel from "@/components/FacebookPixel";

const bengaliFont = Noto_Serif_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const baloo = Baloo_Da_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TechOrbit IT",
  description:
    "TechOrbit IT offers e-commerce website development, business websites, web applications and complete digital solutions.",
  keywords: [
    "TechOrbit IT",
    "E-commerce website",
    "Web development Bangladesh",
    "Software company",
  ],
  alternates: {
    canonical: "https://techorbitit.com",
  },
  metadataBase: new URL("https://techorbitit.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechOrbit IT",
              url: "https://techorbitit.com",
              logo: "https://techorbitit.com/logo.png",
              sameAs: [
                "https://facebook.com/techorbitit",
                "https://linkedin.com/company/techorbitit",
                "https://twitter.com/techorbitit",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`
          ${bengaliFont.variable}
          ${baloo.variable}
          font-sans 
          antialiased 
          bg-slate-900 
          bg-gradient-to-br 
          from- 
          via-[#80F8C1]/10 
          to-[#309889]/10
        `}
      >
        <FacebookPixel />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
