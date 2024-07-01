import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, LeftSideBar, AllCourses } from "../components";
import { CourseDetails } from "../components/Course/CoursesDetails";

export default function Courses() {
    return (
        <div>
            <Navbar />
            <LeftSideBar />
            <Routes>
                <Route path="/" element={<AllCourses />} />
                <Route path="course/:courseId" element={<CourseDetails />} />
            </Routes>
        </div>
    );
}
