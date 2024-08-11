import React, { useState } from 'react';
import { CourseVideo } from "./CourseVideo";
import { CourseLeftSidebar } from "./CourseLeftSidebar";
import { Discuss } from "./CourseDiscuss";
import { CourseNote } from "./CourseNote";
import "../../assets/css/Course/CoursesPreview.css";

export function CoursePreview() {

    const [activeTab, setActiveTab] = useState('Transcript');

    return (
        <>
            <CourseVideo />
            <CourseLeftSidebar />

            <div className="Preview">
                <ul className="Preview-menu">
                    <button className="Preview-menu-item" onClick={() => setActiveTab('Transcript')}>Transcript</button>
                    <button className="Preview-menu-item" onClick={() => setActiveTab('Note')}>Note</button>
                    <button className="Preview-menu-item" onClick={() => setActiveTab('Downloads')}>Downloads</button>
                    <button className="Preview-menu-item" onClick={() => setActiveTab('Discuss')}>Discuss</button>
                </ul>
                <div className="Preview-main-div">
                    {activeTab === 'Transcript' && <div className="content-tab">
                        <h1>import  like this " Discuss / "</h1>
                    </div>}
                    {activeTab === 'Note' && <div className="content-tab">
                        <CourseNote />
                    </div>}
                    {activeTab === 'Downloads' && <div className="content-tab">
                        <h1>import  like this "  Discuss / "</h1>
                    </div>}
                    {activeTab === 'Discuss' && <div className="content-tab">
                        <Discuss />
                    </div>}
                </div>
            </div>

        </>
    );
}
