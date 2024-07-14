import React from "react";
import { Navbar, LeftSideBar, BarChart, PieChart, TodoList, Profilecards } from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <div className="charts">
        <TimeChart />
        <PieChart />
      </div>
      <TodoList />
      <Footer/>
    </div>
    
  );
}
