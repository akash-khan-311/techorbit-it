/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";
import { Suspense } from "react";

const sansBangla = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
});
// ! This font will be use here
// const bengaliFont = Noto_Serif_Bengali({
//   variable: "--font-bengali",
//   subsets: ["bengali"],
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// const baloo = Baloo_Da_2({
//   variable: "--font-baloo",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3729924697315511');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`
        
          ${sansBangla.variable}
          
          
          bg-slate-900 
          bg-linear-to-br 
          from- 
          via-[#80F8C1]/10 
          to-[#309889]/10
        `}
      >
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <Analytics />
        {children}
        {/* No Script fallback */}
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3729924697315511&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
