import connectDB from "@/lib/connectDB";
import Employee from "@/models/Employee.model";
import Lead from "@/models/Lead";
import Transaction from "@/models/transaction.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    const [totalEmployees, totalCustomers, paidOrdersCount, revenueResult] =
      await Promise.all([
        Employee.countDocuments(),
        Lead.countDocuments(),
        Transaction.countDocuments({ status: "Paid" }),
        Transaction.aggregate([
          { $match: { complete: "Completed", status: "Paid" } },
          {
            $addFields: {
              amountNumber: {
                $toDouble: {
                  $replaceAll: {
                    input: "$amount",
                    find: ",",
                    replacement: "",
                  },
                },
              },
            },
          },
          {
            $group: {
              _id: null,
              totalRevenue: { $sum: "$amountNumber" },
            },
          },
        ]),
      ]);

    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalEmployees,
        totalCustomers,
        totalOrders: paidOrdersCount,
        totalRevenue,
      },
    });
  } catch (error) {
    console.log("Stats Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to Load Statistics" },
      { status: 500 }
    );
  }
}
