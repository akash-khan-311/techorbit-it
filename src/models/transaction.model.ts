import { ITransactions } from "@/types/transaction.interface";
import mongoose, { Model } from "mongoose";

const TransactionSchema = new mongoose.Schema<ITransactions>({
  orderId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  amount: { type: String, required: true },
  complete: { type: String, default: "Pending", required: true },
  packageName: { type: String, required: true },
  transactionId: { type: String, required: true },
  status: { type: String, default: "Unpaid", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction: Model<ITransactions> =
  (mongoose.models.Transaction as Model<ITransactions>) ||
  mongoose.model<ITransactions>("Transaction", TransactionSchema);
export default Transaction;
