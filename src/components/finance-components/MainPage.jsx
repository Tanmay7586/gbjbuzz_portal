import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskItem from "../employee-components/TaskItem.jsx";
import FinanceSectionItems from "./FinanceSectionItems.jsx";
import ReportsSection from "./ReportsSection.jsx";

const MainPage = () => {
  const navigate = useNavigate();

  const handleFinanceSectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-8/12 p-3">
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="w-3/5 flex flex-col justify-between">
          <div className="mb-7">
            <div className="flex gap-80 items-center">
              <p className="text-xl">Tuesday 8:00pm</p>
            </div>
            <p className="text-3xl">Good Morning Elon!</p>
          </div>
          <ul className="text-sm flex-grow">
            <TaskItem
              color="bg-red-400"
              label="Today's Task"
              description="Design UI for GBJBUZZ Portal"
            />
            <TaskItem
              color="bg-yellow-300"
              label="Returned Task"
              description="Research on Attendance System"
            />
            <TaskItem
              color="bg-blue-400"
              label="Meeting"
              description="10:00 AM : Sketch note Client Meet"
            />
            <TaskItem
              color="bg-purple-400"
              label="Project"
              description="Gbjbuzz Portal"
            />
          </ul>
        </div>
        <div className="w-1/3 mt-8 flex flex-col justify-between">
          <div className="flex flex-col items-center rounded-3xl p-3 h-full ">
            <ul className="flex-grow cursor-pointer">
              <li onClick={() => handleFinanceSectionClick("/finance/budget-planning")}>
                <FinanceSectionItems message="Transactions" />
              </li>
              <li onClick={() => handleFinanceSectionClick("/finance/report-management")}>
                <FinanceSectionItems message="Invoice" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ReportsSection />
      </div>
    </div>
  );
};

export default MainPage;