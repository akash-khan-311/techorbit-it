import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import connectDB from "./connectDB";
import Admin from "@/models/admin.model";

export type ServerUser = {
  id: string;
  email: string;
  role: string;
  employeeId?: string;
};

export async function getUser(): Promise<ServerUser | null> {
  await connectDB();

  try {
    // Get Cookie

    const cookieStore = await cookies();
    const token = cookieStore.get("refreshToken")?.value;

    if (!token) return null;

    // 2️⃣ JWT verify
    const secret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET!);

    const { payload } = await jwtVerify(token, secret);

    const user = await Admin.findById(payload.id).select(
      "_id email role employeeId"
    );

    if (!user) return null;

    return {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      employeeId: user.employeeId,
    };
  } catch (error) {
    console.error("getServerUser error:", error);
    return null;
  }
}
