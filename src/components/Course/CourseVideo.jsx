import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/Course/courseVideo.css";
import video from "../../assets/videos/v1.mp4";

export function CourseVideo({ onSetNoteHandler }) {
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleTimeUpdate = () => {
                setCurrentTime(videoElement.currentTime);
            };
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    useEffect(() => {
        if (onSetNoteHandler) {
            onSetNoteHandler(handleAddNoteWithTimestamp);
        }
    }, [onSetNoteHandler]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleAddNoteWithTimestamp = (note) => {
        const timestampedNote = `${formatTime(currentTime)} - ${note}`;
        return timestampedNote;
    };

    return (
        <>
            <section className="path">
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
            </section>
            <div className="video_page">
                <div className="video">
                    <video ref={videoRef} controls controlsList="nodownload" width="900" height="600">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
}
