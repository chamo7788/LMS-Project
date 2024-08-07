import React from "react";
import {
  Navbar,
  LeftSideBar,
  TimeChart,
  PieChart,
  TodoList,
  EditProfile,
} from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <EditProfile/>
      
    </div>
  );
}
