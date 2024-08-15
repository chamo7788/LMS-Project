import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/Course/courseVideo.css";
import video from "../../assets/videos/v1.mp4";

export function CourseVideo({ onSetNoteHandler }) {  // Accept a function to expose the handler
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (onSetNoteHandler) {
            onSetNoteHandler(handleAddNoteWithTimestamp); // Expose the function when the component mounts
        }
    }, [onSetNoteHandler, currentTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        // Fixed the template literal syntax
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAddNoteWithTimestamp = (note) => {
        const timestampedNote = `${formatTime(currentTime)} - ${note}`;  // Fixed the template literal syntax
        return timestampedNote;
    };
    
    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    return (
        <div className="video_page">
            <div className="path">
                <Link to="/home">
                    <span>Home</span>
                </Link>
                <span>&gt;</span>
                <Link to="/home">
                    <span>Module 1</span>
                </Link>
                <span>&gt;</span>
                <Link to="/home">
                    <span>Looping constructs</span>
                </Link>
            </div>
            <div className="video-container">
                <video 
                    ref={videoRef} 
                    controls 
                    controlsList="nodownload" 
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
