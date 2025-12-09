import connectDB from "@/lib/connectDB";
import Career from "@/models/career.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  connectDB();
  const id = (await params).id;

  try {
    const job = await Career.findOne({ _id: id, deleted: false }).lean();

    if (!job) {
      return NextResponse.json({ message: "Job not found", status: 404 });
    }
    return NextResponse.json({ success: true, data: job });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const id = (await params).id;

  try {
    const body = await req.json();
    const { open } = body;

    if (typeof open !== "boolean") {
      return NextResponse.json(
        { success: false, error: "'open' must be boolean" },
        { status: 400 }
      );
    }

    const updatedJob = await Career.findByIdAndUpdate(
      id,
      { open },
      { new: true } // updated document return করবে
    );

    if (!updatedJob) {
      return NextResponse.json(
        { success: false, error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedJob },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to update job" },
      { status: 500 }
    );
  }
}
