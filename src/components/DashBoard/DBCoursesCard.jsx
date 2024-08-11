import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/DashBoard/DBCoursesCard.css";

export function DBCoursesCard({
  image,
  title,
  instructor,
  subtitle,
  courseId,
  backgroundColor,
  percentageComplete,
}) {
  return (
    <Link to={`/courses/course/${courseId}`} className="dbcourse-card-link">
      <div className="dbcard-container" style={{ backgroundColor }}>
        <div className="dbcard-image">
          <img src={image} alt={title} className="dbcard-logo" />
        </div>
        <div className="dbcard-content">
          <p className="dbcard-title">{title}</p>
          <p className="dbcard-instructor">{instructor}</p>
          <p className="dbcard-subtitle">{subtitle}</p>
        </div>
        <div className="compelationbar">
          <p>{percentageComplete}%</p>
          <div className="complete"></div>
        </div>
      </div>
    </Link>
  );
}
