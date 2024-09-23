import React, { useState } from "react";
import { FaHome, FaGraduationCap, FaBook, FaCertificate, FaRobot, FaPython, FaQuestionCircle, FaCheckCircle } from "react-icons/fa"; 
import "../../assets/css/Course/courseLeftSidebar.css";

export function CourseLeftSidebar() {
  // State to handle the tick mark for completed courses
  const [completedCourses, setCompletedCourses] = useState({
    googleAI: false,
    promptEng: false,
    pythonEverybody: false,
    ibmDataScience: false,
  });

  const toggleCourseCompletion = (course) => {
    setCompletedCourses({
      ...completedCourses,
      [course]: !completedCourses[course],
    });
  };

  return (
    <div className="sidebox">
      <ul className="sidebar-menu">

        <li className="sidebar-heading">Completed Courses</li>
        <li
          className="sidebar-item"
          onClick={() => toggleCourseCompletion("googleAI")}
        >
          <FaCheckCircle
            className={`sidebar-icon ${
              completedCourses.googleAI ? "completed" : ""
            }`}
          />
          <span>Google AI Essentials</span>
        </li>

        <li
          className="sidebar-item"
          onClick={() => toggleCourseCompletion("promptEng")}
        >
          <FaCheckCircle
            className={`sidebar-icon ${
              completedCourses.promptEng ? "completed" : ""
            }`}
          />
          <span>Prompt Engineering</span>
        </li>

        <li
          className="sidebar-item"
          onClick={() => toggleCourseCompletion("pythonEverybody")}
        >
          <FaCheckCircle
            className={`sidebar-icon ${
              completedCourses.pythonEverybody ? "completed" : ""
            }`}
          />
          <span>Python for Everybody</span>
        </li>

        <li
          className="sidebar-item"
          onClick={() => toggleCourseCompletion("ibmDataScience")}
        >
          <FaCheckCircle
            className={`sidebar-icon ${
              completedCourses.ibmDataScience ? "completed" : ""
            }`}
          />
          <span>IBM Data Science</span>
        </li>

      </ul>

      <div className="help-tab">
        <FaQuestionCircle className="sidebar-icon" />
        <span>Help</span>
      </div>
    </div>
  );
}
