"use client";

import dynamic from "next/dynamic";
const TextType = dynamic(() => import("@/components/ui/TextType"), {
  ssr: false,
});
import { useTranslation } from "@/hooks/useTranslation";

const WhoWeAre = () => {
  const t = useTranslation();
  return (
    <section className="w-full bg-linear-to-tr rounded-2xl from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <TextType
          key={t.about.whoWeAre.title}
          text={[t.about.whoWeAre.title]}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 text-center"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        {/* Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
          <p>{t.about.whoWeAre.text1}</p>

          <p>{t.about.whoWeAre.text2}</p>

          <p>{t.about.whoWeAre.text3}</p>
        </div>

        {/* Highlight Box */}
        <div className="bg-linear-to-r from-[#0F1C3F] to-[#070B2E] mt-10 p-6 md:p-8 rounded-xl border border-gray-700">
          <p className="text-center text-lg md:text-xl font-medium text-gray-200">
            {t.about.whoWeAre.tagLine}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
