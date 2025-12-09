"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLanguage } from "@/redux/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.lang);

  const handleLangChange = () => {
    const newLang = currentLang === "en" ? "bn" : "en";
    dispatch(setLanguage(newLang));
    localStorage.setItem("lang", newLang);
  };

  return (
    <button
      onClick={handleLangChange}
      className="text-sm px-3 py-1 border rounded relative text-white cursor-pointer"
    >
      {currentLang === "en" ? "বাংলা" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
