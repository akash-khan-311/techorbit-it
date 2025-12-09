import React from "react";
import Container from "../Container";
import ContactSection from "@/components/modules/Contact/ContactSection";

interface Props {
  title?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const PageWrapper = ({ title, pathname, children }: Props) => {
  return (
    <section>
      <div className="bg py-24 md:py-32 mt-10 text-white">
        <Container>
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-400">{pathname}</h3>
        </Container>
      </div>
      <Container>
        {children} <ContactSection />
      </Container>
    </section>
  );
};

export default PageWrapper;
