import React from "react";
import { LeftSideBar, RightSidebar } from "../components";
import Post from "../components/home/Post";
import AddPost from "../components/home/AddPost";

export default function Home() {
  return (
    <div>
      <RightSidebar />
      <AddPost />
      <Post/> 
      <Post/> 
      <Post/> 
      <LeftSideBar />
    </div>
  );
}
