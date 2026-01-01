/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
export default function BlogCard({ blog }: { blog: any }) {
  return (
    <>
      <Link
        className="overflow-hidden transition-shadow duration-300 ease-in-out border-t-0 shadow-[0px_0px_15px_0px_#1BCDD2] group rounded-xl"
        href={`/blog/${blog.slug}`}
      >
        <div className="flex flex-col rounded shadow-lg">
          <div className="relative overflow-hidden border border-transparent">
            <Image
              layout="responsive"
              width={400}
              height={800}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out border-none rounded-t-xl hover:scale-105"
              src={blog.coverImage}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="md:h-64">
            <div className="flex flex-col items-start justify-start px-6 py-4 mb-auto ">
              <h2 className="mb-3 text-xl font-semibold text-left text-white">
                {blog.title}
              </h2>
              <p className="text-sm text-left text-gray-300">{blog.excerpt}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row items-center justify-between px-6 py-3 ">
            <span className="flex flex-row items-center py-1 mr-1 text-xs text-white font-regular">
              <FaUser size={15} className="mr-1" />
              <span className="ml-1">{blog?.structuredData?.author?.name}</span>
            </span>
            <span className="flex flex-row items-center py-1 mr-1 text-xs text-white font-regular">
              <FaCalendarAlt size={18} className="mr-1" />
              <span className="ml-1">{blog?.publishedAt}</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
