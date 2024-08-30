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
  EditProfile
} from "../components";
import { Routes, Route, useLocation } from "react-router-dom";

export default function DashBoard() {
  const location = useLocation();
  const isCoursePreview = location.pathname.includes('/EditProfile');

  return (
    <div>
      <Navbar />
      <Profilecards />
      <LeftSideBar />     
      <div className="charts">
        <TimeChart />
        <PieChart />
      </div>
      <DBCourses />
      <TodoList />
      <Footer />
      <Routes>
        <Route path="/dashBoard/editProfile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}
