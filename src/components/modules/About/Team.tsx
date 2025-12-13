"use client";
import dynamic from "next/dynamic";
const TextType = dynamic(() => import("@/components/ui/TextType"), {
  ssr: false,
});
import { useTranslation } from "@/hooks/useTranslation";
import { IEmployee } from "@/types/employee.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const OurTeamSection = () => {
  const [teams, setTeams] = useState<IEmployee[] | null>(null);
  const t = useTranslation();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`/api/employee`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await res.json();

        setTeams(data?.employees || []); // safe fallback
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchTeam();
  }, []);

  if (teams === null) return <Loader smallHeight />;

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4"></h2>
        <TextType
          key={t.about.team.title}
          text={[t.about.team.title]}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 text-center"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          {t.about.team.text}
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams?.map((member) => (
            <motion.div
              key={member?._id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0 }}
              className="group p-10 rounded-2xl bg-gradient-to-tr from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-blue-400 transition-all">
                <Image
                  src={member.profileImage}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                  priority
                />
              </div>

              {/* Info */}
              <h3 className="mt-4 text-xl font-semibold text-white text-center">
                {member.name}
              </h3>
              <p className="text-center text-gray-300 text-sm">
                {member.designation}
              </p>

              {/* Hover line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-teal-300 transition-all mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
