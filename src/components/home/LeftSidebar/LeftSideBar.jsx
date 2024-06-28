import React from "react";
import "../../../assets/css/home/leftSidebar.css";
import LeftsidebarItems from "./LeftsidebarItems";
import items from "../../../data/LeftSidebarData.json";

export function LeftSideBar() {
  return (
    <div className="main_sidebar">
      {items.map((item, index) => (
        <LeftsidebarItems key={index} item={item} />
      ))}
      <div className="web-support">
        <span>
          <a href="jkdjnjn">web support</a>
          <br></br>
          <a href="jkdjn">report bug</a>
        </span>
      </div>
    </div>
  );
}
