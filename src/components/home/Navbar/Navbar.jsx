import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/home/navbar.css";
import logoLight from "../../../assets/images/logo-black.png";
import { FaBars, FaTimes, FaEnvelope, FaGlobe } from "react-icons/fa";
import imagesData from "../../../data/student_Images.json";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const image = imagesData.images.find((img) => img.id === "1");
    if (image) {
      import(`../../../${image.url}`)
        .then((imageModule) => {
          setSelectedImage({
            ...image,
            url: imageModule.default,
          });
        })
        .catch((err) => console.error("Failed to load image:", err));
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/home">
          <img src={logoLight} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <ul
        className={`navbar__menu ${
          isMobileMenuOpen ? "navbar__menu--active" : ""
        }`}
      >
        <li className="navbar__menu-item">
          <NavLink
            to="/"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/courses"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Courses
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/about"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/services"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Services
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/contact"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar__searchbox">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="navbar__icons">
        <div className="navbar__message">
          <NavLink to="/messenger">
            <FaEnvelope className="navbar__message-icon" />
          </NavLink>
        </div>
      </div>
      <div className="navbar__icons">
        <div className="navbar__social-media">
          <NavLink to="/socialmedia">
            <FaGlobe className="navbar__social-icon" />
          </NavLink>
        </div>
      </div>
      <div className="navbar__login">
        <NavLink to="/login">
          <button
            className={
              isLoggedIn ? "hide_navbar__login-button" : "navbar__login-button"
            }
          >
            Login
          </button>
        </NavLink>
        {selectedImage && (
          <NavLink className="userDetails_pic">
            <img
              src={selectedImage.url}
              alt="User"
              className={isLoggedIn ? "Login_pic" : "hide_Login_pic"}
            />
          </NavLink>
        )}
      </div>
      <div className="navbar__mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
