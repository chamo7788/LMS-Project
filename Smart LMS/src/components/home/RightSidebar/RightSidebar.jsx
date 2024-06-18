import { useState } from "react";
import "../../../assets/css/home/RightSidebar.css";
import RightSidebarItems from "./RightsidebarItems";
import items from "../../../data/RightSidebarData.json";

export function RightSidebar() {
  const [pinned, setPinned] = useState(false);
  const togglePinned = () => {
    setPinned(!pinned);
  };
  return (
    <div className={`rightsidebar ${pinned ? "pinned" : ""}`}>
      <i className="pin-button" onClick={togglePinned}>
        <i
          className={
            pinned ? "bi bi-text-indent-left" : "bi bi-text-indent-right"
          }
        ></i>
      </i>
      {items.map((item, index) => (
        <RightSidebarItems key={index} item={item} />
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
