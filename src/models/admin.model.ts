import { IAdmin } from "@/types/admin.interface";
import mongoose, { Model, Schema } from "mongoose";

const AdminSchema = new Schema<IAdmin>({
  employeeId: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "staff"],
    default: "admin",
    required: true,
  },
});

const Admin: Model<IAdmin> =
  (mongoose.models.Admin as Model<IAdmin>) ||
  mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;
