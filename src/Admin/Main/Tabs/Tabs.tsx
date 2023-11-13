import React from "react";
import {
  about,
  discount,
  heart,
  security,
  smallMarket,
  smallNotification,
} from "../../../assets";

const Tabs = () => {
  return (
    <div className="tabs w-[375px] bg-[#1F1D2B] h-[80vh] rounded-[8px] overflow-y-auto">
      <div className="flex flex-col">
        <div className="flex items-start justify-start gap-3 cursor-pointer p-[24px]">
          <img src={heart} alt="img" className="pt-1 w-[15px]" />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-white text-[14px] font-medium">Appereance</p>
            <p className="text-[#ABBBC2] font-normal text-[12px]">
              Dark and Light mode, Font size
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start gap-3 cursor-pointer p-[24px]">
          <img src={smallMarket} alt="img" className="pt-1 w-[15px]" />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-white text-[14px] font-medium">
              Your Restaurant
            </p>
            <p className="text-[#ABBBC2] font-normal text-[12px]">
              Dark and Light mode, Font size
            </p>
          </div>
        </div>

        <div
          className="flex items-center justify-between cursor-pointer"
          style={{ backgroundColor: "rgba(234, 124, 105, 0.26)" }}>
          <div className="flex items-start justify-start gap-3  p-[24px]">
            <img src={discount} alt="img" className="pt-1 w-[15px]" />
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-[#EA7C69] text-[14px] font-medium">
                Products Management
              </p>
              <p className="text-[#ABBBC2] font-normal text-[12px]">
                Manage your product, pricing, etc
              </p>
            </div>
          </div>
          <div className="w-[4px] h-[40px] rounded-[30px] bg-[#EA7C69]"></div>
        </div>

        <div className="flex items-start justify-start gap-3 cursor-pointer p-[24px]">
          <img src={smallNotification} alt="img" className="pt-1 w-[15px]" />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-white text-[14px] font-medium">Notifications</p>
            <p className="text-[#ABBBC2] font-normal text-[12px]">
              Customize your notifications
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start gap-3 cursor-pointer p-[24px]">
          <img src={security} alt="img" className="pt-1 w-[15px]" />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-white text-[14px] font-medium">Security</p>
            <p className="text-[#ABBBC2] font-normal text-[12px]">
              Configure Password, PIN, etc
            </p>
          </div>
        </div>

        <div className="flex items-start justify-start gap-3 cursor-pointer p-[24px]">
          <img src={about} alt="img" className="pt-1 w-[15px]" />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-white text-[14px] font-medium">About Us</p>
            <p className="text-[#ABBBC2] font-normal text-[12px]">
              Find out more about Posly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
