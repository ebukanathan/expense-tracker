import React from "react";

function CategoryCard({ tag, categ, amount }) {
  return (
    <div className="flex flex-col gap-2 bg-[#fff] p-3 rounded-md">
      <div className=" rounded-2xl">
        <img src={tag} alt="" className="w-12" />
      </div>
      <h3 className="font-semibold text-lg text-left capitalize">{categ}</h3>
      <p className="font-thin text-xs  text-left">`$ ${amount}`</p>
      <input type="range" />
    </div>
  );
}

export default CategoryCard;
