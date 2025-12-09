import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`${className} relative z-20 mr-4 flex items-center space-x-2 font-normal text-black cursor-pointer`}
    >
      <Image
        className="sm:w-4 md:w-14 lg:w-16"
        src="/logo/Tech_Orbit_IT_logo.png"
        alt="Tech_Orbit_IT_logo"
        width={40}
        height={40}
        priority
      />
      <span className="font-medium text-white text-sm md:text-lg lg:text-xl">
        TechOrbit IT
      </span>
    </Link>
  );
};

export default Logo;
