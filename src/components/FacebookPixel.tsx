/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}
