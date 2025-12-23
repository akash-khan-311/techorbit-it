import { TBlog } from "@/types/Blog/blog.interface";
import mongoose, { Model, Schema } from "mongoose";

const BlogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    excerpt: {
      type: String,
      required: true,
      maxLength: 200,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      required: true,
    },

    author: {
      name: { type: String, required: true },
      avatar: String,
    },

    category: {
      type: String,
      index: true,
    },

    tags: [String],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    likesCount: {
      type: Number,
      default: 0,
    },

    commentsCount: {
      type: Number,
      default: 0,
    },

    publishedAt: Date,
  },
  { timestamps: true }
);

const Blog: Model<TBlog> =
  (mongoose.models.Blog as Model<TBlog>) ||
  mongoose.model<TBlog>("Blog", BlogSchema);
export default Blog;
