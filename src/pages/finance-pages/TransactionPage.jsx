import React from "react";
import Sidebar from "../../components/Sidebar";
import TransactionsPageComponent from "@/components/finance-components/TransactionsPage";

const TransactionPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TransactionsPageComponent />
    </div>
  );
};

export default TransactionPage;
