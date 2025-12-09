"use client";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/ui/Card"), { ssr: false });
const Container = dynamic(() => import("@/components/ui/Container"), {
  ssr: false,
});
import TextType from "@/components/ui/TextType";
import { useTranslation } from "@/hooks/useTranslation";
import { FC } from "react";

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
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.service.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
