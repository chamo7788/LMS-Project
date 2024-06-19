import React from "react";
import {
  Navbar,
  LeftSideBar,
  RightSidebar,
  Post,
  AddPost,
} from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AddPost />
      <Post />
      <Post />
      <RightSidebar />
      <LeftSideBar />
    </div>
  );
}
