"use client";
import dynamic from "next/dynamic";
const TextType = dynamic(() => import("@/components/ui/TextType"), {
  ssr: false,
});
const Container = dynamic(() => import("@/components/ui/Container"), {
  ssr: false,
});
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export type TContents = {
  value: string;
  description: string;
};
const AboutSection = () => {
  const t = useTranslation();
  return (
    <section id="about">
      <Container>
        <div className="my-10 flex flex-col justify-center items-center">
          <TextType
            key={t.about.title}
            text={[t.about.title]}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4 text-center">
            {t.about.subTitle}
          </p>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-20">
            <div className="lg:w-1/2 w-full mt-20 lg:mt-0">
              <Image
                src={"/images/about-1.webp"}
                alt="about"
                width={500}
                height={500}
                priority
                className="shadow-black shadow-lg  rounded-md"
              />
              <Image
                src={"/images/about-2.webp"}
                alt="about"
                width={500}
                height={200}
                priority
                className="mt-10 rounded-md shadow-black shadow-md"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col  md:text-left gap-y-10 ">
              <div className="space-y-0">
                <TextType
                  key={t.about.mission.title}
                  className="text-2xl md:text-3xl font-bold  mb-4 "
                  text={[t.about.mission.title]}
                />
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base ">
                  {t.about.mission.text}
                </p>
              </div>
              <div className="space-y-10">
                <TextType
                  key={t.about.vision.title}
                  className="text-2xl md:text-3xl font-bold text-black mb-4 "
                  text={[t.about.vision.title]}
                />
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base  ">
                  {t.about.vision.text}
                </p>
              </div>
              <div className="space-y-10">
                <TextType
                  key={t.about.do.title}
                  className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 "
                  text={[t.about.do.title]}
                />
                <div>
                  <ol className="text-gray-400 list-disc list-inside space-y-2 text-sm md:text-base">
                    {t.about.do.list.map((item, index) => (
                      <li key={index} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
