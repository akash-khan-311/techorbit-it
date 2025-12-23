import { TComment } from "@/types/Blog/comment.interface";
import mongoose, { Model, Schema } from "mongoose";

const CommentSchema = new Schema<TComment>(
  {
    blogId: { type: String, required: true, ref: "Blog", index: true },
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String,
    },
    message: { type: String, required: true, maxLength: 500 },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Comment: Model<TComment> =
  (mongoose.models.Comment as Model<TComment>) ||
  mongoose.model<TComment>("Comment", CommentSchema);
export default Comment;
