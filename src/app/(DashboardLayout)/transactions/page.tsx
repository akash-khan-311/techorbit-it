import dynamic from "next/dynamic";

const TransactionList = dynamic(
  () => import("@/components/modules/Dashboard/TransactionList")
);

import React from "react";

const PaymentInfoPage = () => {
  return (
    <div>
      <TransactionList />
    </div>
  );
};

export default PaymentInfoPage;
