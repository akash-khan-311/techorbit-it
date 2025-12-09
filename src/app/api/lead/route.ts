import connectDB from "@/lib/connectDB";
import Lead from "@/models/Lead";
import { ILead } from "@/types/lead.interface";
import { NextResponse } from "next/server";
// import connectDB from "@/lib/connectDB";
// import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: Partial<ILead> = await req.json();
    const { name, phone, email, address, facebookPage } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone are required" },
        { status: 400 }
      );
    }
    const existing = await Lead.findOne({
      $or: [{ phone }, ...(email ? [{ email }] : [])],
    });
    if (existing) {
      return NextResponse.json(
        { error: "already exists Registered, Please Wait" },
        { status: 409 }
      );
    }
    const lead = new Lead({ name, phone, email, address, facebookPage });
    await lead.save();
    return NextResponse.json({ success: true, id: lead._id }, { status: 201 });
  } catch (error) {
    console.error("/api/lead error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();

  try {
    const customers = await Lead.find();
    return NextResponse.json({ success: true, customers });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
