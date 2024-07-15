import React, { useState } from "react";
import "../../assets/css/DashBoard/profilecard.css";
import ProPic from "../../assets/images/propic.png";


export function Profilecards() {
  
  return (
    <div className="card">
      <div className="profile-section">
        <img src={ProPic} alt="Patrycja" className="profile-image" />
        <h1>HELLO, I'M <br />Hasi</h1>
        <p>I am a student of Informatics Institute of Technology.</p>
        <a href="mailto:1234@example.com" className="email-link"><b>1234@example.com</b></a>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <button className="edit-button">Edit Profile</button>
       
      </div>
    </div>
  );
}


