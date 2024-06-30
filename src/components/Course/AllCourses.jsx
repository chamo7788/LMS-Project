import React, { useState, useEffect } from "react";
import "../../assets/css/Course/allCourses.css";
import { CourseCard } from "./CourseCard";
import coursesData from "../../data/courses.json"; // Adjust the path according to your project structure

export function AllCourses() {
    const [courses, setCourses] = useState({});
    const [visibleCounts, setVisibleCounts] = useState({});

    useEffect(() => {
        const loadCourses = async () => {
            const coursesWithImages = await Promise.all(coursesData.map(async (course) => {
                const image = await import(`../../assets/images/${course.image}`).then(module => module.default);
                return { ...course, image };
            }));
            
            const groupedCourses = coursesWithImages.reduce((acc, course) => {
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
    );
}
