import React from "react";

function Summary({ onClick }) {
  return (
    <>
      <div className="flex  bg-[#fff]  justify-between items-center rounded-lg">
        <div className="w-[200px] h-[20 0px]   rounded-[100px] bg-cyan-300 border-0">
          <img src="" alt="" />
        </div>
        <div className=" flex flex-col  w-1/2 ml-6 justify-start items-start my-2">
          <div className="flex gap-1 m-2">
            <button
              className="text-sm bg-blue-800 text-white p-1 rounded-lg capitalize hover:opacity-75"
              onClick={onClick}
            >
              add expenses
            </button>
            <button className="text-sm bg-red-800 text-white p-1 rounded-lg capitalize hover:opacity-75">
              add Budget
            </button>
          </div>
          <h3 className="font-thin text-base">Good Morning,</h3>
          <h3 className="font-semibold text-lg">Sophie Campbell</h3>
          <p className="font-thin text-xs">22 august Thursday</p>
          <p className="font-thin text-xs mt-3">Month:August arr</p>
          <div className="p-2 bg-sky-300">Bar</div>
          <p className="font-thin text-xs">Remaining Days</p>
          <p className="font-thin text-xs">05 weekdays</p>
          <p className="font-thin text-xs">04 weekends & Holidays</p>
        </div>
      </div>
    </>
  );
}

export default Summary;
