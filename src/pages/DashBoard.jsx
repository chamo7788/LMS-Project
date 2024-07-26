import React from "react";
import {
  Navbar,
  LeftSideBar,
  TimeChart,
  PieChart,
  TodoList,
  Profilecards,
  Footer,
  DBCourses,
} from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <DBCourses />
      <div className="charts">
        <TimeChart />
        <PieChart />
      </div>
      <Profilecards />
      <TodoList />
      <Footer />
    </div>
  );
}
