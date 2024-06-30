import React from "react";
import { Navbar, LeftSideBar, BarChart, PieChart } from "../components";

export default function DashBoard() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <BarChart />
      <PieChart />
    </div>
  );
}
