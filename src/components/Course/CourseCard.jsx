import React from "react";
import "../../assets/css/Course/courseCard.css";

export function CourseCard({ image, title, instructor, subtitle }) {
    return (
        <div className='card-containter'>
            <div className="card-image">
                <img src={image} alt={title} className='card-logo'/>
            </div>
            <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="card-instructor">{instructor}</p>
                <p className="card-subtitle">{subtitle}</p>
            </div>
        </div>
    );
}
