import React from "react";
import "../../assets/css/Course/courseCard.css";
import courseImage from '../../assets/images/Course-image.png';
 
export function CourseCard(){
    return (

        <div className='card-containter'>
            <div className="card-image">
                <img src={courseImage} alt="Logo" className='card-logo'/>
            </div>
            <div class="card-content">
                <p className="card-title">Google AI Essentials</p>
                <p className="card-instractor">Google</p>
                <p className="card-subtitle">Beginner · Course</p>
            </div>
        </div>
    );
}