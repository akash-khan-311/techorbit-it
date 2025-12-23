export type CommentStatus = "pending" | "approved" | "rejected";

export type TCommentUser = {
  name: string;
  email: string;
  avatar?: string;
};

export type TComment = {
  _id?: string;
  blogId: string;
  user: TCommentUser;
  message: string;
  status: CommentStatus;
  createdAt?: Date;
  updatedAt?: Date;
};
