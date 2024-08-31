import React from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/home/homepage.css";
import image from "../../../assets/images/student.png"
import DS from "../../../assets/images/DS.jpg"
import B from "../../../assets/images/B.jpg"
import CS from "../../../assets/images/CS.jpg"
import H from "../../../assets/images/H.jpg"
import S from "../../../assets/images/S.jpg"
import P from "../../../assets/images/P.jpg"
import R from "../../../assets/images/R.jpg"
import E from "../../../assets/images/E.jpg"
import L from "../../../assets/images/L.jpg"
import IT from "../../../assets/images/IT.jpg"

export function Homepage() {
  return (
    <>
      <section className='home'>
        <div className='containers'>
          <div className='row'>
            <div className='image_1'>
              <img src={image} alt='' />
            </div>
            <div className='title'>
              <h1>Welcome to Learn Hub</h1>
            </div>
            <p>Our platform is designed to provide you with an engaging, intuitive, and effective learning experience.</p>
            <div className='button'>
              <button className='primary-btn'>
                Get Started Now <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              <button className='primary-btn'>
                View Courses<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='about-us'>
          <div className='container2'>
            <div className='row2'>
              <div className='content'>
                <h1>About Our LMS Platform</h1>
                <p>
                  Welcome to our LMS platform! Our mission is to provide high-quality, accessible, and engaging online education to learners around the world. Here’s what you can expect from us:
                </p>
                <h2>What We Provide</h2>
                <ul>
                  <li>A wide range of courses designed by industry experts and experienced educators.</li>
                  <li>Interactive lessons and hands-on projects.</li>
                  <li>Personalized feedback and support from instructors.</li>
                </ul>
                <h2>Benefits</h2>
                <ul>
                  <li>Flexible learning at your own pace.</li>
                  <li>Access to course materials anytime, anywhere.</li>
                  <li>Affordable pricing with various subscription options.</li>
                </ul>
                <h2>What You Can Achieve</h2>
                <ul>
                  <li>Develop new skills and advance your career.</li>
                  <li>Earn certificates of completion to showcase your learning.</li>
                  <li>Explore new interests and hobbies.</li>
                </ul>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='subjects'>
        <div className='subject-container2'>
          <h1>Explore Subjects</h1>
          <div className='subject-grid'>
            <Link to='/' className='subject-card2'>
              <img src={DS} alt='Data Science' />
              <h2>Data Science</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={B} alt='Business' />
              <h2>Business</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={CS} alt='Computer Science' />
              <h2>Computer Science</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={H} alt='Health' />
              <h2>Health</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={S} alt='Social Sciences' />
              <h2>Social Sciences</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={P} alt='Personal Development' />
              <h2>Personal Development</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={R} alt='Arts and Humanities' />
              <h2>Arts and Humanities</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={E} alt='Engineering' />
              <h2>Engineering</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={L} alt='Language Learning' />
              <h2>Language Learning</h2>
            </Link>
            <Link to='/' className='subject-card2'>
              <img src={IT} alt='Information Technology' />
              <h2>Information Technology</h2>
            </Link>
          </div>
        </div>
      </section>
      <section className='search'>
        <div className='search-bar'>
          <i className='fas fa-search search-icon'></i>
          <input type='text' className='search-input' placeholder='Search courses...' />
        </div>

      </section>
    </>

  );
}