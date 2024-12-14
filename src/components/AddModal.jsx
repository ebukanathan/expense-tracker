import React from "react";

function AddModal({ onClick }) {
  return (
    <div
      className=" fixed inset-0 min-h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
      //   onClick={onClick}
    >
      <div className="w-1/3 bg-white text-black rounded-lg p-6 ">
        <div className="text-2xl text-center mb-4">Add Expenses</div>
        <form action="" className="flex flex-col ">
          <div className=" flex  flex-col justify-start  gap-2 w-[100%] mx-auto md:flex-row w-[75%]">
            <label htmlFor="" className="text-xl">
              expenses
            </label>
            <input type="text" className="border-2 rounded-md p-1  mb-3" />
          </div>
          <div className=" flex flex-col justify-start gap-2 w-[100%] mx-auto md:flex-row w-[75%]">
            <label htmlFor="" className="text-xl">
              Category
            </label>
            <select
              name=""
              id=""
              className="border-2 rounded-md p-1 mb-3 w-[100%]"
            >
              <option value="">Food</option>
              <option value="">Bills and Utility</option>
              <option value="">Health</option>
              <option value="">Personal</option>
              <option value="">Transportation</option>
            </select>
          </div>
          <div className="flex  flex-col justify-start gap-2 w-[100%] mx-auto md:flex-row w-[75%]">
            <label htmlFor="" className="text-xl">
              Amount
            </label>
            <input
              type="text"
              className="border-2 rounded-md ml-2 p-1 mb-3"
              placeholder="$"
            />
          </div>
          <button
            type="submit"
            className="bg-red-200 w-1/3 rounded-lg  mx-auto p-2 my-2 hover:opacity-75"
            onClick={onClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
