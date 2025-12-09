"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function FontWrapper() {
  const lang = useSelector((state: RootState) => state.language.lang);

  useEffect(() => {
    if (lang === "bn") {
      document.body.classList.add("font-bengali");
      document.body.classList.remove("font-english");
    } else {
      document.body.classList.add("font-english");
      document.body.classList.remove("font-bengali");
    }
  }, [lang]);

  return null;
}
