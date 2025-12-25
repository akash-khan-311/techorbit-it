import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LangType = "en" | "bn";

interface LanguageState {
  lang: LangType;
}

const initialLang = (typeof window !== "undefined" &&
  localStorage.getItem("lang")) as LangType | null;

const initialState: LanguageState = {
  lang: initialLang || "bn",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LangType>) => {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", action.payload); // localStorage এ সেট করা
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
