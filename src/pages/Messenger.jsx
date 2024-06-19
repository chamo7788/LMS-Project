import { useState } from "react";
import "../assets/css/Chat/messenger.css";
import Content from "../components/Chat/Content";
import Sidebar from "../components/Chat/Sidebar";

export default function Messenger() {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger">
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  );
}
