import React from "react";

function TransactionCard() {
  return (
    <div className="bg-[#fff] flex justify-around items-center gap-2">
      <p className="font-thin text-xs  text-left">22 August</p>
      <div className="flex flex-col">
        <h4 className="font-semibold text-xs text-left">
          Door Handle Replacement
        </h4>
        <p className="font-thin text-xs  text-left">Bills & Utilities</p>
      </div>
      <p className="font-thin text-xs  text-left">$3,600</p>
      <button className="p-3 rounded-md">cash</button>
    </div>
  );
}

export default TransactionCard;
