import connectDB from "@/lib/connectDB";
import Transaction from "@/models/transaction.model";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  try {
    const transactions = await Transaction.find({ status: "Paid" });
    return NextResponse.json({ success: true, transactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
