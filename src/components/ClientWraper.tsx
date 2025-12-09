"use client";

import useLenis from "@/hooks/useLenis";

const ClientWraper = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};

export default ClientWraper;
