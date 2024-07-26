import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/DashBoard/courseCard.css";

export function EnrollingCourses({
  image,
  title,
  instructor,
  subtitle,
  courseId,
  backgroundColor,
  percentageComplete,
}) {
  return (
    <Link to={`/courses/course/${courseId}`} className="course-card-link">
      <div className="card-container" style={{ backgroundColor }}>
        <div className="card-image">
          <img src={image} alt={title} className="card-logo" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-instructor">{instructor}</p>
          <p className="card-subtitle">{subtitle}</p>
          <div className="compelationbar">
            <p>{percentageComplete}%</p>
            <div className="complete"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
