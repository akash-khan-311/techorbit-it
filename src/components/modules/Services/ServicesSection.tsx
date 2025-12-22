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
        <div className="text-center mb-12">
          <TextType
            key={t.services.title}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 "
            text={[t.services.title]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed ">
            {t.services.text}
          </p>
        </div>
        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 my-10">
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
            className="flex flex-col lg:flex-row justify-between items-center gap-x-10 lg:space-y-0 space-y-10 "
          />
          <ServiceCard
            id={"e_commerce"}
            service={t.services.info[1]}
            imagePath={"/images/e_commerce.webp"}
            className="flex flex-col lg:flex-row-reverse  justify-between items-center gap-x-10 lg:space-y-0 space-y-10"
          />
          <ServiceCard
            id={"consulting"}
            service={t.services.info[2]}
            imagePath={"/images/consulting.webp"}
            className="flex flex-col lg:flex-row  justify-between items-center gap-x-10 lg:space-y-0 space-y-10"
          />
        </div>

        <div
          id="support"
          className="flex flex-col lg:flex-row justify-between items-center gap-x-10 my-20 py-10"
        >
          {(Array.isArray(t.services.support)
            ? t.services.support
            : [t.services.support]
          ).map((s, index) => (
            <div
              key={index}
              className="text-white flex flex-col lg:w-1/2  mx-auto space-y-5"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-left pt-10 font-bold">
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
