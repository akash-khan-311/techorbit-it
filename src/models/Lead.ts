import { ILead } from "@/types/lead.interface";
import mongoose, { Model } from "mongoose";

const LeadSchema = new mongoose.Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  facebookPage: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Avoid recompilation/overwrite model issue in Next.js dev
const Lead: Model<ILead> =
  (mongoose.models.Lead as Model<ILead>) ||
  mongoose.model<ILead>("Lead", LeadSchema);
export default Lead;
