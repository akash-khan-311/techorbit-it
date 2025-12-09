import connectDB from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin.model";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  await connectDB();

  try {
    const { email, password } = await req.json();

    const user = await Admin.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const accessSecret = process.env.JWT_ACCESS_SECRET;
    const refreshSecret = process.env.JWT_REFRESH_SECRET;

    if (!accessSecret || !refreshSecret) {
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Generate Tokens
    const accessToken = jwt.sign(
      { id: user._id, role: user.role, employeeId: user.employeeId },
      accessSecret,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign({ id: user._id }, refreshSecret, {
      expiresIn: "7d",
    });

    const cookieStore = await cookies();

    // Access Token
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 60 * 15,
      path: "/",
    });

    // Refresh Token
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 60 * 60 * 24 * 7, // ✅ 7 দিন
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
