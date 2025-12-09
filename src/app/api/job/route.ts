import connectDB from "@/lib/connectDB";
import Career from "@/models/career.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const newJob = await Career.create(body);

    return NextResponse.json({ success: true, data: newJob }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to create job" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const jobs = await Career.find({ deleted: false }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: jobs }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
