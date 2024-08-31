import React from "react";
import {
  Navbar,
  LeftSideBar,
  Footer,
  DBPreview,
} from "../components"; 
import { EditProfile } from "../components/DashBoard/EditProfile";
import { Routes, Route, useLocation } from "react-router-dom";

export default function DashBoard() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <Routes>
        <Route path="/" element={<DBPreview />} />
        <Route path="/dashBoard/editProfile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}
