import Profile from "@/components/modules/Profile/Profile";

export const metadata = {
  title: "Profile — TechOrbit IT",
  description: "User profile page for TechOrbit IT",
};

const ProfilePage = async () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
      <Profile />
    </div>
  );
};

export default ProfilePage;
