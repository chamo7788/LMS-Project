import { useState } from "react";
import "../../../assets/css/home/leftSidebar.css";
import LeftsidebarItems from "./LeftsidebarItems";
import items from "../../../data/LeftSidebarData.json";

export function LeftSideBar() {
  const [pinned, setPinned] = useState(false);
  const togglePinned = () => {
    setPinned(!pinned);
  };
  return (
    <div className={`main_sidebar ${pinned ? "pinned" : ""}`}>
      <i className="sidebar-pin-button" onClick={togglePinned}>
        <i
          className={
            pinned ? "bi bi-text-indent-left" : "bi bi-text-indent-right"
          }
        ></i>
      </i>
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
