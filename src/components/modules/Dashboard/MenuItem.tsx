import Link from "next/link";
import { usePathname } from "next/navigation";
interface MenuItemProps {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}
const MenuItem = ({ label, path, icon: Icon }: MenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={`flex items-center px-4 py-2 my-4  transition-colors duration-300 transform  hover:backdrop-blur-sm hover:bg-white/10   hover:text-gray-100 ${
        isActive
          ? "backdrop-blur-sm bg-white/10 text-gray-100"
          : "text-gray-100"
      }`}
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default MenuItem;
