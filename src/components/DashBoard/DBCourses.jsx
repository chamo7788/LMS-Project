import React, { useState, useEffect } from "react";
import "../../assets/css/DashBoard/DBCourses.css";
import { EnrollingCourses } from "./EnrollingCourses";
import coursesData from "../../data/courses.json"; // Adjust the path according to your project structure
import courseIdData from "../../data/DBCourses.json";

// const subjectColors = {
//   Artificial: "#FFD700", // Gold
//   Programming: "#ADD8E6", // Light Blue
//   Data: "#FFB6C1", // Light Pink
//   // Add more subjects and their corresponding colors
// };

export function DBCourses() {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Adjust the initial count as needed

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesWithImages = await Promise.all(
          coursesData.map(async (course) => {
            const image = await import(
              `../../assets/images/${course.image}`
            ).then((module) => module.default);
            return { ...course, image };
          })
        );

        const filteredCourses = coursesWithImages
          .filter((course) =>
            courseIdData.courses.some((c) => c.courseId === course.courseId)
          )
          .map((course) => {
            const courseInfo = courseIdData.courses.find(
              (c) => c.courseId === course.courseId
            );
            return {
              ...course,
              percentageComplete: courseInfo.percentageComplete,
            };
          });

        setFilteredCourses(filteredCourses);
      } catch (error) {
        console.error("Error loading courses: ", error);
      }
    };
    loadCourses();
  }, []);

  const showMoreCourses = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Adjust the increment as needed
  };

  return (
    <div className="allCourse-container">
      <div className="courses-container">
        {filteredCourses.slice(0, visibleCount).map((course, index) => (
          <EnrollingCourses
            key={index}
            image={course.image}
            title={course.title}
            instructor={course.instructor}
            subtitle={course.subtitle}
            courseId={course.courseId}
            backgroundColor={course.backgroundcolor}
            percentageComplete={course.percentageComplete}
          />
        ))}
      </div>
      {visibleCount < filteredCourses.length && (
        <button className="show-more-button" onClick={showMoreCourses}>
          Show More
        </button>
      )}
    </div>
  );
}
