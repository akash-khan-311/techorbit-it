"use client";

import useLenis from "@/hooks/useLenis";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";

import dynamic from "next/dynamic";
import { PersistGate } from "redux-persist/integration/react";

const Footer = dynamic(() => import("@/components/modules/Footer/Footer"), {
  ssr: false,
});
const Header = dynamic(
  () => import("@/components/modules/Home/Header/Header"),
  {
    ssr: false,
  }
);
const FontWrapper = dynamic(() => import("@/components/FontWrapper"), {
  ssr: false,
});

const AOSWrapper = dynamic(() => import("@/components/ui/Wraper/AOSWraper"), {
  ssr: false,
});

const ClientWraper = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontWrapper />
        <AOSWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </AOSWrapper>
      </PersistGate>
    </Provider>
  );
};

export default ClientWraper;
