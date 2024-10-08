import React from "react";
import Sidebar from "../../components/Sidebar";
import RightSidebar from "../../components/employee-components/RightSidebar";
import MainPage from "@/components/finance-components/MainPage";

const FinanceHomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainPage />
      <RightSidebar />
    </div>
  );
};

export default FinanceHomePage;
