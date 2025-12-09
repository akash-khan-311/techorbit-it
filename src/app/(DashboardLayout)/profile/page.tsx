import { getMe } from "@/lib/getMe";
import React from "react";

export const metadata = {
  title: "Profile — TechOrbit IT",
  description: "User profile page for TechOrbit IT",
};

const ProfilePage = async () => {
  const { success, user, message } = await getMe();
  if (success) {
    console.log("Logged-in user:", user);
  } else {
    console.log("Error fetching user:", message);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-7xl text-white">This is Profile Page</h1>
    </div>
  );
};

export default ProfilePage;
