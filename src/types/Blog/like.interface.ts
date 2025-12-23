import { Schema } from "mongoose";

export type TLike = {
  _id?: string;
  blogId: Schema.Types.ObjectId;
  userIdentifier: string;
  createdAt?: Date;
  updatedAt?: Date;
};
