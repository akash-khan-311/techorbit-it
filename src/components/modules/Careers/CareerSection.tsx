"use client";
import React from "react";
import Career from "./Career";
import { useTranslation } from "@/hooks/useTranslation";
import Container from "@/components/ui/Container";
import JobSection from "./Careers";

export default function CareerSection() {
  const t = useTranslation();
  return (
    <section id="careers">
      <Container>
        <div className="text-white md:w-3/4 mx-auto">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-bold">
            {t.careers.text}
          </h2>
          <p className="text-center mt-4">{t.careers.des}</p>
        </div>

        <Career items={t.careers.benefits} />
        <Career items={t.careers.join} />
        <JobSection />
      </Container>
    </section>
  );
}
