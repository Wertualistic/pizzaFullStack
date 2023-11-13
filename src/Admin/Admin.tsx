import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="bg-[#252836] w-full h-[100vh] pl-[140px]">
        <Main />
      </div>
    </>
  );
};

export default Admin;
