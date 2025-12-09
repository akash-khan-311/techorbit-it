import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
const PostJob = dynamic(
  () => import("@/components/modules/Dashboard/Jobs/PostJob"),
  {
    loading: () => <Loader />,
  }
);

export const metadata = {
  title: "Post Job — TechOrbit IT",
  description: "Admin post job page for TechOrbit IT",
  alternates: {
    canonical: "https://techorbitit.com/post/job",
  },
};

export default function CreateJob() {
  return (
    <>
      <PostJob />
    </>
  );
}
