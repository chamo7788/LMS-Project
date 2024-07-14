import React from "react";
import {
  Navbar,
  LeftSideBar,
  TimeChart,
  PieChart,
  TodoList,
} from "../components";
import { Footer } from "../components/home/Footer/Footer";

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
