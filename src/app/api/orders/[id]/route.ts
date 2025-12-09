import connectDB from "@/lib/connectDB";
import Transaction from "@/models/transaction.model";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const { complete } = body;
  connectDB();

  try {
    const updated = await Transaction.findByIdAndUpdate(
      id,
      { complete },
      { new: true }
    );
    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to update" },
      { status: 500 }
    );
  }
}
