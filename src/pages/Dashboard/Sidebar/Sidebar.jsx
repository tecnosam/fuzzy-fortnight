import React from "react";
import Data from "../../../data/Data";
import "./Sidebar.css";
import { images } from "../../../assets/images";
const Sidebar = () => {
  const { thirteen } = images();
  const { tabs } = Data();
  return (
    <div className="sidebar">
      <div className="tab-top">
        <img src={thirteen} alt="" />
        <p>Jolomi Olajide</p>
        <span>19/1621</span>
      </div>

      <div className="sidebar-tabs">
        {tabs.map((val, idx) => (
          <div key={idx}>
            <p>{val.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
