/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { showAlert } from "@/lib/alert";
import { ICareer } from "@/types/careers.interface";
import { getAllJobs } from "@/utils/getJob";
import Loader from "@/components/Loader";

const DashboardJobCard = dynamic(
  () => import("@/components/modules/Dashboard/Jobs/JobsCard")
);

const Jobs = () => {
  const [data, setData] = useState<ICareer[] | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs();
        setData(response.data);
      } catch (err) {
        console.error(err);
        setData([]);
      }
    };

    fetchJobs();
  }, []);

  const handleUpdateJobOpen = async (id: string, open: boolean) => {
    setData(
      (prev) =>
        prev?.map((job) => (job._id === id ? { ...job, open } : job)) || []
    );
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/job/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ open }),
      });

      if (res.ok) {
        router.prefetch("/careers");
      } else {
        showAlert({
          icon: "error",
          title: "Error",
          text: `Failed to update job status.`,
        });
      }
    } catch (err) {
      console.error(err);
      getAllJobs().then((response) => setData(response.data));
      setUpdatingId(null);
    }
  };

  // Loading state: data is null
  if (data === null) return <Loader />;

  return (
    <div>
      {data.length ? (
        data.map((job) => (
          <div key={job._id}>
            <DashboardJobCard job={job} onUpdate={handleUpdateJobOpen} />
          </div>
        ))
      ) : (
        <div className="my-12 flex justify-center items-center min-h-[calc(100vh-200px)]">
          <div>
            <h2 className="text-[#30DBDC] text-center text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
              Job Not Found
            </h2>
            <p className="text-gray-300 text-center mt-2 text-sm md:text-base">
              You have not posted any job yet. Post a job to get started.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => router.push("/post/job")}
                className="hover:-translate-y-0.5 bg-linear-to-r from-[#049e9e] to-[#30DBDC] hover:from-[#30DBDC] hover:to-[#439c9c] cursor-pointer transition duration-200 text-center w-full lg:w-auto px-8 py-2 rounded-xl font-medium mt-4"
              >
                Post a Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
