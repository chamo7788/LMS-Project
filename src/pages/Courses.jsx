import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, LeftSideBar, AllCourses, CourseDetails, CoursePreview } from "../components";

export default function Courses() {
    const location = useLocation();
    const isCoursePreview = location.pathname.includes('/preview');

    return (
        <div>
            <Navbar />
            {!isCoursePreview && <LeftSideBar />}
            <Routes>
                <Route path="/" element={<AllCourses />} />
                <Route path="/course/:courseId" element={<CourseDetails />} />
                <Route path="/course/:courseId/preview" element={<CoursePreview />} />
            </Routes>
        </div>
    );
}
