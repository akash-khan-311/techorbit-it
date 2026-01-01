import BlogCard from "@/components/modules/Blogs/BlogCard";
import PageWrapper from "@/components/ui/shared/PageHeading";
import { blogs } from "@/data/blog.data";
import React from "react";

export default function BlogsPage() {
  return (
    <div>
      <PageWrapper title="Our Blogs" pathname="/blogs">
        <div className="grid gap-8 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
