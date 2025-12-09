import connectDB from "@/lib/connectDB";
import { generateEmployeeId } from "@/lib/generateEmployeeId";
import Employee from "@/models/Employee.model";
import { IEmployee } from "@/types/employee.interface";
import { NextResponse } from "next/server";
// import connectDB from "@/lib/connectDB";
// import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: Partial<IEmployee> = await req.json();
    const employeeId = await generateEmployeeId();
    const {
      name,
      phone,
      email,
      profileImage,
      address,
      nidBackImage,
      nidFrontImage,
      emergencyPhone,
      salary,
      designation,
      gender,
      dateOfBirth,
      joiningDate,
      bloodGroup,
      country,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name,Phone and Email are required" },
        { status: 400 }
      );
    }
    const existing = await Employee.findOne({ phone, email });
    if (existing) {
      return NextResponse.json(
        { error: "Employee Already Exist" },
        { status: 409 }
      );
    }
    const employee = new Employee({
      employeeId,
      name,
      phone,
      email,
      profileImage,
      address,
      nidBackImage,
      nidFrontImage,
      emergencyPhone,
      salary,
      designation,
      gender,
      dateOfBirth,
      joiningDate,
      bloodGroup,
      country,
    });

    await employee.save();
    return NextResponse.json(
      { success: true, id: employee._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("/api/employee error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();

  try {
    const employees = await Employee.find();

    return NextResponse.json({ success: true, employees });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
