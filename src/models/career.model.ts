import { ICareer } from "@/types/careers.interface";
import mongoose, { Model, Schema } from "mongoose";

const CareerSchema = new Schema<ICareer>({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  experience: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [{ value: String }], required: true },
  whatYouDo: { type: [{ value: String }], required: true },
  whatWeOffer: { type: [{ value: String }], required: true },
  otherPerks: { type: [{ value: String }], required: true },
  workingHours: { type: String, required: true },
  salaryRange: { type: String, required: false },
  vacancies: { type: Number, required: true },
  workingDays: { type: String, required: true },
  deadline: { type: String, required: true },
  additionalNotes: { type: String, required: true },
  applyLink: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  open: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Career: Model<ICareer> =
  (mongoose.models.Career as Model<ICareer>) ||
  mongoose.model<ICareer>("Career", CareerSchema);
export default Career;
