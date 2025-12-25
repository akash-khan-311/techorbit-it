import BlogFooter from "@/components/modules/Blogs/BlogFooter";
import Container from "@/components/ui/Container";
import ShareButtons from "@/components/ui/shared/ShareButtons/ShareButtons";
import { blogs } from "@/data/blog.data";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | TechOrbit IT",
    };
  }

  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords: blog.seo?.keywords,

    alternates: {
      canonical: `https://www.techorbitit.com/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://www.techorbitit.com/blog/${blog.slug}`,
      siteName: "TechOrbit IT",
      type: "article",
      images: [
        {
          url: blog.coverImage || "/images/ecommerce.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage || "/images/ecommerce.jpg"],
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = blogs.find((blog) => blog.slug === slug);

  // console.log(blog);

  return (
    <section className="">
      <div className="max-w-5xl px-4 mx-auto my-32">
        <Container>
          <div className="w-full mb-10 ">
            <Image
              src={blog?.coverImage || "/images/ecommerce.jpg"}
              width={1200}
              height={800}
              className="w-full md:h-125"
              alt={`${blog?.title || "Blog cover image"} - Tech Orbit IT`}
            />
          </div>

          <hr className="my-10" />
          <article
            className="prose prose-invert max-w-none

    /* responsive typography */
    prose-sm
    md:prose-base
    lg:prose-lg

    /* headings */
    prose-h1:text-2xl  md:prose-h1:text-3xl lg:prose-h1:text-4xl
    prose-h2:text-xl md:prose-h2:text-2xl lg:prose-h2:text-3xl
    prose-h3:text-lg md:prose-h3:text-xl

    /* paragraphs */
    prose-p:text-gray-300
    prose-p:leading-6 md:prose-p:leading-7

    /* lists */
    prose-ul:list-disc prose-ul:pl-6
    prose-ol:list-decimal prose-ol:pl-6
    prose-li:marker:text-gray-400

    /* blockquote */
    prose-blockquote:border-l-4
    prose-blockquote:border-cyan-500
    prose-blockquote:pl-4
    prose-blockquote:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
          />
          <div>
            <hr className="my-10 " />
            <div className="flex flex-col items-center justify-start gap-x-10 md:flex-row">
              <p className="text-2xl text-white">Share this Post:</p>
              <div className="mt-3 md:mt-0">
                <ShareButtons
                  url={`https://www.techorbitit.com/blog/${slug}`}
                  title={blog?.title || ""}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <BlogFooter slug={slug} />
    </section>
  );
}
