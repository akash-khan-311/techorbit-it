/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  //  CORS headers setup
  const origin = req.headers.get("origin");
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    "http://localhost:3000",
  ];

  // Public routes
  const publicRoutes = ["/login", "/signup"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Protected routes
  const protectedRoutes = [
    "/dashboard",
    "/employees",
    "/customers",
    "/profile",
    "/post/job",
    "/jobs",
    "/orders",
    "/transactions",
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!token && isProtectedRoute) {
    const response = NextResponse.redirect(new URL("/login", req.url));

    // CORS headers
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Credentials", "true");
      response.headers.set("Access-Control-Allow-Origin", origin);
    }

    return response;
  }

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
      const { payload } = await jwtVerify(token, secret);

      if (isPublicRoute) {
        const response = NextResponse.redirect(new URL("/dashboard", req.url));

        if (origin && allowedOrigins.includes(origin)) {
          response.headers.set("Access-Control-Allow-Credentials", "true");
          response.headers.set("Access-Control-Allow-Origin", origin);
        }

        return response;
      }

      if (pathname.startsWith("/dashboard") && payload.role !== "admin") {
        const response = NextResponse.redirect(
          new URL("/unauthorized", req.url)
        );

        if (origin && allowedOrigins.includes(origin)) {
          response.headers.set("Access-Control-Allow-Credentials", "true");
          response.headers.set("Access-Control-Allow-Origin", origin);
        }

        return response;
      }

      // Token valid - continue with CORS headers
      const response = NextResponse.next();

      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Credentials", "true");
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS"
        );
        response.headers.set(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization"
        );
      }

      return response;
    } catch (error: any) {
      console.error("❌ JWT verification failed:", error.message);

      // Token invalid - clear cookies and redirect
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");

      // CORS headers
      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Credentials", "true");
        response.headers.set("Access-Control-Allow-Origin", origin);
      }

      return response;
    }
  }

  // No token but public route - allow
  const response = NextResponse.next();

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/customers/:path*",
    "/employees/:path*",
    "/profile/:path*",
    "/post/job/:path*",
    "/jobs/:path*",
    "/orders/:path*",
    "/transactions/:path*",
    "/login",
    "/signup",
  ],
};
