import React from "react";
import "../../../assets/css/home/leftSidebar.css";

export default function LeftsidebarItems({ item }) {
  return (
    <div className="list">
      <div
        className="btn"
        onClick={() => {
          window.location.pathname = item.link;
        }}
      >
        <span>
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
      </div>
    </div>
  );
}
