import connectDB from "@/lib/connectDB";
import Admin from "@/models/admin.model";
import Employee from "@/models/Employee.model";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  await connectDB();

  try {
    const { employeeId, email, password, role } = await req.json();
    const currentUser = await Employee.findOne({ employeeId });
    const registeredUser = await Admin.findOne({ employeeId });
    if (!currentUser) {
      return new Response(
        JSON.stringify({ message: "Employee ID is invalid" }),
        { status: 400 }
      );
    }
    if (registeredUser) {
      return new Response(
        JSON.stringify({ message: "Employee ID is already registered" }),
        { status: 400 }
      );
    }

    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create admin user
    const admin = await Admin.create({
      employeeId,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: admin._id,
        employeeId: admin.employeeId,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
