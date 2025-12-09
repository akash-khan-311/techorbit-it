"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import en from "@/translations/en";
import bn from "@/translations/bn";

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = lang === "en" ? en : bn;

  return translations;
};
