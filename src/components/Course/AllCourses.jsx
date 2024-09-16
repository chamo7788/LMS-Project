import React, { useState, useEffect } from "react";
import "../../assets/css/Course/allCourses.css";
import { CourseCard } from "./CourseCard";
import { Footer } from "../home/Footer/Footer.jsx";
import { ScrollToTopButton } from '../Foram/scroll-to-top';

export function AllCourses() {
    const [courses, setCourses] = useState({});
    const [visibleCounts, setVisibleCounts] = useState({});

    useEffect(() => {
        const loadCourses = async () => {
            const response = await fetch('http://localhost:3000/courses'); // Replace with your NestJS backend URL if different
            const coursesData = await response.json();

            const groupedCourses = coursesData.reduce((acc, course) => {
                if (!acc[course.subject]) acc[course.subject] = [];
                acc[course.subject].push(course);
                return acc;
            }, {});

            setCourses(groupedCourses);

            const initialVisibleCounts = Object.keys(groupedCourses).reduce((acc, subject) => {
                acc[subject] = 4;
                return acc;
            }, {});
            setVisibleCounts(initialVisibleCounts);
        };
        loadCourses();
    }, []);

    const showMoreCourses = (subject) => {
        setVisibleCounts(prevCounts => ({
            ...prevCounts,
            [subject]: prevCounts[subject] + 4
        }));
    };

    return (
        <>
            <div className="allCourse-containter">
                {Object.keys(courses).map(subject => (
                    <div key={subject}>
                        <div className="subject-title">{subject}</div>
                        <div className="courses-container">
                            {courses[subject].slice(0, visibleCounts[subject]).map((course, index) => (
                                <CourseCard
                                    key={index}
                                    image={course.image}
                                    title={course.title}
                                    instructor={course.instructor}
                                    subtitle={course.subtitle}
                                    courseId={course.courseId}
                                />
                            ))}
                        </div>
                        {visibleCounts[subject] < courses[subject].length && (
                            <button className="show-more-button" onClick={() => showMoreCourses(subject)}>
                                Show More
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}