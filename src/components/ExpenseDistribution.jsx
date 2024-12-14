import React from "react";

function ExpenseDistribution() {
  return (
    <>
      <div className="bg-[#fff]  rounded-lg p-2">
        <h3 className="font-semibold text-lg text-left">
          Expense Distribution
        </h3>
        <p className="font-thin text-xs  text-left">from 01-22 August</p>
        <div className="flex ">
          <ul className="font-normal text-sm list-disc p-3 w-1/3">
            <li className="text-left">Bills and Utility</li>
            <li className="text-left">Food</li>
            <li className="text-left">Personal</li>
            <li className="text-left">Healthcare</li>
            <li className="text-left">Education</li>
            <li className="text-left">Transport</li>
            <li className="text-left">Investment</li>
            <li className="text-left">Other</li>
          </ul>
          <div className="grid place-items-center w-2/3">Piechart</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseDistribution;
