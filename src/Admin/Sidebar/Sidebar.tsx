import React from "react";
import {
  chart,
  discount,
  home,
  logout,
  market,
  message,
  notification,
  setting,
} from "../../assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col p-[10px] items-center justify-center bg-[#1F1D2B] h-[100vh] rounded-2xl fixed left-0 top-0 overflow-y-auto">
      <ul className="flex flex-col items-center justify-start h-full gap-5 py-[20px]">
        <li
          className="p-[15px] rounded-xl"
          style={{ background: "rgba(235, 150, 106, 0.1)" }}>
          <a href="#">
            <img src={market} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px]">
          <a href="#" className="flex p-[20px]">
            <img src={home} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px]">
          <a href="#" className="flex p-[20px]">
            <img src={discount} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px]">
          <a href="#" className="flex p-[20px]">
            <img src={chart} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px]">
          <a href="#" className="flex p-[20px]">
            <img src={message} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px]">
          <a href="#" className="flex p-[20px]">
            <img src={notification} alt="market" />
          </a>
        </li>
        <li className="px-[15px] py-[5px] 2xl:py-[10px] bg-[#252836] rounded-xl">
          <a
            href="#"
            className="flex my-[5px] p-[20px] bg-[#EA7C69] rounded-[8px]"
            style={{ boxShadow: "0px 8px 24px 0px rgba(234, 124, 105, 0.32)" }}>
            <img src={setting} alt="market" />
          </a>
        </li>
        <li className="px-[15px]">
          <a href="#" className="flex p-[20px]">
            <img src={logout} alt="market" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
