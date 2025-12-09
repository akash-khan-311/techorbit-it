export type ITransactions = {
  _id?: string;
  orderId: string;
  name: string;
  phone: string;
  amount: string;
  packageName: string;
  email: string;
  address: string;
  transactionId: string;
  status: "Paid" | "Unpaid";
  complete: "Pending" | "Completed";
  createdAt?: Date;
  updatedAt?: Date;
};
