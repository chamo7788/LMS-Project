import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/Course/courseVideo.css";
import video from "../../assets/videos/v1.mp4";

export function CourseVideo({ onSetNoteHandler }) {  // Accept a function to expose the handler
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);


  return (
  <><section className="path">
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
        <video controls controlsList="nodownload" width="900" height="600">
         <source src={video} type="video/mp4" />
            {/* <track
      src={subtitles}
      kind="subtitles"
      srcLang="en"
      label="English"
      default
    />*/}

          </video>
          {/*<ReactPlayer
      url={"https://www.youtube.com/watch?v=6gcaueR_TPg"}
      light={true}
      controls={true}
      height="400px"
      width="700px"
    />*/}

        </div>
      </div></>

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

}
