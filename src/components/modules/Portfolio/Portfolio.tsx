"use client";
import ProjectCard from "@/components/ui/Card/ProjectCard";
import Container from "@/components/ui/Container";
import TextType from "@/components/ui/TextType";
import { caseStudies, TCaseStudy } from "@/data/work.data";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

export default function Portfolio() {
  const t = useTranslation();
  return (
    <Container>
      <div>
        <div className="text-center mb-14">
          <TextType
            key={t.portfolio.title}
            text={[t.portfolio.title]}
            className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl lg:text-5xl"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-center text-gray-300">
            {t.portfolio.subTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {caseStudies.map((work: TCaseStudy) => (
            <ProjectCard work={work} key={work.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}
