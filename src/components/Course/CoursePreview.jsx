import React, { useState } from 'react';
import { CourseVideo } from "./CourseVideo";
import { CourseLeftSidebar } from "./CourseLeftSidebar";
import { Discuss } from "./CourseDiscuss";
import { CourseNote } from "./CourseNote";
import "../../assets/css/Course/CoursesPreview.css";

export function CoursePreview() {

    const [activeTab, setActiveTab] = useState('Transcript');
    const [handleAddNoteWithTimestamp, setHandleAddNoteWithTimestamp] = useState(null);

    // This function will be passed to CourseVideo to capture handleAddNoteWithTimestamp
    const setNoteHandler = (handler) => {
        setHandleAddNoteWithTimestamp(() => handler);
    };

    return (
        <>
            <CourseVideo onSetNoteHandler={setNoteHandler}/>
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
                            <CourseNote onAddNote={handleAddNoteWithTimestamp} />  {/* Render CourseNote with the handler */}  
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