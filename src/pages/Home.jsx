import React from "react";
import { Navbar, LeftSideBar, RightSidebar } from "../components";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <RightSidebar />
      <LeftSideBar />
    </div>
  );
}
