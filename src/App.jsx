import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Messenger from "./pages/Messenger";
import SocialMedia from "./pages/SocialMedia";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import DashBoard from "./pages/DashBoard";
import FindAnswers  from "./pages/FindAnswers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/socialMedia" element={<SocialMedia />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/findAnswers/*" element={<FindAnswers />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
