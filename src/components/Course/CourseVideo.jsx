import React from "react";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import "../../assets/css/Course/courseVideo.css";
import video from "../../assets/videos/v1.mp4";

export function CourseVideo() {

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

  );
}
