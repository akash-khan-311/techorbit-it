import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
