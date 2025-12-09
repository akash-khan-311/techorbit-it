"use client";

import React from "react";

type Props = {
  phone: string;
  message?: string;
  children?: React.ReactNode;
};

const WhatsAppButton: React.FC<Props> = ({ phone, message, children }) => {
  const handleClick = () => {
    const text = message ? encodeURIComponent(message) : "";
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="mt-auto w-full bg-[#1BCDD2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#099196] transition cursor-pointer"
    >
      {children}
    </button>
  );
};

export default WhatsAppButton;
