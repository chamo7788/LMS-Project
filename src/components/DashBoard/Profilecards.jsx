// ProfileCards.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate
import "../../assets/css/DashBoard/profilecard.css";
import ProPic from "../../assets/images/propic.png";
import profileData from "../../data/profile.json";

export function Profilecards() {
  const { name, email, bio, socialLinks } = profileData;
  const navigate = useNavigate(); // Step 2: Initialize useNavigate

  const handleEditProfileClick = () => {
    navigate("/dashBoard/editProfile"); // Step 2: Define the navigation function
  };

  return (
    <div className="card">
      <div className="profile-section">
        <div className="profile-photo">
          <img src={ProPic} alt={name} className="profile-image" />
        </div>
        <div className="profile-detail">
          <h1>HELLO, I'M <br />{name}</h1>
          <p>{bio}</p>
          <a href={`mailto:${email}`} className="email-link"><b>{email}</b></a>
          <div className="social-links">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Step 3: Update the button to use the navigation handler */}
            <button className="edit-profile-button" onClick={handleEditProfileClick}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
