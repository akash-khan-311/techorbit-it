export type TBlogStatus = "draft" | "published";

export interface TBlogAuthor {
  name: string;
  avatar?: string;
}

export interface TBlogSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface TBlog {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: TBlogAuthor;
  category?: string;
  tags?: string[];
  status: TBlogStatus;
  likesCount: number;
  commentsCount: number;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
