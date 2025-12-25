"use client";
import dynamic from "next/dynamic";
const TextType = dynamic(() => import("@/components/ui/TextType"), {
  ssr: false,
});
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";
import { ICareer } from "@/types/careers.interface";
import { getAllJobs } from "@/utils/getJob";
const JobCard = dynamic(() => import("@/components/ui/JobCard"), {
  ssr: false,
});
export type TContents = {
  value: string;
  description: string;
};

const JobSection = () => {
  const t = useTranslation();
  const [jobs, setJobs] = useState<ICareer[]>([]);
  useEffect(() => {
    getAllJobs().then((data) => {
      setJobs(data?.data);
    });
  }, []);
  return (
    <section id="careers" className="my-12">
      {/* Conditional Rendering */}
      {jobs?.length > 0 ? (
        <>
          {/* Job Cards */}
          <div className="">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 border p-8 rounded-2xl text-center bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white">
            <h4 className="text-lg font-medium text-white mb-2">
              Don’t see your role?
            </h4>
            <p className="text-gray-200 mb-4">
              We’re always looking for talented people. Send your CV to{" "}
              <span className="font-semibold text-[#30DBDC]">
                techorbitit3@gmail.com
              </span>
            </p>
            <Link
              href="mailto:techorbitit3@gmail.com"
              className="inline-block bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] transition duration-200 px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
            >
              Send CV
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <TextType
            text={t.careers.noOpenings.title}
            key={t.careers.noOpenings.title}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
          />
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            {t.careers.noOpenings.text}
          </p>
        </div>
      )}
    </section>
  );
};

export default JobSection;
