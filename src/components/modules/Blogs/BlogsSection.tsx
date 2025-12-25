"use client";
import Container from "@/components/ui/Container";
import TextType from "@/components/ui/TextType";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "@/data/blog.data";

export default function BlogsSection() {
  const { blogsSection } = useTranslation();

  console.log(blogs);
  return (
    <section id="blogs" className="my-32 ">
      <Container>
        <div className="mb-12 text-center">
          <TextType
            key={blogsSection.title}
            className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl lg:text-5xl "
            text={[blogsSection.title]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg ">
            {blogsSection.subTitle}
          </p>
        </div>
        <div className="grid gap-8 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
