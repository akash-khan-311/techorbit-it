import Image from "next/image";
import React from "react";

import Link from "next/link";
import { TCaseStudy } from "@/data/work.data";

export default function ProjectCard({ work }: { work: TCaseStudy }) {
  return (
    <Link href={"#"}>
      <div className="relative overflow-hidden transition-all duration-300 shadow-md group rounded-xl hover:-translate-y-2 hover:shadow-2xl">
        <Image
          width={400}
          height={400}
          alt="Project"
          src={
            "https://cdn.pixabay.com/photo/2025/11/08/15/01/15-01-19-332_1280.jpg"
          }
          className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 text-white transition-all duration-300 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-lg font-semibold">{work.title}</h3>
          <p className="text-sm text-gray-200">{work.description}</p>
        </div>
      </div>
    </Link>
  );
}
