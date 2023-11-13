import React from "react";
import ProductsItem from "./ProductsItem";

const Products = () => {
  return (
    <div className=" w-full py-[24px] flex flex-col items-start justify-center">
      <div className="products flex flex-wrap gap-[16px] items-start justify-start w-full h-[350px] overflow-y-scroll">
        <div
          className="w-[221px] flex items-center justify-center py-[110px] px-[64px] rounded-lg cursor-pointer h-[329px]"
          style={{ border: "2px dashed #EA7C69" }}>
          <div className="flex flex-col items-center justify-center w-full">
            <span className="text-[42px] text-[#EA7C69]">+</span>
            <p className="text-[16px] text-[#EA7C69] font-semibold whitespace-nowrap">
              Add new dish
            </p>
          </div>
        </div>
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
      </div>
      <div className="flex items-center justify-center gap-[8px] h-[100px]">
        <button
          style={{ border: "1px solid #EA7C69" }}
          className="py-[14px] px-[34px] rounded-lg text-[18px] text-[#EA7C69] transition-all hover:text-[#fff] hover:bg-[#EA7C69]">
          Discard changes
        </button>
        <button className="bg-[#EA7C69] py-[14px] px-[34px] rounded-lg text-[18px] text-[#fff] hover:bg-blend-darken">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Products;
