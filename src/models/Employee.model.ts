import { IEmployee } from "@/types/employee.interface";
import mongoose, { Model } from "mongoose";

const EmployeeSchema = new mongoose.Schema<IEmployee>({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  profileImage: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date, required: true },
  joiningDate: { type: Date, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    required: true,
  },
  emergencyPhone: { type: String, required: false },
  country: { type: String, required: true },
  nidBackImage: { type: String, required: true },
  nidFrontImage: { type: String, required: true },
  salary: { type: Number, required: true },
  designation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompilation/overwrite model issue in Next.js dev
const Employee: Model<IEmployee> =
  (mongoose.models.Employee as Model<IEmployee>) ||
  mongoose.model<IEmployee>("Employee", EmployeeSchema);
export default Employee;
