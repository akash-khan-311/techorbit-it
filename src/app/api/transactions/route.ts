import connectDB from "@/lib/connectDB";
import Transaction from "@/models/transaction.model";
import { generateUniqueOrderId } from "@/utils/generateOrderId";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  connectDB();
  try {
    const body = await req.json();
    const orderId = await generateUniqueOrderId();
    const { name, phone, amount, packageName, email, address, transactionId } =
      body;
    const existingPayment = await Transaction.findOne({
      transactionId,
    });
    if (existingPayment) {
      return NextResponse.json(
        { error: "already exists Registered, Please Wait" },
        { status: 409 }
      );
    }
    const transaction = new Transaction({
      orderId,
      name,
      phone,
      amount,
      packageName,
      email,
      address,
      status: "Unpaid",
      complete: "Pending",
      transactionId,
    });
    await transaction.save();
    return NextResponse.json(
      { success: true, message: "Payment Submit successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("/api/transaction error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  connectDB();
  try {
    const transactions = await Transaction.find();
    return NextResponse.json({ success: true, transactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
