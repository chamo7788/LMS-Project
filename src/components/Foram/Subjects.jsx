import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Foram/subjects.css';
import subjects from "../../data/subjects.json";

export function Subjects({ onCreateQuestionClick }) {
    return (
        <div className="findAnswer-container">
            <div className="subjects">
                {subjects.map((subject, index) => (
                    <div className="subject-card" key={index}>
                        <Link to={subject.link}>
                            <p className="subjects-title">{subject.Subjecttitle}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="findAnswer-nevbar">
                <div className="dropdown-sort">
                    <select>
                        <option value="your">Your</option>
                        <option value="new">New</option>
                        <option value="top">Top</option>
                        <option value="best">Best</option>
                    </select>
                </div>
                <div className="creact-question" onClick={onCreateQuestionClick}>
                    <span className="create-title">Create</span>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="notification-bell">
                    <i className="fa-regular fa-bell"></i>
                </div>
            </div>
        </div>
    );
}
