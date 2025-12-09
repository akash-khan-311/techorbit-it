import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
  };

  // Remove Cookies
  response.cookies.set("accessToken", "", {
    ...cookieOptions,
    expires: new Date(0),
  });

  response.cookies.set("refreshToken", "", {
    ...cookieOptions,
    expires: new Date(0),
  });

  return response;
}
