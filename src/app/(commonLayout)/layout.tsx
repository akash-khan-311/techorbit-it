"use client";
import dynamic from "next/dynamic";

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
const ClientWraper = dynamic(() => import("@/components/ClientWraper"), {
  ssr: false,
});
const AOSWrapper = dynamic(() => import("@/components/ui/Wraper/AOSWraper"), {
  ssr: false,
});

import { Provider } from "react-redux";
import { store } from "@/redux/store";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ClientWraper>
          <FontWrapper />
          <AOSWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </AOSWrapper>
        </ClientWraper>
      </Provider>
    </>
  );
};

export default layout;
