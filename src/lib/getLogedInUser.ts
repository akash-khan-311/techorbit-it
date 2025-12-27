import { cookies } from "next/headers";
import connectDB from "./connectDB";
import { jwtVerify } from "jose";
import Admin from "@/models/admin.model";
import Employee from "@/models/Employee.model";

export const getLoggedInUser = async () => {
  await connectDB();

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refreshToken")?.value;

    if (!token) return null;
    const secret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET!);

    const { payload } = await jwtVerify(token, secret);

    const adminUser = await Admin.findById(payload.id).select("employeeId");

    if (!adminUser?.employeeId) return null;
    const employee = await Employee.findOne({
      employeeId: adminUser?.employeeId,
    });

    if (!employee) return null;
    return employee;
  } catch (error) {
    console.log("getLoggedInUser error:", error);
    return null;
  }
};
