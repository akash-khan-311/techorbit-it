/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Admin from "@/models/admin.model";
import { jwtVerify } from "jose";

export async function GET() {
  await connectDB();

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
    const { payload } = await jwtVerify(token, secret);

    const user = await Admin.findById(payload.id).select("-password");

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );

    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set(
      "Access-Control-Allow-Origin",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    );
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  } catch (error: any) {
    console.error("Get user error:", error);

    // JWT error handling
    if (error.code === "ERR_JWT_EXPIRED") {
      return NextResponse.json(
        { success: false, message: "Token expired" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
