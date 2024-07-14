import React from "react";
import { Navbar, LeftSideBar, BarChart, PieChart, TodoList, Profilecards } from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <Profilecards/>
      <TodoList/>
     
    </div>
    
  );
}
