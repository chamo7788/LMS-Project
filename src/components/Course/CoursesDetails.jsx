import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Course/CoursesDetails.css";
import courses from "../../data/courses.json";
import { Footer } from "../home/Footer/Footer.jsx";

export function CourseDetails() {

  const { courseId } = useParams(); // Get courseId from URL parameters
  const courseDetails = courses.find(course => course.courseId === courseId);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate
  const enrolledCourses = useSelector(state => state.enrolledCourses); // Get enrolled courses from state

  const [expandedModules, setExpandedModules] = useState(
    Array(courseDetails?.details?.modules?.length || 0).fill(false)
  );

  const toggleDetails = (index) => {
    setExpandedModules((prevExpandedModules) =>
      prevExpandedModules.map((isExpanded, i) =>
        i === index ? !isExpanded : isExpanded
      )
    );
  };

  const handleEnroll = () => {
    if (isEnrolled) {
      navigate(`/courses/course/${courseId}/preview`);
    } else {
      dispatch({ type: 'ENROLL_COURSE', payload: courseId });
    }
  };

  if (!courseDetails) {
    return <div>Course not found</div>;
  }

  const isEnrolled = enrolledCourses.includes(courseId);

  return (
    <div>
      <div className="CourseDetailscontainer">
        <div className="image-container">
          <img src={courseDetails.image} alt="Course" />
          <h1 className="course-topic">{courseDetails.courseTitle}</h1>
          <p className="instructor">
            Instructor: <b>{courseDetails.instructor}</b>
          </p>
          <button className="enroll-button" onClick={handleEnroll}>
            {isEnrolled ? 'Open Course' : 'Enroll Now'}
          </button>
          <p className="enroll-count">
            <b>{courseDetails.enrollCount.toLocaleString()}</b> already enrolled
          </p>
        </div>
        <div className="besic-box">
          <div className="box">
            <div className="rating">
              <p className="main-text">
                {courseDetails.rating} <span className="star">★</span>
              </p>
            </div>
            <p className="sub-text-color">
              ({courseDetails.reviewsCount} reviews)
            </p>
          </div>
          <div className="box">
            <p className="main-text">{courseDetails.level}</p>
            <p className="sub-text-color">{courseDetails.requirements}</p>
          </div>
          <div className="box">
            <p className="main-text">{courseDetails.duration}</p>
            <p className="sub-text-color">{courseDetails.schedule}</p>
          </div>
          <div className="box">
            <p className="main-text">{courseDetails.flexible}</p>
            <p className="sub-text-color">Learn at your own pace</p>
          </div>
        </div>
        <div className="details">
          <ul className="details-menu">
            <li className="details-menu-item">
              <a href="#about">About</a>
            </li>
            <li className="details-menu-item">
              <a href="#modules">Modules</a>
            </li>
            <li className="details-menu-item">
              <a href="#recommendations">Recommendations</a>
            </li>
            <li className="details-menu-item">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <hr />
        <section>
          <div className="section-content" id="about">
            <div className="title">{courseDetails.details.about}</div>
            <br />
            <ul>
              {courseDetails.learningObjectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
          <div className="skills">
            <div className="title">Skills you'll gain</div>
            {courseDetails.skills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section className="module-container" id="modules">
          <div className="description">
            <div className="module-head-title">
              There are {courseDetails.details.modules.length} modules in this course
            </div>
            <br />
            {courseDetails.details.about}
          </div>
          {courseDetails.details.modules.map((module, index) => (
            <div className="module" key={index}>
              <div
                className="module-header"
                onClick={() => toggleDetails(index)}
              >
                <div>
                  <div className="module-title">{module.title}</div>
                  <div className="module-info">{module.info}</div>
                </div>
                <div className="module-details">
                  Module details {expandedModules[index] ? "⮙" : "⮛"}
                </div>
              </div>
              {expandedModules[index] && (
                <div className="module-content">
                  <div className="module-description">{module.description}</div>
                  <div className="module-content-inner">
                    <div>
                      <img
                        src="https://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/128/play-icon.png"
                        alt="videos"
                      />
                      <span>{module.videos} videos</span>
                    </div>
                    <div>
                      <img
                        src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Books-2-icon.png"
                        alt="readings"
                      />
                      <span>{module.readings} readings</span>
                    </div>
                    <div>
                      <img
                        src="https://icons.iconarchive.com/icons/aniket-suvarna/box-regular/128/bx-task-icon.png"
                        alt="assignments"
                      />
                      <span>{module.assignments} assignments</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <div className="course_footer">
        <Footer />
      </div>
    </div>
  );
}
