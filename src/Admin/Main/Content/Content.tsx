import React, { FC } from "react";
import { filter } from "../../../assets";
import Products from "../Products/Products";

const Content: FC = () => {
  return (
    <div className="w-[100%] h-[80vh] bg-[#1F1D2B] rounded-md py-[28px] px-[24px] ">
      <div className="flex items-center justify-between ">
        <h1 className="text-white text-[20px] font-semibold">
          Products Management
        </h1>
        <div
          className="flex items-center justify-center p-[14px] rounded-lg gap-[8px] cursor-pointer"
          style={{ border: "1px solid #393C49" }}>
          <img src={filter} alt="" />
          <p className="text-[14px] text-white font-semibold">
            Manage Categories
          </p>
        </div>
      </div>

      <div className="flex items-start justify-start w-full">
        <ul className="flex items-center justify-start pt-[34px] gap-[32px] border-b w-full border-b-[#393C49] pb-[10px]">
          <li className="flex flex-col items-start justify-center relative text-[#EA7C69] cursor-pointer font-semibold text-[14px]">
            <span>Hot Dishes</span>
            <span className="w-[42px] h-[4px] rounded-md bg-[#EA7C69] top-[30px] absolute"></span>
          </li>
          <li className="flex flex-col items-start justify-center gap-2 text-[#fff] cursor-pointer font-semibold text-[14px]">
            Cold Dishes
          </li>
          <li className="flex flex-col items-start justify-center gap-2 text-[#fff] cursor-pointer font-semibold text-[14px]">
            Soup
          </li>
          <li className="flex flex-col items-start justify-center gap-2 text-[#fff] cursor-pointer font-semibold text-[14px]">
            Grill
          </li>
          <li className="flex flex-col items-start justify-center gap-2 text-[#fff] cursor-pointer font-semibold text-[14px]">
            Appetizer
          </li>
          <li className="flex flex-col items-start justify-center gap-2 text-[#fff] cursor-pointer font-semibold text-[14px]">
            Dessert
          </li>
        </ul>
      </div>
      <Products />
    </div>
  );
};

export default Content;
