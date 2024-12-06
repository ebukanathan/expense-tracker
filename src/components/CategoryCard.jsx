import React from "react";

function CategoryCard({ src }) {
  return (
    <div className="flex flex-col gap-2 bg-[#fff] p-3 rounded-md">
      <div className=" rounded-2xl">
        <img src={src} alt="" className="w-12" />
      </div>
      <h3 className="font-semibold text-lg text-left">Bill & Utilities</h3>
      <p className="font-thin text-xs  text-left">$3,600</p>
      <input type="range" />
    </div>
  );
}

export default CategoryCard;
