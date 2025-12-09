import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
const Jobs = dynamic(() => import("@/components/modules/Dashboard/Jobs/Jobs"), {
  loading: () => <Loader />,
});

export const metadata = {
  title: "Jobs — TechOrbit IT",
  description: "Manage and view the list of job postings at TechOrbit IT",
  alternates: {
    canonical: "https://techorbitit.com/jobs",
  },
};

const JobList = () => {
  return (
    <>
      <Jobs />
    </>
  );
};

export default JobList;
