import React from "react";
import "../../../assets/css/home/leftSidebar.css";

export default function LeftsidebarItems({ item }) {
  return (
    <div
      className="list"
      onClick={() => {
        window.location.pathname = item.link;
      }}
    >
      <div className="btn">
        <span>
          {item.icon && <i className={item.icon}></i>}
          <div className="btn-title">{item.title}</div>
        </span>
      </div>
    </div>
  );
}
