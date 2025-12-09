/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import { getSingleJob } from "@/utils/getSingleJob";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const JobApplyButton = dynamic(() => import("@/components/ui/JobApplyButton"));

// 🔥 Dynamic Metadata Function
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { data } = await getSingleJob(id);

  return {
    title: `${data.title} — TechOrbit IT`,
    description: data.description.slice(0, 150),
  };
}

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { data } = await getSingleJob(id);
  const splitedSalaryRange = data.salaryRange.split("-");
  data.salaryRange = `${splitedSalaryRange[0]}K - ${splitedSalaryRange[1]}K`;

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen  p-4 md:p-8 flex justify-center items-start">
        <div className="w-full max-w-7xl bg-[#050c27] text-white rounded-2xl p-6 md:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-3xl md:text-4xl lg:text-5xl space-y-3 mb-6">
            <h2 className=" font-semibold text-blue-400">
              TechOrbit IT is Hiring
            </h2>
            <h1 className=" font-bold">{data.title}</h1>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-[#162044] rounded-full ">
              {data.type}
            </span>
            <span className="px-4 py-2 bg-[#162044] rounded-full ">
              Onsite - {data.location}
            </span>
            <span className="px-4 py-2 bg-[#162044] rounded-full ">
              {data.salaryRange} BDT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-10">
              {/* Job Description */}
              <div>
                <h3 className="text-2xl font-bold mb-3 ">Job Description:</h3>
                <p className=" leading-7 text-gray-300">{data.description}</p>
              </div>

              {/* What You’ll Do */}
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  What You&apos;ll Do:
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-300 ">
                  {data.whatYouDo.map((item: any) => (
                    <li key={item.value}>{item.value}</li>
                  ))}
                </ul>
              </div>

              {/* Who You Are */}
              <div>
                <h3 className="text-2xl font-bold mb-3">Requirements:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-300 ">
                  {data.requirements.map((item: any) => (
                    <li key={item.value}>{item.value}</li>
                  ))}
                </ul>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-2xl font-bold mb-3">What We Offer:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-300 ">
                  {data.whatWeOffer.map((item: any) => (
                    <li key={item.value}>{item.value}</li>
                  ))}
                </ul>
              </div>

              {/* Other Perks */}
              <div>
                <h3 className="text-2xl font-bold mb-3">Other Perks:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-300 ">
                  {data.otherPerks.map((item: any) => (
                    <li key={item.value}>{item.value}</li>
                  ))}
                </ul>
              </div>

              {/* Additional Notes */}
              <div>
                <h3 className="text-2xl font-bold mb-3">Additional Notes:</h3>
                <p className=" text-gray-300">
                  If you meet our requirements, we would be happy to hear from
                  you. {data.additionalNotes}
                </p>
              </div>

              {/* Apply Button */}
              <JobApplyButton open={data.open} path={data.applyLink} />
            </div>

            {/* Right Side Details */}
            <div className="flex flex-col justify-center items-center">
              <div className="mb-10">
                <JobApplyButton open={data.open} path={data.applyLink} />
              </div>
              <div className="backdrop-blur-3xl bg-white/10 p-6 rounded-2xl space-y-4  text-gray-300 h-fit">
                <h3 className="text-2xl font-semibold text-white mb-3 border-b pb-5">
                  Job Description
                </h3>
                <div className="space-y-2">
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">
                      Job Title
                    </h3>
                    <span className="text-xl text-gray-400">{data.title}</span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">
                      Experience
                    </h3>
                    <span className="text-xl text-gray-400 capitalize">
                      {data.experience}
                    </span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">Job Type</h3>
                    <span className="text-xl text-gray-400 capitalize">
                      {data.type}
                    </span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">
                      Vacancies
                    </h3>
                    <span className="text-xl text-gray-400 capitalize">
                      0{data.vacancies}
                    </span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">
                      Offered Salary
                    </h3>
                    <span className="text-xl text-gray-400 capitalize">
                      {data.salaryRange} BDT
                    </span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">Gender</h3>
                    <span className="text-xl text-gray-400 capitalize">
                      Both
                    </span>
                  </div>
                  <div className="border-b pb-5">
                    <h3 className="text-white font-medium text-xl">Location</h3>
                    <span className="text-xl text-gray-400 capitalize">
                      {data.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
