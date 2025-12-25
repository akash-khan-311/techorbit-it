import { blogs } from "@/data/blog.data";
import React from "react";
import BlogCard from "./BlogCard";
import Container from "@/components/ui/Container";

export default function BlogFooter({ slug }: { slug: string }) {
  const blogsData = blogs.filter((blog) => blog.slug !== slug);
  return (
    <Container>
      <h2 className="text-3xl text-white">Recent Blogs</h2>
      <hr className="my-10" />
      <div className="grid gap-8 my-20 md:grid-cols-4 ">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Container>
  );
}
