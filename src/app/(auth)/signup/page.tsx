import Loader from "@/components/Loader";
import dynamic from "next/dynamic";

const Signup = dynamic(() => import("@/components/modules/Signup/Signup"), {
  loading: () => <Loader />,
});

export const metadata = {
  title: "Sign Up — TechOrbit IT",
  description: "Admin sign up page for TechOrbit IT",
};

const SignUpPage = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default SignUpPage;
