import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Wallet,
  FileText,
  LineChart,
  Calculator,
  FileCheck,
} from "lucide-react";

const ReportCard = ({ title, icon: Icon, route }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="p-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
      onClick={() => navigate(route)}
    >
      <Icon className="text-gray-600" />
      <span className="text-sm font-medium">{title}</span>
    </Card>
  );
};

const ReportsSection = () => {
  return (
    <div className="px-8 py-5 rounded-lg shadow bg-blue-50 ">
      <h2 className="text-2xl font-semibold text-yellow-950 mb-4">Reports</h2>
      <div className="grid grid-cols-3 gap-4">
        <ReportCard
          title="Revenue and Sales Analysis"
          icon={BarChart}
          route="/finance/revenue-sales"
        />
        <ReportCard
          title="Expenses Management"
          icon={Wallet}
          route="/finance/expenses-management"
        />
        <ReportCard
          title="Detailed Report"
          icon={FileText}
          route="/finance/detailed-report"
        />
        <ReportCard
          title="Financial Analysis"
          icon={LineChart}
          route="/finance/financial-analysis"
        />
        <ReportCard
          title="Budgeting and Forecasting"
          icon={Calculator}
          route="/finance/budgeting-forecasting"
        />
        <ReportCard
          title="Tax Compliance"
          icon={FileCheck}
          route="/finance/tax-compliance"
        />
      </div>
    </div>
  );
};

export default ReportsSection;
