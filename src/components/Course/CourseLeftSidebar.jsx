import React from "react";
import { FaHome, FaGraduationCap, FaBook, FaCertificate, FaRobot, FaPython, FaQuestionCircle } from "react-icons/fa"; 
import "../../assets/css/Course/courseLeftSidebar.css";

export function CourseLeftSidebar() {
  return (
    <div className="sidebox">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FaHome className="sidebar-icon" />
          <span>Home</span>
        </li>
        <li className="sidebar-item">
          <FaGraduationCap className="sidebar-icon" />
          <span>My Career</span>
        </li>
        <li className="sidebar-heading">Learn</li>
        <li className="sidebar-item">
          <FaBook className="sidebar-icon" />
          <span>My Library</span>
        </li>
        <li className="sidebar-item">
          <FaRobot className="sidebar-icon" />
          <span>AI Coaching</span>
        </li>
        <li className="sidebar-heading">Apply</li>
        <li className="sidebar-item">
          <FaCertificate className="sidebar-icon" />
          <span>Certifications</span>
        </li>
        <li className="sidebar-heading">Trending Topics</li>
        <li className="sidebar-item">
          <FaRobot className="sidebar-icon" />
          <span>Artificial Intelligence</span>
        </li>
        <li className="sidebar-item">
          <FaPython className="sidebar-icon" />
          <span>Python for Beginners</span>
        </li>
      </ul>
      <div className="help-tab">
        <FaQuestionCircle className="sidebar-icon" />
        <span>Help</span>
      </div>
    </div>
  );
}