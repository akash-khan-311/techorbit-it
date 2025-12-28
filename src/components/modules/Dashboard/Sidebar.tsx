"use client";
import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import AdminMenu from "./Menu";
import MenuItem from "./MenuItem";
import { logout as ServerLogout } from "@/lib/logout";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import Logo from "@/components/ui/shared/Logo";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogout = async () => {
    const result = await ServerLogout();
    dispatch(logout());
    if (result.success) {
      showToast.success(result.message, {
        duration: 4000,
        position: "bottom-right",
        transition: "slideInUp",
        sound: true,
        icon: "",
      });
      router.push("/login");
    } else {
      showToast.error(result.message, {
        duration: 4000,
        position: "bottom-right",
        transition: "slideInUp",
        sound: true,
        icon: "",
      });
    }
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="relative flex justify-between text-gray-100  md:hidden z-99999">
        <button
          onClick={handleToggle}
          className="absolute top-0 right-0 p-4 focus:outline-none "
        >
          <AiOutlineBars className="w-8 h-8" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden backdrop-blur-md bg-white/10 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="flex items-center justify-center py-3 shadow-xl shadow-white/10 rounded-xl ">
            {/* <Logo className={"w-10 h-10 ml-3"} /> */}
            <Logo />
          </div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 ">
            {/* <MenuItems /> */}
            <nav>
              <AdminMenu />
            </nav>
          </div>
        </div>
        <div>
          <hr />
          <MenuItem icon={FcSettings} label="Profile" path="/profile" />
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-white transition-colors duration-300 transform hover:backdrop-blur-sm hover:bg-white/10"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
