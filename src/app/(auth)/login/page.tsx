import Loader from "@/components/Loader";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/components/modules/Login/Login"), {
  loading: () => <Loader />,
});

export const metadata = {
  title: "Login — TechOrbit IT",
  description: "Admin login page for TechOrbit IT",
};
const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
