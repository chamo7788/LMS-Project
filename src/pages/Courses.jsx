import React from "react";
import { AllCourses, CenterComponent, CourseCard, CoursesDetails, LeftSideBar, Navbar  } from "../components";

export default function Courses(){
    return (
        <div>
            <Navbar/>
            <LeftSideBar/>
            <AllCourses/>
        </div>
        
    );
}