import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Foram/subjects.css';
import subjects from "../../data/subjects.json";
import { ScrollToTopButton } from './scroll-to-top';

export function Subjects({ onCreateQuestionClick }) {
    return (
        <div className="findAnswer-container">
            <div className="findAnswer-navbar">
                <select className="dropdown-subjects">
                    {subjects.map((subject, index) => (
                        <option className="options" key={index}>
                            <Link to={subject.link}>{subject.Subjecttitle}</Link>
                        </option>
                    ))}
                </select>
                <div className="dropdown-sort">
                    <select>
                        <option className="options" value="your">Your</option>
                        <option className="options" value="new">New</option>
                        <option className="options" value="top">Top</option>
                        <option className="options" value="best">Best</option>
                    </select>
                </div>
                <div className="create-question" onClick={onCreateQuestionClick}>
                    <span className="create-title">Create</span>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="notification-bell">
                    <i className="fa-regular fa-bell"></i>
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    );
}
