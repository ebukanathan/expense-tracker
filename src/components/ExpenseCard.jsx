import React from "react";

function ExpenseCard({ src }) {
  return (
    <div className="flex gap-2 justify-start  items-center p-2 bg-[#fff] rounded-lg ">
      <img src={src} alt="" className="w-[30px]" />
      <div className="flex flex-col items-start">
        <p className="font-thin text-xs  text-left">22 August</p>
        <h4 className="font-semibold text-xs text-left">
          LinkedIn Subscription
        </h4>
        <p className="font-thin text-xs  text-left">$30</p>
      </div>
    </div>
  );
}

export default ExpenseCard;
