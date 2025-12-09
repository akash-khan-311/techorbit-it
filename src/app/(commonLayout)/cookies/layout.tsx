import React from "react";

export const metadata = {
  title: "Cookies — TechOrbit IT",
  description:
    "Learn about TechOrbit IT's cookie policy and how we use cookies.",
  alternates: {
    canonical: "https://techorbitit.com/cookies",
  },
};

const CookieLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CookieLayout;
