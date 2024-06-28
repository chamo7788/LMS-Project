import React from 'react';
import "../../assets/css/home/homepage.css";
import { Link } from "react-router-dom";
export function Homepage(){
  return(
   <>
    <section className='home'>
      <div className='container'>
      <div className='row'>
        <div className='title'>
          <h1>Welcome to lfjhbdje</h1>
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

 
  <section className='search'>
  <div className='search-bar'>
      <i className='fas fa-search search-icon'></i>
        <input type='text' className='search-input' placeholder='Search courses...' />
      </div>

    </section>  

    <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-row'>
            <div className='footer-column'>
              <h3>About Us</h3>
              <p>Learn more about our platform and mission.</p>
            </div>
            <div className='footer-column'>
              <h3>Quick Links</h3>
              <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/messenger">Messenger</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/3">Services</Link></li>
              <li><Link to="/4">Contact</Link></li>
              </ul>
            </div>
            <div className='footer-column'>
              <h3>Contact Us</h3>
              <p>Email: info@lfjhbdje.com</p>
              <p>Phone: 071 3451234</p>
            </div>
            <div className='footer-column'>
              <h3>Follow Us</h3>
              <div className='social-icons'>
                <a href='#'><i className='fab fa-facebook-f'></i></a>
                <a href='#'><i className='fab fa-twitter'></i></a>
                <a href='#'><i className='fab fa-linkedin-in'></i></a>
                <a href='#'><i className='fab fa-instagram'></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
   </>

  );
}
