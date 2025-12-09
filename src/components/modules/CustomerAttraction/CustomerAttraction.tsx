"use client";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/ui/Container"), {});
import { useTranslation } from "@/hooks/useTranslation";

const CustomerAttraction = () => {
  const t = useTranslation();

  return (
    <section className="w-full bg-gradient-to-tr from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white p-6 md:p-10 lg:p-16 shadow-[0px_0px_15px_0px_#1BCDD2] border border-white/10 relative overflow-hidden">
      <Container>
        <div className="flex justify-center items-center mx-auto max-w-7xl text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t.attraction.title}
            </h2>

            <p className="text-gray-400 text-lg">{t.attraction.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerAttraction;
