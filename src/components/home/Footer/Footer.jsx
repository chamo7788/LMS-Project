import React from 'react'
import "../../../assets/css/home/homepage.css";
import { Link } from "react-router-dom";

export function Footer(){
  return (
    <div>
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
    </div>
  )
}


