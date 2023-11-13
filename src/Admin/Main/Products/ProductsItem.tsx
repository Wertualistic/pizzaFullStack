import React from "react";
import { food, pen } from "../../../assets";

const ProductsItem = () => {
  return (
    <div
      className="product w-[221px] flex flex-col items-center justify-center rounded-lg cursor-pointer h-[329px] overflow-hidden"
      style={{ border: "1px solid #393C49" }}>
      <div className="p-[34px] pb-0 w-full flex flex-col items-center justify-center">
        <img src={food} alt="" className="rounded-full" />
        <p className="text-[18px] text-white font-medium text-center pt-[14px]">
          Spicy seasoned seafood noodles
        </p>
        <div className="flex text-[#ABBBC2] gap-2 pt-2">
          <p>$ 2.29</p> • <p>20 Bowls</p>
        </div>
      </div>
      <div
        className="edit flex items-center justify-center gap-1 py-[16px] mt-[10px] w-full"
        style={{
          backgroundColor: "rgba(234, 124, 105, 0.26)",
          borderRadius: "0px 0px 8px 8px",
        }}>
        <img src={pen} alt="" />
        <span className="text-[#EA7C69] text-[18px] font-semibold">
          Edit dish
        </span>
      </div>
    </div>
  );
};

export default ProductsItem;
