/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq: any;
  }
}

export const FB_PIXEL_ID = "3729924697315511";

export const pageView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const trackEvent = (event: string, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params);
  }
};
