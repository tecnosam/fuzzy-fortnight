import React from "react";
import Sidebar from "../../../pages/Dashboard/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: window.innerHeight }}>
      <Sidebar />
      <div style={{ height: "100%", overflowY: "auto", width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
