import React from "react";
import { Navbar, LeftSideBar, TimeChart, PieChart, TodoList, Profilecards, Footer} from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <div className="charts">
        <TimeChart />
        <PieChart />
      </div>
      <Profilecards/>
      <TodoList />
      <Footer />
    </div>
    
  );
}
