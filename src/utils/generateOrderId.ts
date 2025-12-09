import Transaction from "@/models/transaction.model";

export async function generateUniqueOrderId(): Promise<string> {
  let orderId;

  while (true) {
    const randomId = Math.floor(100000 + Math.random() * 900000).toString();

    orderId = `#${randomId}`;

    const exists = await Transaction.findOne({ orderId });

    if (!exists) break;
  }

  return orderId;
}
