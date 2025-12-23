import { TLike } from "@/types/Blog/like.interface";
import mongoose, { Schema } from "mongoose";

const LikeSchema = new Schema<TLike>(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Blog",
      index: true,
    },
    userIdentifier: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

LikeSchema.index({ blogId: 1, userIdentifier: 1 }, { unique: true });
const Like = mongoose.models.Like || mongoose.model<TLike>("Like", LikeSchema);
export default Like;
