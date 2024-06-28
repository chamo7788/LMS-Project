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
    </div>
  );
}
