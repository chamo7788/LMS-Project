import { useState } from "react";
import "../assets/css/Chat/messenger.css";
import { Content, Sidebar } from "../components";

export default function Messenger() {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger">
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  );
}
