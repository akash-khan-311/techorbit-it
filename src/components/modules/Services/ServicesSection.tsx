"use client";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/ui/Card"), { ssr: false });
const Container = dynamic(() => import("@/components/ui/Container"), {
  ssr: false,
});
import TextType from "@/components/ui/TextType";
import { useTranslation } from "@/hooks/useTranslation";
import { FC } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: FC = () => {
  const t = useTranslation();
  return (
    <section id="services" className="my-10">
      <Container>
        {/* Section Title */}
        <div className="mb-12 text-center">
          <TextType
            key={t.services.title}
            className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl lg:text-5xl "
            text={[t.services.title]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg ">
            {t.services.text}
          </p>
        </div>
        {/* Services Cards */}
        <div className="grid gap-8 my-10 md:grid-cols-3">
          {t.services.service.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="space-y-10">
          <ServiceCard
            id={"web"}
            service={t.services.info[0]}
            imagePath={"/images/web.jpg"}
            className="flex flex-col items-center justify-between space-y-10 lg:flex-row gap-x-10 lg:space-y-0 "
          />
          <ServiceCard
            id={"e_commerce"}
            service={t.services.info[1]}
            imagePath={"/images/e_commerce.webp"}
            className="flex flex-col items-center justify-between space-y-10 lg:flex-row-reverse gap-x-10 lg:space-y-0"
          />
          <ServiceCard
            id={"consulting"}
            service={t.services.info[2]}
            imagePath={"/images/consulting.webp"}
            className="flex flex-col items-center justify-between space-y-10 lg:flex-row gap-x-10 lg:space-y-0"
          />
        </div>

        <div
          id="support"
          className="flex flex-col items-center justify-between py-10 my-20 lg:flex-row gap-x-10"
        >
          {(Array.isArray(t.services.support)
            ? t.services.support
            : [t.services.support]
          ).map((s, index) => (
            <div
              key={index}
              className="flex flex-col mx-auto space-y-5 text-white lg:w-1/2"
            >
              <h2 className="pt-10 text-3xl font-bold text-left md:text-4xl lg:text-5xl">
                {s.title}
              </h2>
              <p className="text-left">{s.des}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
