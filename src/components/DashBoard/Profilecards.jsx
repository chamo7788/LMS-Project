import React from "react";
import "../../assets/css/DashBoard/profilecard.css";
import ProPic from "../../assets/images/propic.png";
import profileData from "../../data/profile.json";

export function Profilecards() {
  const { name, email, bio, socialLinks } = profileData;

  return (
    <div className="card">
      <div className="profile-section">
        <img src={ProPic} alt={name} className="profile-image" />
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
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
}
